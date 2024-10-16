// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout"; // Import MainLayout
import Login from "./Components/LoginPage/Login";
import AgentDashBoard from "./Screens/AgentDashBoard";
import CreateAgentAccount from "./Components/CreateAgentScreen/CreateAgentAccount";
import HotelsScreen from "./Components/Hotels/HotelsScreen/HotelsScreen";
import HotelBookingScreen from "./Components/Hotels/HotelsScreen/HotelBookingScreen";
import EcommerceMainPage from "./Components/Ecommerce/EcommerceMainPage/EcommerceMainPage";
import EcommerceWishlist from "./Components/Ecommerce/EcommerceWishlist/EcommerceWishlist";
import EcommerceCart from "./Components/Ecommerce/EcommerceCart/EcommerceCart";
import CheckOutPage from "./Components/Ecommerce/CheckOutPage/CheckOutPage";
import ElectronicsMainPage from "./Components/Ecommerce/EcommerceElectronicsPage/ElectronicsMainPage";
import FlightTicketDateWiseNew from "./Components/Flight/FlightTicketDateWiseNew";
import FlightBookingReview from "./Components/Flight/FlightBookingReview";
import TableList from "./Components/Flight/Table List/TableList";
import CarCards from "./Components/Cab/CabTrasactions";
import Gallery from "./Components/CharDhamYatra/Gallery";
import BusSearch from "./Components/Bus/BusSearch";
import EcommerceOrder from "./images/Eccomerce/EcommerceOrder/EcommerceOrder";
import RechargePage from "./Components/Recharges/RechargePage";
import MobileRecharge from "./Components/MobileRecharges/MobileRecharge";
import DthRechargePage from "./Components/DthRechargePage/DthRechargePage";
import DataCardRecharge from "./Components/DataCardRecharge/DataCardRecharge";
import TransactionLog from "./Components/MobileRecharges/TransactionLog";
import BillPayments from "./Components/BillPayments/BillPayments";
import RechargeTransactionsLog from "./Components/BillPayments/RechargeTransactionsLog";
import "./App.css";
import OtpScreen from "./Components/LoginPage/OtpScreen";
import OtpForCreateAgent from "./Components/LoginPage/otpForCreateAgent";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <div className="wholeBackground">
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
            ></MainLayout>
          }
        >
          <Route path="/" element={<AgentDashBoard />} />
          <Route path="/createAgent" element={<CreateAgentAccount />} />
          <Route path="/hotels" element={<HotelsScreen />} />
          <Route path="/hotelBooking" element={<HotelBookingScreen />} />
          <Route path="/EcommerceMainPage" element={<EcommerceMainPage />} />
          <Route
            path="/EcommerceMainPage/wishlist"
            element={<EcommerceWishlist />}
          />
          <Route
            path="/EcommerceMainPage/cartpage"
            element={<EcommerceCart />}
          />
          <Route
            path="/EcommerceMainPage/checkoutpage"
            element={<CheckOutPage />}
          />
          <Route
            path="/EcommerceMainPage/Electronics"
            element={<ElectronicsMainPage />}
          />
          <Route
            path="/FlightTicketDateWiseNew"
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
          <Route path="/Recharges" element={<RechargePage />} />
          <Route
            path="/rechargepage/mobilerecharge"
            element={<MobileRecharge />}
          />
          <Route
            path="/rechargepage/dthrecharge"
            element={<DthRechargePage />}
          />
          <Route
            path="/rechargepage/datacardrecharge"
            element={<DataCardRecharge />}
          />
          <Route path="/ViewCommission" element={<TransactionLog />} />
          <Route path="/billpayments" element={<BillPayments />} />
          <Route
            path="/RechargeTransactionsLog"
            element={<RechargeTransactionsLog />}
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/otpLogin" element={<OtpScreen />}></Route>
        <Route path="/register" element={<CreateAgentAccount />}></Route>
        <Route path="/otpForCreateAgent" element={<OtpForCreateAgent /> } ></Route>
      </Routes>
    </div>
  );
}

export default App;