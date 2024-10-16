// MainLayout.js
import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = ({ sidebarToggle, setSidebarToggle, children }) => {
  return (
    <div className="wholeBackground">
      <Header
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div className="flex flex-row">
        <div
          className={`transition-all duration-1000 flex-col ${
            sidebarToggle
              ? "w-[18.88888888888889%] overflow-hidden lg:overflow-auto scrollbar-hidden"
              : "w-0 overflow-hidden scrollbar-hidden"
          }`}
        >
          {sidebarToggle && <Sidebar />}
        </div>

        <div
          className={`transition-all duration-1000 flex-col relative ${
            sidebarToggle ? "w-[81.11111111111111%]" : "w-[100%] px-[100px]"
          }`}
        >
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
