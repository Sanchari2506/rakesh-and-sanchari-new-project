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
    <footer className={styles.footer}>
      <div className="footer-contents bg-[#0a3758] w-full text-white">
        {/* TOP SECTION */}
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div className="quick-links-wrapper">
            <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              {menuLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Information */}
          <div className="company-info-wrapper">
            <h2 className="text-lg font-semibold mb-3">Company Information</h2>
            <p>
              GST No: <strong>19AAKFL6398J1ZG</strong>
            </p>
            <p>
              SEBI Registration No: <strong>INH000012953</strong>
            </p>
            <p>
              BSE ENLISTMENT No: <strong>5843</strong>
            </p>

            <div className="mt-4 space-y-1">
              <p>17, Subhash Nagar, 1st Bye Lane,</p>
              <p>Dumdum Cantonment,</p>
              <p>Kolkata - 700065</p>
            </div>

            <div className="mt-4 space-y-1">
              <p>Phone: +91 6290500733 / +91 6291136628</p>
              <p>Email: info@lnprcapital.com</p>
            </div>
          </div>
          {/* Company Logo */}
          <div className="footer-logo-wrapper">
            <img
              src="/images/footerlogo.png"
              alt="LNPR Capital Logo"
              className="h-auto w-auto"
            />
            <div className="company-social-media-wrapper flex flex-row space-x-3 mt-9">
              <a href="#" className="cursor-pointer" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={32} />
              </a>
              <a href="#" className="cursor-pointer" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={32} />
              </a>
              <a href="#" className="cursor-pointer" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={32} />
              </a>
              <a href="#" className="cursor-pointer" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={32} />
              </a>
            </div>
          </div>
        </div>
        {/* BOTTOM SECTION */}
        <div className="footer-bottom border-t border-gray-700 pt-4 text-center">
          {/* Disclaimer */}
          <div className="mb-4 w-[80%] mx-auto bg-[#ffffff33] p-4 rounded-xl">
            <h2 className="text-lg font-semibold mb-3">Disclaimer</h2>
            <p className="text-sm leading-relaxed opacity-80">
              Investment in Securities Market are subject to market risks. Read
              all related documents carefully before investing. Registration
              granted by SEBI and certification from NISM in no way guarantee
              performance of the intermediary or provide any assurance of
              returns to investors. The securities quoted are for illustration
              only and are not recommendatory.
            </p>
          </div>
          {/* FOOTER BOTTOM */}
          <p className="text-center text-white py-3 border-t border-gray-700">
            © {new Date().getFullYear()} LNPR Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
