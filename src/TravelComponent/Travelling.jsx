// import React from 'react'
// import { travellingImages } from '../data'

// const Travelling = () => {
//   return (
//     <div>
//         <div class="flex w-[909.412px] p-[12px_71px] justify-between items-center rounded-[10px] bg-[#FFF]">
//             {
//                 travellingImages.map(item=>{
//                     return(
//                         <div>
//                             <img className='w-[68px] h-[68px]' src={item.imageUrl} alt={item.name}/>
//                             <p class="text-[#000] text-center font-sans text-[14px] font-semibold leading-normal">{item.name}</p>

//                         </div>
//                     )
//                 })
//             }

//         </div>
//         <div>
//             <div>
                
//             </div>


//         </div>

//     </div>
//   )
// }

// export default Travelling

 import React from 'react'
 import { useState } from 'react';
 
 const Travelling = () => {
  

 


const [isRechargePaymentsExpanded, setIsRechargePaymentsExpanded] = useState(false);

  const toggleRechargePayments = () => {
    setIsRechargePaymentsExpanded(!isRechargePaymentsExpanded);
  };

  return (
    <div className="app">
      <div className="sidebar">

            <button class="bg-indigo-500 ..." onClick={toggleRechargePayments}>Recharge/Payments..</button>
            {isRechargePaymentsExpanded && (
              <ul className="sub-menu">
                <li>Mobile Recharge</li>
                <li>View Commission</li>
                <li>Set Commission</li>
                <li>Reports</li>
                <li>Recharge Incentives</li>
                <li>Recharge Incentives Log</li>
              </ul>
            )}

      </div>
      
    </div>
  );
}


export default Travelling

