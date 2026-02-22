import React from "react";
import ItemCard from "./ItemCard";

function Services() {
  let items = [
    {
      image: "/images/small-cap.jpeg",
      title: "Small & Micro Cap Product",
      description: `<p class="text-base mb-8">
                  We recommend well-researched SME stocks with strong potential for multifold returns.
                </p>
                <ul class="list-disc md:list-inside md:space-y-2">
                  <li><strong>Market Cap:</strong> ₹100 Cr – ₹5,000 Cr</li>
                  <li><strong>Ideas:</strong> 12–15 high-conviction research ideas annually</li>
                  <li><strong>Research:</strong> Comprehensive, in-depth reports</li>
                  <li><strong>Holding Period:</strong> 1–2 years</li>
                  <li><strong>Active Tracking:</strong> Clear exit calls provided.</li>
                </ul>
                <p class="text-base mb-8">Focused. Research-driven. High-growth potential.</p>`,

      price: "INR 14,999 (1 year subscription)",
      link: "https://lnprcapital.akamai.net.in/quick-pay/10/2",
    },
    {
      image: "/images/master-club.jpeg",
      title: "LNPR SME MASTER CLUB",
      description: `<p class="text-base mb-8">
                  We recommend well-researched SME stocks with strong potential for multifold returns.
                </p>
                <ul class="list-disc md:list-inside md:space-y-2">
                  <li><strong>Market Cap:</strong> ₹100 Cr – ₹2,000 Cr</li>
                  <li><strong>Ideas:</strong> 20–25 high-conviction research ideas annually</li>
                  <li><strong>Research:</strong> Detailed, comprehensive reports</li>
                  <li><strong>Holding Period:</strong> ~1 year</li>
                  <li><strong>Support:</strong> Timely exit calls</li>
                </ul>
                <p class="text-base mb-8">Disciplined. Research-backed. Growth-focused.</p>`,

      price: "INR 14,999 (1 year subscription)",
      link: "https://lnprcapital.akamai.net.in/quick-pay/10/1",
    },
  ];
  return (
    <div id="ServicesSection" className="bg-[#d2e2f96b]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="text-center section-header">
          <h2 className="mb-6 exp-text text-3xl md:text-5xl font-bold md:font-extrabold text-[#ffb224] text-center">
            Our Services
          </h2>
        </div>
        <div className="section-content w-full">
          <div className="md:flex md:justify-center md:items-start md:gap-8">
            {items.map((item, index) => (
              <div key={index} className="mb-10 md:mb-0">
                <ItemCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  link={item.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
