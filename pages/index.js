import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Image from "next/image";
import FAQIndex from "@components/FAQIndex";
// Example icons from react-icons (Feather)
import { FiCoffee, FiUsers } from "react-icons/fi";
import FinancialCompass from "@components/FinancialCompass";
import Services from "@components/Services";
import ComplaintStatus from "@components/ComplaintStatus";

export default function Home() {
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
      </Head>
      <main>
        <div className="w-full">
          <div className="mx-auto max-w-7xl">
            <div className="hero-section grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-10 max-w-7xl mx-auto">
              <div className="hero-content flex flex-col justify-center items-center">
                <h1 className="exp-text text-3xl md:text-5xl font-bold md:font-extrabold mb-4 text-[#ffb224] text-center">
                  Navigating Markets with{" "}
                  <span className="text-[#0a3758]">LNPR Capital</span>
                </h1>
                <p className="text-gray-600 text-base md:text-lg text-center">
                  LNPR is an independent equity research firm. We offer equity
                  research services to our clients on a subscription basis.
                  Unlike others we believe in having “Skin in the Game”. We
                  invest in all the stocks we share reports on.
                </p>
              </div>
              <div className="her-image">
                <Image
                  src="/images/hero-img.png"
                  alt="Hero Image"
                  width={1000}
                  height={1000}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>

          <FinancialCompass />
          <Services />

          <ComplaintStatus />

          {/* FAQ Section */}
          <FAQIndex limit={5} />
        </div>
      </main>
    </>
  );
}
