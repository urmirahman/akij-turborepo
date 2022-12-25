import type { ComponentStory, Meta } from "@storybook/react";
import { useState } from "react";

import { Paragraph } from "../Paragraph";
import type { FormInputProps } from "./FormInput";
import { FormInput as Component } from "./FormInput";

export default {
  component: Component,
  title: "ATOMS/Form Input",
  argTypes: {
    id: { table: { disable: true } },
    type: { table: { disable: true } },
    onBlur: { table: { disable: true } },
    onChange: { table: { disable: true } },
    onFocus: { table: { disable: true } },
    value: { table: { disable: true } },
  },
} as Meta;

const Template: ComponentStory<typeof Component> = ({
  value: initialValue,
  ...props
}) => {
  const [value, setValue] = useState(initialValue ?? "");

  return (
    <div style={{ minWidth: 282 }}>
      <Paragraph variant="small">value: {value}</Paragraph>
      <Component {...props} id="id" onChange={setValue} value={value} />
    </div>
  );
};

const args: Partial<FormInputProps> = {
  label: "Label",
  helpMessage: "help message",
  errorMessage: "",
  pattern: "",
  readOnly: false,
  required: false,
};

export const Empty = Template.bind({});
Empty.args = {
  ...args,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...args,
  value: "not valid",
  errorMessage: "please enter a valid value",
  pattern: "[0-9]+",
  required: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ...args,
  value: "read only",
  readOnly: true,
};

export const Password = Template.bind({});
Password.args = {
  ...args,
  type: "password",
};
