import { MdOutlinePersonSearch } from "react-icons/md";
import { useRef, useState } from "react";
import SEO from "../components/SEO";
export default function AboutUs() {
  const services = [
    {
      title: "Equity Research",
      body: `Our equity research delivers data-driven insights supported by detailed financial and sectoral analysis. We help investors identify high-potential opportunities with clarity and confidence.`,
      extraClass: "",
      icon: MdOutlinePersonSearch,
    },
    {
      title: "In-Depth Fundamental Research",
      body: `We evaluate a company’s true intrinsic value through rigorous study of financial statements, business models, and market dynamics. Our research empowers informed, long-term investment decisions.`,
      extraClass: "text-wrap",
      icon: MdOutlinePersonSearch,
    },
    {
      title: "Crafting Personalized Financial Solutions",
      body: `Every client receives a tailored financial strategy aligned with their goals, risk appetite, and time horizon. We focus on creating solutions that promote sustainable financial growth.`,
      extraClass: "",
      icon: MdOutlinePersonSearch,
    },
    {
      title: "Giving Customised Investment Strategy",
      body: `Our investment strategies are fully customised to your profile, ensuring optimal asset allocation and risk management. We design portfolios that adapt to changing market trends.`,
      extraClass: "",
      icon: MdOutlinePersonSearch,
    },
    {
      title: "Balancing and Rebalancing of Investments",
      body: `We continuously monitor your portfolio and rebalance allocations to maintain the ideal risk–return profile. This disciplined approach keeps your investments aligned with your long-term goals.`,
      extraClass: "",
      icon: MdOutlinePersonSearch,
    },
    {
      title: "Excellent Customer Support",
      body: `Our dedicated support team ensures prompt and reliable assistance at every step of your financial journey. We prioritise transparency, responsiveness, and client satisfaction.`,
      extraClass: "",
      icon: MdOutlinePersonSearch,
    },
  ];

  return (
    <>
      <SEO
        title="LNPR Capital | A Boutique Research Firm"
        description="LNPR Capital is an independent equity research firm offering subscription-based research with a strong 'Skin in the Game' philosophy."
        image={`https://www.lnprcapital.com/images/og-logo-updated.jpg`}
        url="https://www.lnprcapital.com/"
        contentType="website"
      />
      <div className="max-w-7xl mx-auto relative md:mb-40">
        <div className="banner-wrapper w-full h-[300px] md:h-[500px]">
          <img
            src="/images/web-banner-img.png"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="about-us-main-content w-full h-auto relative md:absolute md:bottom-[-20%] md:left-0 md:right-0">
          <div className="main-content-wrapper bg-[#0a3758] w-full md:w-[70%] h-full p-10 flex flex-col justify-center items-center m-auto md:rounded-xl">
            <h1 className="text-4xl font-semibold mb-4 text-[#ffcf76] text-center">
              About Us
            </h1>
            <p className="text-white text-base md:text-lg text-center">
              Welcome to LNPR, a safe place where honesty, reliability and
              integrity is celebrated as a pillar upon which successful
              financial partnerships are built. Here, prioritise open and honest
              communication with you, where we ensure well-informed decisions
              regarding investments, financial strategies to achieve financial
              objectives, and risk associated. We are here committed to act in
              the best interest of the investors and planning practical
              financial solutions at the forefront of everything we do.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative m-10 md:mb-20">
        <h2 className="exp-text font-bold md:font-extrabold text-3xl md:text-6xl text-[#ffb224] text-center md:mb-10 mx-auto w-[80%] leading-relaxed">
          Through our more than 20 years of experience in equity market, we
          provide you with the best financial services
        </h2>
      </div>

      {/* services section  */}
      <div className="md:max-w-7xl mx-[20px] md:mx-auto services-wrapper grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className={`bg-[#0a3758] p-10 rounded-xl service-card`}
            >
              <div className="mb-6 flex justify-center">
                {Icon && <Icon size={58} className="text-white" />}
              </div>
              <h5
                className={`text-2xl font-semibold text-[#ffcf76] mb-4 text-center ${s.extraClass}`}
              >
                {s.title}
              </h5>
              <p className="text-white text-base text-center">{s.body}</p>
            </div>
          );
        })}
      </div>

      <div className="md:max-w-7xl mr-[20px] md:mx-auto w-full md:w-[80%] team-details-content mb-20">
        <h3 className="text-center text-[#ffcf76] text-3xl font-bold">
          Meet Our Team
        </h3>
        <p className="text-white text-base">
          At LNPR, our team of seasoned professionals brings a wealth of
          experience, expertise, and passion to the table. We are dedicated to
          providing exceptional financial services and guidance to our clients,
          ensuring that their investment goals are met with precision and care.
        </p>
        <p className="text-white text-base">
          Our team comprises financial analysts, investment advisors, and
          customer support specialists who work collaboratively to deliver
          tailored solutions that align with our clients' unique needs. With a
          deep understanding of market trends and a commitment to ethical
          practices, we strive to build lasting relationships based on trust and
          transparency.
        </p>
        <p className="text-white text-base">
          Together, we are committed to helping our clients navigate the
          complexities of the financial world, empowering them to make informed
          decisions and achieve their financial aspirations.
        </p>
      </div>

      {/* founder section  */}
      <div className="w-[90%] md:max-w-7xl mx-auto founder-details-content mb-20">
        <div className="founder-wrapper flex flex-col md:flex-row gap-10 justify-center items-start">
          <div className="founder-image w-full md:w-1/2">
            <img
              src="/images/founder-one.png"
              alt="Founder Image One"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="founder-content w-full md:w-1/2">
            <h3 className="text-[#ffb224] text-5xl font-bold mb-4 text-center">
              Rahul Kumar Das
            </h3>
            <p className="mb-4 text-3xl text-blue-800 font-semibold text-center">
              Co-Founder
            </p>
            <p className="text-2xl mb-4 text-center">
              LNPR co-founder Rahul Kumar Das, with over a decade in the Indian
              market, holds a postgraduate degree in Finance. Certified as a
              Research Analyst by NISM, his passion for finance, honed since
              student years, contributes astute analysis and strategic thinking
              to the firm's investment approach. Rahul's deep knowledge and
              expertise, cultivated over years, form the bedrock of LNPR's
              success, showcasing a commitment to excellence in navigating the
              complexities of the financial landscape.
            </p>
          </div>
        </div>
        <div className="founder-wrapper flex flex-col-reverse md:flex-row gap-10 justify-center items-start mt-20">
          <div className="founder-content w-full md:w-1/2">
            <h3 className="text-[#ffb224] text-5xl font-bold mb-4 text-center">
              Rakesh Das
            </h3>
            <p className=" mb-4 text-3xl text-blue-800 font-semibold text-center">
              Co-Founder
            </p>
            <p className="text-2xl mb-4 text-center">
              LNPR Capital's co-founder Rakesh Das, with over six years in the
              equity market, brings profound enthusiasm for investing and
              certified Research Analyst credentials from NISM. His prior Mutual
              Fund industry experience enhances his comprehensive understanding
              of market dynamics, guiding our investment approach. Rakesh's
              unwavering commitment to thorough research and fundamental
              analysis serves as a cornerstone, ensuring well-informed
              investment recommendations and strategies for our clients.
            </p>
          </div>
          <div className="founder-image w-full md:w-1/2">
            <img
              src="/images/founder-two.png"
              alt="Founder Image One"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* thin banner section  */}
      <div className="mx-auto w-full h-[300px] mb-40 relative">
        <img
          src="/images/about-banner.png"
          alt="Thin Banner"
          className="w-full h-full object-cover"
        />
        <div className="handshake-img w-[150px] h-[150px] rounded-2xl absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="/images/handshake-two.webp"
            alt="Handshake"
            className="w-full h-full object-cover rounded-2xl bg-[#ffb224]"
          />
        </div>
      </div>
      {/* long-text section  */}
      <div className="long-text-content max-w-7xl mx-auto mb-20 px-6">
        <p className="text-2xl text-center">
          Together, Rahul and Rakesh form a formidable team of experts at LNPR.
          Our combined knowledge, experience, and passion for finance empower us
          to deliver tailored financial solutions and comprehensive financial
          services to our esteemed clients. Our team is driven by a shared
          commitment to providing the highest level of service, transparency,
          and integrity. When you choose LNPR, you gain access to a team of
          professionals who are dedicated to helping you achieve your financial
          goals. We look forward to working with you and guiding you on your
          investment journey.
        </p>
      </div>
    </>
  );
}
