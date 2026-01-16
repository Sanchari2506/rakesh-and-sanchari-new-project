import { useRef, useState } from "react";

export default function Faqs() {
  const faqs = [
    {
      question: "What is LNPR Capital?",
      answer:
        "LNPR Capital is a leading financial services company offering expert investment advice and portfolio management to help you achieve your financial goals.",
    },
    {
      question: "How are you different from other research firms?",
      answer:
        "Unlike others we believe in having “Skin in the Game”. We invest in many of the stocks we cover and publish research on.",
    },
    {
      question: "What kind of support do you provide to clients?",
      answer:
        "Members can get queries resolved by calling us or emailing info@lnprcapital.com",
    },
    {
      question: "What return should I expect from LNPR?",
      answer:
        "We look for long-term appreciation; returns depend on market conditions and company performance. We do not guarantee returns.",
    },
    {
      question: "What is the Refund policy?",
      answer: "As a policy, we do not provide refunds.",
    },
    {
      question: "Do you provide price targets for recommended stocks?",
      answer:
        "We focus on fundamental research and do not provide specific price targets.",
    },
    {
      question: "How often do you provide updates on recommended stocks?",
      answer:
        "We provide periodic updates as company events and results warrant; typically quarterly.",
    },
    {
      question: "What are the Payment Options?",
      answer: "We accept UPI, Net Banking, Credit Card and Debit Card.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const panels = useRef([]);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map(({ question, answer }, index) => (
          <div
            key={index}
            className="border rounded-md overflow-hidden bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 flex items-center justify-between focus:outline-none"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-[#0a3758]">{question}</span>
              <span
                className={`transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            <div
              ref={(el) => (panels.current[index] = el)}
              className="overflow-hidden transition-[max-height] duration-300"
              style={{
                maxHeight:
                  openIndex === index && panels.current[index]
                    ? `${panels.current[index].scrollHeight}px`
                    : "0px",
              }}
            >
              <div className="px-4 py-3 text-gray-700">{answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
