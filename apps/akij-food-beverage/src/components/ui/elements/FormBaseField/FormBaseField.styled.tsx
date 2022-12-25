import styled from "@emotion/styled";

import { spacingBaseValue } from "../../foundations/spacing";
import { Typography } from "../Typography";

const FieldWrapper = styled(Typography)`
  display: flex;
  flex-direction: column;
  padding-top: ${18 / spacingBaseValue}rem;
  position: relative;
  &:focus-within {
    outline-color: ${({ theme }) =>
      theme.elements.form.base.focus.outline.color};
    outline-offset: 6px;
    outline-style: solid;
    outline-width: ${({ theme }) => theme.borders.widths.md};
  }
`;

const Label = styled.label<{
  state: "active" | "default" | "disabled";
  position: "label" | "placeholder";
  hasIcon: boolean;
}>`
  color: ${({ theme, state }) => theme.elements.form.base[state].label.color};
  left: 0;
  padding-right: ${({ hasIcon }) => (hasIcon ? "calc(14% + 2rem)" : "14%")};
  position: absolute;
  top: ${9 / spacingBaseValue}rem;
  transform: translateY(-50%);
  transform-origin: 0 50%;
  transition: ${({ theme }) =>
    theme.transitions.create(["color", "top", "transform"], {
      duration: theme.transitions.duration.shortest,
    })};
  ${({ position }) =>
    position === "placeholder" &&
    "@media (prefers-reduced-motion: no-preference)"} {
    top: ${38 / spacingBaseValue}rem;
    transform: translateY(-50%) scale(${14 / 12});
  }
`;

const Message = styled.p<{ state: "default" | "error" }>`
  color: ${({ theme, state }) => theme.elements.form.base[state].message.color};
  margin-top: ${({ theme }) => theme.spacing(0.25)};
  order: 1;
`;

const ChildWrapper = styled.div`
  position: relative;
`;

export const Styled = {
  FieldWrapper,
  Label,
  Message,
  ChildWrapper,
};
