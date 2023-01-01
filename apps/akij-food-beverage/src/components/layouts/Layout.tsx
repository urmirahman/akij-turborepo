import type { ReactNode } from "react";
import { ThemedContainer } from "../ui/elements/ThemedContainer";
import type { ThemeName } from "../ui/foundations/theming";

type LayoutProps = {
  theme?: ThemeName;
  header?: ReactNode;
  footer?: ReactNode;
  h1?: string;
  children: ReactNode;
  chat?: {
    url: string;
    isOpen: boolean;
    handleClose: () => void;
  };
};

export function Layout({
  theme = "white-brown",
  header,
  children,
  footer,
}: LayoutProps) {
  return (
    <>
      <ThemedContainer theme={theme}>
        {header}

        <main>{children}</main>

        {footer}
      </ThemedContainer>
    </>
  );
}
