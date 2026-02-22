import React from "react";

function InvestorComplaints() {
  const complaintsData = [
    {
      designation: "Customer Care",
      name: "Rakesh Das",
      address: "17, Subhash Nagar, Dum Dum Cantonment, Kolkata 700065",
      phone: "6290500733",
      email: "lnprcapital@gmail.com",
      hours: "9:00 AM - 5:00 PM",
    },
    {
      designation: "Head of Customer Care",
      name: "Rakesh Das",
      address: "17, Subhash Nagar, Dum Dum Cantonment, Kolkata 700065",
      phone: "6290500733",
      email: "lnprcapital@gmail.com",
      hours: "9:00 AM - 5:00 PM",
    },
    {
      designation: "Compliance Officer",
      name: "Rahul Kumar Das",
      address: "17, Subhash Nagar, Dum Dum Cantonment, Kolkata 700065",
      phone: "9874483593",
      email: "rahullokenath90@gmail.com",
      hours: "9:00 AM - 5:00 PM",
    },
    {
      designation: "CEO",
      name: "Rakesh Das",
      address: "17, Subhash Nagar, Dum Dum Cantonment, Kolkata 700065",
      phone: "6290500733",
      email: "lnprcapital@gmail.com",
      hours: "9:00 AM - 5:00 PM",
    },
    {
      designation: "Principal Officer",
      name: "Rakesh Das",
      address: "17, Subhash Nagar, Dum Dum Cantonment, Kolkata 700065",
      phone: "6290500733",
      email: "lnprcapital@gmail.com",
      hours: "9:00 AM - 5:00 PM",
    },
  ];
  const tableHeaders = [
    "Designation",
    "Contact Person Name",
    "Address",
    "Contact No.",
    "Email ID",
    "Working Hours",
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 leading-relaxed">
      <h1 className="text-3xl font-bold mb-8 text-center">
        GRIEVANCE REDRESSAL / ESCALATION MATRIX
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              {tableHeaders.map((header, index) => (
                <th key={index} className="border px-4 py-3 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {complaintsData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border text-base px-4 py-3">{item.designation}</td>
                <td className="border text-base px-4 py-3">{item.name}</td>
                <td className="border text-base px-4 py-3">{item.address}</td>
                <td className="border text-base px-4 py-3">{item.phone}</td>
                <td className="border text-base px-4 py-3">{item.email}</td>
                <td className="border text-base px-4 py-3">{item.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InvestorComplaints;
