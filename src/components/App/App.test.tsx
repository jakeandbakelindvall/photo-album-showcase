import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders welcome text", () => {
  render(<App />);
  const linkElement: HTMLElement = screen.getByText(/photo album showcase/i);
  expect(linkElement).toBeInTheDocument();
});
