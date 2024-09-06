
import './App.css';
import Header from './Header/Header';
import Services from './Services/Services';
import {rechargeAndBillPaymentsList} from '../src/data'
import {bankingServices} from '../src/data'
import {utilityServices} from '../src/data'
import Footer from './Footer/Footer';
import Travelling from './TravelComponent/Travelling';


function App() {
  return (
    <div class="border border-[rgba(0,0,0,0.37)] bg-[#18213B]">
      <Header/>
      {/* <BankingServices/> */}
      <Services staticData={bankingServices} name='Banking Services' />
      <Services staticData={rechargeAndBillPaymentsList} name='Recharge And Bill Payments' />
      <Services staticData={utilityServices} name='Utility Services' />
      <Footer />
      <Travelling />

     
      
      
      
      
    </div>
  );
}

export default App;
