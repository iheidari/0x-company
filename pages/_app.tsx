import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";
import { Ubuntu } from "next/font/google";
import React from "react";
import Head from "next/head";

const ubuntu = Ubuntu({
  subsets: ["latin"], // specify the subsets you need
  weight: ["400", "700"], // specify the font weights you need
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={ubuntu.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
