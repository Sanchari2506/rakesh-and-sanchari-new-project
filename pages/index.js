import Footer from "@components/Footer";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SEO from "../components/SEO";

const CASE_STUDY_FILTERS = [
  { value: "all", label: "All" },
  { value: "holding", label: "Holding" },
  { value: "exited", label: "Exited" },
];

/* 
Exited                Metals & Mining
Ashapura Minechem Ltd
Reco Price: ₹370 / share • Exited at ₹730

Leading Indian mineral company based in Mumbai.
It produces and exports minerals like bentonite & bauxite. 
The company serves industries such as oil, steel, and construction worldwide.

46%.                                   65%
Revenue CAGR          PAT CAGR

23%                                  13
ROE 5yrs                     P/E At Exit

RETURNS DELIVERED  97% in 08 months

*/

const CASE_STUDIES = [
  //   {
  //     title: "Ashapura Minechem Limited",
  //     status: "exited",
  //     sector: "Multi-Mineral Mining & Processing",
  //     reportFile: "Ashapura Minechem Limited - LNPR REPORT.pdf",
  //     recoPrice: "₹370 / share",
  //     exitPrice: "₹730 / share",
  //     thesis: `Leading Indian mineral company based in Mumbai.
  // It produces and exports minerals like bentonite & bauxite.
  // The company serves industries such as oil, steel, and construction worldwide.`,
  //     metrics: [
  //       { value: "46%", label: "Revenue CAGR" },
  //       { value: "65%", label: "PAT CAGR" },
  //       { value: "23%", label: "ROE 5yrs" },
  //       { value: "13", label: "P/E at Exit" },
  //     ],
  //     returnLabel: "RETURNS DELIVERED",
  //     returnValue: "97%",
  //     returnValueMonths: "in 08 months",
  //   },
  {
    title: "Ashapura Minechem Limited",
    status: "holding",
    sector: "Multi-Mineral Mining & Processing",
    reportFile: "/case-studies/Ashapura_Minechem_Premium.pdf",
    recoPrice: "₹370 / share",
    exitPrice: "₹730 / share",
    thesis: `A global mineral leader with operations across 90+ countries and top-3 positions in bentonite and bleaching clay. 
The company’s growth is driven by its Guinea bauxite operations contributing ~76% of revenue. 
However, the investment case depends heavily on volume growth offsetting declining bauxite prices, making it a high-risk, high-upside commodity play.`,
    metrics: [
      { value: "50%", label: "Revenue Growth (9M FY26 YoY)" },
      { value: "14.2%", label: "EBITDA Margin (9M FY26)" },
      { value: "9.3%", label: "PBT Margin (9M FY26)" },
      { value: "76%", label: "Revenue from Guinea" },
    ],
    returnLabel: "RETURNS DELIVERED",
    returnValue: "170%",
    returnValueMonths: "in 02 months",
  },
  {
    title: "Stallion India Fluorochemicals Limited",
    status: "exited",
    sector: "Fluorochemicals — Refrigerants & Specialty",
    reportFile: "/case-studies/Stallion_India_Fluorochemicals_Premium.pdf",
    recoPrice: "₹150 / share",
    exitPrice: "₹405 / share",
    thesis: `A near debt-free fluorochemical company benefiting from India's AC penetration boom. 
  It operates as a refrigerant blending and distribution player with strong ROCE and margins. 
  However, the long-term investment thesis depends on its ability to transition from HFCs to next-gen HFO refrigerants amid regulatory phase-down risks.`,
    metrics: [
      { value: "18–22%", label: "Revenue Growth Outlook" },
      { value: "12–13%", label: "PAT Margin" },
      { value: "20%", label: "ROCE" },
      { value: "0.01x", label: "D/E" },
    ],
    returnLabel: "RETURNS DELIVERED",
    returnValue: "170%",
    returnValueMonths: "in 02 months",
  },
  // {
  //     title: "Stallion India Fluorochemicals Ltd",
  //     status: "exited",
  //     sector: "Chemical Industry",
  //     reportFile: "Stallion India Fluorochemicals Limited.pdf",
  //     recoPrice: "₹150 / share",
  //     exitPrice: "₹405 / share",
  //     thesis: `Co. manufactures & supplies refrigerant gases and fluorochemicals.
  //     It serves industries like HVAC, automotive, electronics in India & abroad.`,
  //     metrics: [
  //       { value: "62%", label: "Revenue CAGR" },
  //       { value: "109%", label: "PAT CAGR" },
  //       { value: "20%", label: "ROCE At Exit" },
  //       { value: "0", label: "D/E At Exit" },
  //     ],
  //     returnLabel: "RETURNS DELIVERED",
  //     returnValue: "170%",
  //     returnValueMonths: "in 02 months",
  //   },
  // {
  //   title: "PQR Consumer Ltd",
  //   status: "holding",
  //   sector: "Consumer Goods",
  //   recoPrice: "₹XXX / share",
  //   thesis:
  //     "An under-the-radar consumer brand with dominant regional presence, transitioning to a national footprint. Asset-light model with high cash generation and zero debt provides significant margin of safety.",
  //   metrics: [
  //     { value: "XX%", label: "Revenue CAGR" },
  //     { value: "XX%", label: "RoE" },
  //     { value: "Zero", label: "Net Debt" },
  //     { value: "XXx", label: "P/E (FY25e)" },
  //   ],
  //   returnLabel: "Target Price",
  //   returnValue: "₹XXX",
  // },
  // {
  //   title: "DEF Defence Ltd",
  //   status: "exited",
  //   sector: "Defence & Aerospace",
  //   recoPrice: "₹XXX / share",
  //   exitPrice: "₹XXX",
  //   thesis:
  //     "Recommended on the thesis of significant indigenisation push by GoI presenting a multi-year growth runway, with a strong order pipeline across helicopters, aircraft, and engine segments worth $35-40 billion.",
  //   metrics: [
  //     { value: "XX%", label: "Revenue CAGR" },
  //     { value: "XX%", label: "PAT CAGR" },
  //     { value: "XX%", label: "RoE" },
  //     { value: "Net Cash", label: "Balance Sheet" },
  //   ],
  //   returnLabel: "Returns Delivered",
  //   returnValue: "X.Xx",
  //   returnNote: "in XX months",
  // },
  // {
  //   title: "GHI Engineering Ltd",
  //   status: "exited",
  //   sector: "Capital Goods",
  //   recoPrice: "₹XXX / share",
  //   exitPrice: "₹XXX",
  //   thesis:
  //     "A proxy play on India's water and energy capex recovery. New product introductions and a focus on exports and service revenue provided a strong earnings upgrade cycle over the holding period.",
  //   metrics: [
  //     { value: "XX%", label: "Revenue Growth" },
  //     { value: "XX%", label: "EBITDA Growth" },
  //     { value: "XX%", label: "PAT Growth" },
  //     { value: "₹XXCr", label: "New Order Win" },
  //   ],
  //   returnLabel: "Returns Delivered",
  //   returnValue: "X.Xx",
  //   returnNote: "in XX months",
  // },
  // {
  //   title: "JKL Tech Ltd",
  //   status: "exited",
  //   sector: "Technology",
  //   recoPrice: "₹XXX / share",
  //   exitPrice: "₹XXX",
  //   thesis:
  //     "Recommended on the thesis of rising EV investments by global auto OEMs driving demand for Auto ER&D services. Margin expansion from better utilisation and order inflows provided a significant re-rating catalyst.",
  //   metrics: [
  //     { value: "XX%", label: "Margin at Reco" },
  //     { value: "XX%", label: "Margin at Exit" },
  //     { value: "XXx", label: "P/E at Reco" },
  //     { value: "XXx", label: "P/E at Exit" },
  //   ],
  //   returnLabel: "Returns Delivered",
  //   returnValue: "X.Xx",
  //   returnNote: "in XX months",
  // },
];

