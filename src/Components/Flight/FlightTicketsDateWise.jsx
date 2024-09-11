import React from 'react';
import airWayPng from '../../images/FlightImages/airWays.png';
import flightDirectionPng from '../../images/FlightImages/Flight way.png';
import cabbinPng from '../../images/FlightImages/Cabin.png';
import checkInPng from '../../images/FlightImages/Checkin.png';

const FlightTicketsDateWise = () => {
  return (
    <div className='w-[90%]'>

    <div className='flex flex-col bg-white p-4 '>
      <div className='flex flex-row pt-[27px] pb-[27px] pl-[20px] pr-[20px]'>
        <div className='flex flex-col items-center'>
          <img className='h-[60px]' src={airWayPng} alt='airWayImg' />
          <p className='text-black text-center font-ubuntu text-[14px] font-normal leading-normal'>
            Number
          </p>
        </div>
        <div className='flex flex-row justify-between gap-[8px] ml-[41px] mr-[41px]'>
          <div className='flex flex-col items-center'>
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
          <div className='flex flex-col items-center'>
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
          <p>Baggage</p>
          <div className='flex items-center'>
            <img
              src={cabbinPng}
              alt='cabbinPng'
              className='w-[16px] h-[16px] p-[2px] px-[2px] pb-[1.333px]'
            />
            <span className='ml-[4px]'>Cabin: <span className='text-[10px]'>00kgs (0 pieces only)</span></span>
          </div>
          <div className='flex items-center mt-[4px]'>
            <img
              src={checkInPng}
              alt='checkInPng'
              className='w-[16px] h-[16px] p-[2px] px-[2px] pb-[1.333px]'
            />
            <span className='ml-[4px]'>Check-in: <span className='text-[10px]'>00kgs (0 pieces only)</span></span>
          </div>
        </div>
      </div>
      <div className='flex flex-row  mt-[16px] pl-[20px] pr-[20px]'>
        <div className='text-black font-open-sans text-[24px] font-semibold leading-normal'>
          <p>₹4,222 <span className='text-[10px]'>Per Adult</span></p>
        </div>
        <div className='flex flex-row gap-[9px]  items-center'>
          <p className='text-[#3E67B0] font-open-sans text-[16px] font-semibold leading-normal'>
            More Information
          </p>
          <button className='font-open-sans text-[16px] font-semibold leading-normal bg-[#456CAF] p-[10px] rounded-[5px] text-white'>
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FlightTicketsDateWise;
