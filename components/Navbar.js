import { useState } from "react";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiHome,
  FiInfo,
  FiPhone,
  FiChevronDown,
} from "react-icons/fi";
import { FaQuestion } from "react-icons/fa6";
import { SiAmazonsimpleemailservice } from "react-icons/si";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const menus = [
    { label: "Home", href: "/", icon: FiHome },
    { label: "FAQs", href: "/faqs", icon: FaQuestion },
    { label: "About", href: "/about", icon: FiInfo },
    {
      label: "Services",
      href: "/#ServicesSection",
      icon: SiAmazonsimpleemailservice,
      // children: [
      //   {
      //     label: "Finance Consultation",
      //     href: "/services/finance-consultation",
      //   },
      //   { label: "Finance Advisor", href: "/services/finance-advisor" },
      // ],
    },
    { label: "Contact", href: "/contact", icon: FiPhone },
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Section (Logo) */}
        <Link href="/" className="text-xl font-semibold text-[#0a3758]">
          <img
            src="/images/logo.svg"
            alt="LNPR Capital Logo"
            className="h-auto w-auto"
            width={"auto"}
            height={"auto"}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-gray-800">
          {menus.map((m) => {
            const Icon = m.icon;
            const hasChildren = Array.isArray(m.children);

            return (
              <li
                key={m.href}
                className={`relative group ${
                  m.label === "Home"
                    ? "text-[#0a3758] font-medium border-b-2 border-[#0a3758] pb-1"
                    : "hover:text-[#0a3758]"
                }`}
              >
                {hasChildren ? (
                  <>
                    <button className="flex items-center gap-1 hover:text-[#0a3758]">
                      {Icon && <Icon size={18} />}
                      {m.label}
                      <FiChevronDown size={14} />
                    </button>

                    {/* Dropdown */}
                    <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md p-2 min-w-[150px] z-50">
                      {m.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="block px-3 py-2 text-sm hover:bg-gray-100"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={m.href} className="flex items-center gap-1">
                    {Icon && <Icon size={18} />}
                    {m.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Login Button (Desktop Only) */}
        {/* <div className="hidden md:block">
          <button className="bg-[#0a3758] text-white px-6 py-2 rounded-md hover:bg-[#0a3758] transition">
            Login
          </button>
        </div> */}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow-inner">
          {menus.map((m) => {
            const Icon = m.icon;
            const hasChildren = Array.isArray(m.children);

            return (
              <div key={m.href}>
                {hasChildren ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-2 border-b text-left"
                      onClick={() =>
                        setOpenSub(openSub === m.label ? null : m.label)
                      }
                    >
                      <span className="flex items-center gap-2">
                        <Icon size={16} />
                        {m.label}
                      </span>
                      <FiChevronDown
                        className={`transition-transform ${
                          openSub === m.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {openSub === m.label && (
                      <ul className="ml-6 mt-2 space-y-2">
                        {m.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={() => setOpen(false)}
                              className="block py-1 text-gray-700"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={m.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 py-2 border-b"
                  >
                    <Icon size={16} />
                    {m.label}
                  </Link>
                )}
              </div>
            );
          })}

          {/* Mobile Login Button */}
          {/* <button className="w-full bg-[#0a3758] text-white px-6 py-2 rounded-md mt-4">
            Login
          </button> */}
        </div>
      )}
    </nav>
  );
}
