import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';

import Navbar from 'components/Navbar';
import { GlobalStyles } from 'utils/styled';

import { SessionProvider } from 'next-auth/react';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <GlobalStyles />
      <Head>
        <title>Zenity</title>
        <meta name="description" content="Favorites manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Navbar />
        <Component {...pageProps} />
      </Main>
    </SessionProvider>
  );
}

export default MyApp;
