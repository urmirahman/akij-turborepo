import type { Meta, Story } from "@storybook/react";

import type { HeroProps } from "./Hero";
import { Hero as Component } from "./Hero";
import { HeroMock } from "./Hero.mocks";

export default {
  component: Component,
  title: "Features/Hero",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: Story<HeroProps> = (props) => <Component {...props} />;

export const Default = Template.bind({});
Default.args = {
  ...HeroMock,
};

export const WithSingleHeading = Template.bind({});
WithSingleHeading.args = {
  ...HeroMock,
  headingLine2: undefined,
};

export const WithoutTheme = Template.bind({});
WithoutTheme.args = {
  ...HeroMock,
  theme: undefined,
};
