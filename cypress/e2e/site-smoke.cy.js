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


