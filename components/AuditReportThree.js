import React from "react";

function AuditReportThree() {
  const yearlyComplaintsData = [
    {
      id: 1,
      year: "2024-2025",
      carriedForward: 0,
      received: 0,
      resolved: 0,
      pending: 0,
    },
    {
      id: 2,
      year: "2023-2024",
      carriedForward: "NA",
      received: "NA",
      resolved: "NA",
      pending: "NA",
    },
    {
      id: 3,
      year: "2022-2023",
      carriedForward: "NA",
      received: "NA",
      resolved: "NA",
      pending: "NA",
    },
  ];
  const grandTotal = {
    carriedForward: "",
    received: "",
    resolved: "",
    pending: "",
  };
  return (
    <div className="audit-report-three">
      {/* <h3 className="text-lg font-semibold mb-4">
        Trend of monthly disposal of complaints
      </h3> */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Sr. No</th>
              <th className="border px-4 py-2 text-left">Year</th>
              <th className="border px-4 py-2 text-center">
                Carried forwarded from previous year
              </th>
              <th className="border px-4 py-2 text-center">Received</th>
              <th className="border px-4 py-2 text-center">Resolved*</th>
              <th className="border px-4 py-2 text-center">Pending#</th>
            </tr>
          </thead>

          <tbody>
            {yearlyComplaintsData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-center">{row.id}</td>
                <td className="border px-4 py-2">{row.year}</td>
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
          * Inclusive of complaints of previous years resolved in the current
          year.
          <br /># Inclusive of complaints pending as on the last day of the
          year.
        </p>
      </div>
    </div>
  );
}

export default AuditReportThree;
