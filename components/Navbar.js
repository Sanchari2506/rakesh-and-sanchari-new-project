import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { sectionId: "why", label: "Why LNPR" },
    { sectionId: "services", label: "Services" },
    { sectionId: "beliefs", label: "Our Beliefs" },
    { sectionId: "faqs", label: "FAQs" },
    { sectionId: "services", label: "Subscribe", className: "nav-cta" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const getSectionHref = (sectionId) =>
    router.pathname === "/" ? `#${sectionId}` : `/#${sectionId}`;

  return (
    <nav>
      <a href="/" className="nav-logo" onClick={closeMobileMenu}>
        <div className="nav-logo-icon">
          <img src="/images/logo.svg" alt="LNPR Capital" />
        </div>
      </a>
      <button
        type="button"
        className={`nav-toggle${mobileMenuOpen ? " is-open" : ""}`}
        aria-controls="mobile-nav-menu"
        aria-expanded={mobileMenuOpen}
        aria-label={
          mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={`${item.sectionId}-${item.label}`}>
            <a href={getSectionHref(item.sectionId)} className={item.className}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div
        id="mobile-nav-menu"
        className={`mobile-nav${mobileMenuOpen ? " is-open" : ""}`}
      >
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={`mobile-${item.sectionId}-${item.label}`}>
              <a
                href={getSectionHref(item.sectionId)}
                className={`mobile-nav-link${item.className ? ` ${item.className}` : ""}`}
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
