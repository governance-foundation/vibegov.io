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
    cy.contains("Runtime and Harness Profiles").should("be.visible");

    cy.visit("/docs/runtime-and-harness-profiles");
    cy.contains("They are adapters and examples").should("be.visible");
    cy.get("main").contains("Harness Profile: Codex").should("be.visible");
  });
});


