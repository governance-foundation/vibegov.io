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
    cy.contains("Content Status Model").click();
    cy.url().should("include", "/docs/content-status-model");
    cy.contains("Canonical contract").should("be.visible");
    cy.contains("Runtime-specific profile").should("be.visible");
    cy.contains("Contribute").should("be.visible");
  });
});


