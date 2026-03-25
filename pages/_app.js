import "@styles/globals.css";
import "@styles/main-style.css";
// import { Inter } from "next/font/google";
import Layout from "@components/Layout";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function Application({ Component, pageProps }) {
  return (
    <>
    <Head>
       {/* SEO */}
        <title>LNPR Capital | Investment & Financial Advisory</title>
      </Head>
      <div className={`app-container`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default Application;
