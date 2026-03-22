import React from "react";

const businessItems = [
  "To publish research report based on the research activities of the RA",
  "To provide an independent unbiased view on securities.",
  "To offer unbiased recommendation, disclosing the financial interests in recommended securities.",
  "To provide research recommendation, based on analysis of publicly available information and known observations.",
  "To conduct audit annually",
  "To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.",
  "To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.",
];

const serviceItems = [
  {
    title: "Onboarding of Clients",
    children: [
      "Sharing of terms and conditions of research services",
      "Completing KYC of fee paying clients",
    ],
  },
  {
    title: "Disclosure to Clients:",
    children: [
      "To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any",
      "To disclose the extent of use of Artificial Intelligence tools in providing research services",
      "To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures",
      "To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.",
    ],
  },
  "To distribute research reports and recommendations to the clients without discrimination.",
  "To maintain confidentiality w.r.t publication of the research report until made available in the public domain.",
  "To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information",
  "To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines",
  "To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services",
  "To treat all clients with honesty and integrity",
  "To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information",
];

const rightsItems = [
  "Right to Privacy and Confidentiality",
  "Right to Transparent Practices",
  "Right to fair and Equitable Treatment",
  "Right to Adequate Information",
  {
    title: "Right to Initial and Continuing Disclosure",
    children: [
      "Right to receive information about all the statutory and regulatory disclosures",
    ],
  },
  "Right to Fair & True Advertisement",
  "Right to Awareness about Service Parameters and Turnaround Times",
  "Right to be informed of the timelines for each service",
  "Right to be Heard and Satisfactory Grievance Redressal",
  "Right to have timely redressal",
  "Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst",
  "Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services",
  {
    title: "Additional Rights to vulnerable consumers",
    children: [
      "Right to get access to services in a suitable manner even if differently abled",
    ],
  },
  "Right to provide feedback on the financial products and services used",
  "Right against coercive, unfair, and one-sided clauses in financial agreements",
];

const dosItems = [
  {
    label: "i.",
    text: "Always deal with SEBI registered Research Analyst.",
  },
  {
    label: "ii.",
    text: "Ensure that the Research Analyst has a valid registration certificate.",
  },
  {
    label: "iii.",
    text: "Check for SEBI registration number. Please refer to the list of all SEBI registered Research Analyst which is available on SEBI website in the following link:",
    link: "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14",
  },
  {
    label: "iv.",
    text: "Always pay attention towards disclosures made in the research reports before investing.",
  },
  {
    label: "v.",
    text: "Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)",
  },
  {
    label: "vi.",
    text: "Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst.",
  },
  {
    label: "vii.",
    text: "Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation.",
  },
  {
    label: "viii.",
    text: "Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.",
  },
  {
    label: "ix.",
    text: "Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.",
  },
  {
    label: "x.",
    text: "Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.",
  },
  {
    label: "xi.",
    text: "Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions.",
  },
  {
    label: "xii.",
    text: "Inform SEBI about Research Analyst offering assured or guaranteed returns",
  },
];

const dontsItems = [
  {
    label: "i.",
    text: "Do not provide funds for investment to the Research Analyst.",
  },
  {
    label: "ii.",
    text: "Don't fall prey to luring advertisements or market rumors.",
  },
  {
    label: "iii.",
    text: "Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.",
  },
  {
    label: "iv.",
    text: "Do not share login credential and password of your trading, demat or bank accounts with the Research Analyst.",
  },
];

