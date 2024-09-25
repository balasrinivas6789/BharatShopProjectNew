import React from "react";
import bharatshoplogo from "../../images/Frame 387.png";
import { IoMdSearch } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";

import { FaRegBell } from "react-icons/fa";

const Header = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between p-3 pt-1 pb-1 bg-white shadow-md">
      <div className="flex items-center  space-x-2">
        <button
          className="p-2 text-black-600"
          onClick={() => {
            setSidebarToggle(!sidebarToggle);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[36px] w-[36px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="flex w-[204px] h-[102px] pt-[5px] pr-[38px] pb-[6px] pl-[8px] justify-center items-center flex-shrink-0">
          <img
            src={bharatshoplogo}
            alt="bharatshoplogo"
            className="w-[128px] h-[81px] flex-shrink-0"
          />
        </div>
{/* 
        <div className="flex-1 max-w-md mx-4 relative  ">
          <IoMdSearch className="absolute top-1/2 left-1 transform -translate-y-1/2 text-gray-600 w-[24px] h-[24px]" />
          <input
            type="text"
            placeholder="      Search"
            className="flex w-[316px] pt-[4px] pb-[4px] pl-[2px] pr-[2px] items-center gap-[17px] border border-solid border-black"
          />
        </div> */}
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <div className="w-[36px] h-[36px] flex bg-[#18479e]  justify-center items-center text-white rounded-full">
          <FaRegCalendarCheck size={26} />
        </div>
        <div className="w-[36px] h-[36px] flex  bg-[#18479e]  justify-center items-center text-white  rounded-full">
          <LuMail size={26} />
        </div>
        <div className="w-[36px] h-[36px] flex bg-[#18479e] justify-center text-white items-center rounded-full">
          <FaRegBell size={26} />
        </div>
      </div>

      <div className="w-[36px] h-[36px] flex bg-[#18479e] justify-center text-white items-center rounded-full">
        <LuUser2 size={26} />
      </div>
    </header>
  );
};

export default Header;