import React from "react";

import App from "./App";
import { render, screen } from "@testing-library/react";

describe("tests", () => {
  it("should", () => {
    render(<App />);
    expect(screen.getByText("Boop")).toBeInTheDocument();
  });
});
