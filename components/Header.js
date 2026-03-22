import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
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
      <Navbar />
    </header>
  );
}
