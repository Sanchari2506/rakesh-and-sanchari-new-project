import React from "react";

function InvestorCharter() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Investor Charter in respect of Research Analyst (RA)
      </h1>
      <p className="mb-4 text-base">
        <strong className="font-bold text-xl">
          A. Vision and Mission Statements for investors:
        </strong>{" "}
        <br />
        <br />
        <strong>Vision:</strong> <br />
        Invest with knowledge & safety. <br />
        <br />
        <strong>Mission:</strong> <br />
        Every investor should be able to invest in right investment products
        based on their needs, manage and monitor them to meet their goals,
        access reports and enjoy financial wellness. <br />
      </p>
      <p className="mb-4 text-base">
        <strong className="font-bold text-xl">
          B. Key Principles for Investors:
        </strong>
      </p>
      <ul className="list-disc list-inside">
        <li>
          To publish research report based on the research activities of the RA.
        </li>
        <li>To provide an independent unbiased view on securities.</li>
        <li>
          To offer unbiased recommendation, disclosing the financial interests
          in recommended securities.
        </li>
        <li>
          To provide research recommendation, based on analysis of publicly
          available information and known observations.
        </li>
        <li>To conduct audit annually.</li>
      </ul>
      <p className="mb-4 text-base">
        <strong className="font-bold text-xl">
          C. Details of services provided to investors (No Indicative Timelines)
        </strong>
      </p>
      <ul className="list-disc list-inside">
        <li>Onboarding of Clients</li>
        <li>Disclosure to Clients</li>
        <ul className="list-disc list-inside pl-10">
          <li>
            To distribute research reports and recommendations to the clients
            without discrimination.
          </li>
          <li>
            To maintain confidentiality w.r.t publication of the research report
            until made available in the public domain.
          </li>
        </ul>
      </ul>
      <p className="mb-4 text-base">
        <strong className="font-bold text-xl">
          D. Details of grievance redressal mechanism and how to access it
        </strong>
      </p>
      <p className="mb-4 text-base">
        In case of any grievance / complaint, an investor should approach the
        concerned research analyst and shall ensure that the grievance is
        resolved within 30 days.
        <br />
        If the investor’s complaint is not redressed satisfactorily, one may
        lodge a complaint with SEBI on SEBI’s SCORES portal which is a
        centralized web-based complaints redressal system. SEBI takes up the
        complaints registered via SCORES with the concerned intermediary for
        timely redressal. SCORES facilitates tracking the status of the
        complaint.
        <br />
        With regard to physical complaints, investors may send their complaints
        to: Office of Investor Assistance and Education, Securities and Exchange
        Board of India, SEBI Bhavan. Plot No. C4-A, ‘G’ Block, Bandra-Kurla
        Complex, Bandra (E), Mumbai - 400 051.
      </p>
      <p className="mb-4 text-base">
        <strong className="font-bold text-xl">
          E. Expectations from the investors (Responsibilities of investors)
        </strong>
        <br />
        <strong className="font-bold text-xl">Do's</strong>
      </p>
      <div className="mb-4 text-base">
        <ol className="list-decimal list-inside">
          <li>Always deal with SEBI registered Research Analyst.</li>
          <li>
            Ensure that the Research Analyst has a valid registration
            certificate.
          </li>
          <li>
            Please refer to the list of all SEBI registered Research Analysts
            which is available on SEBI website in the following link:
            <span className="text-blue-700 underline">
               https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14
            </span>
          </li>
          <li>
            Always pay attention towards disclosures made in the research
            reports before investing.
          </li>
          <li>
            Pay your Research Analyst through banking channels only and maintain
            duly signed receipts mentioning the details of your payments.
          </li>
          <li>
            Before buying securities or applying in public offer, check for the
            research recommendation provided by your research Analyst.
          </li>
          <li>
            Ask all relevant questions and clear your doubts with your Research
            Analyst before acting on the recommendation.
          </li>
          <li>
            Inform SEBI about Research Analyst offering assured or guaranteed
            returns.
          </li>
        </ol>
      </div>
      <p className="mb-4 text-base">
        <strong className="font-bold text-xl">Don'ts</strong>
      </p>
      <div className="mb-4 text-base">
        <ol className="list-decimal list-inside">
          <li>Always deal with SEBI registered Research Analyst.</li>
          <li>Do not provide funds for investment to the Research Analyst.</li>
          <li>Don’t fall prey to luring advertisements or market rumours.</li>
          <li>
            Do not get attracted to limited period discount or other incentive,
            gifts, etc. offered by Research Analyst.
          </li>
          <li>
            Do not share login credentials and password of your trading and
            demat accounts with the Research Analyst.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default InvestorCharter;
