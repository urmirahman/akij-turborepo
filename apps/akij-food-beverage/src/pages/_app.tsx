import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import Error from "next/error";
import Head from "next/head";
import { FormatImageUrlProvider } from "../components/ui/contexts/FormatImageUrlContext";
import { baseTheme } from "../components/ui/foundations/theming";
import { isErrorProps } from "../utils/isErrorProps";
//import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";
//import { getLocaleInfo } from "../i18n/localeInfo";
import "../styles/globals.css";
import { formatImageUrl } from "../utils/formatImageUrl";
//import { useMemo } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  //const { locale } = useRouter();
  //const localeInfo = useMemo(() => getLocaleInfo(locale ?? ""), [locale]);

  if (isErrorProps(pageProps)) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  }

  return (
    <>
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <FormatImageUrlProvider value={formatImageUrl}>
        <MuiThemeProvider theme={baseTheme}>
          <SessionProvider session={session}>
            <CssBaseline />
            <Component {...pageProps} />
          </SessionProvider>
        </MuiThemeProvider>
      </FormatImageUrlProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
