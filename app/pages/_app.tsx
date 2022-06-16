import axios from 'axios';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';

import Navbar from 'front/components/Navbar';
import { GlobalStyles } from 'front/utils/styled';

const Right = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  background: #1e2025;
  padding: 1rem;
  width: 15rem;
  height: 100%;

  @media screen and (min-width: 50rem) {
    display: block;
  }
`;

const Main = styled.main`
  padding: 0 15rem;
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

      <Navbar />

      <Main>
        <Component {...pageProps} />
      </Main>

      <Right>Right</Right>
    </>
  );
}

export default MyApp;
