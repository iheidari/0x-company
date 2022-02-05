import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>0x Code Limited</title>
        <meta
          name="description"
          content="Official website of 0x Code Limited company"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <code className={styles.code}>0x</code>
          Code Limited
        </h1>

        <p className={styles.description}>loading...</p>
      </main>
    </div>
  );
};

export default Home;
