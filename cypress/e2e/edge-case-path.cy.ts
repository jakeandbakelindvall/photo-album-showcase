describe("The edge cases", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Displays an empty list at first", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Photo Album Showcase");
    cy.get('[data-testid="photo-list"]').should("exist");
    cy.get('[data-testid="photo-list-card"]').should("have.length", 0);
  });

  it("Displays an empty list when a nonsense ID number is entered", () => {
    cy.get('[data-testid="main-input"]').type("-9");
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="photo-list"]').should("exist");
    cy.get('[data-testid="photo-list-card"]').should("have.length", 0);
  });

  it("Displays an empty list when a garbage string is input instead of a number ID", () => {
    cy.get('[data-testid="main-input"]').type("mnbvcxz");
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="photo-list"]').should("exist");
    cy.get('[data-testid="photo-list-card"]').should("have.length", 0);
  });

  it("Has a disabled button by default", () => {
    cy.get('[data-testid="main-button"]').should("be.disabled");
  });

  it("Has a disabled button when the input is typed but then cleared", () => {
    cy.get('[data-testid="main-input"]').type("mnbvcxz");
    cy.get('[data-testid="main-input"]').clear();

    cy.get('[data-testid="main-button"]').should("be.disabled");
  });

  it("Displays a short error message regarding garbage string formatting", () => {
    cy.get('[data-testid="main-input"]').type("mnbvcxz");
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="error-message"]').should("exist");
    cy.contains("Error");
  });
});
