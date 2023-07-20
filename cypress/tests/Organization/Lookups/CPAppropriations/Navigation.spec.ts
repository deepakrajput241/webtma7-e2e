describe("CP Appropriations Navigation", () => {
  beforeEach(() => {
    cy.login(Cypress.env("user1"));
    cy.visit("/#!/Lookup/CPAppropriation");
  });

  it("Navigate to First Button", () => {
    cy.getButton("First").click();
  });

  it("Navigate to Previous Button", () => {
    cy.getButton("Prev").click();
  });

  it("Navigate to Next Button", () => {
    cy.getButton("Next").click();
  });

  it("Navigate to Last Button", () => {
    cy.getButton("Last").click();
  });
});