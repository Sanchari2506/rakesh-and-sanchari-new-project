import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <div className="topbar">
        <span>
          SEBI Registered Research Analyst · Reg No:{" "}
          <strong>INH000012953</strong> · BSE Enlistment: <strong>5843</strong>
        </span>
        <span>
          📞 <a href="tel:+916290500733">+91 6290500733</a> &nbsp;|&nbsp; ✉{" "}
          <a href="mailto:info@lnprcapital.com">info@lnprcapital.com</a>
        </span>
      </div>
      <Navbar />
    </header>
  );
}
