import MuiInputUnstyled from "@mui/base/InputUnstyled";
import type { FocusEvent, HTMLInputTypeAttribute } from "react";
import { forwardRef, useState } from "react";

import type { FormBaseFieldProps } from "../FormBaseField";
import { FormBaseField, getState } from "../FormBaseField";
import { Icon } from "../Icon";
import { Styled } from "./FormInput.styled";
import { usePasswordField } from "./usePasswordField";

export type FormInputProps = FormBaseFieldProps & {
  type?: Extract<HTMLInputTypeAttribute, "email" | "password" | "tel" | "text">;
  value: string | null | undefined;
  onBlur?: (evt: FocusEvent<HTMLInputElement>) => void;
  onChange: (value: string) => void;
  onFocus?: (evt: FocusEvent<HTMLInputElement>) => void;
  pattern?: string;
};

// eslint-disable-next-line react/display-name
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      id,
      label,
      type: inputType = "text",
      value,
      onBlur,
      onChange,
      onFocus,
      helpMessage,
      errorMessage,
      pattern,
      readOnly,
      required,
      ...props
    },
    forwardedRef
  ) => {
    const hasValue = !!value;
    const [hasFocus, setHasFocus] = useState(false);

    const isActive = hasValue || hasFocus;

    const {
      inputRef,
      onCopy,
      internalType,
      togglePasswordType,
      passwordIconProps,
    } = usePasswordField({
      forwardedRef,
      inputType,
    });

    return (
      <FormBaseField
        errorMessage={errorMessage}
        hasIcon={inputType === "password"}
        helpMessage={helpMessage}
        id={id}
        isActive={isActive}
        label={label}
        readOnly={readOnly}
        required={required}
      >
        {inputType === "password" && (
          <Styled.PasswordVisibilityButton
            onClick={togglePasswordType}
            type="button"
          >
            <Icon {...passwordIconProps} />
          </Styled.PasswordVisibilityButton>
        )}
      </FormBaseField>
    );
  }
);
