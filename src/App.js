import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { rechargeAndBillPaymentsList } from "../src/data";
import { bankingServices } from "../src/data";
import { utilityServices } from "../src/data";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Services from "./Services/Services";
import FlightBookingReview from "./Components/FlightBookingReview";

import FlightTicketDateWiseNew from "./Components/Flight/FlightTicketDateWiseNew";
import Gallery from "./Components/CharDhamYatra/Gallery";
import HotelCard from "./Components/Hotels/HotelCard";
import AepsFromInputs from "./Components/AepsKyc/AepsFromInputs";
import AepsFrom from "./Components/AepsKyc/AepsFrom";
import EcommerceMainPage from "./Components/Ecommerce/EcommerceMainPage/EcommerceMainPage";
import ElectronicsMainPage from "./Components/Ecommerce/EcommerceElectronicsPage/ElectronicsMainPage";
 
function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    // <div className="wholeBackground ">
    //    <Header
    //     sidebarToggle={sidebarToggle}
    //     setSidebarToggle={setSidebarToggle}
    //   />

    //   <div className="flex flex-row">
    //     <div
    //       className={`transition-all duration-1000  ${
    //         sidebarToggle ? "md:basis-1/6  md:overflow-hidden " : "md:basis-0 md:overflow-hidden "
    //       } `}
    //     >
    //       <div>{sidebarToggle ? <Sidebar /> : null}</div>
    //     </div>

    //     <div
    //       className={`transition-all duration-1000  ${
    //         sidebarToggle ? "md:basis-10/12 " : "md:basis-full"
    //       }`}
    //     >
    //       <Services staticData={bankingServices} name="Banking Services" />
    //       <Services
    //         staticData={rechargeAndBillPaymentsList}
    //         name="Recharge And Bill Payments"
    //       />
    //       <Services staticData={utilityServices} name="Utility Services" />
          

    //       {/* <FlightBookingReview /> */}
    //       <Footer />
    //       <FlightTicketDateWiseNew/>
    //     </div>
    //   </div>
     
    // </div>
    // <div className="bg-[#17213c]">
    //   <Gallery />
    // </div>
    // <div>
    //   <HotelCard />
    // </div>
    // <div>
    //   <AepsFrom/>
    // </div>
    // <div>
    //   <EcommerceMainPage />
    // </div>
    <div>
      <ElectronicsMainPage/>
    </div>
  );
}

export default App;


