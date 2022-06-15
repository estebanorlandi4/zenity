import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { GlobalStyles } from '../utils/styled';

const MainContent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
`;

const Right = styled.div`
  background: #1e2025;
  padding: 1rem;
  width: 15rem;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Zenity</title>
        <meta name="description" content="Favorites manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContent>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Right>Right</Right>
      </MainContent>
    </>
  );
}

export default MyApp;
