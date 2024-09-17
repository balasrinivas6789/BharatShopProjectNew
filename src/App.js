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
import OnboardUser from "./OnboardUser";
import FlightTicketDateWiseNew from "./Components/Flight/FlightTicketDateWiseNew";
<<<<<<< HEAD
import CreateAgentAccount from "./Components/CreateAgentScreen/CreateAgentAccount";
import AepsFrom from "./Components/AepsKyc/AepsFrom";
import BusSearch from "./Components/Bus/BusSearch";

=======
import Gallery from "./Components/CharDhamYatra/Gallery";
import HotelCard from "./Components/Hotels/HotelCard";
 
>>>>>>> 6015601c82908a7b39b82361ccdf07b06238f913
function App() {
  const [sidebarToggle, setSidebarToggle] = useState(true);

  return (
    <div className="wholeBackground ">
      <Header
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />

      <div className="flex flex-row">
        <div
          className={`transition-all duration-1000  ${
            sidebarToggle
              ? "md:basis-1/6  md:overflow-hidden "
              : "md:basis-0 md:overflow-hidden"
          } `}
        >
          <div>{sidebarToggle ? <Sidebar /> : null}</div>
        </div>

        <div
          className={`transition-all duration-1000  ${
            sidebarToggle ? "md:basis-10/12 " : "md:basis-full px-[100px]"
          }`}
        >
          {/* <Services staticData={bankingServices} name="Banking Services" />
          <Services
            staticData={rechargeAndBillPaymentsList}
            name="Recharge And Bill Payments"
          />
          <Services staticData={utilityServices} name="Utility Services" />
           */}
          {/* <OnboardUser />  */}
          {/* <FlightBookingReview />
          <Footer />
          <FlightTicketDateWiseNew/> */}
{/* 
          <CreateAgentAccount /> */}
          <AepsFrom />
          {/* <BusSearch /> */}
        </div>
      </div>
    </div>
    // <div className="bg-[#17213c]">
    //   <Gallery />
    // </div>
    // <div>
    //   <HotelCard />
    // </div>
  );
}

export default App;