import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";
import {
  rechargeAndBillPaymentsList,
  bankingServices,
  utilityServices,
} from "../src/data";
import FlightTicketDateWiseNew from "./Components/Flight/FlightTicketDateWiseNew";
import AgentDashBoard from "./Screens/AgentDashBoard";
import ElectronicsMainPage from "./Components/Ecommerce/EcommerceElectronicsPage/ElectronicsMainPage";
import EcommerceMainPage from "./Components/Ecommerce/EcommerceMainPage/EcommerceMainPage";
import ElectronicsProducts from "./Components/Ecommerce/EcommerceElectronicsPage/ElectronicsProducts";
import EcommerceWishlist from "./Components/Ecommerce/EcommerceWishlist/EcommerceWishlist";
import CreateAgentAccount from "./Components/CreateAgentScreen/CreateAgentAccount";
import AepsFromInputs from "./Components/AepsKyc/AepsFromInputs";
import AepsFrom from "./Components/AepsKyc/AepsFrom";
import BusSearch from "./Components/Bus/BusSearch";
import TableList from "./Components/Flight/Table List/TableList";
import CarCards from "./Components/Cab/CabTrasactions";
import Gallery from "./Components/CharDhamYatra/Gallery";
import EcommerceOrder from "./images/Eccomerce/EcommerceOrder/EcommerceOrder";
import EcommerceCart from "./Components/Ecommerce/EcommerceCart/EcommerceCart";
import FlightBookingReview from "./Components/Flight/FlightBookingReview";
import EcommerceScreen from "./Components/Ecommerce/EcommerceScreen/EcommerceScreen";
import Login from "./Components/LoginPage/Login";
import HotelCard from "./Components/Hotels/HotelCard";
import HotelsScreen from "./Components/Hotels/HotelsScreen/HotelsScreen";
import HotelBookingScreen from "./Components/Hotels/HotelsScreen/HotelBookingScreen";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <div className="wholeBackground">
      <Header
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />

      <div className="flex flex-row">
      <div
          className={`transition-all  duration-1000 flex-col ${
            sidebarToggle
              ? "lg:w-[16.666667%] overflow-hidden lg:overflow-auto scrollbar-hidden"
              : "lg:w-0 overflow-hidden scrollbar-hidden"
          } `}
        >

          <div>{sidebarToggle ? <Sidebar /> : null}</div>
        </div>

        <div
          className={`transition-all  duration-1000 flex-col ${
            sidebarToggle ? "lg:w-[83.333333%]" : "lg:w-[100%] "
          }`}
        >

          {/* <OnboardUser />  */}

          <Routes>
            <Route path="/createAgent" element={<CreateAgentAccount/>} ></Route>
            <Route path="/" element={<AgentDashBoard />}></Route>

            <Route path="/hotels" element={<HotelsScreen/>}>

            </Route>
            <Route path="/hotelBooking" element={<HotelBookingScreen/>} ></Route>

            <Route path="/EcommerceMainPage" element={<EcommerceScreen />}>
              <Route
                path="/EcommerceMainPage" element={<EcommerceMainPage />}
              ></Route>

              <Route
                path="/EcommerceMainPage/wishlist" element={<EcommerceWishlist />}
              ></Route>
              <Route path="/EcommerceMainPage/cartpage" element={<EcommerceCart />}></Route>

              <Route
              path="/EcommerceMainPage/Electronics"
              element={<ElectronicsMainPage />}
            ></Route>
             
            </Route>



            <Route
              path="/Electronics"
              element={<ElectronicsMainPage />}
            ></Route>

            <Route
              path="/FlightTicketDateWiseNew"
              element={<FlightTicketDateWiseNew />}
            ></Route>
            <Route
              path="/FlightBookingReview"
              element={<FlightBookingReview />}
            ></Route>
            <Route path="/FlightLogs" element={<TableList />}></Route>
            <Route path="/cabbooking" element={<CarCards />}></Route>
            <Route path="/tourpackages" element={<Gallery />}></Route>
            <Route path="/busesbooking" element={<BusSearch />}></Route>
            <Route path="/orders" element={<EcommerceOrder />}></Route>
            <Route path="/cart" element={<EcommerceCart />}></Route>
          </Routes>
        </div>
      </div>
    </div>
    // <div>
    //   <CreateAgentAccount/>

    // </div>
  );
}

export default App;
