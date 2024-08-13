import { render, screen } from "@testing-library/react";

import Greet from "./index";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders with name component", () => {
    render(<Greet name="Sayantan" />);
    const textElement = screen.getByText("Hello Sayantan");
    expect(textElement).toBeInTheDocument();
  });
});
