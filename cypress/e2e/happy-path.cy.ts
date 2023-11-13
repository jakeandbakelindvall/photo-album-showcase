describe("The happy path full demo", () => {
  it("Displays an empty list at first", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Photo Album Showcase");
  });

  it("Displays a valid and full list, given a valid ID", () => {});

  it("Displays a different valid and full list, given a different valid ID", () => {});

  it("Displays a detailed view of the first item in this list after a click", () => {});

  it("Instead displays a detailed view of the last item in this list after a click", () => {});

  it("Displays no detailed views after a deselection click", () => {});

  it("Displays an empty list again on page refresh", () => {
    cy.visit("http://localhost:3000");
  });
});
