import React from "react";
import aeps from "../../images/BankingServiceImages/aps.png";
import aadhar from "../../images/BankingServiceImages/aadhar.png";
import dmt from "../../images/BankingServiceImages/dmt.png";
import microatm from "../../images/BankingServiceImages/atm.png";

const BankingServices = () => {
  return (
    <div className="mx-[120px]  flex flex-col p-[24px] pr-[106px] gap-[10px] items-start self-stretch rounded-[10px] ">
      <h2 className="w-[270px] h-[44px] text-[#FF6D00] font-open-sans text-[32px] font-bold leading-none">
        Banking Services
      </h2>
      <div className=" flex h-[109px] justify-between items-center self-stretch">
        <div className="text-center">
          <img className="h-[86px] self-stretch" src={aeps} alt="aepsImage" />
          <p className="text-center text-white font-open-sans text-[14px] font-semibold leading-none mt-[8px]">
            AEPS
          </p>
        </div>
        <div className="text-center">
          <img
            className="h-[86px] self-stretch"
            src={aadhar}
            alt="aadharImage"
          />
          <p className="text-center text-white font-open-sans text-[14px] font-semibold leading-none mt-[8px]">
            Aadhar Pay
          </p>
        </div>
        <div className="text-center">
          <img className="h-[86px] self-stretch" src={dmt} alt="dmtImage" />
          <p className="text-center text-white font-open-sans text-[14px] font-semibold leading-none mt-[8px]">
            DMT
          </p>
        </div>
        <div className="text-center">
          <img
            className="h-[86px] self-stretch"
            src={microatm}
            alt="microatmImage"
          />
          <p className="text-center text-white font-open-sans text-[14px] font-semibold leading-none mt-[8px]">
            Micro ATM
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankingServices;