const EXITED_CASE_STUDY_RETURN_STYLE = {
  background: "rgba(26,122,74,0.1)",
  borderColor: "rgba(26,122,74,0.3)",
};

const EXITED_CASE_STUDY_VALUE_STYLE = {
  color: "#4ade80",
};

const CASE_STUDY_NOTE_STYLE = {
  fontSize: "13px",
  fontFamily: "Outfit, sans-serif",
};

const getReportHref = (fileName) => {
  if (!fileName) {
    return "#";
  }

  if (/^https?:\/\//i.test(fileName)) {
    return encodeURI(fileName);
  }

  const normalizedPath = fileName.startsWith("/") ? fileName : `/${fileName}`;
  return encodeURI(normalizedPath);
};

const TESTIMONIALS = [
  {
    avatar: "R",
    name: "Rajesh M.",
    designation: "Business Owner",
    location: "Mumbai",
    text: "The research quality at LNPR is genuinely different. Every report comes with a clear thesis, risk factors, and exit triggers - not just a buy call. I finally feel like I understand what I own and why. The depth of analysis and the transparent communication have been exceptional throughout my subscription.",
  },
  {
    avatar: "S",
    name: "Sunita P.",
    designation: "Retired Professional",
    location: "Bangalore",
    text: "What sets LNPR apart is the skin-in-the-game philosophy. They invest in the same stocks they recommend. That alignment of interests gives me genuine confidence when I make a position. Two multibaggers in my first year of subscription. The team is always accessible and responds promptly to any query.",
  },
  {
    avatar: "A",
    name: "Anand K.",
    designation: "Senior Executive",
    location: "Delhi NCR",
    text: "I've subscribed to multiple research services over the years. LNPR is the only one that proactively sends exit calls with a clear rationale when the thesis breaks. That discipline alone has saved me significant capital. Their long-term orientation and honest communication are rare in this industry.",
  },
  {
    avatar: "V",
    name: "Vikram S.",
    designation: "Entrepreneur",
    location: "Ahmedabad",
    text: "The SME Master Club has been a revelation. These are companies that no large broker covers - yet the fundamental quality is exceptional. LNPR finds them early, explains the thesis in plain language, and tracks them diligently. I have found several high-conviction positions through their research that I would never have discovered on my own.",
  },
  {
    avatar: "P",
    name: "Priya N.",
    designation: "Doctor & Investor",
    location: "Pune",
    text: "I was initially sceptical about paying for research - but the very first report I received changed my mind. The depth of analysis, the forensic financial checks, and the management quality assessment were unlike anything I had seen before. As a busy professional, having a trusted research partner has been invaluable.",
  },
  {
    avatar: "M",
    name: "Manish T.",
    designation: "CA & Investor",
    location: "Kolkata",
    text: "LNPR has genuinely changed how I approach investing. The regular communication, the transparent acknowledgment when a thesis is wrong, and the long-term orientation have made me a more patient and disciplined investor. As a CA, I appreciate their rigour around financial forensics and quality of earnings analysis.",
  },
];

