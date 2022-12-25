import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { FormatImageUrlProvider } from "../components/ui/contexts/FormatImageUrlContext";
import { baseTheme } from "../components/ui/foundations/theming";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { formatImageUrl } from "../utils/formatImageUrl";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <FormatImageUrlProvider value={formatImageUrl}>
      <MuiThemeProvider theme={baseTheme}>
        <SessionProvider session={session}>
          <CssBaseline />
          <Component {...pageProps} />
        </SessionProvider>
      </MuiThemeProvider>
    </FormatImageUrlProvider>
  );
};

export default trpc.withTRPC(MyApp);
