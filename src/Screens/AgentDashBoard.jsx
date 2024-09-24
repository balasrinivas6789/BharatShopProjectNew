import React from 'react'
import Footer from "../Components/Footer/Footer";
import Services from "../Services/Services";
import { rechargeAndBillPaymentsList, bankingServices, utilityServices } from "../data";

const AgentDashBoard = () => {
  return (
    <div>
        <Services staticData={bankingServices} name="Banking Services" />
          <Services
            staticData={rechargeAndBillPaymentsList}
            name="Recharge And Bill Payments"
          />
          <Services staticData={utilityServices} name="Utility Services" />
          

        
          <Footer />
    </div>
  )
}

export default AgentDashBoard