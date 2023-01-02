import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import Error from 'next/error'
import Head from 'next/head'
import { FormatImageUrlProvider } from 'ui/components/contexts/FormatImageUrlContext'
import { baseTheme } from 'ui/components/foundations/theming'
import { isErrorProps } from 'ui/components/utils/isErrorProps'
import { trpc } from '../utils/trpc'
import '../styles/globals.css'
import { formatImageUrl } from 'ui/components/utils/formatImageUrl'

const MyApp: AppType<{ session: Session | null }> = ({ Component, pageProps: { session, ...pageProps } }) => {
  if (isErrorProps(pageProps)) {
    return <Error statusCode={pageProps.error.statusCode} title={pageProps.error.message} />
  }

  return (
    <>
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <FormatImageUrlProvider value={formatImageUrl}>
        <SessionProvider session={session}>
          <MuiThemeProvider theme={baseTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </MuiThemeProvider>
        </SessionProvider>
      </FormatImageUrlProvider>
    </>
  )
}

export default trpc.withTRPC(MyApp)
