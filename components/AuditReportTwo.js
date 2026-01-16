import React from "react";

function AuditReportTwo() {
  const monthlyComplaintsData = [
    {
      id: 1,
      month: "April, 2025",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 2,
      month: "May, 2025",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 3,
      month: "June, 2025",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 4,
      month: "July, 2025",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 5,
      month: "August, 2025",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 6,
      month: "September, 2025",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 7,
      month: "October, 2025",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 8,
      month: "November, 2025",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 9,
      month: "December, 2025",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 10,
      month: "January, 2026",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 11,
      month: "February, 2026",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 12,
      month: "March, 2026",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
  ];
  const grandTotal = {
    carriedForward: 0,
    received: 0,
    resolved: 0,
    pending: 0,
  };
  return (
    <div className="audit-report-two">
      
      {/* <h3 className="text-lg font-semibold mb-4">
        Trend of monthly disposal of complaints
      </h3> */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Sr. No.</th>
              <th className="border px-4 py-2 text-left">Month</th>
              <th className="border px-4 py-2 text-center">
                Carried forward from previous month
              </th>
              <th className="border px-4 py-2 text-center">Received</th>
              <th className="border px-4 py-2 text-center">Resolved*</th>
              <th className="border px-4 py-2 text-center">Pending#</th>
            </tr>
          </thead>

          <tbody>
            {monthlyComplaintsData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-center">{row.id}</td>
                <td className="border px-4 py-2">{row.month}</td>
                <td className="border px-4 py-2 text-center">
                  {row.carriedForward}
                </td>
                <td className="border px-4 py-2 text-center">{row.received}</td>
                <td className="border px-4 py-2 text-center">{row.resolved}</td>
                <td className="border px-4 py-2 text-center">{row.pending}</td>
              </tr>
            ))}

            {/* Grand Total Row */}
            <tr className="bg-gray-200 font-semibold">
              <td className="border px-4 py-2" colSpan={2}>
                Grand Total
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotal.carriedForward}
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotal.received}
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotal.resolved}
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotal.pending}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="special_notes">
        <p className="mt-4 text-sm">
          * Inclusive of complaints of previous months resolved in the current month.
          <br />
          # Inclusive of complaints pending as on the last day of the month.
        </p>
      </div>
    </div>
  );
}

export default AuditReportTwo;
