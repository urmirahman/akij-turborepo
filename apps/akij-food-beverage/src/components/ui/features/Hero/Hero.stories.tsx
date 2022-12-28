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

export const WithIngredients = Template.bind({});
WithIngredients.args = {
  ...HeroMock,
  headingLine: undefined,
};

export const WithoutIngredients = Template.bind({});
WithoutIngredients.args = {
  ...HeroMock,
  theme: undefined,
  ingredients: false,
};
