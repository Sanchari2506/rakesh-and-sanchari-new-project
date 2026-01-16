import React from "react";

function Services() {
  return (
    <div id="ServicesSection">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="text-center section-header">
          <h2 className="mb-6 exp-text text-3xl md:text-5xl font-bold md:font-extrabold text-[#ffb224] text-center">
            Our Services
          </h2>
        </div>
        <div className="section-content w-full bg-[#0a3758] text-white rounded-3xl p-6 md:p-10">
          <div className="md:flex md:justify-center md:items-start md:gap-8">
            {/* Service One  */}
            <div className="box-card-item sr-border-right p-4 w-full h-auto md:w-1/2 md:h-[500px] flex flex-col justify-between">
              <div className="service-details">
                <h3 className="text-2xl font-semibold mb-2 text-center">
                  Small & Micro Cap Product
                </h3>
                <p className="text-base mb-8">
                  Here we search for Small and Micro Cap companies that have the
                  potential to generate multifold returns.
                </p>
                <ul className="list-disc md:list-inside md:space-y-2">
                  <li>Market Cap between 100 Cr – 5000 Cr.</li>
                  <li>12-15 Research ideas will be shared annually.</li>
                  <li>Comprehensive Research Reports.</li>
                  <li>Holding duration 1 to 2 years.</li>
                  <li>Exit call will be provided.</li>
                  <li>
                    Quarterly Performance Statement report will be provided.
                  </li>
                </ul>
              </div>

              <a
                href="https://lnprcapital.akamai.net.in/quick-pay/10/2"
                target="_blank"
              >
                <div
                  id="SmallAndMicroCap"
                  className="subscription-button text-center bg-white text-black px-4 rounded-md mt-5 md:mt-0 mb-5 md:mb-0"
                >
                  ₹ 14,999/12 Months
                </div>
              </a>
            </div>
            {/* Service Two  */}
            <div className="box-card-item sr-border-left p-4 w-full h-auto md:w-1/2 md:h-[500px] flex flex-col justify-between">
              <div className="service-details">
                <h3 className="text-2xl font-semibold mb-2 text-center">
                  LNPR SME MASTER CLUB
                </h3>
                <p className="text-base mb-8">
                  Here we will recommend well researched SME Stocks that have
                  the potential to generate multifold returns.
                </p>
                <ul className="list-disc md:list-inside md:space-y-2">
                  <li>Market Cap between 100 Cr - 2000 Cr.</li>
                  <li>20-25 Research ideas will be shared annually.</li>
                  <li>Comprehensive Research Reports.</li>
                  <li>Holding duration 1 year.</li>
                  <li>Exit call will be provided.</li>
                  <li>
                    Quarterly Performance Statement report will be provided.
                  </li>
                </ul>
              </div>

              <a
                href="https://lnprcapital.akamai.net.in/quick-pay/10/1"
                target="_blank"
              >
                <div
                  id="QAntInvesting"
                  className="subscription-button text-center bg-white text-black px-4 rounded-md mt-5 md:mt-0"
                >
                  ₹ 14,999/12 Months
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
