import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Landing: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zenity</title>
        <meta name="description" content="Favorites manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/home">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Landing;
