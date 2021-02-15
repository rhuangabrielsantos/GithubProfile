import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme';
import { Main } from '../styles/layoutUser';

function Layout({ children, title = 'Github Profile' }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23141132%22></rect><path d=%22M28.16 78.92Q23.78 78.92 21.11 76.67Q18.44 74.42 18.44 70.76L18.44 70.76Q18.44 68.48 19.52 66.56Q20.60 64.64 22.46 63.53Q24.32 62.42 26.54 62.42L26.54 62.42Q28.82 62.42 30.23 63.56Q31.64 64.70 31.64 66.56L31.64 66.56Q31.64 68 30.98 68.84L30.98 68.84Q30.44 68.12 29.51 67.70Q28.58 67.28 27.56 67.28L27.56 67.28Q25.76 67.28 24.62 68.48Q23.48 69.68 23.48 71.60L23.48 71.60Q23.48 73.52 24.59 74.72Q25.70 75.92 27.38 75.92L27.38 75.92Q29.48 75.92 30.98 74.06Q32.48 72.20 33.26 68.54L33.26 68.54L36.26 55.28L36.02 55.28Q34.40 57.56 32.09 58.76Q29.78 59.96 27.02 59.96L27.02 59.96Q23.54 59.96 20.90 58.10Q18.26 56.24 16.85 52.79Q15.44 49.34 15.44 44.78L15.44 44.78Q15.44 38.18 18.32 32.75Q21.20 27.32 26.24 24.20Q31.28 21.08 37.34 21.08L37.34 21.08Q42.44 21.08 45.41 23.30Q48.38 25.52 48.38 29.36L48.38 29.36Q48.38 31.94 47.12 33.50Q45.86 35.06 43.82 35.06L43.82 35.06Q42.68 35.06 41.69 34.58Q40.70 34.10 40.04 33.20L40.04 33.20Q41.12 32.48 41.87 30.89Q42.62 29.30 42.62 27.68L42.62 27.68Q42.62 25.88 41.57 24.89Q40.52 23.90 38.60 23.90L38.60 23.90Q35.12 23.90 31.88 26.99Q28.64 30.08 26.66 35.06Q24.68 40.04 24.68 45.50L24.68 45.50Q24.68 50 26.12 52.37Q27.56 54.74 30.26 54.74L30.26 54.74Q33.50 54.74 35.99 51.32Q38.48 47.90 39.98 41.36L39.98 41.36L47.06 41.42L42.68 61.58Q40.76 70.52 37.25 74.72Q33.74 78.92 28.16 78.92L28.16 78.92ZM54.62 66.50L62.78 28.34L71.66 27.14L67.40 47.18Q70.28 46.94 72.71 44.66Q75.14 42.38 76.52 39.02Q77.90 35.66 77.90 32.42L77.90 32.42Q77.90 28.82 76.04 26.54Q74.18 24.26 70.46 24.26L70.46 24.26Q63.14 24.26 59.03 28.10Q54.92 31.94 54.92 38.84L54.92 38.84Q54.92 41.06 55.34 41.93Q55.76 42.80 55.76 42.92L55.76 42.92Q52.52 42.92 50.93 41.57Q49.34 40.22 49.34 37.10L49.34 37.10Q49.34 33.26 52.49 29.63Q55.64 26 60.56 23.75Q65.48 21.50 70.40 21.50L70.40 21.50Q75.14 21.50 78.32 23.12Q81.50 24.74 83.03 27.41Q84.56 30.08 84.56 33.32L84.56 33.32Q84.56 37.22 82.43 40.94Q80.30 44.66 76.34 47.03Q72.38 49.40 67.22 49.40L67.22 49.40L66.92 49.40L63.26 66.50L54.62 66.50Z%22 fill=%22%23fff%22></path></svg>"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <GlobalStyle />
        {children}
      </Main>
    </ThemeProvider>
  );
}

export default Layout;