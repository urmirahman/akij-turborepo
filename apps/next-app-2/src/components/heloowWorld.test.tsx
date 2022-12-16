import React from "react";
import { render, screen } from "@testing-library/react";

import HellowWord from "./hellowWorld";

describe("Next-app-2 test", () => {
  it("sees Next-app-2", () => {
    render(<HellowWord />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Next-app-2")).toBeInTheDocument();
  });
});
