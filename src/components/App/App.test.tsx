import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  describe("Presentation", () => {
    test("Renders a title, an empty input, a button, and informative text by default", () => {
      render(<App />);

      const title: HTMLElement = screen.getByText(/photo album showcase/i);
      const input: HTMLElement = screen.getByPlaceholderText(/album id/i);
      const button: HTMLElement = screen.getByText(/submit/i);
      const helperText: HTMLElement = screen.getByText(
        /input a positive integer album id/i,
      );
      expect(title).toBeInTheDocument();
      expect(input).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(helperText).toBeInTheDocument();
    });

    test("Renders an empty list by default", () => {
      render(<App />);

      const photoList: HTMLElement[] = screen.queryAllByText(/photo id:/i);
      expect(photoList).toHaveLength(0);
    });
  });

  describe("Interaction", () => {
    test("Clears the input on a button press for submission", () => {});

    test("Shows a list on a valid submission", () => {});

    test("Shows error text and no list on an invalid submission", () => {});
  });
});
