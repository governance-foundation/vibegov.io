describe("VibeGov site smoke test", () => {
  it("loads homepage and core docs links", () => {
    cy.visit("/");
    cy.contains("VibeGov").should("be.visible");
    cy.contains("Governed delivery in practice").should("be.visible");
    cy.contains('"Add Google login."').should("be.visible");
    cy.contains("Quick paths").should("be.visible");
    cy.contains("Bootstrap Init Prompt (BI)").should("be.visible");
    cy.contains("Run VibeGov bootstrap in mode: init.")
      .should("be.visible");
    cy.contains("Read Docs").click();
    cy.url().should("include", "/docs/intro");
    cy.contains("Why VibeGov exists").should("be.visible");
    cy.contains("Contribute").should("be.visible");
    cy.visit("/docs/governed-delivery-example");
    cy.contains("Governed Delivery Example").should("be.visible");
    cy.contains("The same request becomes a governed delivery path").should("be.visible");
  });
});


