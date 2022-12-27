import type { Meta, Story } from "@storybook/react";

import type { HeaderProps } from "./Header";
import { Header as Component } from "./Header";

export default {
  component: Component,
  title: "Features/Header",
  parameters: { layout: "fullscreen" },
  argTypes: {
    onMenuVisibilityChange: { action: "clicked", table: { disable: true } },
    onLinkClick: { action: "clicked", table: { disable: true } },
  },
} as Meta;

const Template: Story<HeaderProps> = (props) => <Component />;
export const Header = Template.bind({});
