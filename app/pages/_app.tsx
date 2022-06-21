import axios from 'axios';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';

import Navbar from 'components/Navbar';
import { GlobalStyles } from 'utils/styled';

const Main = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
`;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const apiTest = async () => {
      console.log((await axios('/api/hello')).data);
    };

    apiTest();
  }, []);

  return (
    <>
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
    </>
  );
}

export default MyApp;
