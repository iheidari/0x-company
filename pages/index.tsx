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
          <Image
            src="/0x-code-limited-logo.png"
            width={534}
            height={154}
            alt="0x Code Limited Logo"
          />
        </h1>

        <p className={styles.description}>Comming soon...</p>

        <p className={styles.description}>
          For more information please contact:
          <br />
          <Image
            src="/email.png"
            alt="email of company"
            width={260}
            height={42}
          />
        </p>
      </main>
    </div>
  );
};

export default Home;
