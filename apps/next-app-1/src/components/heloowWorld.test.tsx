import React from "react";
import { render, screen } from "@testing-library/react";

import HellowWord from "./hellowWorld";

describe("Next-app-1-branch-test test", () => {
  it("sees Next-app-1-branch-test", () => {
    render(<HellowWord />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Next-app-1-branch-test")).toBeInTheDocument();
  });
});
