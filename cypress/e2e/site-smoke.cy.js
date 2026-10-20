describe("VibeGov site smoke test", () => {
  it("loads homepage and core docs links", () => {
    cy.visit("/");
    cy.contains("VibeGov").should("be.visible");
    cy.contains("VibeGov handles the delivery details").should("be.visible");
    cy.contains("h2", "Who VibeGov is for").scrollIntoView().should("be.visible");
    cy.contains("h2", "Governed delivery in practice").scrollIntoView().should("be.visible");
    cy.contains('"Add Google login."').should("be.visible");
    cy.contains("Quick paths").should("be.visible");
    cy.contains("Start with VibeGov").should("be.visible");
    cy.get("#quick-paths article").first().contains("View agent prompt").click();
    cy.contains("Run VibeGov bootstrap in mode: init.")
      .should("be.visible");
    cy.contains("See what your agent adopts").click();
    cy.url().should("include", "/docs/what-your-agent-adopts");
    cy.contains("Governed delivery in practice").scrollIntoView().should("be.visible");
    cy.contains('"Add Google login."').scrollIntoView().should("be.visible");
    cy.contains("shared rules, intent and ways of working").scrollIntoView().should("be.visible");
    cy.contains("Who VibeGov is for").scrollIntoView().should("be.visible");
    cy.contains("Teams using AI coding agents on real repositories.")
      .scrollIntoView().should("be.visible");
    cy.contains("Probably overkill").scrollIntoView().should("be.visible");
    cy.visit("/");
    cy.contains("Choose Your Path").click();
    cy.url().should("include", "/docs/choose-your-path");
    cy.contains("I want to install VibeGov in a repo").should("be.visible");
    cy.contains("I want to turn human feedback into ready work").should("be.visible");
    cy.contains("I want to know which role pack to use").should("be.visible");
    cy.visit("/docs/start-here");
    cy.contains("h1", "Start Here").should("be.visible");
    cy.contains("The smallest useful adoption path").should("be.visible");
    cy.visit("/docs/intro");
    cy.contains("h1", "Overview").should("be.visible");
    cy.contains("repo-local governance framework").should("be.visible");
    cy.contains("Why VibeGov exists").should("be.visible");
    cy.visit("/docs/glossary");
    cy.url().should("include", "/docs/glossary");
    cy.contains("Core delivery terms").should("be.visible");
    cy.contains("Spec binding").should("be.visible");
    cy.visit("/docs/content-status-model");
    cy.url().should("include", "/docs/content-status-model");
    cy.contains("Canonical contract").should("be.visible");
    cy.contains("Runtime-specific profile").should("be.visible");
    cy.visit("/docs/vibegov-vs-agent-rules");
    cy.contains("VibeGov vs Agent Rules, Prompts, and Frameworks")
      .should("be.visible");
    cy.contains("VibeGov vs AGENTS.md").should("be.visible");
    cy.contains("Provider rules are tool-specific.").should("be.visible");
    cy.contains("Contribute").should("be.visible");
    cy.visit("/docs/governed-delivery-example");
    cy.contains("Governed Delivery Example").scrollIntoView().should("be.visible");
    cy.contains("The same request becomes a governed delivery path").should("be.visible");
    cy.visit("/docs/bootstrap");
    cy.contains("TLDR").should("be.visible");
    cy.contains("This TLDR is orientation only").should("be.visible");
    cy.contains("Runtime and Harness Profiles").scrollIntoView().should("be.visible");
    cy.visit("/docs/runtime-and-harness-profiles");
    cy.contains("They are adapters and examples").should("be.visible");
    cy.get("main").contains("Harness Profile: Codex").should("be.visible");
    cy.visit("/docs/evidence-examples");
    cy.contains("Weak vs strong evidence").should("be.visible");
    cy.contains("Feedback Intake evidence").should("be.visible");
    cy.contains("Release-readiness evidence").should("be.visible");
    cy.visit("/docs/content-style-guide");
    cy.contains("Content Style Guide").scrollIntoView().should("be.visible");
    cy.contains("PR Review Checklist").scrollIntoView().should("be.visible");
  });

  for (const width of [390, 1440]) {
    it(`puts simple actions first and preserves detail at ${width}px (HOME-PATH-001..004)`, () => {
      cy.viewport(width, 1000);
      cy.visit("/");
      cy.get("header.hero").should("be.visible");
      cy.get("main > section h2").then($headings => {
        expect([...$headings].map(el => el.textContent)).to.deep.equal(["Quick paths", "Who VibeGov is for", "Governed delivery in practice", "FAQ"]);
      });
      cy.contains("What VibeGov installs").should("not.exist");
      cy.get("#quick-paths article").should("have.length", 3);
      cy.get("#quick-paths details").should("not.have.attr", "open");
      cy.get("#quick-paths article").first().within(() => {
        cy.get("summary").click();
        cy.contains("Run VibeGov bootstrap in mode: init.").should("be.visible");
        cy.get("pre").should("have.css", "word-break", "normal");
      });
      cy.window().then(win => {
        cy.stub(win.navigator.clipboard, "writeText").resolves().as("writeClipboard");
      });
      cy.get('button[aria-label="Copy prompt: Start with VibeGov"]').click().should("have.text", "Copied");
      cy.get("@writeClipboard").should("have.been.calledOnce").its("firstCall.args.0")
        .should("contain", "https://vibegov.io/agent.txt")
        .and("contain", "https://vibegov.io/bootstrap.json")
        .and("contain", "Then stop before product-code implementation.");
      cy.document().then(doc => expect(doc.documentElement.scrollWidth).to.be.at.most(width));
      cy.reload();
      cy.get("main > section").first().should("have.attr", "id", "quick-paths");
      cy.scrollTo("top");
      cy.screenshot(`homepage-${width}`, {capture: "viewport", scale: true});
      cy.get('[aria-labelledby="example-title"]').scrollIntoView();
      cy.screenshot(`homepage-example-${width}`, {capture: "viewport", scale: true});
      cy.contains("See what your agent adopts").click();
      for (const title of ["Governance rules", "Project intent and specs", "Workflow entrypoints", "Continuity guidance", "Bootstrap reports"]) {
        cy.contains("h3", title).scrollIntoView().should("be.visible");
      }
      cy.get("article pre").should("have.length", 4).each($pre => {
        expect($pre.css("white-space")).to.equal("pre");
        expect($pre.css("overflow-x")).to.equal("auto");
      });
      cy.document().then(doc => expect(doc.documentElement.scrollWidth).to.be.at.most(width));
      cy.scrollTo("top");
      cy.screenshot(`homepage-details-${width}`, {capture: "viewport", scale: true});
    });
  }

  it("shows role-selection guidance without hiding role bootstrap cards", () => {
    cy.visit("/roles");
    cy.contains("Start with the smallest useful role set").should("be.visible");
    cy.contains("Solo or simple repo").should("be.visible");
    cy.contains("Planner, Developer, Verifier, Maintainer").should("be.visible");
    cy.contains("Choose by job, not by team size").should("be.visible");
    cy.contains("Development").should("be.visible");
    cy.contains("Feedback Intake").should("be.visible");
    cy.contains("Copy bootstrap prompt").should("be.visible");
    cy.contains("Manifest JSON").should("be.visible");
  });
});
