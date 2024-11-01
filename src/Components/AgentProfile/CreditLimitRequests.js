import React, { useState } from "react";

const CreditLimitRequests = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100; 

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const currentItems = Array.from({ length: totalItems }).slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleExport = () => {
    const headers = [
      "No.",
      "Request Date",
      "Approve Date",
      "Transaction Ref. Id.",
      "Fund Amount",
      "Fund Mode",
      "Status",
      "Remark",
      "Updated By",
      "Admin Comment",
    ];
    const rows = currentItems.map((_, index) => [
      (currentPage - 1) * itemsPerPage + index + 1,
      "Request Date",
      "Approve Date",
      "Transaction Ref. Id.",
      "Fund Amount",
      "Fund Mode",
      "Status",
      "Remark",
      "Updated By",
      "Admin Comment",
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "credit_limit_requests.csv");
    document.body.appendChild(link); 
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <div className="mx-auto">
        <div className="flex justify-between mb-4">
          <div>
            <label className="text-white">Show on pages: </label>
            <select className="ml-2 p-2 h-auto rounded bg-gray-800 text-white">
              <option>Select</option>
            </select>
          </div>
          <button
            onClick={handleExport}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
          >
            Export
          </button>
        </div>

        <div className=" rounded-lg shadow-md overflow-hidden">
          <div className="p-4 bg-[#1749A0] mb-[4px] text-white font-sans text-2xl font-semibold">
            Credit Limit Requests Log Export to Excel
          </div>
          <table className="min-w-full text-left bg-white">
            <thead >
              <tr className="bg-gray-100 ">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Request Date</th>
                <th className="py-2 px-4">Approve Date</th>
                <th className="py-2 px-4">Transaction Ref. Id.</th>
                <th className="py-2 px-4">Fund Amount</th>
                <th className="py-2 px-4">Fund Mode</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Remark</th>
                <th className="py-2 px-4">Updated By</th>
                <th className="py-2 px-4">Admin Comment</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((_, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 px-4">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="py-7 px-4">Request Date</td>
                  <td className="py-7 px-4">Approve Date</td>
                  <td className="py-7 px-4">Transaction Ref. Id.</td>
                  <td className="py-7 px-4">Fund Amount</td>
                  <td className="py-7 px-4">Fund Mode</td>
                  <td className="py-7 px-4">Status</td>
                  <td className="py-7 px-4">Remark</td>
                  <td className="py-7 px-4">Updated By</td>
                  <td className="py-7 px-4">Admin Comment</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-white mx-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
          >
            Next 
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditLimitRequests;