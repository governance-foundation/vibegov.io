describe("VibeGov site smoke test", () => {
  it("loads homepage and core docs links", () => {
    cy.visit("/");
    cy.contains("VibeGov").should("be.visible");
    cy.contains("Quick paths").should("be.visible");
    cy.contains("Bootstrap Init Prompt (BI)").should("be.visible");
    cy.contains("Run VibeGov bootstrap in mode: init.")
      .should("be.visible");
    cy.contains("Read Docs").click();
    cy.url().should("include", "/docs/intro");
    cy.contains("Why VibeGov exists").should("be.visible");
    cy.visit("/docs/vibegov-vs-agent-rules");
    cy.contains("VibeGov vs Agent Rules, Prompts, and Frameworks")
      .should("be.visible");
    cy.contains("VibeGov vs AGENTS.md").should("be.visible");
    cy.contains("Provider rules are tool-specific.").should("be.visible");
    cy.contains("Contribute").should("be.visible");
  });
});


