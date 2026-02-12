import React from "react";

function InvestorCharter() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-base leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Investor Charter in respect of Research Analyst (RA)
      </h1>

      {/* Section A */}
      <p className="mb-4">
        <strong className="text-xl font-bold">
          A. Vision and Mission Statements for Investors
        </strong>
      </p>

      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Vision</strong>
          <br />
          Invest with knowledge & safety.
        </li>
        <li className="mt-3">
          <strong>Mission</strong>
          <br />
          Every investor should be able to invest in right investment products
          based on their needs, manage and monitor them to meet their goals,
          access reports and enjoy financial wellness.
        </li>
      </ul>

      {/* Section B */}
      <p className="mb-4">
        <strong className="text-xl font-bold">
          B. Details of Business Transacted by the Research Analyst with respect
          to Investors
        </strong>
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          To publish research report based on the research activities of the RA.
        </li>
        <li>To provide an independent unbiased view on securities.</li>
        <li>
          To offer unbiased recommendation, disclosing the financial interests
          in recommended securities.
        </li>
        <li>
          To provide research recommendation based on analysis of publicly
          available information and known observations.
        </li>
        <li>To conduct audit annually.</li>
        <li>
          To ensure that all advertisements adhere to the Advertisement Code for
          Research Analysts.
        </li>
        <li>
          To maintain records of interactions with all clients including
          prospective clients (prior to onboarding), where any conversation
          related to research services has taken place.
        </li>
      </ul>

      {/* Section C */}
      <p className="mb-4">
        <strong className="text-xl font-bold">
          C. Details of Services Provided to Investors (No Indicative Timelines)
        </strong>
      </p>

      <ul className="list-disc list-inside space-y-3 mb-6">
        <li>
          <strong>Onboarding of Clients</strong>
          <ul className="list-disc list-inside pl-8 mt-2 space-y-1">
            <li>Sharing of terms and conditions of research services.</li>
            <li>Completing KYC of fee paying clients.</li>
          </ul>
        </li>

        <li>
          <strong>Disclosure to Clients</strong>
          <ul className="list-disc list-inside pl-8 mt-2 space-y-1">
            <li>
              To disclose material information including business activity,
              disciplinary history, terms and conditions, associates, risks and
              conflicts of interest.
            </li>
            <li>
              To disclose the extent of use of Artificial Intelligence tools in
              providing research services.
            </li>
            <li>
              To disclose material conflict of interest while distributing
              third-party research reports or provide web address directing to
              relevant disclosures.
            </li>
            <li>
              To disclose any conflict of interest of providing research
              services with other activities of the research analyst.
            </li>
          </ul>
        </li>

        <li>
          To distribute research reports and recommendations to clients without
          discrimination.
        </li>
        <li>
          To maintain confidentiality until research report is made public.
        </li>
        <li>
          To respect data privacy rights and protect confidential information.
        </li>
        <li>To disclose timelines for services and ensure adherence.</li>
        <li>
          To provide clear guidance and caution notice for complex and high-risk
          products.
        </li>
        <li>To treat all clients with honesty and integrity.</li>
        <li>
          To ensure confidentiality unless required under legal obligations or
          with client consent.
        </li>
      </ul>

      {/* Section D */}
      <p className="mb-4">
        <strong className="text-xl font-bold">
          D. Details of Grievance Redressal Mechanism and How to Access It
        </strong>
      </p>

      <div className="mb-6 space-y-4">
        <p>
          <strong>1. Mode of filing complaint with Research Analyst</strong>
          <br />
          An investor may approach the concerned Research Analyst who shall
          strive to redress the grievance immediately, but not later than 21
          days from receipt of the grievance.
        </p>

        <p>
          <strong>2. Mode of filing complaint on SCORES or with RAASB</strong>
        </p>

        <ul className="list-disc list-inside pl-6 space-y-2">
          <li>
            <strong>SCORES 2.0:</strong> A web-based centralized grievance
            redressal system of SEBI.
            <br />
            <span className="text-blue-700 underline">
              https://scores.sebi.gov.in
            </span>
          </li>
          <li>Email to designated email ID of RAASB.</li>
        </ul>

        <p><strong>Two-level review mechanism:</strong></p>

        <ul className="list-disc list-inside pl-6">
          <li>First review by designated body (RAASB).</li>
          <li>Second review by SEBI.</li>
        </ul>

        <p>
          If not satisfied, investor may file complaint on SMARTODR platform for
          online conciliation or arbitration.
        </p>

        <p>
          <strong>Physical complaints may be sent to:</strong>
          <br />
          Office of Investor Assistance and Education, Securities and Exchange
          Board of India, SEBI Bhavan, Plot No. C4-A, ‘G’ Block, Bandra-Kurla
          Complex, Bandra (E), Mumbai - 400 051.
        </p>
      </div>

      {/* Section E */}
      <p className="mb-4">
        <strong className="text-xl font-bold">E. Rights of Investors</strong>
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Right to Privacy and Confidentiality</li>
        <li>Right to Transparent Practices</li>
        <li>Right to Fair and Equitable Treatment</li>
        <li>Right to Adequate Information</li>
        <li>Right to Initial and Continuing Disclosure</li>
        <li>Right to Fair & True Advertisement</li>
        <li>
          Right to Awareness about Service Parameters and Turnaround Times
        </li>
        <li>Right to be informed of timelines for each service</li>
        <li>Right to be Heard and Satisfactory Grievance Redressal</li>
        <li>Right to Timely Redressal</li>
        <li>
          Right to Exit from Financial Product or Service as per agreed terms
        </li>
        <li>
          Right to Clear Guidance for Complex and High-Risk Financial Products
        </li>
        <li>Additional Rights to Vulnerable Consumers</li>
        <li>Right to Provide Feedback</li>
        <li>Right against coercive, unfair and one-sided clauses</li>
      </ul>

      {/* Section F */}
      <p className="mb-4">
        <strong className="text-xl font-bold">
          F. Expectations from Investors (Responsibilities)
        </strong>
      </p>

      <p className="font-bold mb-2">Do’s</p>
      <ol className="list-decimal list-inside mb-6 space-y-2">
        <li>Always deal with SEBI registered Research Analyst.</li>
        <li>Ensure Research Analyst has valid registration certificate.</li>
        <li>
          Check SEBI registration number. Refer:
          <span className="text-blue-700 underline">
            https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14
          </span>
        </li>
        <li>Pay attention to disclosures in research reports.</li>
        <li>Make payments through banking channels only.</li>
        <li>Check recommendations before buying/selling securities.</li>
        <li>Ask relevant questions and clear doubts.</li>
        <li>Seek clarification for complex/high-risk products.</li>
        <li>Be aware of right to discontinue services.</li>
        <li>Be aware of right to provide feedback.</li>
        <li>Ensure no clause contravenes regulatory provisions.</li>
        <li>Inform SEBI about assured/guaranteed return offers.</li>
      </ol>

      <p className="font-bold mb-2">Don’ts</p>
      <ol className="list-decimal list-inside space-y-2">
        <li>Do not provide funds for investment to Research Analyst.</li>
        <li>Don’t fall prey to advertisements or market rumors.</li>
        <li>Do not get attracted to limited period discounts or incentives.</li>
        <li>
          Do not share login credentials of trading, demat or bank accounts.
        </li>
      </ol>
    </div>
  );
}

export default InvestorCharter;
