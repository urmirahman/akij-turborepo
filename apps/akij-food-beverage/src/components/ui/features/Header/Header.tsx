import { ReactNode, useRef } from "react";

import { ThemedContainer } from "../../elements/ThemedContainer";
import { Typography } from "../../elements/Typography";
import { Styled } from "./Header.styled";

export type HeaderProps = {
  resetStateWatchValue: string;

  skipLinkText: string;

  openBurgerMenuButtonAriaLabel: string;
  closeBurgerMenuButtonAriaLabel: string;

  notificationsAria?: string;
  notificationFeatures?: ReactNode;

  /* level1Items: Level1MenuProps["items"];
  customerCtas?: CustomerCtasProps;
  toolLinks?: ToolLinksProps;
  searchBar: SearchBarProps;
  accountLink: AccountLinkForDesktopProps;
  cartLink: CartLinkProps; */
  signOut: () => void;
  isSignedIn: boolean;
  //languageSelector: Level1MenuProps["languageSelector"];

  onMenuVisibilityChange: (
    level: 1 | 2,
    isNowVisible: boolean,
    buttonText: string
  ) => void;
  onLinkClick: (
    menuLevel: 1 | 2 | 3 | string,
    linkText: string,
    linkUrl: string
  ) => void;
};

export function Header(props: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <Styled.Header data-testid="Header" ref={headerRef}>
      <header>Akij Header</header>
    </Styled.Header>
  );
}
