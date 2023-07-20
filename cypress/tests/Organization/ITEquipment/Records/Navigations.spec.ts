describe("IT Equipment Navigations", () => {
  beforeEach(() => {
    cy.login(Cypress.env("user1"));
    cy.visit("/#!/ITEquipment/1139/Identity");
  });

  it("Navigate On Last Record", () => {
    cy.getButton("Last").click();
  });

  it("Navigate On Previous Record", () => {
    cy.getButton("Prev").click();
  });

  it("Navigate On First Record", () => {
    cy.getButton("First").click();
  });

  it("Navigate On Next Record", () => {
    cy.getButton("Next").click();
  });
});
