import React, { useRef, useState } from "react";
import AuditReportOne from "./AuditReportOne";
import AuditReportTwo from "./AuditReportTwo";
import AuditReportThree from "./AuditReportThree";

function ComplaintStatus() {
  const complaints = [
    {
      id: "C-1001",
      subject: "Investors Complaints Data",
      status: <AuditReportOne />,
    },
    {
      id: "C-1002",
      subject: "Trend Of Monthly Disposal Of Complaints",
      status: <AuditReportTwo />,
    },
    {
      id: "C-1003",
      subject: "Trend Of Annual Disposal Of Complaints",
      status: <AuditReportThree />,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const panels = useRef([]);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="mb-6 exp-text text-3xl md:text-5xl font-bold md:font-extrabold text-[#ffb224] text-center">
        Complaint Status
      </h2>

      <div className="space-y-4">
        {complaints.map((c, idx) => (
          <div
            key={c.id}
            className="border rounded-md overflow-hidden bg-white"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-4 py-3 flex items-center justify-between focus:outline-none"
              aria-expanded={openIndex === idx}
            >
              <span className="font-semibold text-[#0a3758]">
                {c.subject}{" "}
              </span>
              <span
                className={`transform transition-transform duration-200 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            <div
              ref={(el) => (panels.current[idx] = el)}
              className="overflow-hidden transition-[max-height] duration-300"
              style={{
                maxHeight:
                  openIndex === idx && panels.current[idx]
                    ? `${panels.current[idx].scrollHeight}px`
                    : "0px",
              }}
            >
              <div className="px-4 py-3 text-gray-700">{c.status}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="special_information p-4 rounded-xl bg-[#d2e2f96b] mt-8">
        <p>
          Contact us directly at <a href="mailto:info@lnprcapital.com" className="text-blue-700 underline">info@lnprcapital.com</a> for assistance
          with any queries, complaints or grievances. We will ensure your
          grievance is resolved within 30 days. If you feel that your grievance
          is not redressed satisfactorily, you may lodge a complaint with SEBI
          through the Scores website or the <a href="https://scores.sebi.gov.in/scores-home">SEBI Scores app</a> for 
          <a href="https://play.google.com/store/apps/details?id=com.sebi">Android</a> or
          <a href="https://apps.apple.com/us/app/sebiscores/id6478849917">iOS</a>.Here's a link to the <a href="https://smartodr.in/login">SMART ODR Portal</a>.
        </p>
      </div>
    </div>
  );
}

export default ComplaintStatus;
