describe("The edge cases", () => {
  it("Displays an empty list at first", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Photo Album Showcase");
    cy.get('[data-testid="photo-list"]').should("exist");
    cy.get('[data-testid="photo-list-card"]').should("have.length", 0);
  });

  it("Still displays an empty list when a nonsense ID number is entered", () => {
    cy.get('[data-testid="main-input"]').type("-9");
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="photo-list"]').should("exist");
    cy.get('[data-testid="photo-list-card"]').should("have.length", 0);
  });

  it("Still displays an empty list when the input is cleared", () => {
    cy.get('[data-testid="main-input"]').clear();
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="photo-list"]').should("exist");
    cy.get('[data-testid="photo-list-card"]').should("have.length", 0);
  });

  it("Still displays an empty list when a garbage string is input instead of a number ID", () => {
    cy.get('[data-testid="main-input"]').type("mnbvcxz");
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="photo-list"]').should("exist");
    cy.get('[data-testid="photo-list-card"]').should("have.length", 0);
  });

  it("Additionally displays a short error message regarding the most recent input formatting", () => {
    cy.get('[data-testid="error-message"]').should("exist");
    cy.contains("Error");
  });

  it("No longer displays a short error message when the input is cleared", () => {
    cy.get('[data-testid="main-input"]').clear();
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="error-message"]').should("not.exist");
  });
});
