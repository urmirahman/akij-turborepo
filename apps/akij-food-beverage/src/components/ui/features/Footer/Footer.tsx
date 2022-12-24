import { Styled } from "./Footer.styled";

import { GridColumn } from "../../elements/GridColumn";
import { GridRow } from "../../elements/GridRow";

export type FooterProps = {
  purpose: {
    mobileImage: {
      href: string;
      alt: string;
    };
    desktopImage: {
      href: string;
      alt: string;
    };
  };
  subscribeToNewsletter: object;
  categorizedLinks: object;
  customerServiceActions: {
    findAStore: {
      title: string;
      href: string;
      markdown: string;
      onClick: () => void;
    };
    chatWithUs: {
      title: string;
      buttonText: string;
      description: string;
      onClick: () => void;
    };
    callUs: {
      title: string;
      phoneNumber: string;
      markdown: string;
      onClick: () => void;
    };
    textUs: {
      title: string;
      smsNumber: string;
      markdown: string;
      onClick: () => void;
    };
  };
  socialLinks: {
    title: string;
    instagram: {
      title: string;
      href: string;
    };
    facebook: {
      title: string;
      href: string;
    };
    twitter: {
      title: string;
      href: string;
    };
    youtube: {
      title: string;
      href: string;
    };
    pinterest: {
      title: string;
      href: string;
    };
  };
  utilityLinks: object;
};

export function Footer({
  purpose,
  customerServiceActions,
  subscribeToNewsletter,
  categorizedLinks,
  socialLinks,
  utilityLinks,
}: FooterProps) {
  return <Styled.Footer data-testid="Footer">Footer</Styled.Footer>;
}
