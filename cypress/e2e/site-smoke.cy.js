describe("vibegov site smoke test", () => {
  it("loads homepage and core docs links", () => {
    cy.visit("/");
    cy.contains("vibegov").should("be.visible");
    cy.contains("Quick Start Prompt").should("be.visible");
    cy.contains("Please review and learn development practices from https://vibegov.io.")
      .should("be.visible");
    cy.contains("Read Docs").click();
    cy.url().should("include", "/docs/");
    cy.contains("Why vibegov Exists").should("be.visible");
    cy.contains("Contribute").should("be.visible");
  });
});
