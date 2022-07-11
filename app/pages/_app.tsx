import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyles } from 'utils/styled';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <GlobalStyles />

      <Head>
        <title>ProdiGi</title>
        <meta
          name="description"
          content="New tab productivity page with github interactions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
