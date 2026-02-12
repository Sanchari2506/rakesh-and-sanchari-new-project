import React from "react";

function AuditReportOne() {
  const complaintsData = [
    {
      id: 1,
      source: "Directly from Investors",
      pendingLastMonth: 0,
      received: 0,
      resolved: 0,
      totalPending: 0,
      pendingMoreThan3Months: 0,
      avgResolutionTime: 0,
    },
    {
      id: 2,
      source: "SEBI (SCORES)",
      pendingLastMonth: 0,
      received: 0,
      resolved: 0,
      totalPending: 0,
      pendingMoreThan3Months: 0,
      avgResolutionTime: 0,
    },
    {
      id: 3,
      source: "Other Sources (if any)",
      pendingLastMonth: 0,
      received: 0,
      resolved: 0,
      totalPending: 0,
      pendingMoreThan3Months: 0,
      avgResolutionTime: 0,
    },
  ];
  const grandTotal = {
    pendingLastMonth: 0,
    received: 0,
    resolved: 0,
    totalPending: 0,
    pendingMoreThan3Months: 0,
    avgResolutionTime: 0,
  };
  return (
    <div className="audit-report-one">
      <h3 className="text-lg font-semibold mb-4">
        Formats for investors complaints data to be disclosed monthly by RAs on
        their website/mobile application:
      </h3>
      <h3 className="text-lg font-semibold mb-4">
        Data for the month ending January, 2026
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Sr. No.</th>
              <th className="border px-4 py-2 text-left">Received from</th>
              <th className="border px-4 py-2 text-center">
                Pending at the end of last month
              </th>
              <th className="border px-4 py-2 text-center">Received</th>
              <th className="border px-4 py-2 text-center">Resolved*</th>
              <th className="border px-4 py-2 text-center">Total Pending #</th>
              <th className="border px-4 py-2 text-center">
                Pending complaints &gt; 3 months
              </th>
              <th className="border px-4 py-2 text-center">
                Average Resolution time^ (in days)
              </th>
            </tr>
          </thead>

          <tbody>
            {complaintsData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2 text-center">{row.id}</td>
                <td className="border px-4 py-2 font-medium">{row.source}</td>
                <td className="border px-4 py-2 text-center">
                  {row.pendingLastMonth}
                </td>
                <td className="border px-4 py-2 text-center">{row.received}</td>
                <td className="border px-4 py-2 text-center">{row.resolved}</td>
                <td className="border px-4 py-2 text-center">
                  {row.totalPending}
                </td>
                <td className="border px-4 py-2 text-center">
                  {row.pendingMoreThan3Months}
                </td>
                <td className="border px-4 py-2 text-center">
                  {row.avgResolutionTime}
                </td>
              </tr>
            ))}

            {/* Grand Total Row */}
            <tr className="bg-gray-200 font-semibold">
              <td className="border px-4 py-2" colSpan={2}>
                Grand Total
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotal.pendingLastMonth}
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotal.received}
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotal.resolved}
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotal.totalPending}
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotal.pendingMoreThan3Months}
              </td>
              <td className="border px-4 py-2 text-center">
                {grandTotal.avgResolutionTime}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="special_notes">
        <p className="mt-4 text-sm">
          * Inclusive of complaints of previous months resolved in the current
          month.
          <br />
          # Inclusive of complaints pending as on the last day of the month.
          <br />
          ^ Average Resolution time is the sum total of time taken to
          resolve each complaint, in days, in the current month divided by total
          number of complaints resolved in the current month..
        </p>
      </div>
    </div>
  );
}

export default AuditReportOne;
