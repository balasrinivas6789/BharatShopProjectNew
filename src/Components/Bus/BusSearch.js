import React, { useState, useRef, useEffect } from "react";
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
import hotel from "../../images/HotelImages/HotelImg.png";
import "./BusSearch.css";

const BusSearch = () => {
  const [activeTab, setActiveTab] = useState("Services");
  const [showMoreInfo, setShowInfo] = useState(false);
  const moreInfo = () => {
    setShowInfo((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-[728px] bg-white mb-[5px] mt-[10px] rounded-[12px]">
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
              Starts from
              <span className="d-flex flex-col text-[24px] font-[600]">
                ₹700
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row mt-[16px] pl-[20px] pr-[20px] justify-between">
          <div className="flex gap-1">
            <div className="ps-[15px] font-600 text-white">
              <button className="bg-[#3e66b3] text-[14px] font-semibold p-[10px]">
                5 Single
              </button>
            </div>
            <div className="text-black">
              <button className="bg-white text-[14px] border border-black font-semibold p-[9px]">
                0 Window
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
              view Ticket
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center rounded-[12px]  w-[728px] bg-[#FED9D9]">
        {showMoreInfo && (
          <div className="mx-[50px] my-[41px]">
            <div className="flex justify-center rounded-[12px] mb-[20px] bg-[#FED9D9]">
              {[
                "Services",
                "Bus Photos",
                "Boarding points & Dropings",
                "Cancelation Policies",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`p-[10px] me-[6px] rounded border text-[14px] font-medium ${
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
                <div className="flex flex-row text-white  justify-between rounded-[10px] border border-[#000] bg-[#125fa7]">
                  <div className="grid gap-4 space-x-8 font-400 text-[16px]  grid-cols-3">
                    <div className="flex items-center text-center ps-5 mb-2">
                      <img src={ticket} alt="" />
                      <span className="ps-2">M-Ticket Support</span>
                    </div>

                    <div className="flex items-center text-center mb-2">
                      <img src={FreeWifi} alt="" />
                      <p className="px-3">Free WIFI</p>
                    </div>

                    <div className="flex items-center text-center mb-2">
                      <img src={Charging} alt="" />
                      <p className="px-2">Charging Sockets</p>
                    </div>

                    <div className="flex items-center text-center mb-2">
                      <img src={waterbottle} alt="" />
                      <p className="px-2">Water Bottle</p>
                    </div>

                    <div className="flex items-center text-center mb-2">
                      <img src={Blanket} alt="" />
                      <p className="px-2">Blanket</p>
                    </div>

                    <div className="flex items-center text-center mb-2">
                      <img src={BusLive} alt="" />
                      <p className="px-2">Bus Live Tracking</p>
                    </div>

                    <div className="flex items-center text-center mb-2">
                      <img src={Cctv} alt="" />
                      <p className="px-2">CCTV Camera</p>
                    </div>

                    <div className="flex items-center text-center mb-2">
                      <img src={Pilow} alt="" />
                      <p className="px-2">Pillow</p>
                    </div>

                    <div className="flex items-center text-center mb-2">
                      <img src={SOS} alt="" />
                      <p className="px-2">Emergency</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Bus Photos" && (
              <div className="flex flex-row items-start w-[626px]   rounded-[10px] border border-[#000] bg-[#125fa7] mb-[23px]">
                <div className="overflow-x-auto p-[32px] scrollbar-hidden flex flex-row  gap-3 w-full">
                  {Array(12)
                    .fill()
                    .map((_, index) => {
                      return (
                        <img
                          key={index}
                          src={hotel}
                          className="w-[100px] h-[100px] rounded"
                        />
                      );
                    })}
                </div>
              </div>
            )}
            {activeTab === "Boarding points & Dropings" && (
              <div className="flex flex-row text-white py-[49px] ps-[26px] pe-[36px] bg-[#135FA7] w-[628px] h-[450px] rounded-lg ">
                <div className="grid gap-[38px] text-black grid-cols-2">
                  <div className="flex flex-col rounded-lg bg-[#182D69]">
                    <div className="w-[264px] h-[42px] text-[16px] ps-[10px] font-400 bg-white rounded-t-lg p-[10px_0_0_0] gap-[10px]">
                      Onboarding
                    </div>
                    <div className="w-[264px] h-[298px] mt-[12px]">
                      <div className="flex justify-between text-white p-[10px]">
                        <p>Location</p>
                        <p>03-Sep-2024 16:45</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col rounded-lg bg-[#182D69]">
                    <div className="w-[264px] h-[42px] text-[16px] ps-[10px] font-400 bg-white rounded-t-lg p-[10px_0_0_0] gap-[10px]">
                      Dropping Points
                    </div>
                    <div className="w-[264px] h-[298px] mt-[12px] text-white p-[10px]">
                      <div className="flex justify-between">
                        <p>Location</p>
                        <p>03-Sep-2024 16:45</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Cancelation Policies" && (
              <div className="flex flex-col items-start w-[628px] h-[382px] px-[39px] py-[49px] rounded-[10px] border border-[#000] bg-[#135FA7]">
                <div className="flex flex-row w-[550px] h-auto  ">
                  <div className="flex flex-col">
                    <div className="w-[550px] p-[10px] text-[16px] font-medium rounded-t-lg h-[42px] bg-white">
                      Cancellation
                    </div>
                    <div className="w-[550px] h-auto rounded-b-lg  text-white pt-[12px] bg-[#182D69]">
                      <div className="grid grid-cols-12  p-[10px]">
                        <div className="col-span-10 border ps-2 py-[8px]">
                          <p className="text-[16px]">
                            From 24 hrs to the time of departure
                          </p>
                        </div>

                        <div className="col-span-2 border ps-2 py-[8px]">
                          <p className="text-[16px]">100%</p>
                        </div>

                        <div className="col-span-10 border ps-2 py-[8px]">
                          <p className="text-[16px]">
                            From 24 hrs to the time of departure
                          </p>
                        </div>

                        <div className="col-span-2 border ps-2 py-[8px]">
                          <p className="text-[16px]">100%</p>
                        </div>
                        <div className="col-span-10 border ps-2 py-[8px]">
                          <p className="text-[16px]">
                            From 24 hrs to the time of departure
                          </p>
                        </div>

                        <div className="col-span-2 border ps-2 py-[8px]">
                          <p className="text-[16px]">100%</p>
                        </div>
                        <div className="col-span-10 border ps-2 py-[8px]">
                          <p className="text-[16px]">
                            From 24 hrs to the time of departure
                          </p>
                        </div>

                        <div className="col-span-2 border ps-2 py-[8px]">
                          <p className="text-[16px]">100%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-[-15px]">
                  <div className="inline-flex mt-[5px] p-[10px] px-[10px] justify-center items-center gap-[10px] rounded-[6px] bg-[#FF6F66]">
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
  );
};

export default BusSearch;