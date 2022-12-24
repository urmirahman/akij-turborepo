import type { HeroProps } from "./Hero";

export const HeroMock: HeroProps = {
  theme: "primary-blue",
  overline: "celebrate christmas",
  headingLine1: "light up their",
  headingLine2: "tastebuds",
  image: {
    alt: "Standard Alt Text",
    href: "https://picsum.photos/{w}",
  },
  firstButton: {
    text: "design your own",
    href: "https://www.akijventure.com",
    variant: "design-your-own",
  },
  secondButton: {
    text: "holiday inspiration",
    href: "https://www.akijventure.com",
  },
  trackLinkClick: () => null,
};
