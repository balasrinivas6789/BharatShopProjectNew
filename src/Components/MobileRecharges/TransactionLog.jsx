import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import TransactionTable from "./TransactionTable";

const TransactionLog = () => {
    const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  const handleApplyFilters = () => {
    console.log({ startDate, endDate, status });
  };

  return (
    <div className="w-[94.52%]  mt-[44px] mx-auto text-black ">
      <div className="searchContainer rounded-[4px] mb-[8px] p-[4px] w-[28.62%] h-[32px] flex flex-row items-center border border-black bg-white overflow-hidden">
        <IoSearch className="flex-shrink-0 mr-[4px] text-base" />
        <input
          type="search"
          className="border-none w-full outline-none focus:ring-0 font-sans text-base font-normal pl-[4px]"
          placeholder="Search here for all transactions"
        />
      </div>
      <div className="applyFiltersContainer py-[23px] mb-[21px] rounded-[4px] flex justify-evenly w-[100%] bg-[#14479F]">
        <div className="start w-[20.5%]">
        <label className="text-white font-sans text-base font-normal flex flex-col">Start</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="px-[6px] py-[2px] rounded-[4px] focus:outline-none w-[100%] "
          placeholder="Pick The date"
        />
        </div>
        <div className="end w-[20.5%]">
        <label className="text-white font-sans text-base font-normal flex flex-col">End</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="px-[6px] py-[2px] rounded-[4px] focus:outline-none w-[100%]"
          placeholder="Pick The date"
        />
        </div>
        <div className="State w-[20.5%] ">
        <label className="text-white font-sans text-base font-normal flex flex-col">State</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="focus:outline-none w-[100%] rounded-[4px] "
        >
          <option value="">Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        </div>
        <div className="ApplyFilters">
        <button
        onClick={handleApplyFilters}
        className=" text-white font-sans text-[24px] font-semibold px-[16px] py-[12px] rounded-[4px] bg-[#7D9DF9] "
      >
        Apply Filters
      </button>
        </div>
      </div>
    <TransactionTable/>
    </div>
  );
};

export default TransactionLog;
