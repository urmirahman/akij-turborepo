import { Meta, Story } from "@storybook/react";

import { Footer as Component, FooterProps } from "./Footer";

export default {
  component: Component,
  title: "Features/Footer",
  parameters: { layout: "fullscreen" },
} as Meta;

const subscribeToNewsletter = {
  heading: "Subscribe!",
  email: {
    label: "Email address",
    errorMessage: "Please enter a valid email",
    helpMessage: "",
  },
  buttonText: "Sign up!",
  confirmationMessage: "Thank you for subscribing",
  submitError: "Something went wrong. Please try again.",
  handleSubscribeToNewsletter: () => new Promise<boolean>(() => true),
};

const categorizedLinks = {
  firstList: {
    title: "help",
    links: [
      {
        text: "My Account",
        href: "#1-1",
      },
      {
        text: "Order Status",
        href: "#1-2",
      },
      {
        text: "FAQ",
        href: "#1-3",
      },
      {
        text: "Shipping & Returns",
        href: "#1-4",
      },
      {
        text: "Contact Us",
        href: "#1-5",
      },
      {
        text: "Accessibility",
        href: "#1-6",
      },
    ],
    trackClick: () => null,
  },
  secondList: {
    title: "about us",
    links: [
      {
        text: "Our History",
        href: "#2-1",
      },
      {
        text: "Careers",
        href: "#2-2",
      },
      {
        text: "Nutrition Info",
        href: "#2-3",
      },
      {
        text: "Supply Chain Transparency",
        href: "#2-4",
      },
    ],
    trackClick: () => null,
  },
} as FooterProps["categorizedLinks"];

const utilityLinks = {
  logo: {
    alt: "Mars Wrigley",
  },
  copyrightText:
    "© 2021 MMS.COM. Mars Incorporated and its affiliates. All Rights Reserved.",
  links: [
    {
      text: "Terms & Conditions",
      href: "https://www.akijventure.com/",
    },
    {
      text: "Privacy Statement",
      href: "https://www.akijventure.com/",
    },
    {
      text: "Legal Information",
      href: "https://www.akijventure.com/",
    },
    {
      text: "Cookies Notice",
      href: "https://www.akijventure.com/",
    },
    {
      text: "Modern Slavery Act",
      href: "https://www.akijventure.com/",
    },
    {
      text: "Ad Choices",
      href: "https://www.akijventure.com/",
    },
    {
      text: "Note to Parents",
      href: "https://www.akijventure.com/",
    },
  ],
  brands: {
    brandsModalHeading: "our family of brands",
    brandsModalButton: {
      text: "view all brands",
      href: "https://www.akijventure.com/",
    },
    brandsList: [
      {
        url: "https://www.akijventure.com/",
        logo: {
          alt: "Mars Wrigley",
          href: "https://deu.mars.com/sites/g/files/jydpyr386/files/2019-03/Logos_MARS_WRIGLEY_CONFECTIONERY_28.png",
        },
      },
    ],
  },
} as FooterProps["utilityLinks"];

const Template: Story<FooterProps> = (props) => <Component {...props} />;

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
  customerServiceActions: {
    findAStore: {
      title: "find a store",
      href: "https://www.akijventure.com",
      markdown: "Visit our flagship [M&MS stores](#) around the globe.",
      onClick: () => null,
    },
    chatWithUs: {
      title: "chat with us",
      buttonText: "Available now",
      description: "Mon–Fri, 9am–6pm EST.",
      onClick: () => null,
    },
    callUs: {
      title: "call us",
      phoneNumber: "+1-800-555-5555",
      markdown:
        "[+1-800-555-5555](tel:+1-800-555-5555)<br>Mon–Fri, 9am–6pm EST.",
      onClick: () => null,
    },
    textUs: {
      title: "text us",
      smsNumber: "+1-800-444-4444",
      markdown:
        "[+1-800-444-4444](sms:+1-800-444-4444)<br>Mon–Fri, 9am–6pm EST.",
      onClick: () => null,
    },
  },
  subscribeToNewsletter,
  categorizedLinks,
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
  utilityLinks,
};