export default function Home() {
  const [openFaqItems, setOpenFaqItems] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [caseStudyFilter, setCaseStudyFilter] = useState("all");
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(null);
  const testimonialTrackRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaqItems((prev) =>
      prev.map((isOpen, itemIndex) => (itemIndex === index ? !isOpen : isOpen)),
    );
  };

  const visibleCaseStudies = CASE_STUDIES.filter(
    ({ status }) => caseStudyFilter === "all" || status === caseStudyFilter,
  );
  const activeTestimonial =
    activeTestimonialIndex === null
      ? null
      : TESTIMONIALS[activeTestimonialIndex];

  useEffect(() => {
    const revealTargets = document.querySelectorAll(
      ".why-card, .svc-card, .belief-item, .who-pillar, .cs-card, .testi-slide",
    );

    if (!revealTargets.length) {
      return undefined;
    }

    revealTargets.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(24px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

    document.querySelectorAll(".why-card").forEach((element, index) => {
      element.style.transitionDelay = `${index * 0.06}s`;
    });

    document.querySelectorAll(".belief-item").forEach((element, index) => {
      element.style.transitionDelay = `${index * 0.04}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    revealTargets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveTestimonialIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (activeTestimonialIndex === null) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeTestimonialIndex]);

  const openTestimonialModal = (index) => {
    setActiveTestimonialIndex(index);
  };

  const closeTestimonialModal = () => {
    setActiveTestimonialIndex(null);
  };

  const scrollTestimonials = (direction) => {
    testimonialTrackRef.current?.scrollBy({
      left: direction * 304,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SEO
        title="LNPR Capital | Investment & Financial Advisory"
        description="LNPR Capital is an independent equity research firm offering subscription-based research with a strong 'Skin in the Game' philosophy."
        image={`https://www.lnprcapital.com/images/og-logo-updated.jpg`}
        url="https://www.lnprcapital.com/"
        contentType="website"
      />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-noise"></div>
          <div className="hero-line"></div>
          <div className="hero-content">
            <div className="hero-tag">A Boutique Research House</div>
            <h1 className="hero-title">
              Helping Serious Investors
              <br />
              Build <em>Sustainable Wealth,</em>
              <span className="sub">The Right Way — With Skin in the Game</span>
            </h1>
            <p className="hero-desc">
              LNPR Capital is an independent equity research firm. We offer
              subscription-based equity research. Unlike others, we believe in{" "}
              <strong>"Skin in the Game"</strong> — we invest in every stock we
              publish reports on. Your trust is our greatest responsibility.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn-gold">
                Explore Products
              </a>
              <a href="#who" className="btn-ghost">
                Who We Are
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="n">100+</span>
                <span className="l">Stocks Released</span>
              </div>
              <div className="hero-stat">
                <span className="n">SEBI</span>
                <span className="l">Registered RA</span>
              </div>
              <div className="hero-stat">
                <span className="n">2000+</span>
                <span className="l">Clients Served</span>
              </div>
              <div className="hero-stat">
                <span className="n">100%</span>
                <span className="l">Skin in Game</span>
              </div>
            </div>
          </div>
          <div className="hero-side">
            <div className="sebi-box">
              <h4>Regulatory Details</h4>
              <p>
                <strong>SEBI Reg No:</strong> INH000012953
                <br />
                <strong>BSE Enlistment:</strong> 5843
                <br />
                <strong>GST No:</strong> 19AAKFL6398J1ZG
              </p>
            </div>
            <div className="sebi-box" style={{ marginTop: "2px" }}>
              <h4>Investment in markets</h4>
              <p style={{ fontSize: "11px" }}>
                Securities market investments are subject to market risks. Read
                all documents carefully before investing.
              </p>
            </div>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="who" id="who">
          <div className="who-inner">
            <div className="who-img">
              <div className="who-img-block">
                <img src="/images/image-hero.png" alt="Who We Are" />
              </div>
              <div className="who-img-badge">
                <div className="num">100%</div>
                <div className="txt">Skin in the Game</div>
              </div>
            </div>
            <div className="who-text">
              <div className="section-header">
                <div className="section-eyebrow">Who Are We</div>
                <h2 className="section-title">
                  An Independent Research House Built on Integrity
                </h2>
              </div>
              <p>
                LNPR Capital is a team of dedicated investment enthusiasts with
                deep roots in Indian equity markets. We are a{" "}
                <strong>SEBI-registered research analyst firm</strong> offering
                subscription-based equity research to serious investors.
              </p>
              <p>
                We are not brokers. We are not distributors. We are pure
                researchers — and we put our money where our recommendations
                are. Every stock in our research portfolio is one we hold
                ourselves, making our interests perfectly aligned with yours.
              </p>
              <p>
                Our mission is to help retail investors make{" "}
                <strong>
                  educated, data-backed, long-term investment decisions
                </strong>{" "}
                in small and mid-cap companies — the segment most ignored by
                institutional research, and most rewarding for patient
                investors.
              </p>
              <div className="who-pillars">
                <div className="who-pillar">
                  <span>📊 Data-Backed Research</span>
                </div>
                <div className="who-pillar">
                  <span>🎯 Long-Term Focus</span>
                </div>
                <div className="who-pillar">
                  <span>🔍 Small & Micro Cap</span>
                </div>
                <div className="who-pillar">
                  <span>🤝 Aligned Interests</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY LNPR */}
        <section className="why" id="why">
          <div className="section-header">
            <div
              className="section-eyebrow"
              style={{ color: "var(--gold-lt)" }}
            >
              Why LNPR Capital
            </div>
            <h2 className="section-title white">What Makes Us Different</h2>
            <p
              className="section-sub"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Principles that define how we think, research, and serve our
              clients.
            </p>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-num">01</div>
              <h3>Skin in the Game</h3>
              <p>
                We invest in every stock we recommend. Our money is at stake
                too, making our interests completely aligned with yours. No
                conflicts. No empty calls.
              </p>
            </div>
            <div className="why-card">
              <div className="why-num">02</div>
              <h3>Only Data-Backed Ideas</h3>
              <p>
                Every recommendation is backed by rigorous quantitative and
                qualitative analysis. We believe: "In God we trust, all others
                must bring data."
              </p>
            </div>

            {/* <div className="why-card">
              <div className="why-num">03</div>
              <h3>Your Money in Your Hands</h3>
              <p>
                Your capital stays in your bank account and your own demat. You
                remain the decision maker. We are a trusted conduit, never a
                custodian.
              </p>
            </div> */}

            <div className="why-card">
              <div className="why-num">03</div>
              <h3>Your Capital, Your Control</h3>
              <p>
                Your funds always remain securely in your own bank account and
                demat account. You retain complete ownership and decision-making
                authority, while we serve only as your trusted advisor — never a
                custodian.
              </p>
            </div>
            {/* <div className="why-card">
              <div className="why-num">05</div>
              <h3>Exit is as Important as Entry</h3>
              <p>
                We are not in the "buy right, sit tight" camp. We actively track
                each position and provide timely, clear exit calls whenever
                fundamentals change.
              </p>
            </div> */}
            <div className="why-card">
              <div className="why-num">04</div>
              <h3>Deep Fundamental Research</h3>
              <p>
                Our analysts go beyond screeners. On-ground research, management
                meetings, and forensic financial analysis inform every report we
                publish.
              </p>
            </div>
            <div className="why-card">
              <div className="why-num">05</div>
              <h3>Exit is Important</h3>
              <p>
                Each investment is actively monitored, and we provide timely
                exit recommendations whenever the fundamentals change.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services" id="services">
          <div className="section-header">
            <div className="section-eyebrow">Products & Pricing</div>
            <h2 className="section-title">Explore Our Research Products</h2>
            <p className="section-sub">
              Choose the product that aligns with your investment goals and risk
              appetite. Start your journey toward financial empowerment today.
            </p>
          </div>
          <div className="services-grid">
            {/* Card 1 */}
            <div className="svc-card">
              <div className="svc-card-top">
                <span className="svc-badge">Equity Research</span>
                <h2>Small & Micro Cap</h2>
                <p className="svc-tagline">
                  Focused. Research-driven. High-growth potential.
                </p>
              </div>
              <div className="svc-body">
                <ul className="svc-features">
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Market Cap:</strong> ₹100 Cr – ₹5,000 Cr
                    </div>
                  </li>
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Ideas:</strong> 12–15 high-conviction research
                      ideas annually
                    </div>
                  </li>
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Research:</strong> Comprehensive, in-depth reports
                      on every idea
                    </div>
                  </li>
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Holding Period:</strong> 1–2 years
                    </div>
                  </li>
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Active Tracking:</strong> Clear exit calls
                      provided on every position
                    </div>
                  </li>
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Access:</strong> Subscriber-only portal & email
                      delivery
                    </div>
                  </li>
                </ul>
                <div className="svc-price-row">
                  <div className="svc-price">
                    ₹14,999 <small>/ year</small>
                  </div>
                  <a
                    href="https://lnprcapital.akamai.net.in/quick-pay/10/2"
                    className="btn-gold"
                    target="_blank"
                    style={{ fontSize: "12px", padding: "12px 24px" }}
                  >
                    Subscribe Now
                  </a>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="svc-card">
              <div
                className="svc-card-top"
                style={{
                  background: "linear-gradient(135deg,#1a3a5c 0%,#0F1923 100%)",
                }}
              >
                <span className="svc-badge">SME Research</span>
                <h2>SME Master Club</h2>
                <p className="svc-tagline">
                  Disciplined. Research-backed. Growth-focused.
                </p>
              </div>
              <div className="svc-body">
                <ul className="svc-features">
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Market Cap:</strong> ₹100 Cr – ₹2,000 Cr
                    </div>
                  </li>
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Ideas:</strong> 20–25 high-conviction research
                      ideas annually
                    </div>
                  </li>
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Research:</strong> Detailed, comprehensive
                      SME-focused reports
                    </div>
                  </li>
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Holding Period:</strong> ~1 year
                    </div>
                  </li>
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Support:</strong> Timely exit calls with thesis
                      update notes
                    </div>
                  </li>
                  <li>
                    <span className="icon">→</span>
                    <div>
                      <strong>Access:</strong> Subscriber-only portal & priority
                      support
                    </div>
                  </li>
                </ul>
                <div className="svc-price-row">
                  <div className="svc-price">
                    ₹14,999 <small>/ year</small>
                  </div>
                  <a
                    href="https://lnprcapital.akamai.net.in/quick-pay/10/1"
                    className="btn-gold"
                    target="_blank"
                    style={{ fontSize: "12px", padding: "12px 24px" }}
                  >
                    Subscribe Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}

        <section className="casestudies" id="casestudies">
          <div className="section-header">
            <div
              className="section-eyebrow"
              style={{ color: "var(--gold-lt)" }}
            >
              Research in Action
            </div>
            <h2 className="section-title white">Case Studies</h2>
            <div className="cs-disclaimer">
              The securities quoted below are only for illustration purposes and
              are not recommendations.
            </div>
          </div>

          <div className="cs-filters">
            {CASE_STUDY_FILTERS.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`cs-filter${caseStudyFilter === filter.value ? " active" : ""}`}
                onClick={() => setCaseStudyFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="cs-grid">
            {visibleCaseStudies.map((caseStudy) => (
              <div
                key={caseStudy.title}
                className="cs-card"
                data-status={caseStudy.status}
              >
                <div className="cs-card-head">
                  <div className="cs-status-row">
                    <span className={`cs-status ${caseStudy.status}`}>
                      {caseStudy.status === "holding"
                        ? "● Holding"
                        : "✓ Exited"}
                    </span>
                    <span className="cs-sector">{caseStudy.sector}</span>
                  </div>
                  <h3>{caseStudy.title}</h3>
                  <p className="cs-reco">
                    Reco Price: <strong>{caseStudy.recoPrice}</strong>
                    {caseStudy.exitPrice ? (
                      <>
                        {" "}
                        &nbsp;·&nbsp; Exited at{" "}
                        <strong>{caseStudy.exitPrice}</strong>
                      </>
                    ) : null}
                  </p>
                </div>
                <div className="cs-card-body">
                  <p className="cs-thesis">{caseStudy.thesis}</p>
                  <div className="cs-metrics">
                    {caseStudy.metrics.map((metric) => (
                      <div
                        key={`${caseStudy.title}-${metric.label}`}
                        className="cs-metric"
                      >
                        <span className="mv">{metric.value}</span>
                        <span className="ml">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="cs-return"
                    style={
                      caseStudy.status === "exited"
                        ? EXITED_CASE_STUDY_RETURN_STYLE
                        : undefined
                    }
                  >
                    <span className="label">{caseStudy.returnLabel}</span>
                    <span
                      className="value"
                      style={
                        caseStudy.status === "exited"
                          ? EXITED_CASE_STUDY_VALUE_STYLE
                          : undefined
                      }
                    >
                      {caseStudy.returnValue}{" "}
                      <span style={{ fontSize: "20px", fontWeight: "500" }}>
                        {caseStudy.returnValueMonths}
                      </span>
                      {caseStudy.returnNote ? (
                        <>
                          {" "}
                          <small style={CASE_STUDY_NOTE_STYLE}>
                            {caseStudy.returnNote}
                          </small>
                        </>
                      ) : null}
                    </span>
                  </div>
                </div>
                <div className="cs-card-foot">
                  {caseStudy.reportFile ? (
                    <a
                      href={getReportHref(caseStudy.reportFile)}
                      className="cs-btn"
                      download={caseStudy.reportFile}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" />
                      </svg>
                      Download Full Report
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUR BELIEFS */}
        <section className="beliefs" id="beliefs">
          <div className="beliefs-layout">
            <div className="beliefs-sticky">
              <div className="section-eyebrow">Our Philosophy</div>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>
                Guided by Experience. Driven by Discipline
              </h2>
              <div
                style={{
                  width: "48px",
                  height: "3px",
                  background: "var(--gold)",
                  marginBottom: "24px",
                }}
              ></div>
              <div className="beliefs-intro">
                <p>
                  Principles shaped by years of investing — lessons learned and
                  shared with honesty.
                </p>
              </div>
            </div>
            <div className="beliefs-grid">
              <div className="belief-item" style={{ paddingTop: "0" }}>
                <div className="belief-num">01</div>
                <div className="belief-content">
                  <h3>Risk Before Returns</h3>
                  <p>
                    Long-term wealth is built through risk discipline and
                    thoughtful allocation, not just stock selection.
                  </p>
                </div>
              </div>
              {/* <div className="belief-item">
                <div className="belief-num">02</div>
                <div className="belief-content">
                  <h3>Conviction Must Be Earned</h3>
                  <p>
                    Ideas can be borrowed, but true conviction only comes from
                    your own research.
                  </p>
                </div>
              </div> */}
              <div className="belief-item">
                <div className="belief-num">02</div>
                <div className="belief-content">
                  <h3>Boring Compounds Best</h3>
                  <p>
                    Many of the greatest wealth creators are stable, unexciting
                    businesses that grow steadily for decades.
                  </p>
                </div>
              </div>
              {/* <div className="belief-item">
                <div className="belief-num">04</div>
                <div className="belief-content">
                  <h3>Develop a Circle of Competence</h3>
                  <p>
                    Focus on areas where you possess genuine insight and
                    expertise.
                  </p>
                </div>
              </div> */}
              <div className="belief-item">
                <div className="belief-num">03</div>
                <div className="belief-content">
                  <h3>Rejection Builds Wealth</h3>
                  <p>
                    Superior portfolios are shaped as much by what you avoid as
                    by what you own.
                  </p>
                </div>
              </div>
              {/* <div className="belief-item">
                <div className="belief-num">06</div>
                <div className="belief-content">
                  <h3>Ignore Daily Noise</h3>
                  <p>
                    Successful investors focus on business fundamentals, not
                    short-term price movements.
                  </p>
                </div>
              </div> */}
              <div className="belief-item">
                <div className="belief-num">04</div>
                <div className="belief-content">
                  <h3>Research Builds Conviction</h3>
                  <p>
                    Deep research enables investors to remain disciplined during
                    volatility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="complaints" id="complaints">
          <div className="section-header">
            <div className="section-eyebrow">Compliance</div>
            <h2 className="section-title">Investor Complaint Status</h2>
            <p className="section-sub">
              As required by SEBI, we disclose our investor complaints data
              monthly.
            </p>
          </div>
          <div className="acc-wrap">
            <details className="acc-item">
              <summary className="acc-trigger">
                Investors Complaints Data — Month ending January 2026
                <span className="chevron">▾</span>
              </summary>
              <div className="acc-body">
                <div style={{ overflowX: "auto" }}>
                  <table>
                    <thead>
                      <tr>
                        <th>Sr.</th>
                        <th>Received from</th>
                        <th>Pending (prev. month)</th>
                        <th>Received</th>
                        <th>Resolved</th>
                        <th>Total Pending</th>
                        <th>Pending &gt;3 months</th>
                        <th>Avg. Resolution (days)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Directly from Investors</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>SEBI (SCORES)</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Other Sources</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <strong>Grand Total</strong>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--mid-gray)",
                    marginTop: "12px",
                    lineHeight: "1.8",
                  }}
                >
                  * Inclusive of complaints of previous months resolved in the
                  current month. # Inclusive of complaints pending as on the
                  last day of the month.
                </p>
              </div>
            </details>
            <details className="acc-item">
              <summary className="acc-trigger">
                Trend Of Monthly Disposal Of Complaints (April 2025 – March
                2026)
                <span className="chevron">▾</span>
              </summary>
              <div className="acc-body">
                <div style={{ overflowX: "auto" }}>
                  <table>
                    <thead>
                      <tr>
                        <th>Sr.</th>
                        <th>Month</th>
                        <th>Carried Forward</th>
                        <th>Received</th>
                        <th>Resolved</th>
                        <th>Pending</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>April, 2025</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>May, 2025</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>June, 2025</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>July, 2025</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>August, 2025</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>September, 2025</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>October, 2025</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>November, 2025</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>December, 2025</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>January, 2026</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <strong>Grand Total</strong>
                        </td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
            <details className="acc-item">
              <summary className="acc-trigger">
                Trend Of Annual Disposal Of Complaints
                <span className="chevron">▾</span>
              </summary>
              <div className="acc-body">
                <div style={{ overflowX: "auto" }}>
                  <table>
                    <thead>
                      <tr>
                        <th>Sr.</th>
                        <th>Year</th>
                        <th>Carried Forward</th>
                        <th>Received</th>
                        <th>Resolved</th>
                        <th>Pending</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>2024-2025</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>2023-2024</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>2022-2023</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                        <td>NA</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>
          </div>
          <div className="comp-note">
            Contact us at{" "}
            <a href="mailto:info@lnprcapital.com">info@lnprcapital.com</a> for
            any queries, complaints or grievances. Grievances will be resolved
            within 30 days. If not satisfied, lodge a complaint with SEBI via{" "}
            <a href="https://scores.sebi.gov.in" target="_blank">
              SEBI SCORES
            </a>{" "}
            or the
            <a href="https://smartodr.in/login" target="_blank">
              SMART ODR Portal
            </a>
            .
          </div>
        </section>

        {/* TESTIMONIALS */}
        {/* <section className="testimonials" id="testimonials">
          <div className="section-header">
            <div className="section-eyebrow">Client Stories</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <p
              className="section-sub"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Heard directly from serious investors who have been part of the
              LNPR Capital journey.
            </p>
          </div>

          <div className="testi-track-wrap">
            <div className="testi-track" id="testiTrack" ref={testimonialTrackRef}>
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="testi-slide"
                  role="button"
                  tabIndex={0}
                  onClick={() => openTestimonialModal(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openTestimonialModal(index);
                    }
                  }}
                >
                  <div className="testi-photo">{testimonial.avatar}</div>
                  <h4>{testimonial.name}</h4>
                  <p className="testi-desig">
                    {testimonial.designation}
                    <br />
                    {testimonial.location}
                  </p>
                  <button
                    type="button"
                    className="testi-know-more"
                    onClick={(event) => {
                      event.stopPropagation();
                      openTestimonialModal(index);
                    }}
                  >
                    Know More
                  </button>
                </div>
              ))}
            </div>

            <div className="testi-nav">
              <button
                type="button"
                className="testi-nav-btn"
                aria-label="Scroll testimonials left"
                onClick={() => scrollTestimonials(-1)}
              >
                ←
              </button>
              <button
                type="button"
                className="testi-nav-btn"
                aria-label="Scroll testimonials right"
                onClick={() => scrollTestimonials(1)}
              >
                →
              </button>
            </div>
          </div>
        </section> */}

        <div
          className={`testi-modal-overlay${activeTestimonial ? " active" : ""}`}
          aria-hidden={!activeTestimonial}
          onClick={closeTestimonialModal}
        >
          {activeTestimonial ? (
            <div
              className="testi-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="testimonial-modal-name"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="testi-modal-close"
                aria-label="Close testimonial"
                onClick={closeTestimonialModal}
              >
                ✕
              </button>
              <div className="testi-modal-photo">
                {activeTestimonial.avatar}
              </div>
              <h3 id="testimonial-modal-name">{activeTestimonial.name}</h3>
              <p className="modal-desig">
                {activeTestimonial.designation}, {activeTestimonial.location}
              </p>
              <div className="testi-modal-divider"></div>
              <span className="testi-modal-quote">"</span>
              <p className="testi-modal-text">{activeTestimonial.text}</p>
            </div>
          ) : null}
        </div>

        {/* FAQs */}
        <section className="faqs" id="faqs">
          <div className="faqs-inner">
            <div className="faqs-left">
              <div className="section-eyebrow">FAQs</div>
              <h2>Frequently Asked Questions</h2>
              <p>
                Have questions about our research, subscription, or process? We
                believe in transparent communication — here are the questions we
                hear most often.
              </p>
            </div>
            <div className="faq-list">
              <div className={`faq-item${openFaqItems[0] ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggleFaq(0)}
                >
                  What is LNPR Capital?<span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  LNPR Capital is a SEBI-registered equity research firm
                  offering subscription-based research services on Indian small
                  and micro-cap stocks.
                </div>
              </div>
              <div className={`faq-item${openFaqItems[1] ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggleFaq(1)}
                >
                  How are you different from other research firms?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  Unlike others, we believe in having "Skin in the Game." We
                  invest in every stock we publish research on. Our interests
                  are completely aligned with yours — we make money only when
                  our ideas work.
                </div>
              </div>
              <div className={`faq-item${openFaqItems[2] ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggleFaq(2)}
                >
                  What kind of support do you provide?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  Subscribers get full access to our research reports, timely
                  exit calls, and can reach us directly via phone or email at{" "}
                  <a href="mailto:info@lnprcapital.com">info@lnprcapital.com</a>{" "}
                  for any queries.
                </div>
              </div>
              <div className={`faq-item${openFaqItems[3] ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggleFaq(3)}
                >
                  What returns should I expect?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  We seek long-term capital appreciation over 1–2 year horizons.
                  Returns depend on market conditions and individual company
                  performance. We do not guarantee returns — no one honestly
                  can.
                </div>
              </div>
              <div className={`faq-item${openFaqItems[4] ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggleFaq(4)}
                >
                  What is your refund policy?<span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  As a policy, we do not provide refunds after subscription. We
                  encourage potential subscribers to review our sample reports
                  and speak with us before subscribing.
                </div>
              </div>
              <div className={`faq-item${openFaqItems[5] ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggleFaq(5)}
                >
                  Is my money safe with LNPR Capital?
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  Absolutely. LNPR Capital is a pure research firm — we never
                  take custody of your funds. Your money stays in your bank
                  account and your investments in your own demat account. You
                  remain in full control at all times.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
