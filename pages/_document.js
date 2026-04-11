import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Default fallback description ONLY */}

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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
