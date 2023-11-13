import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  describe("Presentation", () => {
    test("Renders a placeholder", () => {
      render(<Input placeholder="Asdf placeholder" />);

      const input: HTMLElement =
        screen.getByPlaceholderText(/asdf placeholder/i);
      expect(input).toBeInTheDocument();
    });

    test("Renders a provided value", () => {
      render(<Input value="Asdf value" />);

      const input: HTMLElement = screen.getByText(/asdf value/i);
      expect(input).toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    test("Calls a handler on input", () => {
      const mockType: jest.Mock = jest.fn();

      render(<Input value="Asdf value" setValue={mockType} />);

      const input: HTMLElement = screen.getByText(/asdf value/i);
      fireEvent.change(input, { target: { value: "Asdf value1" } });
      expect(mockType).toHaveBeenCalledTimes(1);
    });
  });
});
