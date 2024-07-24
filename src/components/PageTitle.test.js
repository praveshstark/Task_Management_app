import { render, screen } from "@testing-library/react";
import PageTitle from "./PageTitle";
import "@testing-library/jest-dom";

// Renders children text correctly
it("should render children text correctly", () => {
  render(<PageTitle>Test Title</PageTitle>);
  expect(screen.getByText("Test Title")).toBeInTheDocument();
});