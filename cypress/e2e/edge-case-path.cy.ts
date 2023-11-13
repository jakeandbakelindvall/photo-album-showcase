describe("The edge cases", () => {
  it("Displays an empty list at first", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Photo Album Showcase");
  });

  it("Still displays an empty list when a nonsense ID number is entered", () => {});

  it("Still displays an empty list when the input is cleared", () => {});

  it("Still displays an empty list when a garbage string is input instead of a number ID", () => {});

  it("Additionally displays a short error message regarding the most recent input formatting", () => {});

  it("No longer displays a short error message when the input is cleared", () => {});
});
