import styled from "@emotion/styled";
import type { HTMLInputTypeAttribute } from "react";

const Input = styled.input<{
  state: "active" | "default" | "disabled" | "error";
  inputType: HTMLInputTypeAttribute;
}>`
  border-bottom-color: ${({ theme, state }) =>
    theme.elements.form.input[state].border.color};
  border-bottom-style: solid;
  border-bottom-width: ${({ theme }) => theme.borders.widths.sm};
  color: ${({ theme, state }) =>
    state === "disabled" && theme.elements.form.input.disabled.font.color};
  display: block;
  padding: ${({ theme, inputType }) =>
    theme.spacing(0.5, inputType === "password" ? 2 : 0, 0.5, 0)};
  transition: ${({ theme }) =>
    theme.transitions.create("border", {
      duration: theme.transitions.duration.shortest,
    })};
  width: 100%;
  ${({ state }) => state === "default" && "&:hover"} {
    border-bottom-color: ${({ theme }) =>
      theme.elements.form.input.hover.border.color};
  }
  &:focus {
    outline: none;
  }
`;

const PasswordVisibilityButton = styled.button`
  color: ${({ theme }) => theme.elements.form.input.default.icon.color};
  cursor: pointer;
  margin-right: -${({ theme }) => theme.spacing(0.25)};
  padding: ${({ theme }) => theme.spacing(0.25)};
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  &:focus {
    outline-color: ${({ theme }) =>
      theme.elements.form.base.focus.outline.color};
    outline-offset: -2px;
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borders.widths.md};
  }
`;

export const Styled = {
  Input,
  PasswordVisibilityButton,
};
