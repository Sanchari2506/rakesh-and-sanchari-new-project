import React from "react";

function FinancialCompass() {
  return (
    <div id="FinancialCompass" className="FinancialCompassSection bg-[#f8faff]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="text-center section-header">
          <h2 className="mb-6 exp-text text-3xl md:text-5xl font-bold md:font-extrabold text-[#ffb224] text-center">
            Our Financial Compass
          </h2>
          <h3 className="mb-6 text-xl md:text-2xl font-bold md:font-extrabold text-[#0a3758] text-center">
            At LNPR Capital, we don't just invest in financial markets; we
            invest in enduring principles
          </h3>
        </div>
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* box one  */}
            <div className="box-card-item p-4 rounded-xl bg-[#d2e2f96b]">
              <div class="category-logo">
                <img src="/images/trading-svg.svg" alt="Expertise" />
              </div>
              <h3 className="text-lg text-[#0a3758] font-semibold">
                Sustainable Growth
              </h3>
              <p className="text-left text-sm mt-2">
                LNPR invests in companies prioritizing sustainability and
                responsible practices. Seeking growth and commitment to ESG
                factors, our approach integrates sustainability for attractive
                returns, making a positive impact on society.
              </p>
            </div>
            {/* box two  */}
            <div className="box-card-item p-4 rounded-xl bg-[#d2e2f96b]">
              <div class="category-logo">
                <img src="/images/thumbs-up.svg" alt="Expertise" />
              </div>
              <h3 className="text-lg text-[#0a3758] font-semibold">
                Competitive Advantage
              </h3>

              <p className="text-left text-sm mt-2">
                Recognising the significance of a competitive edge, our team
                targets businesses with unique qualities—strong brands,
                innovative technologies, or superior positioning. We aim for
                long-term value and consistent returns for clients.
              </p>
            </div>
            {/* box three */}
            <div className="box-card-item p-4 rounded-xl bg-[#d2e2f96b]">
              <div class="category-logo">
                <img src="/images/eye-icon.svg" alt="Expertise" />
              </div>
              <h3 className="text-lg text-[#0a3758] font-semibold">
                Long Term Focus
              </h3>
              <p className="text-left text-sm mt-2">
                At LNPR Capital, we prioritize enduring success through
                meticulous planning and consistent effort. Our long-term focus
                tailors strategies to withstand time's test, building lasting
                partnerships aligned with your interests for generations of
                financial stability
              </p>
            </div>
            {/* box four  */}
            <div className="box-card-item p-4 rounded-xl bg-[#d2e2f96b]">
              <div class="category-logo">
                <img src="/images/zoom-icon.svg" alt="Expertise" />
              </div>
              <h3 className="text-lg text-[#0a3758] font-semibold">
                Deep Fundamental Research
              </h3>
              
              <p className="text-left text-sm mt-2">
                We prioritise knowledge and informed decisions. Our experienced
                analysts conduct deep research to identify attractive investment
                opportunities for superior returns and lasting success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialCompass;
