import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { IoFilterOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
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
  const accordionData = [
    {
      id: "cartype",
      title: "Car Type",
      options: [{ title: "sudan" }, { title: "suv" }],
    },
    {
      id: "fueltype",
      title: "Fuel Type",
      options: [{ title: "CNG" }, { title: "disele" }, { title: "petrol" }],
    },
    {
      id: "carmodel",
      title: "Car Model",
      options: [
        { title: "Maruti Suzuki Ertiga" },
        { title: "Toyota Innova" },
        { title: "Innova Crysta" },
      ],
    },
  ];

  const {
    triptype,
    travelclass,
    fromvalue,
    fromlabel,
    tovalue,
    tolabel,
    selecteddate,
    selectedreturndate,
    totaltravellers,
    adult,
    child,
    infant,
  } = useParams();

  console.log(
    triptype,
    travelclass,
    fromvalue,
    fromlabel,
    tovalue,
    tolabel,
    selecteddate,
    selectedreturndate,
    totaltravellers,
    adult,
    child,
    infant
  );

  let extractedFromDateDetails = null;
  if (selecteddate != undefined) {
    console.log("69");

    extractedFromDateDetails = new Date(selecteddate)
      .toISOString()
      .split("T")[0];
    const extractedFromYear = extractedFromDateDetails.split("-")[0];
    const extractedFromMonth = extractedFromDateDetails.split("-")[1];
    const extractedFromDate = extractedFromDateDetails.split("-")[2];
  }

  let extractedToDateDetails = null;
  if (selectedreturndate != undefined) {
    console.log("80");

    extractedToDateDetails = new Date(selectedreturndate)
      .toISOString()
      .split("T")[0];
    const extractedToYear = extractedToDateDetails.split("-")[0];
    const extractedToMonth = extractedToDateDetails.split("-")[1];
    const extractedToDate = extractedToDateDetails.split("-")[2];
  }

  const airports = [
    {
      value: "Delhi",
      label: (
        <div>
          <h1>Delhi</h1>
          Delhi, India
        </div>
      ),
    },
    {
      value: "Mumbai",
      label: (
        <div>
          <h1>Mumbai</h1>
          Maharastra, India
        </div>
      ),
    },
    {
      value: "Hyderabad",
      label: (
        <div>
          <h1>Hyderabad</h1>
          Telangana, India
        </div>
      ),
    },
  ];

  const [activeService, setActiveService] = useState("flight");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("Flight Details");
  const [showMoreInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();
  console.log(airports[0]);

  const [selectedAirport, setSelectedAirport] = useState(airports[0]);
  const [selectedAirport1, setSelectedAirport1] = useState(airports[1]);
  const [selectedReturndate, setselectedReturndate] = useState(new Date());

  const handleClick = (divId) => {
    setActiveService(divId);
  };

  const moreInfo = () => {
    setShowInfo((prevState) => !prevState);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedAirport(selectedOption);
  };
  const handleSelectChange1 = (selectedOption) => {
    setSelectedAirport1(selectedOption);
  };

  const swapDestination = () => {
    setSelectedAirport(selectedAirport1);
    setSelectedAirport1(selectedAirport);
  };

  const [travellerOptionsVisible, setTravellerOptionsVisible] =
    useState("close");

  const handleIncrement = (type) => {
    // setTravellers((prevTravellers) => ({
    //   ...prevTravellers,
    //   [type]: prevTravellers[type] + 1,
    // }));
  };

  const handleDecrement = (type) => {
    // setTravellers((prevTravellers) => ({
    //   ...prevTravellers,
    //   [type]: prevTravellers[type] > 0 ? prevTravellers[type] - 1 : 0,
    // }));
  };

  const handleSave = (action) => {
    setTravellerOptionsVisible(action);
  };

  const totalTravellers = Number(adult) + Number(child) + Number(infant);
  const travellerText = totalTravellers === 1 ? "traveller" : "travellers";

  const CustomInput = ({ value, onClick }) => (
    <div className="date_holder" onClick={onClick}>
      <div className="date">
        <h1>{format(new Date(value), `dd''`)}</h1>
        {format(new Date(value), `MMM'' yy`)}
      </div>
      <div className="day">{format(new Date(value), "EEEE")}</div>
    </div>
  );

  const valueOfFrom = {
    value: { fromvalue },
    label: (
      <div>
        <h1>{fromvalue}</h1>
        {fromlabel}
      </div>
    ),
  };

  const valueOfto = {
    value: { tovalue },
    label: (
      <div>
        <h1>{tovalue}</h1>
        {tolabel}
      </div>
    ),
  };

  return (
    <>
      <div className="w-100%">
        <div className="bg-[#14479F] rounded-lg mx-[32px] mt-[20px]">
          <form
            className={activeService === "flight" ? "form_show" : "form_hidden"}
            onClick={() => handleClick("flight")}
          >
            <div className="flight_data pb-4">
              <div className="flex justify-between pt-5">
                <p className="text-white text-[32px] pl-[24px]">
                  Buses From {fromvalue || "Delhi"} to {tovalue || "Mumbai"}
                </p>
                <div className="submit_button  pe-[150px]">
                  <button className="btnsearch  bg-[#B6D1FF]" type="submit">
                    Search
                  </button>
                </div>
              </div>

              <div className="flight_search">
                <div className="from_to">
                  <div className="swap_div">
                    <a onClick={swapDestination}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                      >
                        <path
                          d="M1.5 5.24984H16.0833L12 1.1665"
                          stroke="black"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.666 9.9165H1.49935L5.74601 13.4165"
                          stroke="black"
                          strokeWidth="1.16667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <label>
                    <p>From :</p>
                    <Select
                      value={selectedAirport}
                      onChange={handleSelectChange}
                      options={airports}
                      placeholder="Select an airport..."
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          width: "100%",
                          borderColor: "transparent", // Optional: To remove border
                          boxShadow: "none", // Optional: To remove shadow
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          display: "none", // Hides the dropdown arrow
                        }),
                        indicatorSeparator: (provided) => ({
                          ...provided,
                          display: "none", // Optional: Hides the separator line
                        }),
                      }}
                    />
                  </label>
                  <label>
                    <p>To :</p>
                    <Select
                      value={selectedAirport1}
                      onChange={handleSelectChange1}
                      options={airports}
                      placeholder="Select an airport..."
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          width: "100%",
                          borderColor: "transparent",
                          boxShadow: "none",
                        }),
                        dropdownIndicator: (provided) => ({
                          ...provided,
                          display: "none",
                        }),
                        indicatorSeparator: (provided) => ({
                          ...provided,
                          display: "none",
                        }),
                      }}
                    />
                  </label>
                </div>
                <div className="search_dates">
                  <label>
                    <p>Date of Departure</p>
                    <DatePicker
                      selected={extractedFromDateDetails || selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="MMM d, yyyy"
                      customInput={<CustomInput />}
                    />
                  </label>
                  <label>
                    <p>Date of Return</p>
                    <DatePicker
                      selected={extractedToDateDetails || selectedReturndate}
                      onChange={(date) => setselectedReturndate(date)}
                      dateFormat="MMM d, yyyy"
                      customInput={<CustomInput />}
                    />
                  </label>
                  <label>
                    <p>Total Travellers:</p>
                    <div
                      className="travellers_total"
                      onClick={() => handleSave("open")}
                    >
                      <p>
                        {totalTravellers || 1}
                        <span>{travellerText || 1}</span>
                      </p>
                    </div>
                  </label>
                  <div
                    className={
                      travellerOptionsVisible === "open"
                        ? "show travelers"
                        : "hidden travelers"
                    }
                  >
                    <div className="travelers_options">
                      <p>On the day of travel</p>
                      <div className="traveller_option">
                        <p>Adults (12+ Years): </p>
                        <div className="button">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDecrement("adult");
                            }}
                          >
                            -
                          </button>
                          <span>{adult}</span>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleIncrement("adult");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="traveller_option">
                        <p>Children (2-12 Years): </p>
                        <div className="button">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDecrement("child");
                            }}
                          >
                            -
                          </button>
                          <span>{child}</span>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleIncrement("child");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="traveller_option">
                        <p>Infants (below 2Y): </p>
                        <div className="button">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleDecrement("infant");
                            }}
                          >
                            -
                          </button>
                          <span>{infant}</span>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              handleIncrement("infant");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="save_btn">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleSave("close");
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-row mx-[32px] w-[95%] gap-4 mt-5">
          <div className="FilterContainer flex flex-col bg-[#125fa7] w-[20%] h-[741px] rounded-[8px]">
            <div className="filter-innerContainer px-[19px] py-[22px]">
              <div className="headingContainer flex justify-center">
                <div className=" flex flex-row justify-between w-[199px] ">
                  <h1 class="font-open-sans text-[white] text-[20px] h-[27px] w-[100%] font-semibold leading-[27.24px] ">
                    Filters
                  </h1>
                  <IoFilterOutline className="text-white w-[26px] h-[26px] " />
                </div>
              </div>
              <div className="searchContainer mt-[25px] gap-[10px] bg-white flex flex-row items-center w-[100%] h-[32px] rounded-[8px] px-2">
                <IoSearch className="w-[24px] h-[24px] text-black " />
                <input
                  type="search"
                  className="border-none outline-none w-[100%]"
                  placeholder="Search For Product"
                />
              </div>

              <div className="filters"></div>
              <div className="buttonContainer"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[80%]">
            <div className="bg-white rounded-lg p-[11px]">
              <p>Thu, Aug 23</p>
              <p>5,728</p>
            </div>
            <div className="bg-[#395183] p-[47px] rounded-lg">
              <div className="flex flex-col justify-center items-center ">
                <div className="w-[100%] bg-white mb-[5px] mt-[10px] rounded-[12px]">
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
                        View Seat
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center rounded-[12px]  w-[100%] bg-[#FED9D9]">
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
                          <div className="flex flex-row text-white p-3 justify-between rounded-[10px] border border-[#000] bg-[#125fa7]">
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
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSED5pjziPbYGVfgslNwrhYhiz_OoKwGb6GUg&s"
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
                                Important : Lorem ipsum dolor sit amet
                                consectetur. Aliquam proin vitae turpis nulla
                                mi. In sit aliquam sed est vitae libero
                                sagittis. Id nullam non mattis cursus
                                consectetur. Leo eget egestas sagittis consequat
                                lacus.
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BusSearch;
