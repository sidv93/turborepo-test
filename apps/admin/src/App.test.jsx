import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("tests", () => {
  it("should", () => {
    render(<App />);
    const buttonElement = screen.findByText("Boop");
    waitFor(() => expect(buttonElement).toBeInTheDocument());
  });
});
