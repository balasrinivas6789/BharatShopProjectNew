import React from 'react';
import BharatLogo from '../images/BharatLogo/Frame387.png'
import { IoMdSearch } from "react-icons/io";



const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 pt-1 pb-1 bg-white shadow-md">
      {/* Left: Logo and Toggle Button */}
      <div className="flex items-center  space-x-2">
        <button className="p-2 text-black-600">
          {/* Mobile Menu Button */}
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
        <div className="flex items-center flex-shrink-0 flex w-[204px] h-[102px] pt-[5px] pr-[38px] pb-[6px] pl-[8px] justify-center items-center flex-shrink-0">
          <img src={BharatLogo} alt="bharatshoplogo" className="w-[128px] h-[91px] flex-shrink-0" />
        </div>
        {/* Center: Search Bar */}
      <div className="flex-1 max-w-md mx-4 relative  ">
      
      <IoMdSearch className=" absolute top-1/2 left-1 transform -translate-y-1/2 text-gray-600 w-[24px] h-[24px]" />
      <input
        type="text"
        placeholder="       Search"
        className="flex w-[316px] pt-[4px] pb-[4px] pl-[2px] pr-[2px] items-center gap-[17px] border border-solid border-black"
        
      />
      </div>
      
      </div>
      {/* Right: Icons */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="w-[36px] h-[36px] bg-gray-300 rounded-full"></div>
        <div className="w-[36px] h-[36px] bg-gray-300 rounded-full"></div>
        <div className="w-[36px] h-[36px] bg-gray-300 rounded-full"></div>
       
        
      </div>

      

      
      <div className="w-[36px] h-[36px] bg-gray-300 rounded-full"></div>
    </header>
  );
};

export default Header;