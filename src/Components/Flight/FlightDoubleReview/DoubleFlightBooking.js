import React, { useState } from "react";
import dom from "../../../images/Vector 9.svg";
import { logDOM } from "@testing-library/react";
import AdultForm from "../AdultForm";
import ChildForm from "../ChildForm";
import InfrantForm from "../InfrantForm";
import veg from "../../../images/mdi_lacto-vegetarian.svg";
import nonveg from "../../../images/mdi_lacto-non-vegetarian.svg";
import seat from "../../../images/FlightImages/seats.svg";
import seatSelected from "../../../images/FlightImages/selectedSeat.svg";
import unavailableSeat from "../../../images/FlightImages/unavailableSeat.svg";

const DoubleFlightBooking = () => {
  const [adults, setAdults] = useState([{ id: 1 }]);
  const [child, setChild] = useState([]);
  const [infrants, setInfrants] = useState([]);
  const [showGST, setShowGST] = useState(false);
  const [selectedTab, setSelectedTab] = useState("meal");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const [showSeatLegend, setShowSeatLegend] = useState(false);

  const totalSeats = 100;
  const seatsPerRow = 6;
  const totalRows = Math.ceil(totalSeats / seatsPerRow);
  const seatLabels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleSeatClick = (rowIndex, seatIndex) => {
    const seatId = `${rowIndex}-${seatIndex}`;
    setSelectedSeats((prevSelected) => {
      if (prevSelected.includes(seatId)) {
        return prevSelected.filter((id) => id !== seatId);
      } else {
        return [...prevSelected, seatId];
      }
    });
  };

  const addAdult = () => {
    const newAdult = adults.length + 1;
    setAdults([...adults, { id: newAdult }]);
  };

  const removeAdult = (id) => {
    const updatedAdults = adults.filter((adults) => adults.id != id);
    setAdults(updatedAdults);
  };

  const addChild = () => {
    const newChild = child.length + 1;
    setChild([...child, { id: newChild }]);
  };

  const addInfrant = () => {
    const newInfrant = infrants.length + 1;
    setInfrants([...infrants, { id: newInfrant }]);
  };

  const removeChild = (id) => {
    const updatedChild = child.filter((child) => child.id != id);
    setChild(updatedChild);
  };

  const removeInfrant = (id) => {
    const updatedInfrant = infrants.filter((infrant) => infrant.id != id);
    setInfrants(updatedInfrant);
  };

  const removeGST = () => {
    setShowGST(!showGST);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <header className="bg-[#d5deed] p-3 ps-[50px]">
        <p className="pt-4 text-black text-[24px] font-semibold leading-normal ">
          Booking Review from Delhi to Mumbai
        </p>
      </header>

      <div className="flex justify-between ps-[50px] pb-[1rem]">
        <div className="mt-2 w-[60%]">
          <div className="w-[730px] py-[20px] px-[22px] rounded-xl text-white bg-[#135FA7] overflow-visible shadow-lg h-auto">
            <div className="">
              <div className="font-semibold text-2xl mb-2">
                Enter Your Details
              </div>
              <button
                type="button"
                onClick={addAdult}
                className="text-white h-[50px] bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300   text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600"
              >
                <span className="pe-3">+</span>
                Add Adult
              </button>

              <button
                type="button"
                onClick={addChild}
                className="text-white h-[50px] bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300   text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 "
              >
                <span className="pe-3">+</span>
                Add Child
              </button>

              <button
                type="button"
                onClick={addInfrant}
                className="text-white h-[50px] bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300   text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 "
              >
                <span className="pe-3">+</span>
                Add Infrant
              </button>
            </div>

            {adults.map((adult) => (
              <>
                <AdultForm
                  key={adult.id}
                  id={adult.id}
                  removeAdult={removeAdult}
                />
              </>
            ))}

            {child.length > 0 && (
              <>
                {child.map((child) => (
                  <>
                    <ChildForm
                      key={child.id}
                      id={child.id}
                      removeChild={removeChild}
                    />
                  </>
                ))}
              </>
            )}

            {infrants.length > 0 && (
              <>
                {infrants.map((infrant) => (
                  <>
                    <InfrantForm
                      key={infrant.id}
                      id={infrant.id}
                      removeInfrant={removeInfrant}
                    />
                  </>
                ))}
              </>
            )}
          </div>

          <div className="mt-4 w-[730px] h-[481px] p-[22px] rounded-xl text-white bg-[#135FA7] overflow-hidden shadow-lg">
            <div className="mt-2">
              <div className="font-semibold text-2xl ">
                Enter Your Personal Details
              </div>
            </div>

            <div className="mt-2">
              <div className="w-[686px] h-[382px] px-[20px] rounded-xl overflow-hidden shadow-lg bg-[#f4f4f4] text-black">
                <div className="px-6 py-1 pt-5 flex justify-between">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm  mb-2"
                      for="username"
                    >
                      Enter Email id(*)
                    </label>
                    <input
                      className="shadow appearance-none border border-gray-950 rounded-lg w-full py-4 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm mb-2"
                      for="username"
                    >
                      Dial No: Enter phone number
                    </label>
                    <input
                      className="shadow appearance-none border border-gray-950 rounded-lg w-full py-4 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                    />
                  </div>
                </div>

                <div className="px-6 py-1 flex justify-between">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm  mb-2"
                      for="username"
                    >
                      Enter City
                    </label>
                    <input
                      className="shadow appearance-none border border-gray-950 rounded-lg w-full py-4 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm mb-2"
                      for="username"
                    >
                      Enter country
                    </label>
                    <input
                      className="shadow appearance-none border border-gray-950 rounded-lg w-full py-4 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                    />
                  </div>
                </div>

                <div class="px-6 py-1 flex justify-between">
                  <div class="mb-4 w-full">
                    <label
                      className="block text-gray-700 text-lg mb-2"
                      for="username"
                    >
                      Enter Addresses
                    </label>
                    <input
                      className="shadow appearance-none border border-gray-950 rounded-lg w-full py-4 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showGST ? (
            <>
              <div className="mt-4 w-[730px] h-[120px] rounded-xl text-white bg-[#135FA7] overflow-hidden shadow-lg">
                <div className="px-6 py-4 mt-1">
                  <div className="font-semibold text-xl ">
                    Enter GST Details
                  </div>

                  <button
                    type="button"
                    onClick={removeGST}
                    className="text-white h-[50px] bg-blue-700 mt-1  focus:ring-4 focus:outline-none focus:ring-blue-300   text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 "
                  >
                    <span className="pe-3 text-6">+</span>
                    Add GST
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mt-4 w-[730px] h-[518px] rounded-xl text-white bg-[#135FA7] overflow-hidden shadow-lg">
                <div className="px-6 py-4 mt-2">
                  <div className="font-semibold text-xl ">
                    Enter GST Details
                  </div>

                  <button
                    type="button"
                    onClick={removeGST}
                    className="text-white h-[50px] bg-blue-700 mt-1  focus:ring-4 focus:outline-none focus:ring-blue-300   text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 "
                  >
                    <span className="pe-3 text-6">--</span>
                    Remove GST
                  </button>
                </div>
                <div className="px-6 pb-5">
                  <div className="px-[20px] w-[684px]  h-[366px] rounded-xl overflow-hidden shadow-lg bg-[#f4f4f4] text-black">
                    <div className="px-6 py-1 pt-5 flex justify-between">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm  mb-2"
                          for="username"
                        >
                          GST Company Name
                        </label>
                        <input
                          className="shadow appearance-none border border-gray-950 rounded-lg w-full py-4 px-5 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm mb-2"
                          for="username"
                        >
                          GST Company number
                        </label>
                        <input
                          className="shadow appearance-none border border-gray-950 rounded-lg w-full py-4 px-5 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                        />
                      </div>
                    </div>

                    <div className="px-6 py-1 flex justify-between">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm  mb-2"
                          for="username"
                        >
                          GST Company Email
                        </label>
                        <input
                          className="shadow appearance-none border border-gray-950 rounded-lg w-full py-4 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm mb-2"
                          for="username"
                        >
                          GST Company Contact Number
                        </label>
                        <input
                          className="shadow appearance-none border border-gray-950 rounded-lg w-full py-4 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                        />
                      </div>
                    </div>

                    <div class="px-6 py-1 flex justify-between">
                      <div class="mb-4 w-full">
                        <label
                          className="block text-gray-700 text-lg mb-2"
                          for="username"
                        >
                          GST Company Addresses
                        </label>
                        <input
                          className="shadow appearance-none border border-gray-950 rounded-lg w-full py-4 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="mt-4 w-[730px] h-auto pb-2 rounded-xl	 bg-[#135FA7]">
            <div className="px-6 py-4 mt-2 text-white">
              <div className="font-semibold text-xl ">Add on's</div>

              <button
                type="button"
                className="text-white h-[50px] bg-blue-700 mt-2 focus:ring-4 focus:outline-none focus:ring-blue-300   text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 "
              >
                <span className="pe-3 text-6">-</span>
                Add on's
              </button>
            </div>

            <div className="bg-white py-[20px] px-[24px] rounded-xl mx-6 flex justify-normal">
            

              <button
                className={`text-dark border  border-black font-semibold rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white hover:border-transparent
               ${
                 selectedTab === "meal"
                   ? "bg-[#3d69af] text-white"
                   : "hover:bg-[#f4f4f4]"
               } `}
                onClick={() => handleTabChange("meal")}
              >
                Meal
              </button>

              <button
                className={`text-dark border  border-black font-semibold rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white hover:border-transparent
               ${
                 selectedTab === "luggage"
                   ? "bg-[#3d69af] text-white"
                   : "hover:bg-[#f4f4f4]"
               } `}
                onClick={() => handleTabChange("luggage")}
              >
                Luggage
              </button>
            </div>

            <div className="bg-[#f4f4f4] rounded-xl mt-[19px] my-2  px-[20px] p-[20px] mx-6">
            
              {selectedTab === "meal" && (
                <>
                  <div className="w-[638px] h-[432px]  overflow-y-auto scrollbar-hidden">
                    <div className="flex items-center justify-between w-[638px] h-[70px] bg-[#ffffff] p-2 mb-2">
                      <div className="flex-shrink-0">
                        <img
                          src="https://www.coca-cola.com/content/dam/onexp/us/en/offerings/sprite-chill/sprite-chill-square.png/width1960.png"
                          alt="Product Image"
                          className="w-[60px] h-[60px] object-cover rounded"
                        />
                      </div>

                      <div className="flex-1 ml-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">Sprite Chill</span>
                          <img src={veg} alt="Veg" className="w-6 h-6" />
                        </div>
                        <div className="text-black"> &#x20B9; 40.00</div>
                      </div>

                      <button className="bg-[#3a6aa9] text-white px-4 py-2 rounded">
                        Add Item
                      </button>
                    </div>
                    <div className="flex items-center justify-between w-[638px] h-[70px] bg-[#ffffff] p-2 mb-2">
                      <div className="flex-shrink-0">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NFjC2H7_ooEjtNoX3IUoXSFP3dX5XYTHwA&s"
                          alt="Product Image"
                          className="w-[60px] h-[60px] object-cover rounded"
                        />
                      </div>

                      <div className="flex-1 ml-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">Burger Chicken</span>
                          <img src={nonveg} alt="Veg" className="w-6 h-6" />
                        </div>
                        <div className="text-black"> &#x20B9; 40.00</div>
                      </div>

                      <button className="bg-[#3a6aa9] text-white px-4 py-2 rounded">
                        Add Item
                      </button>
                    </div>
                  </div>
                </>
              )}
              {selectedTab === "luggage" && (
                <>
                  <div class="w-[266px] h-[93px] p-[16px] flex justify-between bg-gradient-to-tl from-[#1A2B4A] via-[#3E67B0] to-[#1A2B4A]">
                    <div>
                      <img
                        src="https://www.airindia.com/content/dam/air-india/airindia-revamp/logos/AI_Logo_Red_New.svg"
                        className="w-[60px] h-[60px]  rounded"
                      />
                    </div>
                    <div className="text-white">
                      <h1 className="text-xl">Delhi - Mumbai</h1>
                      <p className="text-xs">Additional Package</p>
                      <p className="text-xs">Inculde 15kgs per Adult</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-5 w-[638px] h-[60px] bg-[#ffffff] p-1 mb-2">
                    <div className="flex-shrink-0">
                      <div className="ps-1">
                        <svg
                          width="22"
                          height="30"
                          viewBox="0 0 22 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14 1.50402e-07C14.7569 -0.000239369 15.4859 0.28561 16.0408 0.800245C16.5958 1.31488 16.9357 2.02027 16.9925 2.775L17 3V6H18.5C19.2569 5.99976 19.9858 6.28561 20.5408 6.80025C21.0958 7.31488 21.4357 8.02027 21.4925 8.775L21.5 9V25.5C21.5 26.2956 21.1839 27.0587 20.6213 27.6213C20.0587 28.1839 19.2956 28.5 18.5 28.5C18.4996 28.8823 18.3532 29.25 18.0907 29.5281C17.8283 29.8061 17.4696 29.9734 17.0879 29.9958C16.7062 30.0182 16.3304 29.894 16.0373 29.6486C15.7441 29.4032 15.5557 29.0551 15.5105 28.6755L15.5 28.5H6.5C6.5 28.8978 6.34196 29.2794 6.06066 29.5607C5.77936 29.842 5.39782 30 5 30C4.60218 30 4.22064 29.842 3.93934 29.5607C3.65804 29.2794 3.5 28.8978 3.5 28.5C2.74314 28.5002 2.01415 28.2144 1.45918 27.6998C0.904206 27.1851 0.564265 26.4797 0.5075 25.725L0.5 25.5V9C0.499761 8.24314 0.78561 7.51415 1.30025 6.95918C1.81488 6.40421 2.52027 6.06426 3.275 6.0075L3.5 6H5V3C4.99976 2.24314 5.28561 1.51415 5.80025 0.959178C6.31488 0.404206 7.02027 0.0642651 7.775 0.00750032L8 1.50402e-07H14ZM8 12C7.60218 12 7.22064 12.158 6.93934 12.4393C6.65804 12.7206 6.5 13.1022 6.5 13.5V21C6.5 21.3978 6.65804 21.7794 6.93934 22.0607C7.22064 22.342 7.60218 22.5 8 22.5C8.39782 22.5 8.77936 22.342 9.06066 22.0607C9.34196 21.7794 9.5 21.3978 9.5 21V13.5C9.5 13.1022 9.34196 12.7206 9.06066 12.4393C8.77936 12.158 8.39782 12 8 12ZM14 12C13.6326 12 13.278 12.1349 13.0034 12.3791C12.7289 12.6232 12.5535 12.9596 12.5105 13.3245L12.5 13.5V21C12.5004 21.3823 12.6468 21.75 12.9093 22.0281C13.1717 22.3061 13.5304 22.4734 13.9121 22.4958C14.2938 22.5182 14.6696 22.394 14.9627 22.1486C15.2559 21.9032 15.4443 21.5551 15.4895 21.1755L15.5 21V13.5C15.5 13.1022 15.342 12.7206 15.0607 12.4393C14.7794 12.158 14.3978 12 14 12ZM14 3H8V6H14V3Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1 ml-4">
                      <div
                        className="text-lg font-medium"
                        style={{ fontFamily: "Open Sans" }}
                      >
                        Additional 5 KGS
                      </div>
                      <div className="text-black"> &#x20B9; 40.00</div>
                    </div>

                    <button className="bg-[#3a6aa9] text-white px-4 py-2 rounded">
                      ADD Buggage
                    </button>
                  </div>

                  <div className="flex items-center justify-between w-[638px] h-[60px] bg-[#ffffff] p-1 mb-2">
                    <div className="flex-shrink-0">
                      <div className="ps-1">
                        <svg
                          width="22"
                          height="30"
                          viewBox="0 0 22 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14 1.50402e-07C14.7569 -0.000239369 15.4859 0.28561 16.0408 0.800245C16.5958 1.31488 16.9357 2.02027 16.9925 2.775L17 3V6H18.5C19.2569 5.99976 19.9858 6.28561 20.5408 6.80025C21.0958 7.31488 21.4357 8.02027 21.4925 8.775L21.5 9V25.5C21.5 26.2956 21.1839 27.0587 20.6213 27.6213C20.0587 28.1839 19.2956 28.5 18.5 28.5C18.4996 28.8823 18.3532 29.25 18.0907 29.5281C17.8283 29.8061 17.4696 29.9734 17.0879 29.9958C16.7062 30.0182 16.3304 29.894 16.0373 29.6486C15.7441 29.4032 15.5557 29.0551 15.5105 28.6755L15.5 28.5H6.5C6.5 28.8978 6.34196 29.2794 6.06066 29.5607C5.77936 29.842 5.39782 30 5 30C4.60218 30 4.22064 29.842 3.93934 29.5607C3.65804 29.2794 3.5 28.8978 3.5 28.5C2.74314 28.5002 2.01415 28.2144 1.45918 27.6998C0.904206 27.1851 0.564265 26.4797 0.5075 25.725L0.5 25.5V9C0.499761 8.24314 0.78561 7.51415 1.30025 6.95918C1.81488 6.40421 2.52027 6.06426 3.275 6.0075L3.5 6H5V3C4.99976 2.24314 5.28561 1.51415 5.80025 0.959178C6.31488 0.404206 7.02027 0.0642651 7.775 0.00750032L8 1.50402e-07H14ZM8 12C7.60218 12 7.22064 12.158 6.93934 12.4393C6.65804 12.7206 6.5 13.1022 6.5 13.5V21C6.5 21.3978 6.65804 21.7794 6.93934 22.0607C7.22064 22.342 7.60218 22.5 8 22.5C8.39782 22.5 8.77936 22.342 9.06066 22.0607C9.34196 21.7794 9.5 21.3978 9.5 21V13.5C9.5 13.1022 9.34196 12.7206 9.06066 12.4393C8.77936 12.158 8.39782 12 8 12ZM14 12C13.6326 12 13.278 12.1349 13.0034 12.3791C12.7289 12.6232 12.5535 12.9596 12.5105 13.3245L12.5 13.5V21C12.5004 21.3823 12.6468 21.75 12.9093 22.0281C13.1717 22.3061 13.5304 22.4734 13.9121 22.4958C14.2938 22.5182 14.6696 22.394 14.9627 22.1486C15.2559 21.9032 15.4443 21.5551 15.4895 21.1755L15.5 21V13.5C15.5 13.1022 15.342 12.7206 15.0607 12.4393C14.7794 12.158 14.3978 12 14 12ZM14 3H8V6H14V3Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex-1 ml-4">
                      <div className="text-lg font-medium">Additional 3kgs</div>
                      <div className="text-black"> &#x20B9; 40.00</div>
                    </div>

                    <button className="bg-[#3a6aa9] text-white px-4 py-2 rounded">
                      ADD Buggage
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="w-[40%]">
          <div
            className="px-3 me-2 mx-auto w-[499px] text-white bg-[#1447a0] shadow-md rounded-lg overflow-hidden"
            style={{
              position: "sticky",
              top: "150px",
              marginTop: "-50px",
              left: "25px",
            }}
          >
            <div class="p-6 text-white">
              <h2 class="text-3xl font-bold mb-2">Fare Details</h2>
              <div class="container rounded-lg p-3  text-black mx-auto bg-white">
                <div className="grid  gap-5">
                  <div>Basic Fare</div>

                  <div className="flex justify-between">
                    <p>Adults(1x6295)</p>
                    <p>99</p>
                  </div>
                </div>
              </div>

              <div class="container rounded-lg p-3 mt-2 text-black mx-auto bg-white">
                <div className="grid  gap-5">
                  <div>Taxes and subcharges</div>

                  <div className="flex justify-between">
                    <p>Airline Taxes and Surcharges</p>
                    <p>99</p>
                  </div>
                </div>
              </div>

              <div class="container rounded-lg p-3 mt-2 text-black mx-auto bg-white">
                <div className="grid  gap-5">
                  <div className="flex justify-between">
                    <p>Meals</p>
                    <p>99</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Additional Baggage</p>
                    <p>99</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Seat Charges X 1</p>
                    <p>99</p>
                  </div>
                </div>
              </div>

              <div class="container rounded-lg p-3 mt-2 text-black mx-auto bg-white">
                <div className="flex font-semibold justify-between">
                  <div>
                    <h1 className="text-3xl ">Total Amount</h1>
                  </div>
                  <div>
                    <h1 className="text-3xl">666</h1>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-3">
                <button
                  type="button"
                  class="px-5 text-2xl py-3 font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 dark:bg-[#7e9df8] dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Procced For Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoubleFlightBooking; 