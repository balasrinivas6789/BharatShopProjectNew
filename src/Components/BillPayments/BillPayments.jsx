import React from "react";
import billerAvenue from "../../images/billPayments/billavenue_logo 1.png";
import billPay from "../../images/billPayments/bbps-logo 1.png";

const BillPayments = () => {
  return (
    <div className="h-[1719px]">
      <div className="div mb-[61px] bg-[#D4DEEC] w-[100%] h-[83px]"></div>
      <div className="billpaymentContainer flex flex-col justify-center  items-center ">
        <div className="logoCon mb-[24px] bg-white flex flex-row gap-[88px] px-[48px] py-[24px] w-[42.29%] rounded-[10px]">
          <div className="div flex justify-center items-center">
            <img
              src={billerAvenue}
              alt="billerAvenue"
              className="w-[155px] h-[25px] "
            />
          </div>
          <div className="div">
            <img src={billPay} alt="billPay" className="w-[155px] h-[54px]" />
          </div>
        </div>
        <div className="billerDetailsCon w-[69.35%] px-[41px] pt-[89px] pb-[29px] bg-white flex flex-col rounded-[10px]">
          <div className="div flex flex-col space-y-[10px] mb-[39px]">
            <label className="font-open-sans text-sm font-semibold ">
              Biller Categories
            </label>
            <select className="h-[56px] border border-black rounded-[4px]">
              <option>select</option>
            </select>
          </div>
          <div className="div flex flex-col space-y-[10px] mb-[39px]">
            <label className="font-open-sans text-sm font-semibold ">
              Coverage (State-Country)
            </label>
            <select className="h-[56px] border border-black rounded-[4px]">
              <option>select</option>
            </select>
          </div>
          <div className="div flex flex-col space-y-[10px] mb-[39px]">
            <label className="font-open-sans text-sm font-semibold ">
              Biller Name
            </label>
            <select className="h-[56px] border border-black rounded-[4px]">
              <option>select</option>
            </select>
          </div>
          <div className="div flex flex-col space-y-[10px] mb-[39px]">
            <label className="font-open-sans text-sm font-semibold">
              Biller Number
            </label>
            <input
              type="text"
              className="h-[56px] border border-black rounded-[4px] px-2"
            />
          </div>
          <div className="flex justify-center items-center">
            <button className="font-open-sans text-2xl font-semibold text-white px-[16px] py-[12px] bg-[#7D9DF9] rounded-[4px]">
              Proceed for Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillPayments;
