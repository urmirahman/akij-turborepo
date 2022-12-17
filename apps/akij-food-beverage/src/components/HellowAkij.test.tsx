import React from "react";
import { render, screen } from "@testing-library/react";

import HellowAkij from "./HellowAkij";

describe("akij-foods-branch-test test", () => {
  it("sees akij-foods-branch-test", () => {
    render(<HellowAkij />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("akij-foods-branch-test")).toBeInTheDocument();
  });
});
