import type { ReactNode } from "react";

import { Typography } from "../Typography";
import { Styled } from "./FormBaseField.styled";

export type FormBaseFieldProps = {
  id: string;
  label: string;
  helpMessage?: string;
  errorMessage?: string;
  /** @default false */
  readOnly?: boolean;
  /** @default false */
  required?: boolean;
};

type InternalBaseFieldProps = FormBaseFieldProps & {
  isActive: boolean;
  hasIcon: boolean;
  children: ReactNode;
};

export function FormBaseField({
  isActive,
  id,
  label,
  hasIcon,
  helpMessage,
  errorMessage,
  readOnly = false,
  required = false,
  children,
}: InternalBaseFieldProps) {
  return (
    <Styled.FieldWrapper tag="div" variant="bodySmall">
      <Styled.Label
        hasIcon={hasIcon}
        htmlFor={id}
        position={!isActive ? "placeholder" : "label"}
        state={getState({ readOnly, isActive })}
      >
        <Typography display="block" variant="bodyExtraSmall">
          {label}
          {required && <span aria-hidden>*</span>}
        </Typography>
      </Styled.Label>

      {!errorMessage && helpMessage && (
        <Styled.Message state="default">
          <Typography display="block" variant="bodyExtraSmall">
            {helpMessage}
          </Typography>
        </Styled.Message>
      )}

      <Styled.ChildWrapper>{children}</Styled.ChildWrapper>

      {errorMessage && (
        <Styled.Message state="error">
          <Typography display="block" variant="bodyExtraSmall">
            {errorMessage}
          </Typography>
        </Styled.Message>
      )}
    </Styled.FieldWrapper>
  );
}

type ActiveParam = { isActive: boolean };
type DisabledParam = { readOnly: boolean | undefined };
type ErrorParam = { errorMessage: string | undefined };

type ActiveState = "active" | "default";
type DisabledState = "disabled";
type ErrorState = "error";

export function getState(params: ActiveParam): ActiveState;
export function getState(
  params: ActiveParam & DisabledParam
): ActiveState | DisabledState;
export function getState(
  params: ActiveParam & ErrorParam
): ActiveState | ErrorState;
export function getState(
  params: ActiveParam & DisabledParam & ErrorParam
): ActiveState | DisabledState | ErrorState;

export function getState({
  readOnly,
  errorMessage,
  isActive,
}: Partial<ActiveParam & DisabledParam & ErrorParam>) {
  if (readOnly) return "disabled";
  if (errorMessage) return "error";
  if (isActive) return "active";
  return "default";
}
