import type { UseControllerProps } from "react-hook-form";
import { Controller } from "react-hook-form";

import type {
  FormField,
  FormFieldWithValidation,
} from "../../../../types/types";

import type { FormInputProps } from "./FormInput";
import { FormInput } from "./FormInput";

export type HookFormInputProps = Omit<UseControllerProps, "rules"> &
  Partial<Pick<FormInputProps, "onChange" | "type" | "onBlur">> & {
    field: FormField | FormFieldWithValidation;
    idPrefix: string;
    pattern?: RegExp;
    readOnly?: boolean | string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    customValidate?: (value: string) => boolean;
  };

export function HookFormInput({
  field,
  idPrefix,
  type,
  onChange,
  onBlur,
  name,
  shouldUnregister,
  defaultValue,
  control,
  pattern,
  minLength,
  maxLength,
  readOnly,
  required,
  customValidate,
}: HookFormInputProps) {
  return (
    <Controller
      control={control}
      defaultValue={defaultValue}
      name={name}
      render={({
        field: {
          onChange: onControllerChange,
          onBlur: onControllerBlur,
          value: controllerValue,
          name: controllerName,
          ref,
        },
        fieldState: { error },
      }) => (
        <FormInput
          errorMessage={error ? error.message : undefined}
          helpMessage={field.helpMessage}
          id={`${idPrefix}${controllerName}`}
          label={field.label}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onBlur={(event: any) => {
            onControllerBlur();
            onBlur?.(event);
          }}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(value: any) => {
            onControllerChange(value);
            onChange?.(value);
          }}
          pattern={pattern?.source}
          readOnly={!!readOnly}
          ref={ref}
          required={required}
          type={type}
          value={
            typeof readOnly === "string" ? readOnly : controllerValue ?? ""
          }
        />
      )}
      rules={
        "errorMessage" in field
          ? {
              required: required
                ? { message: field.errorMessage, value: true }
                : undefined,
              pattern: pattern
                ? { message: field.errorMessage, value: pattern }
                : undefined,
              minLength: minLength
                ? { message: field.errorMessage, value: minLength }
                : undefined,
              maxLength: maxLength
                ? { message: field.errorMessage, value: maxLength }
                : undefined,
              validate: customValidate
                ? (value) => {
                    if (typeof value !== "string")
                      throw new Error(
                        "customValidate does not support non-string values"
                      );

                    return customValidate(value) || field.errorMessage;
                  }
                : undefined,
            }
          : undefined
      }
      shouldUnregister={shouldUnregister}
    />
  );
}
