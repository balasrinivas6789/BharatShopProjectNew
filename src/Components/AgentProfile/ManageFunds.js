import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../Components/AgentProfile/ManageFunds.css";
const ManageFunds = ({ userDetails }) => {
  const [depositDate, setDepositDate] = useState(null);
  const [depositType, setDepositType] = useState("Cash Deposit");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const transactions = [
    {
      refNo: "CRA4795111",
      date: "01 Oct, 2024 - 12:20",
      payMode: "Online Banking / IMPS",
      amount: 110,
      status: "Pending",
      comment: "No",
    },
    {
      refNo: "CRA4795111",
      date: "01 Oct, 2024 - 12:20",
      payMode: "Online Banking / IMPS",
      amount: 110,
      status: "Pending",
      comment: "No",
    },
    {
      refNo: "CRA4795111",
      date: "01 Oct, 2024 - 12:20",
      payMode: "Online Banking / IMPS",
      amount: 110,
      status: "Pending",
      comment: "No",
    },
  ];

  return (
    <div className=" bg-[#18213B]">
      <div className="manageFundsCon bg-white p-[12px] rounded-[4px]">
        <h1 className="text-white bg-[#1749A0] w-[100%] font-sans text-[24px] font-semibold p-[10px] rounded-[4px]">
          Wallet Topup
        </h1>
        <div className="instantsCon flex justify-between my-5">
          <button className="bg-[#1E5FCF] p-[10px] font-sans text-[16px] font-semibold text-white rounded-[4px]">
            Instant Topup Via Virtual A/C
          </button>
          <button className="bg-[#1E5FCF] p-[10px] font-sans text-[16px] font-semibold text-white rounded-[4px]">
            Instant Topup Via QR
          </button>
          <button className="bg-[#1E5FCF] p-[10px] font-sans text-[16px] font-semibold text-white rounded-[4px]">
            Instant Topup Via YesBank QR
          </button>
        </div>
        <div className="formContainer">
          <form className="w-full  mx-auto p-4 bg-white border border-gray-300 rounded-md">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Agency Name
                </label>
                <input
                  type="text"
                  value={`${userDetails?.agent_first_name} ${userDetails?.agent_middle_name} ${userDetails?.agent_last_name}`}
                  readOnly
                  className="block w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Agent Code
                </label>
                <input
                  type="text"
                  value="BSA253295"
                  readOnly
                  className="block w-full bg-gray-200 border border-gray-300 rounded-md py-2 px-4"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Amount Of Deposit
                </label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  className="block w-full border border-gray-300 rounded-md py-2 px-4"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Transaction Reference # (If any)
                </label>
                <input
                  type="text"
                  placeholder="Enter reference"
                  className="block w-full border border-gray-300 rounded-md py-2 px-4"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Remarks
                </label>
                <input
                  type="text"
                  placeholder="Enter remarks"
                  className="block w-full border border-gray-300 rounded-md py-2 px-4"
                />
              </div>

              <div className="customDatePickerWidth">
                <label className="block  text-gray-700 font-semibold mb-2">
                  Date & Time of Deposit
                </label>
                <DatePicker
                  selected={depositDate}
                  onChange={(date) => setDepositDate(date)}
                  showTimeSelect
                  dateFormat="Pp"
                  placeholderText="Pick The date"
                  className="block w-full border  border-gray-300 rounded-md py-2 px-4"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Type Of Deposit
              </label>
              <div className="flex gap-4 h-auto w-full border border-gray-300 rounded-md py-2 px-4">
                {[
                  "Cheque",
                  "Cash Deposit",
                  "Online Banking / IMPS",
                  "Others",
                ].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <input
                      type="radio"
                      name="depositType"
                      value={type}
                      checked={depositType === type}
                      onChange={(e) => setDepositType(e.target.value)}
                      className="form-radio "
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Bank's Branch Name
                </label>
                <input
                  type="text"
                  placeholder="Enter branch name"
                  className="block w-full border border-gray-300 rounded-md py-2 px-4"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Beneficiary Bank Name
                </label>
                <select className="block h-auto w-full border border-gray-300 rounded-md py-[9.5px] px-4">
                  <option value="">Select</option>
                  <option value="bank1">Bank 1</option>
                  <option value="bank2">Bank 2</option>
                </select>
              </div>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className=" bg-[#1E5FCF] text-white py-2 px-6 rounded-md "
              >
                Request Fund
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="PendingRequests mt-[18px]  bg-white p-[12px] rounded-[4px]">
        <h1 className="text-white bg-[#1749A0] w-[100%] font-sans text-[24px] font-semibold p-[10px] rounded-[4px]">
          Pending Requests
        </h1>
        {transactions.map((transaction, index) => (
          <div className="pendingReqData p-5 flex flex-row justify-between space-y-4 items-center">
            <div className="one flex flex-col space-y-[10px]">
              <h1 className="font-sans text-sm font-normal">
                Ref. No.:
                <span className="bg-[#54cc0b] font-sans text-sm font-normal p-[2px] ml-[10px]">
                  {transaction.refNo}
                </span>
              </h1>
              <h1 className="font-sans text-sm font-normal">
                Date: {transaction.date}
              </h1>
            </div>
            <div className="two flex flex-col">
              <h1 className="font-sans text-sm font-normal">
                Pay Mode: {transaction.payMode}
              </h1>
              <h1 className="font-sans text-sm font-normal">
                Amount : {transaction.amount}
              </h1>
            </div>
            <div className="three flex flex-col">
              <h1 className="font-sans text-sm font-semibold">
                Status :{transaction.status}
              </h1>
              <h1 className="font-sans text-sm font-semibold">
                Comment :{transaction.comment}
              </h1>
            </div>
            <div className="four w-[10%]">
              <button className="bg-[#FF4545] w-[100%] p-[10px] font-sans text-base font-semibold text-white rounded-[4px]">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="SearchDepositLogs mt-[18px]  bg-white p-[12px] rounded-[4px]">
        <h1 className="text-white bg-[#1749A0] w-[100%] font-sans text-[24px] font-semibold p-[10px] rounded-[4px]">
          Search Deposit Logs
        </h1>
        <div className="startAndEnddates flex flex-row justify-between p-5">
          <div className="startDate flex flex-col w-[14%] space-y-1">
            <label
              htmlFor="start-date"
              className="font-sans text-base font-normal "
            >
              Start
            </label>
            <input
              type="date"
              id="start-date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-[100%] border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="endDate flex flex-col w-[14%] space-y-1">
            <label
              htmlFor="end-date"
              className="font-sans text-base font-normal"
            >
              End
            </label>
            <input
              type="date"
              id="end-date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-[100%] border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-[10%] searchBtn flex items-center justify-center">
            <button className="w-[100%] rounded-[4px] font-sans text-base font-semibold text-white p-[10px] bg-[#1749A0]">
              Search
            </button>
          </div>
        </div>
        {transactions.map((transaction, index) => (
          <div className="pendingReqData p-5 flex flex-row justify-between space-y-4 items-center">
            <div className="one flex flex-col space-y-[10px]">
              <h1 className="font-sans text-sm font-normal">
                Ref. No.:
                <span className="bg-[#54cc0b] p-[2px] ml-[10px] font-sans text-sm font-normal">
                  {transaction.refNo}
                </span>
              </h1>

              <h1 className="font-sans text-sm font-normal">
                Date: {transaction.date}
              </h1>
            </div>
            <div className="two flex flex-col">
              <h1 className="font-sans text-sm font-normal">
                Pay Mode: {transaction.payMode}
              </h1>
              <h1 className="font-sans text-sm font-normal">
                Amount : {transaction.amount}
              </h1>
            </div>

            <div className="three flex flex-col">
              <h1 className="font-sans text-sm font-semibold">
                Status :{transaction.status}
              </h1>
              <h1 className="font-sans text-sm font-semibold">
                Comment :{transaction.comment}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageFunds;
