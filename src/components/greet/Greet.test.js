import { render, screen } from "@testing-library/react";

import Greet from "./index";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello");
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with name component", () => {
  render(<Greet name="Sayantan" />);
  const textElement = screen.getByText("Hello Sayantan");
  expect(textElement).toBeInTheDocument();
});
