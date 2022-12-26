import MuiInputUnstyled from "@mui/base/InputUnstyled";
import type { FocusEvent, HTMLInputTypeAttribute } from "react";
import { forwardRef } from "react";

import type { FormBaseFieldProps } from "../FormBaseField";
import { FormBaseField } from "../FormBaseField";

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
  ({
    id,
    label,
    type: inputType = "text",
    value,
    helpMessage,
    errorMessage,
    readOnly,
    required,
  }) => {
    const hasValue = !!value;

    const isActive = hasValue;

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
        <MuiInputUnstyled />
      </FormBaseField>
    );
  }
);
