import React from "react";
import Mobile from "../../images/RechargeAndBillPaymentsImages/mobile.png";
import Dth from "../../images/RechargeAndBillPaymentsImages/dth.png";
import DataCard from "../../images/RechargeAndBillPaymentsImages/datacard.png";
import { useNavigate } from "react-router-dom";

const RechargePage = () => {
  const navigate = useNavigate();

  return (
    <div className="wholeContainer bg-[#17213c] h-[100dvh]">
      <div className="div bg-[#D4DEEC] w-[100%] h-[83px]"></div>
      <div className="w-[77.15%] mx-[auto] mt-[47px]  bg-[#1749A0] flex flex-col items-center justify-center p-[24px] rounded-[12px]">
        <h1 className="font-sans text-2xl font-bold text-[#FF6D00]">
          Mobile Recharges , DTH Recharges and Data Card Recharges
        </h1>
        <div className="iconsWithText flex flex-row w-[40.23%]  space-x-[24px] mt-[28px]">
          <button onClick={() => navigate(`/rechargepage/mobilerecharge`)}>
            <div className="mobileRecharge flex flex-col space-y-[4px] justify-center items-center">
              <img
                src={Mobile}
                alt="mobileRecharge"
                className="w-[68px] h-[auto]"
              />
              <h1 className="font-sans text-sm font-semibold text-white">
                Mobile Recharge
              </h1>
            </div>
          </button>
          <button onClick={() => navigate("/rechargepage/dthrecharge")}>
            <div className="dthRecharge flex flex-col space-y-[4px] justify-center items-center">
              <img src={Dth} alt="DthRecharge" className="w-[68px] h-[auto]" />
              <h1 className="font-sans text-sm font-semibold text-white">
                DTH Recharge
              </h1>
            </div>
          </button>

          <button onClick={() => navigate("/rechargepage/datacardrecharge")}>
            <div className="DataCard flex flex-col space-y-[4px] justify-center items-center">
              <img
                src={DataCard}
                alt="DataCard"
                className="w-[68px] h-[auto]"
              />
              <h1 className="font-sans text-sm font-semibold text-white">
                Data Card
              </h1>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RechargePage;
