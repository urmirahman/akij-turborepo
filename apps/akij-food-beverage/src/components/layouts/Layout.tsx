import type { ReactNode } from "react";

import { ContentContainer } from "../ui/elements/ContentContainer";
import { GridColumn } from "../ui/elements/GridColumn";
import { GridRow } from "../ui/elements/GridRow";
import { ThemedContainer } from "../ui/elements/ThemedContainer";
import { VisuallyHidden } from "../ui/elements/VisuallyHidden";
import type { ThemeName } from "../ui/foundations/theming";
/* import { ChatWindow } from "../../modules/ChatWindow"; */

const SHOW_DEV_GRID_OVERLAY = false;

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
  theme = "primary-brown",
  header,
  children,
  footer,
  h1,
}: LayoutProps) {
  return (
    <>
      {SHOW_DEV_GRID_OVERLAY && <GridOverlay />}
      <ThemedContainer theme={theme}>
        {header}

        {h1 && <VisuallyHidden tag="h1">{h1}</VisuallyHidden>}

        <main id="content">{children}</main>

        {footer}
      </ThemedContainer>
      {/* {chat?.isOpen && (
        <ChatWindow handleClose={chat.handleClose} src={chat.url} />
      )} */}
    </>
  );
}

function GridOverlay() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        pointerEvents: "none",
      }}
    >
      <ContentContainer>
        <GridRow>
          {Array(12)
            .fill(null)
            .map((_, i) => (
              <GridColumn key={i} lg={1} xs={3}>
                <div
                  style={{
                    background: "red",
                    opacity: 0.3,
                    height: "100vh",
                  }}
                />
              </GridColumn>
            ))}
        </GridRow>
      </ContentContainer>
    </div>
  );
}
