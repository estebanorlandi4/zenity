import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Landing: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zenity</title>
        <meta name="description" content="Favorites manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>Este fondo es rojo</p>

      <style jsx>
        {`
          p {
            color: #fff;
            padding: 1rem;

            background: red;
            background: #f00;
            background: rgb(255, 0, 0);
            background: hsl(0, 100%, 0);

            background: hsla(0, 100%, 0, 1);
            background: rgba(0, 100%, 0, 1);
            background: #f00f;
            background: linear-gradient(0deg, #f00, #f00);
          }
        `}
      </style>
    </div>
  );
};

export default Landing;
