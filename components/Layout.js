import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme';
import Head from 'next/head';

const Main = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${(props) => props.theme.bg.primary};
`;

function Layout({ children, title = 'Github Profile' }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;500&display=swap"
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
