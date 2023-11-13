describe("The happy path full demo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Displays an empty list at first", () => {
    cy.contains("Photo Album Showcase");
    cy.get('[data-testid="photo-list"]').should("exist");
    cy.get('[data-testid="photo-list-card"]').should("have.length", 0);
  });

  it("Displays a valid and full list, given a valid ID", () => {
    cy.get('[data-testid="main-input"]').type("1");
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="photo-list"]').should("exist");
    cy.get('[data-testid="photo-list-card"]').should("have.length.at.least", 1);
  });

  it("Displays an empty list when a valid but known empty ID is given", () => {
    cy.get('[data-testid="main-input"]').type("9001");
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="photo-list"]').should("exist");
    cy.get('[data-testid="photo-list-card"]').should("have.length", 0);
  });

  it("Displays a different valid and full list, given a different valid ID", () => {
    cy.get('[data-testid="main-input"]').type("99");
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="photo-list"]').should("exist");
    cy.get('[data-testid="photo-list-card"]').should("have.length.at.least", 1);
  });

  it("Displays a detailed view of the first item in a list after a click", () => {
    cy.get('[data-testid="main-input"]').type("99");
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="album-id"]').should("not.exist");
    cy.get('[data-testid="full-image"]').should("not.exist");

    cy.get('[data-testid="open-card"]').first().click();

    cy.get('[data-testid="album-id"]').should("have.length", 1);
    cy.get('[data-testid="full-image"]').should("have.length", 1);
  });

  it("Displays no detailed views after a deselection click", () => {
    cy.get('[data-testid="main-input"]').type("99");
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="open-card"]').first().click();
    cy.get('[data-testid="close-card"]').first().click();

    cy.get('[data-testid="album-id"]').should("not.exist");
    cy.get('[data-testid="full-image"]').should("not.exist");
  });

  it("Displays a detailed view of the last item in a list after a click", () => {
    cy.get('[data-testid="main-input"]').type("99");
    cy.get('[data-testid="main-button"]').click();

    cy.get('[data-testid="album-id"]').should("not.exist");
    cy.get('[data-testid="full-image"]').should("not.exist");

    cy.get('[data-testid="open-card"]').last().click();

    cy.get('[data-testid="album-id"]').should("have.length", 1);
    cy.get('[data-testid="full-image"]').should("have.length", 1);
  });
});
