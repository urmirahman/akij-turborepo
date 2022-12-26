import type { Meta, Story } from "@storybook/react";

import { Footer as Component } from "./Footer";

export default {
  component: Component,
  title: "Features/Footer",
  parameters: { layout: "fullscreen" },
} as Meta;

const Template: Story = (props) => <Component {...props} />;

export const Footer = Template.bind({});
Footer.args = {
  purpose: {
    mobileImage: {
      href: "https://via.placeholder.com/{w}x{h=0.66}",
      alt: "purpose banner",
    },
    desktopImage: {
      href: "https://via.placeholder.com/{w}x{h=0.3}",
      alt: "purpose banner",
    },
  },
  socialLinks: {
    title: "connect with us",
    instagram: {
      title: "Find us on Instagram",
      href: "https://www.instagram.com/",
    },
    facebook: {
      title: "Find us on Facebook",
      href: "https://www.facebook.com/",
    },
    twitter: {
      title: "Find us on Twitter",
      href: "https://www.twitter.com/",
    },
    youtube: {
      title: "Watch us on Youtube",
      href: "https://www.youtube.com/",
    },
    pinterest: {
      title: "Find us on Pinterest",
      href: "https://www.pinterest.com/",
    },
  },
};
