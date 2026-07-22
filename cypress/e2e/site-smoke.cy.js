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
    cy.contains("Contribute").should("be.visible");
    cy.visit("/docs/bootstrap");
    cy.contains("TLDR").should("be.visible");
    cy.contains("This TLDR is orientation only").should("be.visible");
  });
});
