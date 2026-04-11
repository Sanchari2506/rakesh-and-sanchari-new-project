import styles from "./Footer.module.css";
import { FaLinkedin, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  // Dynamic menu for quick editing later
  const menuLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Investor Charter", href: "/investor-charter" },
    { label: "Escalation Matrix", href: "/investor-complaints" },
    { label: "Grievance Redressal", href: "/grievance-redressal" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "FAQs", href: "/faqs" },
  ];

  return (
    <>
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
          {/* <div className="footer-col">
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
            </div> */}
          <div className="footer-col">
            <h4>Important Info</h4>
            <ul>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms & Conditions</a>
              </li>
              {/* <li>
                <a href="/refund-policy">Refund Policy</a>
              </li> */}
              <li>
                <a href="/disclaimer">Disclaimer</a>
              </li>
              <li>
                <a href="/investor-charter">Investor Charter</a>
              </li>
              <li>
                <a href="/grievance-redressal">Grievance Redressal</a>
              </li>
              {/* <li>
                  <a href="/escalation-matrix">Escalation Matrix</a>
                </li> */}
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
                <br />
                <a href="tel:+91 9874483593">+91 9874483593</a>
              </p>
            </div>
            <div className="footer-contact-item">
              <span className="ic">✉</span>
              <p>
                <a href="mailto:info@lnprcapital.com">
                  info@lnprcapital.com
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
            performance of the intermediary or provide any assurance of returns
            to investors. The securities quoted are for illustration only and
            are not recommendatory."
          </p>
        </div>
        <div className="footer-bottom">
          <p>
            © 2026 LNPR Capital. All rights reserved. SEBI Reg No: INH000012953
          </p>
        </div>
      </footer>
      <a
        href="https://wa.me/916290500733"
        className="wa-float"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/images/WhatsApp_icon.png" alt="whatsapp" style={{width:'40px', height:'40px'}} />
      </a>
    </>
  );
}
