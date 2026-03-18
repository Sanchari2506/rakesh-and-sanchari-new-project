import Head from "next/head";
import { useEffect, useState } from "react";
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
  const [openAccItems, setOpenAccItems] = useState([true, false, false]);
  const [openFaqItems, setOpenFaqItems] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleAcc = (index) => {
    setOpenAccItems((prev) =>
      prev.map((isOpen, itemIndex) =>
        itemIndex === index ? !isOpen : isOpen
      )
    );
  };

  const toggleFaq = (index) => {
    setOpenFaqItems((prev) =>
      prev.map((isOpen, itemIndex) =>
        itemIndex === index ? !isOpen : isOpen
      )
    );
  };

  useEffect(() => {
    const revealTargets = document.querySelectorAll(
      ".why-card, .svc-card, .belief-item, .who-pillar"
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
      { threshold: 0.1 }
    );

    revealTargets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

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

        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <main>
        {/* TOPBAR */}
        <div className="topbar">
          <span>
            SEBI Registered Research Analyst · Reg No:{" "}
            <strong>INH000012953</strong> · BSE Enlistment:{" "}
            <strong>5843</strong>
          </span>
          <span>
            📞 <a href="tel:+916290500733">+91 6290500733</a> &nbsp;|&nbsp; ✉{" "}
            <a href="/cdn-cgi/l/email-protection#60090e060f200c0e10120301100914010c4e030f0d">
              <span
                className="__cf_email__"
                data-cfemail="fa93949c95ba96948a88999b8a938e9b96d4999597"
              >
                info@lnprcapital.com
              </span>
            </a>
          </span>
        </div>

        {/* NAV */}
        <nav>
          <a href="#" className="nav-logo">
            <div className="nav-logo-icon">
              <img src="/images/logo.svg" alt="LNPR Capital" />
            </div>
            <div className="nav-logo-text">
              LNPR Capital
            </div>
          </a>
          <ul className="nav-links">
            <li>
              <a href="#who">Who We Are</a>
            </li>
            <li>
              <a href="#why">Why LNPR</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#beliefs">Our Beliefs</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#services" className="nav-cta">
                Subscribe
              </a>
            </li>
          </ul>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-noise"></div>
          <div className="hero-line"></div>
          <div className="hero-content">
            <div className="hero-tag">A Boutique Research House</div>
            <h1 className="hero-title">
              Helping Serious Investors<br></br>
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
                <span className="n">12–15</span>
                <span className="l">Annual Ideas</span>
              </div>
              <div className="hero-stat">
                <span className="n">SEBI</span>
                <span className="l">Registered RA</span>
              </div>
              <div className="hero-stat">
                <span className="n">1–2yr</span>
                <span className="l">Holding Period</span>
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
                <strong>SEBI Reg No:</strong> INH000012953<br></br>
                <strong>BSE Enlistment:</strong> 5843<br></br>
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
            <div className="section-eyebrow" style={{ color: "var(--gold-lt)" }}>
              Why LNPR Capital
            </div>
            <h2 className="section-title white">What Makes Us Different</h2>
            <p className="section-sub" style={{ color: "rgba(255,255,255,0.4)" }}>
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
            
            <div className="why-card">
              <div className="why-num">03</div>
              <h3>Your Money in Your Hands</h3>
              <p>
                Your capital stays in your bank account and your own demat. You
                remain the decision maker. We are a trusted conduit, never a
                custodian.
              </p>
            </div>
            
            <div className="why-card">
              <div className="why-num">04</div>
              <h3>Your Capital, Your Control</h3>
              <p>
                Your funds always remain securely in your own bank account and demat account. You retain complete ownership and decision-making authority, while we serve only as your trusted advisor — never a custodian.
              </p>
            </div>
            <div className="why-card">
              <div className="why-num">05</div>
              <h3>Exit is as Important as Entry</h3>
              <p>
                We are not in the "buy right, sit tight" camp. We actively track
                each position and provide timely, clear exit calls whenever
                fundamentals change.
              </p>
            </div>
            <div className="why-card">
              <div className="why-num">06</div>
              <h3>Deep Fundamental Research</h3>
              <p>
                Our analysts go beyond screeners. On-ground research, management
                meetings, and forensic financial analysis inform every report we
                publish.
              </p>
            </div>
            <div className="why-card">
              <div className="why-num">07</div>
              <h3>Exit is Important</h3>
              <p>
                Each investment is actively monitored, and we provide timely exit recommendations whenever the fundamentals change.
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
                  Principles shaped by years of investing — lessons learned and shared with honesty.
                </p>
              </div>
            </div>
            <div className="beliefs-grid">
              <div className="belief-item">
                <div className="belief-num">01</div>
                <div className="belief-content">
                  <h3>Risk Before Returns</h3>
                  <p>
                    Long-term wealth is built through risk discipline and
                    thoughtful allocation, not just stock selection.
                  </p>
                </div>
              </div>
              <div className="belief-item">
                <div className="belief-num">02</div>
                <div className="belief-content">
                  <h3>Conviction Must Be Earned</h3>
                  <p>
                    Ideas can be borrowed, but true conviction only comes from
                    your own research.
                  </p>
                </div>
              </div>
              <div className="belief-item">
                <div className="belief-num">03</div>
                <div className="belief-content">
                  <h3>Boring Compounds Best</h3>
                  <p>
                    Many of the greatest wealth creators are stable, unexciting
                    businesses that grow steadily for decades.
                  </p>
                </div>
              </div>
              <div className="belief-item">
                <div className="belief-num">04</div>
                <div className="belief-content">
                  <h3>Develop a Circle of Competence</h3>
                  <p>
                    Focus on areas where you possess genuine insight and
                    expertise.
                  </p>
                </div>
              </div>
              <div className="belief-item">
                <div className="belief-num">05</div>
                <div className="belief-content">
                  <h3>Rejection Builds Wealth</h3>
                  <p>
                    Superior portfolios are shaped as much by what you avoid as
                    by what you own.
                  </p>
                </div>
              </div>
              <div className="belief-item">
                <div className="belief-num">06</div>
                <div className="belief-content">
                  <h3>Ignore Daily Noise</h3>
                  <p>
                    Successful investors focus on business fundamentals, not
                    short-term price movements.
                  </p>
                </div>
              </div>
              <div className="belief-item">
                <div className="belief-num">07</div>
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
            <div className={`acc-item${openAccItems[0] ? " open" : ""}`}>
              <button
                type="button"
                className="acc-trigger"
                onClick={() => toggleAcc(0)}
              >
                Investors Complaints Data — Month ending January 2026
                <span className="chevron">▾</span>
              </button>
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
            </div>
            <div className={`acc-item${openAccItems[1] ? " open" : ""}`}>
              <button
                type="button"
                className="acc-trigger"
                onClick={() => toggleAcc(1)}
              >
                Trend Of Monthly Disposal Of Complaints (April 2025 – March
                2026)
                <span className="chevron">▾</span>
              </button>
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
            </div>
            <div className={`acc-item${openAccItems[2] ? " open" : ""}`}>
              <button
                type="button"
                className="acc-trigger"
                onClick={() => toggleAcc(2)}
              >
                Trend Of Annual Disposal Of Complaints
                <span className="chevron">▾</span>
              </button>
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
            </div>
          </div>
          <div className="comp-note">
            Contact us at{" "}
            <a href="/cdn-cgi/l/email-protection#ed84838b82ad81839d9f8e8c9d84998c81c38e8280">
              <span
                className="__cf_email__"
                data-cfemail="4821262e27082426383a2b2938213c2924662b2725"
              >
                info@lnprcapital.com
              </span>
            </a>{" "}
            for any queries, complaints or grievances. Grievances will be
            resolved within 30 days. If not satisfied, lodge a complaint with
            SEBI via{" "}
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
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="c4adaaa2ab84a8aab4b6a7a5b4adb0a5a8eaa7aba9"
                  >
                    info@lnprcapital.com
                  </a>{" "}
                  for any queries.
                </div>
              </div>
              <div className={`faq-item${openFaqItems[3] ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => toggleFaq(3)}
                >
                  What returns should I expect?<span className="faq-icon">+</span>
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

        {/* FOOTER */}
        <footer>
          <div className="footer-top">
            <div className="footer-brand">
              <span className="logo-f">LNPR Capital</span>
              <span className="tagline-f">A Boutique Research House</span>
              <p>
                We aim to be a trustworthy, reliable, and professional equity
                research organisation for serious Indian investors — with
                data-backed actionable ideas as our key differentiator.
              </p>
              <div className="reg-chips">
                <div className="reg-chip">
                  <strong>SEBI Registration</strong>INH000012953
                </div>
                <div className="reg-chip">
                  <strong>BSE Enlistment</strong>5843
                </div>
                <div className="reg-chip">
                  <strong>GST Number</strong>19AAKFL6398J1ZG
                </div>
              </div>
            </div>
            <div className="footer-col">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#who">Who We Are</a>
                </li>
                <li>
                  <a href="#services">Products & Pricing</a>
                </li>
                <li>
                  <a href="#faqs">FAQs & Contact</a>
                </li>
                <li>
                  <a href="#beliefs">Our Beliefs</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Important Info</h4>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">Disclaimer</a>
                </li>
                <li>
                  <a href="#">Investor Charter</a>
                </li>
                <li>
                  <a href="#">Grievance Redressal</a>
                </li>
                <li>
                  <a href="#">Escalation Matrix</a>
                </li>
                <li>
                  <a href="https://smartodr.in/login" target="_blank">
                    SMART ODR Portal
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <span className="ic">📍</span>
                <p>
                  17, Subhash Nagar, 1st Bye Lane, Dumdum Cantonment, Kolkata –
                  700065
                </p>
              </div>
              <div className="footer-contact-item">
                <span className="ic">📞</span>
                <p>
                  <a href="tel:+916290500733">+91 6290500733</a>
                  <br></br>
                  <a href="tel:+91 9874483593">+91 9874483593</a>
                </p>
              </div>
              <div className="footer-contact-item">
                <span className="ic">✉</span>
                <p>
                  <a href="/cdn-cgi/l/email-protection#0960676f66496567797b6a6879607d6865276a6664">
                    <span
                      className="__cf_email__"
                      data-cfemail="4e272028210e22203e3c2d2f3e273a2f22602d2123"
                    >
                      info@lnprcapital.com
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "20px 0 20px 28px",
              margin: "0 -60px",
              paddingLeft: "60px",
              paddingRight: "60px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                lineHeight: "1.8",
              }}
            >
              "Investment in Securities Market are subject to market risks. Read
              all related documents carefully before investing. Registration
              granted by SEBI and certification from NISM in no way guarantee
              performance of the intermediary or provide any assurance of
              returns to investors. The securities quoted are for illustration
              only and are not recommendatory."
            </p>
          </div>
          <div className="footer-bottom">
            <p>
              © 2026 LNPR Capital. All rights reserved. SEBI Reg No:
              INH000012953
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Disclaimer</a>
            </div>
          </div>
        </footer>

        <a href="https://wa.me/916290500733" className="wa-float" target="_blank">
          💬
        </a>
      </main>
    </>
  );
}
