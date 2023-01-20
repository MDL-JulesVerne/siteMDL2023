import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material'
import { SessionProvider } from "next-auth/react"

let theme = createTheme({
  palette: {
    primary: {
      main: '#b0bec5',
    },
    secondary: {
      main: '#546e7a',
    },
    background: {
      paper: '#9e9e9e',
      default: '#fafafa',
    }
  }
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  )
}
