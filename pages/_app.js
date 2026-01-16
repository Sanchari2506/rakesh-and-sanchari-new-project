import "@styles/globals.css";
import { Inter } from "next/font/google";
import Layout from "@components/Layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function Application({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default Application;
