import { fireEvent, render, screen } from "@testing-library/react";

import { wrapper } from "../../../../testing";
import { usePasswordField } from "./usePasswordField";
import { expect } from "@jest/globals";

function TestComponent() {
  const { inputRef, internalType, togglePasswordType } = usePasswordField({
    forwardedRef: undefined,
    inputType: "password",
  });
  return (
    <form data-testid="form" onSubmit={jest.fn()}>
      <input data-testid="input" ref={inputRef} type={internalType} />
      <button data-testid="button" onClick={togglePasswordType} type="button" />
    </form>
  );
}

describe("usePasswordField", () => {
  it("sets internal type back to password on form submit", () => {
    render(<TestComponent />, { wrapper });

    const $form = screen.getByTestId("form");
    const $input = screen.getByTestId("input");
    const $button = screen.getByTestId("button");

    expect($input).toHaveAttribute("type", "password");

    fireEvent.click($button);

    expect($input).toHaveAttribute("type", "text");

    fireEvent.submit($form);

    expect($input).toHaveAttribute("type", "password");
  });
});
