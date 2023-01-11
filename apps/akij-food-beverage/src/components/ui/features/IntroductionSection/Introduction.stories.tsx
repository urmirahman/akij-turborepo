import type { Meta, Story } from "@storybook/react";
import Introductions from "./Introduction";

export default {
  component: Introductions,
  title: "Features/Introduction",
  parameters: { layout: "fullscreen" },
} as Meta;

export const Introduction : Story = () => <Introductions />
