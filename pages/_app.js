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
        {/* Basic Meta */}
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO */}
        <title>LNPR Capital | Investment & Financial Advisory</title>
        <meta
          name="description"
          content="LNPR Capital is a trusted financial and investment advisory firm providing strategic capital solutions and growth-focused portfolio management."
        />
        <meta name="author" content="LNPR Capital" />
        <meta name="robots" content="index, follow" />

        {/* (Optional) Keywords – low impact but safe */}
        <meta
          name="keywords"
          content="LNPR Capital, Financial Services, Investment Advisory, Portfolio Management, Capital Solutions"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon-2.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="LNPR Capital | Investment & Financial Advisory"
        />
        <meta
          property="og:description"
          content="Strategic capital solutions and expert financial advisory services by LNPR Capital."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lnprcapital.com" />
        <meta
          property="og:image"
          content="https://www.lnprcapital.com/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="LNPR Capital | Investment & Financial Advisory"
        />
        <meta
          name="twitter:description"
          content="Expert investment and financial advisory services by LNPR Capital."
        />
        <meta
          name="twitter:image"
          content="https://www.lnprcapital.com/og-image.jpg"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
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
