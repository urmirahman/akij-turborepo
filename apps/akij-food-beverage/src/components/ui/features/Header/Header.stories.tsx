import { Meta, Story } from "@storybook/react";

import { Header as Component, HeaderProps } from "./Header";

export default {
  component: Component,
  title: "Features/Header",
  parameters: { layout: "fullscreen" },
  argTypes: {
    onMenuVisibilityChange: { action: "clicked", table: { disable: true } },
    onLinkClick: { action: "clicked", table: { disable: true } },
  },
} as Meta;

export const Header: Story<HeaderProps> = (props) => (
  <>
    <Component {...props} />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      {Array(50)
        .fill(null)
        .map((_, i) => (
          <p key={i} style={{ background: i % 10 ? undefined : "#eee" }}>
            {i + 1}
          </p>
        ))}
    </div>
  </>
);
Header.args = {
  skipLinkText: "skip to content",

  openBurgerMenuButtonAriaLabel: "OPEN NAVIGATION MENU",
  closeBurgerMenuButtonAriaLabel: "CLOSE NAVIGATION MENU",

  notificationFeatures: (
    <Header
      resetStateWatchValue={""}
      skipLinkText={""}
      openBurgerMenuButtonAriaLabel={""}
      closeBurgerMenuButtonAriaLabel={""}
      signOut={function (): void {
        throw new Error("Function not implemented.");
      }}
      isSignedIn={false}
      onMenuVisibilityChange={function (
        level: 1 | 2,
        isNowVisible: boolean,
        buttonText: string
      ): void {
        throw new Error("Function not implemented.");
      }}
      onLinkClick={function (
        menuLevel: string | 1 | 2 | 3,
        linkText: string,
        linkUrl: string
      ): void {
        throw new Error("Function not implemented.");
      }}
    />
  ),
};
