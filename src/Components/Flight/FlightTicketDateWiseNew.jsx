import React, { useState } from 'react';
import airWayPng from '../../images/FlightImages/airWays.png';
import flightDirectionPng from '../../images/FlightImages/Flight way.png';
import cabbinPng from '../../images/FlightImages/Cabin.png';
import checkInPng from '../../images/FlightImages/Checkin.png';
import { useNavigate } from 'react-router-dom';

const FlightTicketDateWiseNew = () => {
    const [activeTab, setActiveTab] = useState('Flight Details');
    const [showMoreInfo, setShowInfo] = useState(false);
    const navigate = useNavigate();

    const moreInfo = () => {
        setShowInfo(prevState => !prevState);
    };

    return (
        <div className="flex flex-col justify-center items-center w-[822px] bg-[#395183]">
            <div className='w-[728px] bg-white mb-[10px] mt-[10px] rounded-[12px]'>
                <div className='flex flex-row pt-[27px] pb-[27px] pl-[20px] pr-[20px] justify-between'>
                    <div className='flex flex-col items-center'>
                        <img className='h-[60px]' src={airWayPng} alt='airWayImg' />
                        <p className='text-black text-center font-ubuntu text-[14px] font-normal leading-normal'>
                            Number
                        </p>
                    </div>
                    <div className='flex flex-row justify-between gap-[8px] ml-[41px] mr-[41px]'>
                        <div className='flex flex-col items-start'>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal'>
                                00:00
                            </p>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]'>
                                Tue, 14 Aug
                            </p>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]'>
                                Delhi
                            </p>
                        </div>
                        <div className='flex flex-col flex justify-center items-center'>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal'>
                                2hrs 15min
                            </p>
                            <img src={flightDirectionPng} alt='flightDirectionPng' className='w-[140px] h-[24px] mt-[8px]' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal'>
                                00:00
                            </p>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]'>
                                Tue, 14 Aug
                            </p>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]'>
                                Mumbai
                            </p>
                        </div>
                    </div>
                    <div className='text-black font-open-sans text-[14px] font-semibold leading-normal'>
                        <p className='mb-[12px]'>Baggage</p>
                        <div className='flex items-center'>
                            <img
                                src={cabbinPng}
                                alt='cabbinPng'
                                className='w-[16px] h-[16px] p-[2px] px-[2px] pb-[1.333px] flex justify-center items-center'
                            />
                            <span className='ml-[4px]'>cabin: <span className='text-[10px]'>00kgs (0 pieces only)</span></span>
                        </div>
                        <div className='flex items-center mt-[4px]'>
                            <img
                                src={checkInPng}
                                alt='checkInPng'
                                className='w-[16px] h-[16px] p-[2px] px-[2px] pb-[1.333px] justify-center items-center'
                            />
                            <span className='ml-[4px]'>check-in: <span className='text-[10px]'>00kgs (0 pieces only)</span></span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row mt-[16px] pl-[20px] pr-[20px] justify-between'>
                    <div className='text-black font-open-sans text-[24px] font-semibold leading-normal'>
                        <p>₹4,222 <span className='text-[10px]'>Per Adult</span></p>
                    </div>
                    <div className='flex flex-row gap-[9px] items-center pb-[12px]'>
                        <button onClick={moreInfo} className='text-[#3E67B0] font-open-sans text-[16px] font-semibold leading-normal'>
                            More Information
                        </button>
                        <button
                        onClick={() => navigate(`/FlightBookingReview`)}
                        className='font-open-sans text-[16px] font-semibold leading-normal bg-[#456CAF] p-[10px] rounded-[5px] text-white'>
                            Buy Ticket
                        </button>
                    </div>
                </div>
                <div className='flex justify-center rounded-[12px] bg-[#FED9D9]'>
                {showMoreInfo && (
                    <div  >
                        <div  className='flex justify-center rounded-[12px] bg-[#FED9D9]'>
                           
                        {['Flight Details', 'Fare Summary', 'Cancellation', 'Date Exchange'].map((tab) => (
                           
                           <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 mt-[41px] mb-[18px] ml-[6px] rounded border ${activeTab === tab ? 'bg-blue-500 text-white' : 'border-[#000] bg-[#fff3ea]'}`}
                            >
                                {tab}
                            </button>
                            
                        ))}
                        </div>
                        {activeTab === 'Flight Details' && (
                            <div>
                             <div className='flex flex-row mb-[22px] ml-[26px] mr-[26px] pt-[27px] pb-[27px] pl-[20px] pr-[20px] justify-between rounded-[10px] border border-[#000] bg-[#fff3ea]'>
                    <div className='flex flex-col items-center'>
                        <img className='h-[60px]' src={airWayPng} alt='airWayImg' />
                        <p className='text-black text-center font-ubuntu text-[14px] font-normal leading-normal'>
                            Number
                        </p>
                    </div>
                    <div className='flex flex-row justify-between gap-[8px] ml-[41px] mr-[41px]'>
                        <div className='flex flex-col items-start'>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal'>
                                00:00
                            </p>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]'>
                                Tue, 14 Aug
                            </p>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]'>
                                Delhi
                            </p>
                        </div>
                        <div className='flex flex-col flex justify-center items-center'>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal'>
                                2hrs 15min
                            </p>
                            <img src={flightDirectionPng} alt='flightDirectionPng' className='w-[140px] h-[24px] mt-[8px]' />
                        </div>
                        <div className='flex flex-col items-start'>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal'>
                                00:00
                            </p>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]'>
                                Tue, 14 Aug
                            </p>
                            <p className='text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]'>
                                Mumbai
                            </p>
                        </div>
                    </div>
                    <div className='text-black font-open-sans text-[14px] font-semibold leading-normal'>
                        <p className='mb-[12px]'>Baggage</p>
                        <div className='flex items-center'>
                            <img
                                src={cabbinPng}
                                alt='cabbinPng'
                                className='w-[16px] h-[16px] p-[2px] px-[2px] pb-[1.333px] flex justify-center items-center'
                            />
                            <span className='ml-[4px]'>cabin: <span className='text-[10px]'>00kgs (0 pieces only)</span></span>
                        </div>
                        <div className='flex items-center mt-[4px]'>
                            <img
                                src={checkInPng}
                                alt='checkInPng'
                                className='w-[16px] h-[16px] p-[2px] px-[2px] pb-[1.333px] justify-center items-center'
                            />
                            <span className='ml-[4px]'>check-in: <span className='text-[10px]'>00kgs (0 pieces only)</span></span>
                        </div>
                    </div>
                </div>
                                
                                
                            </div>
                        )}
                        {activeTab === 'Fare Summary' && (
                            <div  className="flex flex-col items-start w-[676px] p-[16px] gap-[6px]  rounded-[10px] border border-[#000] bg-[#fff3ea] mb-[23px]">
                                <div>
                                    <p className="text-black font-open-sans text-[14px] font-semibold">Fare breakup</p>
                                </div>
                                <div className='flex flex-row  border border-[#000] bg-[#fff3ea] h-[130px] p-[27px_16px] items-center gap-[57px] self-stretch '>
                                    <div> 
                                        <h1 className='text-black font-open-sans text-[16px] font-semibold'>Total</h1>
                                        <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>Base Fare</p>
                                        <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>Surcharges</p>
                                       

                                    </div>
                                    <div>
                                        <h1 className='text-black font-open-sans text-[16px] font-semibold'>₹ 6,238</h1>
                                        <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>₹ 5,400</p>
                                        <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>₹ 838</p>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        )}
                        {activeTab === 'Cancellation' && (
                           <div  className="flex flex-col items-start w-[676px] p-[16px] gap-[6px]  rounded-[10px] border border-[#000] bg-[#fff3ea] mb-[23px]">
                           <div>
                               <p className="text-black font-open-sans text-[14px] font-semibold">Fare breakup</p>
                           </div>
                           <div className='flex flex-row  border border-[#000] bg-[#fff3ea] h-[130px] p-[27px_16px] items-center gap-[57px] self-stretch '>
                               <div> 
                                   <h1 className="text-black font-open-sans text-[16px] font-semibold">Time frame<br/></h1>
                                   <p className='text-black font-[Open_Sans] text-[10px] font-semibold '>(From Scheduled flight departure)</p>

                                   <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>0 hours to 2 hours*</p>
                                   <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>2 hours to 365 days*</p>

                               </div>
                               <div>
                                   <h1 className="text-black font-open-sans text-[16px] font-semibold">Airline Fee + MMT Fee</h1>
                                   <p className='text-black font-[Open_Sans] text-[10px] font-semibold '>(Per passenger)</p>
                                   <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>ADULT : Non Refundable</p>
                                   <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>ADULT : ₹ 4,200 + ₹ 300</p>
                               </div>
                               
                           </div>
                           <div >
                       <h1 className="text-black font-open-sans text-[10px] font-semibold">*From the Time of Departure</h1>
                       <div  className="inline-flex p-[10px] justify-center items-center gap-[10px] rounded-[6px] bg-[#FF6F66]">
                           <p className="text-black font-open-sans text-[10px] font-semibold ">Important : Lorem ipsum dolor sit amet consectetur. Aliquam proin vitae turpis nulla mi. In sit aliquam sed est vitae libero sagittis. Id nullam non mattis cursus consectetur. Leo eget egestas sagittis consequat lacus.</p>
                       </div>
                       
                      
                       </div>
                           
                           
                       </div>
                       
                        )}
                         {activeTab === 'Date Exchange' && (
                           <div  className="flex flex-col items-start w-[676px] p-[16px] gap-[6px]  rounded-[10px] border border-[#000] bg-[#fff3ea] mb-[23px]">
                           <div>
                               <p className="text-black font-open-sans text-[14px] font-semibold">Fare breakup</p>
                           </div>
                           <div className='flex flex-row  border border-[#000] bg-[#fff3ea] h-[138opx] p-[27px_16px]  items-center gap-[57px] self-stretch '>
                              
                               <div > 
                                   <h1 className="text-black font-open-sans text-[16px] font-semibold">Time frame<br/></h1>
                                   <p className='text-black font-[Open_Sans] text-[10px] font-semibold '>(From Scheduled flight departure)</p>

                                   <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>0 hours to 4 hours*</p>
                                   <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>4 hours to 4 days*</p>
                                   <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>4 hours to 365 days*</p>
                                   
                               </div>
                               <div>
                                   <h1 className="text-black font-open-sans text-[16px] font-semibold">Airline Fee + MMT Fee + Fare difference</h1>
                                   <p className='text-black font-[Open_Sans] text-[10px] font-semibold '>(Per passenger)</p>
                                   <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>ADULT : Non Changeable</p>
                                   <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>ADULT : ₹ 2,999 + ₹ 300 + Fare difference</p>
                                   <p className='mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold'>ADULT : ₹ 2,250 + ₹ 300 + Fare difference</p>
                               </div>
                               
                           </div>
                           <div >
                       <h1 className="text-black font-open-sans text-[10px] font-semibold">*From the Time of Departure</h1>
                       <div  className="inline-flex p-[10px] justify-center items-center gap-[10px] rounded-[6px] bg-[#FF6F66]">
                           <p className="text-black font-open-sans text-[10px] font-semibold ">Important : Lorem ipsum dolor sit amet consectetur. Aliquam proin vitae turpis nulla mi. In sit aliquam sed est vitae libero sagittis. Id nullam non mattis cursus consectetur. Leo eget egestas sagittis consequat lacus.</p>
                       </div> 
                       </div>
                       </div>
                     )}   
                    </div>
                )}
                </div>
            </div>
        </div>
    );
}

export default FlightTicketDateWiseNew;
