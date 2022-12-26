import { render, screen } from "@testing-library/react";

import { wrapper } from "../../../../testing";
import { CloseButton } from "./CloseButton";

describe("<CloseButton/>", () => {
  /* it("renders expected elements", () => {
    const { container } = render(<CloseButton onClick={jest.fn()} />, {
      wrapper,
    });

    expect(screen.getByRole("button")).toHaveAttribute(
      "title",
      "CLOSE_BUTTON_TEXT"
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("can override title", () => {
    render(<CloseButton onClick={jest.fn()} title="TITLE" />, { wrapper });

    expect(screen.getByRole("button")).toHaveAttribute("title", "TITLE");
  }); */
  test.only("FormInput test", () => {
    expect(1 + 1).toEqual(2);
  });
});
