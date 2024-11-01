import React, { useRef, useState } from "react";
import airWayPng from "../../images/FlightImages/airWays.png";
import flightDirectionPng from "../../images/FlightImages/Flight way.png";
import cabbinPng from "../../images/FlightImages/Cabin.png";
import checkInPng from "../../images/FlightImages/Checkin.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { IoFilterOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const FlightTicketDateWiseNew = () => {
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

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

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


  let extractedFromDateDetails = null;
  if (selecteddate != undefined) {
 
    extractedFromDateDetails = new Date(selecteddate)
      .toISOString()
      .split("T")[0];
    const extractedFromYear = extractedFromDateDetails.split("-")[0];
    const extractedFromMonth = extractedFromDateDetails.split("-")[1];
    const extractedFromDate = extractedFromDateDetails.split("-")[2];
  }

  let extractedToDateDetails = null;
  if (selectedreturndate != undefined) {

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
          DEL, Delhi Airport, India
        </div>
      ),
    },
    {
      value: "Mumbai",
      label: (
        <div>
          <h1>Mumbai</h1>
          MUM, Mumbai International Airport, India
        </div>
      ),
    },
    {
      value: "Hyderabad",
      label: (
        <div>
          <h1>Hyderabad</h1>
          HYD, International Airport, India
        </div>
      ),
    },
  ];

  const [activeService, setActiveService] = useState("flight");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("Flight Details");
  const [showMoreInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();
 
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
                  Flight From {fromvalue || "Delhi"} to {tovalue || "Mumbai"}
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
                      value={valueOfFrom || selectedAirport}
                      onChange={handleSelectChange}
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
                  <label>
                    <p>To :</p>
                    <Select
                      value={valueOfto || selectedAirport1}
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
            <div className="relative w-full ">
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg"
                onClick={scrollLeft}
              >
                {"<"}
              </button>

              <div
                ref={scrollRef}
                className="bg-white px-[33px] flex flex-row overflow-x-auto scrollbar-hidden gap-4 rounded-lg p-[11px] scrollbar-hide"
              >
                {Array.from({ length: 20 }).map((_, index) => (
                  <div key={index} className="min-w-[100px]">
                    <p>Thu, Aug 23</p>
                    <p>5,728</p>
                  </div>
                ))}
              </div>

              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg"
                onClick={scrollRight}
              >
                {">"}
              </button>
            </div>
            <div className="bg-[#395183] p-[47px] rounded-lg">
              <div className=" bg-white mb-[10px] mt-[10px] rounded-[12px]">
                <div className="flex flex-row pt-[27px] pb-[27px] pl-[20px] pr-[20px] justify-between">
                  <div className="flex flex-col items-center">
                    <img className="h-[60px]" src={airWayPng} alt="airWayImg" />
                    <p className="text-black text-center font-ubuntu text-[14px] font-normal leading-normal">
                      Number
                    </p>
                  </div>
                  <div className="flex flex-row justify-between gap-[8px] ml-[41px] mr-[41px]">
                    <div className="flex flex-col items-start">
                      <p className="text-black font-open-sans text-[14px] font-semibold leading-normal">
                        00:00
                      </p>
                      <p className="text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]">
                        Tue, 14 Aug
                      </p>
                      <p className="text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]">
                        {fromvalue || "Delhi"}
                      </p>
                    </div>
                    <div className="flex flex-col  justify-center items-center">
                      <p className="text-black font-open-sans text-[14px] font-semibold leading-normal">
                        2hrs 15min
                      </p>
                      <img
                        src={flightDirectionPng}
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
                        {tovalue || "Mumbai"}
                      </p>
                    </div>
                  </div>
                  <div className="text-black font-open-sans text-[14px] font-semibold leading-normal">
                    <p className="mb-[12px]">Baggage</p>
                    <div className="flex items-center">
                      <img
                        src={cabbinPng}
                        alt="cabbinPng"
                        className="w-[16px] h-[16px] p-[2px] px-[2px] pb-[1.333px] flex justify-center items-center"
                      />
                      <span className="ml-[4px]">
                        cabin:
                        <span className="text-[10px]">
                          00kgs (0 pieces only)
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center mt-[4px]">
                      <img
                        src={checkInPng}
                        alt="checkInPng"
                        className="w-[16px] h-[16px] p-[2px] px-[2px] pb-[1.333px] justify-center items-center"
                      />
                      <span className="ml-[4px]">
                        check-in:
                        <span className="text-[10px]">
                          00kgs (0 pieces only)
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row mt-[16px] pl-[20px] pr-[20px] justify-between">
                  <div className="text-black font-open-sans text-[24px] font-semibold leading-normal">
                    <p>
                      ₹4,222 <span className="text-[10px]">Per Adult</span>
                    </p>
                  </div>
                  <div className="flex flex-row gap-[9px] items-center pb-[12px]">
                    <button
                      onClick={moreInfo}
                      className="text-[#3E67B0] font-open-sans text-[16px] font-semibold leading-normal"
                    >
                      More Information
                    </button>
                    <button
                      onClick={() => navigate(`/FlightBookingReview`)}
                      className="font-open-sans text-[16px] font-semibold leading-normal bg-[#456CAF] p-[10px] rounded-[5px] text-white"
                    >
                      Buy Ticket
                    </button>
                  </div>
                </div>
                <div className="flex justify-center rounded-[12px] bg-[#FED9D9]">
                  {showMoreInfo && (
                    <div>
                      <div className="flex justify-center rounded-[12px] bg-[#FED9D9]">
                        {[
                          "Flight Details",
                          "Fare Summary",
                          "Cancellation",
                          "Date Exchange",
                        ].map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 mt-[41px] mb-[18px] ml-[6px] rounded border ${
                              activeTab === tab
                                ? "bg-blue-500 text-white"
                                : "border-[#000] bg-[#fff3ea]"
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                      {activeTab === "Flight Details" && (
                        <div>
                          <div className="flex flex-row mb-[22px] ml-[26px] mr-[26px] pt-[27px] pb-[27px] pl-[20px] pr-[20px] justify-between rounded-[10px] border border-[#000] bg-[#fff3ea]">
                            <div className="flex flex-col items-center">
                              <img
                                className="h-[60px]"
                                src={airWayPng}
                                alt="airWayImg"
                              />
                              <p className="text-black text-center font-ubuntu text-[14px] font-normal leading-normal">
                                Number
                              </p>
                            </div>
                            <div className="flex flex-row justify-between gap-[8px] ml-[41px] mr-[41px]">
                              <div className="flex flex-col items-start">
                                <p className="text-black font-open-sans text-[14px] font-semibold leading-normal">
                                  00:00
                                </p>
                                <p className="text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]">
                                  Tue, 14 Aug
                                </p>
                                <p className="text-black font-open-sans text-[14px] font-semibold leading-normal mt-[10px]">
                                  Delhi
                                </p>
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                <p className="text-black font-open-sans text-[14px] font-semibold leading-normal">
                                  2hrs 15min
                                </p>
                                <img
                                  src={flightDirectionPng}
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
                                  Mumbai
                                </p>
                              </div>
                            </div>
                            <div className="text-black font-open-sans text-[14px] font-semibold leading-normal">
                              <p className="mb-[12px]">Baggage</p>
                              <div className="flex items-center">
                                <img
                                  src={cabbinPng}
                                  alt="cabbinPng"
                                  className="w-[16px] h-[16px] p-[2px] px-[2px] pb-[1.333px] flex justify-center items-center"
                                />
                                <span className="ml-[4px]">
                                  cabin:
                                  <span className="text-[10px]">
                                    00kgs (0 pieces only)
                                  </span>
                                </span>
                              </div>
                              <div className="flex items-center mt-[4px]">
                                <img
                                  src={checkInPng}
                                  alt="checkInPng"
                                  className="w-[16px] h-[16px] p-[2px] px-[2px] pb-[1.333px] justify-center items-center"
                                />
                                <span className="ml-[4px]">
                                  check-in:
                                  <span className="text-[10px]">
                                    00kgs (0 pieces only)
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {activeTab === "Fare Summary" && (
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
                      {activeTab === "Cancellation" && (
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
                                ADULT : Non Changeable
                              </p>
                              <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                                ADULT : ₹ 2,999 + ₹ 300 + Fare difference
                              </p>
                              <p className="mt-[10px] text-[#6F6F6F] font-open-sans text-[14px] font-semibold">
                                ADULT : ₹ 2,250 + ₹ 300 + Fare difference
                              </p>
                            </div>
                          </div>
                          <div>
                            <h1 className="text-black font-open-sans text-[10px] font-semibold">
                              *From the Time of Departure
                            </h1>
                            <div className="inline-flex p-[10px] justify-center items-center gap-[10px] rounded-[6px] bg-[#FF6F66]">
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

export default FlightTicketDateWiseNew;