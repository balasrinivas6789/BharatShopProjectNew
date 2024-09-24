// import logo from "./logo.svg";
// import "./App.css";
// import Header from "./Components/Header/Header";
// import { rechargeAndBillPaymentsList } from "../src/data";
// import { bankingServices } from "../src/data";
// import { utilityServices } from "../src/data";
// import Sidebar from "./Components/Sidebar/Sidebar";
// import { useState } from "react";
// import Footer from "./Components/Footer/Footer";
// import Services from "./Services/Services";
// import FlightBookingReview from "./Components/FlightBookingReview";

// import FlightTicketDateWiseNew from "./Components/Flight/FlightTicketDateWiseNew";
// import Gallery from "./Components/CharDhamYatra/Gallery";
// import HotelCard from "./Components/Hotels/HotelCard";
// import AepsFromInputs from "./Components/AepsKyc/AepsFromInputs";
// import AepsFrom from "./Components/AepsKyc/AepsFrom";
// import EcommerceMainPage from "./Components/Ecommerce/EcommerceMainPage/EcommerceMainPage";
// import ElectronicsMainPage from "./Components/Ecommerce/EcommerceElectronicsPage/ElectronicsMainPage";
 
// function App() {
//   const [sidebarToggle, setSidebarToggle] = useState(true);

//   return (
//     // <div className="wholeBackground ">
//     //    <Header
//     //     sidebarToggle={sidebarToggle}
//     //     setSidebarToggle={setSidebarToggle}
//     //   />

//     //   <div className="flex flex-row">
//     //     <div
//     //       className={`transition-all duration-1000  ${
//     //         sidebarToggle ? "md:basis-1/6  md:overflow-hidden " : "md:basis-0 md:overflow-hidden "
//     //       } `}
//     //     >
//     //       <div>{sidebarToggle ? <Sidebar /> : null}</div>
//     //     </div>

//     //     <div
//     //       className={`transition-all duration-1000  ${
//     //         sidebarToggle ? "md:basis-10/12 " : "md:basis-full"
//     //       }`}
//     //     >
//     //       <Services staticData={bankingServices} name="Banking Services" />
//     //       <Services
//     //         staticData={rechargeAndBillPaymentsList}
//     //         name="Recharge And Bill Payments"
//     //       />
//     //       <Services staticData={utilityServices} name="Utility Services" />
          

//     //       {/* <FlightBookingReview /> */}
//     //       <Footer />
//     //       <FlightTicketDateWiseNew/>
//     //     </div>
//     //   </div>
     
//     // </div>
//     // <div className="bg-[#17213c]">
//     //   <Gallery />
//     // </div>
//     // <div>
//     //   <HotelCard />
//     // </div>
//     // <div>
//     //   <AepsFrom/>
//     // </div>
//     // <div>
//     //   <EcommerceMainPage />
//     // </div>
//     <div>
//       <EcommerceMainPage />
//       <ElectronicsMainPage/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css"
// import EcommerceMainPage from "./Components/Ecommerce/EcommerceMainPage/EcommerceMainPage";
// import ElectronicsMainPage from "./Components/Ecommerce/EcommerceElectronicsPage/ElectronicsMainPage";
import { rechargeAndBillPaymentsList, bankingServices, utilityServices } from "../src/data";
import FlightTicketDateWiseNew from "./Components/Flight/FlightTicketDateWiseNew";
import AgentDashBoard from "./Screens/AgentDashBoard";
import ElectronicsMainPage from "./Components/Ecommerce/EcommerceElectronicsPage/ElectronicsMainPage";
import EcommerceMainPage from "./Components/Ecommerce/EcommerceMainPage/EcommerceMainPage";
import ElectronicsProducts from "./Components/Ecommerce/EcommerceElectronicsPage/ElectronicsProducts";
import EcommerceWishlist from "./Components/Ecommerce/EcommerceWishlist/EcommerceWishlist";
import CreateAgentAccount from "./Components/CreateAgentScreen/CreateAgentAccount";
import AepsFromInputs from "./Components/AepsKyc/AepsFromInputs";
import AepsFrom from "./Components/AepsKyc/AepsFrom";

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
          className={`transition-all duration-1000  ${
            sidebarToggle ? "md:basis-1/6  md:overflow-hidden " : "md:basis-0 md:overflow-hidden "
          } `}
        >
          <div>{sidebarToggle ? <Sidebar /> : null}</div>
        </div>

        <div
          className={`transition-all duration-1000  ${
            sidebarToggle ? "md:basis-10/12 " : "md:basis-full px-[100px]"
          }`}
        >
          
         <Routes>
            <Route path="/" element={<AgentDashBoard />}></Route>
            <Route path="/EcommerceMainPage" element={<EcommerceMainPage />}>  </Route>
            <Route path="/Electronics" element={<ElectronicsMainPage/>}></Route>
            <Route path="/wishlist" element={<EcommerceWishlist/>}></Route>
         </Routes>
        </div>
      </div>
     
      </div>
      // <div>
      //   <CreateAgentAccount/>
      // </div>
      // <div>
      //   <AepsFrom />
      // </div>
   
  );
}

export default App;