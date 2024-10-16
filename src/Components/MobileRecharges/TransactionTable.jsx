import React, { useState } from "react";

const TransactionTable = ({ filterStatus }) => {
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const transactions = [
    {
      date: "08-02-2024 20:44:18",
      transId: "id:1707405261862508",
      details: "Service Type: Recharge\nNumber: 130213015832\nOperator: Airtel",
      amount: 1079,
      status: "FAILED & REFUNDED",
      debit: 0,
    },
    {
      date: "08-02-2024 20:44:18",
      transId: "id:1707405261862508",
      details: "Service Type: Recharge\nNumber: 130213015832\nOperator: Airtel",
      amount: 1079,
      status: "SUCCESS",
      debit: 0,
    },
    {
      date: "08-02-2024 20:44:18",
      transId: "id:1707405261862508",
      details: "Service Type: Recharge\nNumber: 130213015832\nOperator: Airtel",
      amount: 1079,
      status: "FAILED & REFUNDED",
      debit: 0,
    },
    {
      date: "08-02-2024 20:44:18",
      transId: "id:1707405261862508",
      details: "Service Type: Recharge\nNumber: 130213015832\nOperator: Airtel",
      amount: 1079,
      status: "SUCCESS",
      debit: 0,
    },
    {
      date: "08-02-2024 20:44:18",
      transId: "id:1707405261862508",
      details: "Service Type: Recharge\nNumber: 130213015832\nOperator: Airtel",
      amount: 1079,
      status: "SUCCESS",
      debit: 0,
    },
    {
      date: "08-02-2024 20:44:18",
      transId: "id:1707405261862508",
      details: "Service Type: Recharge\nNumber: 130213015832\nOperator: Airtel",
      amount: 1079,
      status: "FAILED & REFUNDED",
      debit: 0,
    },
    {
      date: "08-02-2024 20:44:18",
      transId: "id:1707405261862508",
      details: "Service Type: Recharge\nNumber: 130213015832\nOperator: Airtel",
      amount: 1079,
      status: "SUCCESS",
      debit: 0,
    },
    {
      date: "08-02-2024 20:44:18",
      transId: "id:1707405261862508",
      details: "Service Type: Recharge\nNumber: 130213015832\nOperator: Airtel",
      amount: 1079,
      status: "FAILED & REFUNDED",
      debit: 0,
    },
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    if (filterStatus === "all" || filterStatus === "") return true; // Show all transactions
    return transaction.status.includes(filterStatus);
  });

  // Calculate total pages for filtered transactions
  const totalPages = Math.ceil(filteredTransactions.length / entriesPerPage);

  // Get the current entries for the current page
  const currentEntries = filteredTransactions.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  // Export function
  const exportTransactions = () => {
    const header = ["Date", "Trans Id", "Details", "Amount", "Status"];
    const rows = currentEntries.map((transaction) => [
      transaction.date,
      transaction.transId,
      transaction.details.replace(/\n/g, " "), // Replace new lines with space for CSV format
      transaction.amount,
      transaction.status,
    ]);

    // Convert to CSV
    const csvContent = [header, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "transactions.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle invoice download
  const downloadInvoice = (transaction) => {
    // Here you can implement the logic to generate the invoice
    // For this example, we'll just alert the transaction ID
    alert(`Invoice downloaded for Transaction ID: ${transaction.transId}`);
  };

  return (
    <div className="p-5 rounded-[5px] mb-[79px] bg-gray-100">
      <div className="mb-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm mr-2">Show entries:</span>
          <select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
        <div>
          <button
            className="bg-[#FF6D00] text-white py-2 px-4 rounded-md"
            onClick={exportTransactions}
          >
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left font-sans text-sm font-semibold ">
                Date
              </th>
              <th className="py-3 px-6 text-left font-sans text-sm font-semibold ">
                Trans Id
              </th>
              <th className="py-3 px-6 text-left font-sans text-sm font-semibold ">
                Details
              </th>
              <th className="py-3 px-6 text-left font-sans text-sm font-semibold ">
                Amount
              </th>
              <th className="py-3 px-6 text-left font-sans text-sm font-semibold ">
                Status
              </th>
              <th className="py-3 px-6 text-left font-sans text-sm font-semibold ">
                Complaints
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {currentEntries.map((transaction, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 font-sans text-sm font-normal">
                  {transaction.date}
                </td>
                <td className="py-3 px-6 font-sans text-sm font-normal">
                  {transaction.transId}
                </td>
                <td className="py-3 px-6 font-sans text-sm font-normal">
                  <div>
                    {transaction.details.split("\n").map((detail, i) => (
                      <div key={i}>{detail}</div>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-6 font-sans text-sm font-normal">
                  {transaction.amount}
                </td>
                <td
                  className={`py-3 px-6 font-sans text-sm font-normal${
                    transaction.status.includes("FAILED")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {transaction.status}
                  {transaction.status === "SUCCESS" && (
                    <button
                      className="ml-2 text-white font-sans text-sm font-semibold px-[10px] py-[4px] rounded-[4px] bg-[#5C913B] hover:underline"
                      onClick={() => downloadInvoice(transaction)}
                    >
                      Invoice
                    </button>
                  )}
                </td>
                <td className="py-3 px-6 font-sans text-sm font-normal">
                  <button className="text-blue-500 hover:underline">
                    Comment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <div className="flex items-center">
          <button
            className="py-2 px-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-2">{currentPage}</span>
          <button
            className="py-2 px-4 bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-300"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
