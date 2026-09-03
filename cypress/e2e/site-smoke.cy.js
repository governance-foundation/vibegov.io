describe("VibeGov site smoke test", () => {
  it("loads homepage and core docs links", () => {
    cy.visit("/");
    cy.contains("VibeGov").should("be.visible");
    cy.contains("Governed delivery in practice").should("be.visible");
    cy.contains('"Add Google login."').should("be.visible");
    cy.contains("repo-local governance framework").should("be.visible");
    cy.contains("Who VibeGov is for").should("be.visible");
    cy.contains("Teams using AI coding agents on real repositories.")
      .should("be.visible");
    cy.contains("Probably overkill").should("be.visible");
    cy.contains("Quick paths").should("be.visible");
    cy.contains("Bootstrap Init Prompt (BI)").should("be.visible");
    cy.contains("Run VibeGov bootstrap in mode: init.")
      .should("be.visible");
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
    cy.contains("Governed Delivery Example").should("be.visible");
    cy.contains("The same request becomes a governed delivery path").should("be.visible");
    cy.visit("/docs/bootstrap");
    cy.contains("TLDR").should("be.visible");
    cy.contains("This TLDR is orientation only").should("be.visible");
    cy.contains("Runtime and Harness Profiles").should("be.visible");
    cy.visit("/docs/runtime-and-harness-profiles");
    cy.contains("They are adapters and examples").should("be.visible");
    cy.get("main").contains("Harness Profile: Codex").should("be.visible");
    cy.visit("/docs/evidence-examples");
    cy.contains("Weak vs strong evidence").should("be.visible");
    cy.contains("Feedback Intake evidence").should("be.visible");
    cy.contains("Release-readiness evidence").should("be.visible");
    cy.visit("/docs/content-style-guide");
    cy.contains("Content Style Guide").should("be.visible");
    cy.contains("PR Review Checklist").should("be.visible");
  });

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
