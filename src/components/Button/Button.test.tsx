import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  describe("Presentation", () => {
    test("Renders children", () => {
      render(<Button>Asdf children</Button>);

      const button: HTMLElement = screen.getByText(/asdf children/i);
      expect(button).toBeInTheDocument();
    });
  });

  describe("Interaction", () => {
    test("Is disabled by default, without any handler passed in", () => {
      render(<Button>Asdf children</Button>);

      const button: HTMLElement = screen.getByText(/asdf children/i);
      expect(button).toBeDisabled();
    });

    test("Is enabled if a handler is passed in", () => {
      render(<Button onClick={() => {}}>Asdf children</Button>);

      const button: HTMLElement = screen.getByText(/asdf children/i);
      expect(button).toBeEnabled();
    });

    test("Is disabled, regardless of handler, if given the disabled prop", () => {
      render(
        <Button disabled onClick={() => {}}>
          Asdf children
        </Button>,
      );

      const button: HTMLElement = screen.getByText(/asdf children/i);
      expect(button).toBeDisabled();
    });

    test("Calls a handler on click", () => {
      const mockClick: jest.Mock = jest.fn();

      render(<Button onClick={mockClick}>Asdf children</Button>);

      const button: HTMLElement = screen.getByText(/asdf children/i);
      fireEvent.click(button);
      expect(mockClick).toHaveBeenCalledTimes(1);
    });

    test("Does not call a handler on click if disabled", () => {
      const mockClick: jest.Mock = jest.fn();

      render(
        <Button disabled onClick={mockClick}>
          Asdf children
        </Button>,
      );

      const button: HTMLElement = screen.getByText(/asdf children/i);
      fireEvent.click(button);
      expect(mockClick).toHaveBeenCalledTimes(0);
    });
  });
});
