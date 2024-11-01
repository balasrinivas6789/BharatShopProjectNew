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
import ViewProduct from "./Components/Ecommerce/ViewProduct/ViewProduct";
import BookCar from "./Components/Cab/BookCar";
import "./App.css";
import CabTrasactions from "./Components/Cab/CabTrasactions";
import Transactionlog from "./Components/Cab/Transactionlog";
import FlightMarkup from "./Components/Flight/FlightMarkup/FlightMarkup";
import FlightCancellation from "./Components/Flight/FightCancellation";
import DoubleSearchFlight from "./Components/Flight/FlightDoubleSearch/DoubleSearchFlight";
import DoubleFlightBooking from "./Components/Flight/FlightDoubleReview/DoubleFlightBooking";
import MultiCity from "./Components/Flight/MultiCity/MultiCity";
import ViewBusSeat from "./Components/Bus/ViewBusSeat/ViewBusSeat";
import MainLayout from "./Screens/MainLayout";
import Login from "./Screens/Login";
import Profile from "./Components/AgentProfile/Profile";
import CreatePlans from "./Components/Plans/CreatePlans";
import MakeBookingsCourier from "./Components/DomesticCourier/Courier";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<AgentDashBoard />} />
          <Route path="/EcommerceMainPage" element={<EcommerceMainPage />} />
          <Route path="/Electronics" element={<ElectronicsMainPage />} />
          <Route path="/wishlist" element={<EcommerceWishlist />} />
          <Route
            path="/FlightTicketDateWiseNew"
            element={<FlightTicketDateWiseNew />}
          />
          <Route
            path="/FlightTicketDateWiseNew/:triptype/:travelclass/:fromvalue/:fromlabel/:tovalue/:tolabel/:selecteddate/:selectedreturndate/:totaltravellers/:adult/:child/:infant"
            element={<FlightTicketDateWiseNew />}
          />
          <Route
            path="/FlightBookingReview"
            element={<FlightBookingReview />}
          />
          <Route path="/FlightLogs" element={<TableList />} />
          <Route path="/cabbooking" element={<CarCards />} />
          <Route path="/tourpackages" element={<Gallery />} />
          <Route path="/busesbooking" element={<BusSearch />} />
          <Route path="/orders" element={<EcommerceOrder />} />
          <Route path="/cart" element={<EcommerceCart />} />
          <Route path="/viewproduct" element={<ViewProduct />} />
          <Route path="/bookcab" element={<BookCar />} />
          <Route path="/cabtransaction" element={<CabTrasactions />} />
          <Route path="/transactionlog" element={<Transactionlog />} />
          <Route path="/flightmarkup" element={<FlightMarkup />} />
          <Route path="/flightcancellation" element={<FlightCancellation />} />
          <Route
            path="/doubleSearchFlight"
            element={<DoubleSearchFlight />}
          ></Route>
          <Route
            path="/doubleFlightBooking"
            element={<DoubleFlightBooking />}
          ></Route>
          <Route path="/multicity" element={<MultiCity />}></Route>
          <Route path="/viewbusseat" element={<ViewBusSeat />}></Route>
          <Route path="/profile/:option" element={<Profile />}></Route>
          <Route path="/makebookings-domestic-courier" element={<MakeBookingsCourier />} ></Route>
        </Route>
        <Route path="/createplan" element={<CreatePlans />} ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;