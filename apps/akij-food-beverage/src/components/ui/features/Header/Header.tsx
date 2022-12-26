import type { ReactNode } from "react";
import { useRef } from "react";

import { Styled } from "./Header.styled";

export type HeaderProps = {
  resetStateWatchValue: string;

  skipLinkText: string;

  openBurgerMenuButtonAriaLabel: string;
  closeBurgerMenuButtonAriaLabel: string;

  notificationsAria?: string;
  notificationFeatures?: ReactNode;

  signOut: () => void;
  isSignedIn: boolean;

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

export function Header() {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <Styled.Header data-testid="Header" ref={headerRef}>
      <header>Akij Header</header>
    </Styled.Header>
  );
}
