import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";

import {
  rechargeAndBillPaymentsList,
  bankingServices,
  utilityServices,
} from "../data";
import FlightTicketDateWiseNew from "../Components/Flight/FlightTicketDateWiseNew";
import AgentDashBoard from "./AgentDashBoard";
import ElectronicsMainPage from "../Components/Ecommerce/EcommerceElectronicsPage/ElectronicsMainPage";
import EcommerceMainPage from "../Components/Ecommerce/EcommerceMainPage/EcommerceMainPage";
import ElectronicsProducts from "../Components/Ecommerce/EcommerceElectronicsPage/ElectronicsProducts";
import EcommerceWishlist from "../Components/Ecommerce/EcommerceWishlist/EcommerceWishlist";
import CreateAgentAccount from "../Components/CreateAgentScreen/CreateAgentAccount";
import AepsFromInputs from "../Components/AepsKyc/AepsFromInputs";
import AepsFrom from "../Components/AepsKyc/AepsFrom";
import BusSearch from "../Components/Bus/BusSearch";
import TableList from "../Components/Flight/Table List/TableList";
import CarCards from "../Components/Cab/CabTrasactions";
import Gallery from "../Components/CharDhamYatra/Gallery";
import EcommerceOrder from "../images/Eccomerce/EcommerceOrder/EcommerceOrder";
import EcommerceCart from "../Components/Ecommerce/EcommerceCart/EcommerceCart";
import FlightBookingReview from "../Components/Flight/FlightBookingReview";
import ViewProduct from "../Components/Ecommerce/ViewProduct/ViewProduct";
import BookCar from "../Components/Cab/BookCar";

import CabTrasactions from "../Components/Cab/CabTrasactions";
import Transactionlog from "../Components/Cab/Transactionlog";
import FlightMarkup from "../Components/Flight/FlightMarkup/FlightMarkup";
import FlightCancellation from "../Components/Flight/FightCancellation";
import DoubleSearchFlight from "../Components/Flight/FlightDoubleSearch/DoubleSearchFlight";
import DoubleFlightBooking from "../Components/Flight/FlightDoubleReview/DoubleFlightBooking";
import MultiCity from "../Components/Flight/MultiCity/MultiCity";
import ViewBusSeat from "../Components/Bus/ViewBusSeat/ViewBusSeat";

const MainLayout = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <div className="wholeBackground">
      <Header
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />

      <div className="flex flex-row gap-0">
        <div
          className={`transition-all   duration-1000 flex-col ${
            sidebarToggle
              ? "w-[18.88888888888889%] overflow-hidden lg:overflow-auto scrollbar-hidden"
              : "w-0 overflow-hidden scrollbar-hidden"
          } `}
        >
          {sidebarToggle && (
            <div className="z-40">
              <Sidebar />
            </div>
          )}
        </div>

        <div
          className={`transition-all  duration-1000 flex-col ${
            sidebarToggle ? "w-[81.11111111111111%]" : "w-[100%] px-[100px]"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;