import { fireEvent, render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import { wrapper } from "../../testing";
import type { IconButtonProps } from "./IconButton";
import { IconButton } from "./IconButton";

const props: IconButtonProps = {
  title: "TITLE",
  iconName: "search",
  onClick: jest.fn(),
};

describe("<IconButton />", () => {
  it("renders expected elements", () => {
    const { container } = render(<IconButton {...props} />, { wrapper });

    expect(screen.getByRole("button")).toHaveAttribute("title", "TITLE");
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const onClick = jest.fn();

    render(<IconButton {...props} onClick={onClick} />, { wrapper });

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