function InvestorCharter() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-base leading-relaxed">
      <h1 className="mb-3 text-center text-3xl font-bold">
        Investor Charter in respect of Research Analyst (RA)
      </h1>
      <p className="mb-8 text-center text-xl font-semibold">
        Investor Charter
      </p>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">
          A. Vision and Mission Statements for investors
        </h2>
        <ul className="list-disc space-y-4 pl-6">
          <li>
            <strong>Vision</strong>
            <p className="mt-2">Invest with knowledge &amp; safety.</p>
          </li>
          <li>
            <strong>Mission</strong>
            <p className="mt-2">
              Every investor should be able to invest in right investment
              products based on their needs, manage and monitor them to meet
              their goals, access reports and enjoy financial wellness.
            </p>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">
          B. Details of business transacted by the Research Analyst with respect
          to the investors
        </h2>
        <ul className="list-disc space-y-3 pl-6">
          {businessItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">
          C. Details of services provided to investors (No Indicative
          Timelines)
        </h2>
        <ul className="list-disc space-y-4 pl-6">
          {serviceItems.map((item) =>
            typeof item === "string" ? (
              <li key={item}>{item}</li>
            ) : (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <ul className="mt-3 list-[square] space-y-2 pl-6">
                  {item.children.map((child) => (
                    <li key={child}>{child}</li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">
          D. Details of grievance redressal mechanism and how to access it
        </h2>
        <div className="space-y-5">
          <div>
            <p className="font-semibold">
              1. Investor can lodge complaint/grievance against Research
              Analyst in the following ways:
            </p>
            <div className="mt-3 space-y-4 pl-6">
              <div>
                <p className="font-semibold">
                  Mode of filing the complaint with research analyst
                </p>
                <p className="mt-2">
                  In case of any grievance / complaint, an investor may
                  approach the concerned Research Analyst who shall strive to
                  redress the grievance immediately, but not later than 21 days
                  of the receipt of the grievance.
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  Mode of filing the complaint on SCORES or with Research
                  Analyst Administration and Supervisory Body (RAASB)
                </p>
                <div className="mt-2 space-y-4 pl-6">
                  <div>
                    <p>
                      i. SCORES 2.0 (a web based centralized grievance
                      redressal system of SEBI for facilitating effective
                      grievance redressal in time-bound manner)
                    </p>
                    <a
                      href="https://scores.sebi.gov.in"
                      className="mt-2 inline-block text-blue-600 underline"
                    >
                      https://scores.sebi.gov.in
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Two level review for complaint/grievance against Research
                      Analyst:
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-6">
                      <li>First review done by designated body (RAASB)</li>
                      <li>Second review done by SEBI</li>
                    </ul>
                  </div>
                  <p>ii. Email to designated email ID of RAASB</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold">
              2. If the Investor is not satisfied with the resolution provided
              by the Market Participants, then the Investor has the option to
              file the complaint/ grievance on SMARTODR platform for its
              resolution through online conciliation or arbitration.
            </p>
          </div>

          <div>
            <p className="font-semibold">
              With regard to physical complaints, investors may send their
              complaints to:
            </p>
            <p className="mt-2">
              Office of Investor Assistance and Education, Securities and
              Exchange Board of India, SEBI Bhavan, Plot No. C4-A, &apos;G&apos;
              Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold">E. Rights of investors</h2>
        <ul className="list-disc space-y-3 pl-6">
          {rightsItems.map((item) =>
            typeof item === "string" ? (
              <li key={item}>{item}</li>
            ) : (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <ul className="mt-2 list-[square] space-y-2 pl-6">
                  {item.children.map((child) => (
                    <li key={child}>{child}</li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold">
          F. Expectations from the investors (Responsibilities of investors)
        </h2>

        <div className="mb-8">
          <p className="mb-3 text-lg font-semibold">Do&apos;s</p>
          <ol className="space-y-3 pl-6">
            {dosItems.map((item) => (
              <li key={item.label}>
                <span className="mr-2 font-semibold">{item.label}</span>
                <span>{item.text}</span>
                {item.link ? (
                  <>
                    {" "}
                    <a
                      href={item.link}
                      className="text-blue-600 underline"
                    >
                      {item.link}
                    </a>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <div>
          <p className="mb-3 text-lg font-semibold">Don&apos;ts</p>
          <ol className="space-y-3 pl-6">
            {dontsItems.map((item) => (
              <li key={item.label}>
                <span className="mr-2 font-semibold">{item.label}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

export default InvestorCharter;
