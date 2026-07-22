describe("VibeGov site smoke test", () => {
  it("loads homepage and core docs links", () => {
    cy.visit("/");
    cy.contains("VibeGov").should("be.visible");
    cy.contains("Quick paths").should("be.visible");
    cy.contains("Bootstrap Init Prompt (BI)").should("be.visible");
    cy.contains("Run VibeGov bootstrap in mode: init.")
      .should("be.visible");
    cy.contains("Choose Your Path").click();
    cy.url().should("include", "/docs/choose-your-path");
    cy.contains("I want to install VibeGov in a repo").should("be.visible");
    cy.contains("I want to turn human feedback into ready work").should("be.visible");
    cy.contains("I want to know which role pack to use").should("be.visible");
    cy.contains("Contribute").should("be.visible");
  });
});


