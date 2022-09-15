import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("tests", () => {
  it("should", () => {
    render(<App />);
    expect(screen.getByText("Boop")).toBeInTheDocument();
  });
});
