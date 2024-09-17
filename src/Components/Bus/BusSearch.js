import React, { useState } from "react";
import airWayPng from "../../images/FlightImages/airWays.png";
import flightDirectionPng from "../../images/FlightImages/Flight way.png";
import cabbinPng from "../../images/FlightImages/Cabin.png";
import checkInPng from "../../images/FlightImages/Checkin.png";
import busImage from "../../images/BusImages/bus.svg";

import Blanket from "../../images/BusImages/busesservices/Blanket.svg";
import BusLive from "../../images/BusImages/busesservices/Bus Live .svg";
import Cctv from "../../images/BusImages/busesservices/Cctv Camera.svg";
import Charging from "../../images/BusImages/busesservices/Charging Sokcets.svg";
import FreeWifi from "../../images/BusImages/busesservices/Free WIFI.svg";
import Pilow from "../../images/BusImages/busesservices/Pillow.svg";
import SOS from "../../images/BusImages/busesservices/SOS.svg";
import ticket from "../../images/BusImages/busesservices/ticket.svg";
import waterbottle from "../../images/BusImages/busesservices/water bottle.svg";

const BusSearch = () => {
  const [activeTab, setActiveTab] = useState("Services");
  const [showMoreInfo, setShowInfo] = useState(false);

  // Toggle function to show/hide additional information
  const moreInfo = () => {
    setShowInfo((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col justify-center items-center w-[822px] bg-[#395183]">
      <div className="w-[728px] bg-white mb-[10px] mt-[10px] rounded-[12px]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center">
            <p className="text-black font-ubuntu ps-[36px] pt-[27px]  text-[20px] font-[600] leading-normal">
              Japan Travels
            </p>
          </div>
          <div className="flex flex-row justify-between pt-[20px] gap-[8px]">
            <div className="flex flex-col items-start">
              <p className="text-black font-open-sans text-[14px] font-semibold leading-normal">
                00:00
              </p>
              <p className="text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]">
                Tue, 14 Aug
              </p>
              <p className="text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]">
                Goa
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-black font-open-sans text-[14px] font-semibold leading-normal">
                2hrs 15min
              </p>
              <img
                src={busImage}
                alt="flightDirectionPng"
                className="w-[140px] h-[24px] mt-[8px]"
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-black font-open-sans text-[14px] font-semibold leading-normal">
                00:00
              </p>
              <p className="text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]">
                Tue, 14 Aug
              </p>
              <p className="text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]">
                Bangalore
              </p>
            </div>
          </div>
          <div className="text-black font-open-sans font-semibold leading-normal">
            <p className="text-black font-ubuntu pe-[30px] pt-[27px]  text-[10px] font-[600] leading-normal">
              Starts from{" "}
              <span className="d-flex flex-col text-[24px] font-[600]">
                ₹700
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-[16px] pl-[20px] pr-[20px] justify-between">
          <div className="flex gap-1">
            <div className="ps-[15px] font-600 text-white">
              <button className="bg-[#3e66b3] text-[14px] p-[10px]">
                5 Single
              </button>
            </div>
            <div className="text-black">
              <button className="bg-white text-[14px] border border-black font-600 p-[9px]">
                0 window
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-[9px] items-center pe-[10px] pb-[12px]">
            <button
              onClick={moreInfo}
              className="text-[#3E67B0] p-2 hover:border-b-4 hover:border-indigo-500 font-open-sans text-[16px] font-semibold leading-normal"
            >
              {showMoreInfo && <p>Hide Information</p>}

              {!showMoreInfo && <p>More Information</p>}
            </button>
            <button className="font-open-sans ms-[10px] text-[16px] font-semibold leading-normal bg-[#456CAF] p-[10px] rounded-[5px] text-white">
              Buy Ticket
            </button>
          </div>
        </div>
        <div className="flex justify-center rounded-[12px] bg-[#FED9D9]">
          {showMoreInfo && (
            <div>
              <div className="flex justify-center rounded-[12px] bg-[#FED9D9]">
                {[
                  "Services",
                  "Bus Photos",
                  "Boarding points & Dropings",
                  "Cancelation Policies",
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 mt-[41px] mb-[18px] ml-[6px] rounded border ${
                      activeTab === tab
                        ? "bg-[#3f67af] text-white"
                        : "border-[#000] hover:bg-[#fff3ea] hover:border-none"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {activeTab === "Services" && (
                <div>
                  <div className="flex flex-row text-white mb-[22px] ml-[26px] mr-[26px] pt-[27px] pb-[27px] pl-[20px] pr-[20px] justify-between rounded-[10px] border border-[#000] bg-[#125fa7]">
                    <div className="grid gap-4 space-x-5 font-400 text-[16px]  grid-cols-3">
                      <div className="flex items-center text-center mb-4">
                        <img src={ticket} alt="" />
                        <span className="px-2">M-Ticket Support</span>
                      </div>

                      <div className="flex items-center text-center mb-4">
                        <img src={FreeWifi} alt="" />
                        <p className="px-2">Free WIFI</p>
                      </div>

                      <div className="flex items-center text-center mb-4">
                        <img src={Charging} alt="" />
                        <p className="px-2">Charging Sockets</p>
                      </div>

                      <div className="flex items-center text-center mb-4">
                        <img src={waterbottle} alt="" />
                        <p className="px-2">Water Bottle</p>
                      </div>

                      <div className="flex items-center text-center mb-4">
                        <img src={Blanket} alt="" />
                        <p className="px-2">Blanket</p>
                      </div>

                      <div className="flex items-center text-center mb-4">
                        <img src={BusLive} alt="" />
                        <p className="px-2">Bus Live Tracking</p>
                      </div>

                      <div className="flex items-center text-center mb-4">
                        <img src={Cctv} alt="" />
                        <p className="px-2">CCTV Camera</p>
                      </div>

                      <div className="flex items-center text-center mb-4">
                        <img src={Pilow} alt="" />
                        <p className="px-2">Pillow</p>
                      </div>

                      <div className="flex items-center text-center mb-4">
                        <img src={SOS} alt="" />
                        <p className="px-2">Emergency</p>
                      </div>
                    </div>
                  </div>
                </div>
              )} 
              {activeTab === "Bus Photos" && (
                <div className="flex flex-col items-start w-[676px] p-[16px] gap-[6px]  rounded-[10px] border border-[#000] bg-[#fff3ea] mb-[23px]">
                  <div>
                    <p className="text-black font-open-sans text-[14px] font-semibold">
                      Fare breakup
                    </p>
                  </div>
                  <div className="flex flex-row  border border-[#000] bg-[#fff3ea] h-[130px] p-[27px_16px] items-center gap-[57px] self-stretch ">
                    <div>
                      <h1 className="text-black font-open-sans text-[16px] font-semibold">
                        Total
                      </h1>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        Base Fare
                      </p>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        Surcharges
                      </p>
                    </div>
                    <div>
                      <h1 className="text-black font-open-sans text-[16px] font-semibold">
                        ₹ 6,238
                      </h1>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        ₹ 5,400
                      </p>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        ₹ 838
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "Boarding points & Dropings" && (
                <div className="flex flex-col items-start w-[676px] p-[16px] gap-[6px]  rounded-[10px] border border-[#000] bg-[#fff3ea] mb-[23px]">
                  <div>
                    <p className="text-black font-open-sans text-[14px] font-semibold">
                      Fare breakup
                    </p>
                  </div>
                  <div className="flex flex-row  border border-[#000] bg-[#fff3ea] h-[130px] p-[27px_16px] items-center gap-[57px] self-stretch ">
                    <div>
                      <h1 className="text-black font-open-sans text-[16px] font-semibold">
                        Time frame
                        <br />
                      </h1>
                      <p className="text-black font-[Open_Sans] text-[10px] font-semibold ">
                        (From Scheduled flight departure)
                      </p>

                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        0 hours to 2 hours*
                      </p>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        2 hours to 365 days*
                      </p>
                    </div>
                    <div>
                      <h1 className="text-black font-open-sans text-[16px] font-semibold">
                        Airline Fee + MMT Fee
                      </h1>
                      <p className="text-black font-[Open_Sans] text-[10px] font-semibold ">
                        (Per passenger)
                      </p>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        ADULT : Non Refundable
                      </p>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        ADULT : ₹ 4,200 + ₹ 300
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-black font-open-sans text-[10px] font-semibold">
                      *From the Time of Departure
                    </h1>
                    <div className="inline-flex p-[10px] justify-center items-center gap-[10px] rounded-[6px] bg-[#FF6F66]">
                      <p className="text-black font-open-sans text-[10px] font-semibold ">
                        Important : Lorem ipsum dolor sit amet consectetur.
                        Aliquam proin vitae turpis nulla mi. In sit aliquam sed
                        est vitae libero sagittis. Id nullam non mattis cursus
                        consectetur. Leo eget egestas sagittis consequat lacus.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "Date Exchange" && (
                <div className="flex flex-col items-start w-[676px] p-[16px] gap-[6px]  rounded-[10px] border border-[#000] bg-[#fff3ea] mb-[23px]">
                  <div>
                    <p className="text-black font-open-sans text-[14px] font-semibold">
                      Fare breakup
                    </p>
                  </div>
                  <div className="flex flex-row  border border-[#000] bg-[#fff3ea] h-[138opx] p-[27px_16px]  items-center gap-[57px] self-stretch ">
                    <div>
                      <h1 className="text-black font-open-sans text-[16px] font-semibold">
                        Time frame
                        <br />
                      </h1>
                      <p className="text-black font-[Open_Sans] text-[10px] font-semibold ">
                        (From Scheduled flight departure)
                      </p>

                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        0 hours to 4 hours*
                      </p>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        4 hours to 4 days*
                      </p>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        4 hours to 365 days*
                      </p>
                    </div>
                    <div>
                      <h1 className="text-black font-open-sans text-[16px] font-semibold">
                        Airline Fee + MMT Fee + Fare difference
                      </h1>
                      <p className="text-black font-[Open_Sans] text-[10px] font-semibold ">
                        (Per passenger)
                      </p>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        ADULT : Non Changeable
                      </p>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        ADULT : ₹ 2,999 + ₹ 300 + Fare difference
                      </p>
                      <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                        ADULT : ₹ 2,250 + ₹ 300 + Fare difference
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-black font-open-sans text-[10px] font-semibold">
                      *From the Time of Departure
                    </h1>
                    <div className="inline-flex p-[10px] justify-center items-center gap-[10px] rounded-[6px] bg-[#FF6F66]">
                      <p className="text-black font-open-sans text-[10px] font-semibold ">
                        Important : Lorem ipsum dolor sit amet consectetur.
                        Aliquam proin vitae turpis nulla mi. In sit aliquam sed
                        est vitae libero sagittis. Id nullam non mattis cursus
                        consectetur. Leo eget egestas sagittis consequat lacus.
                      </p>
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
};

export default BusSearch;
