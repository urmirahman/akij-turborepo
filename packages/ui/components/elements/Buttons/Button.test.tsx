import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("akij-foods-button test", () => {
  it("sees akij-foods-button", () => {
    render(<Button variant={"primary"}>{"Akij"}</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
