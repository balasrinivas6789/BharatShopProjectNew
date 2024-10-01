import React from "react";
import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import { format } from "date-fns";
import HotelCard from "../HotelCard";

const HotelsScreen = () => {
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
  const [activeTour, setActiveTour] = useState("devotional");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedReturndate, setselectedReturndate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => (
    <div className="date_holder" onClick={onClick}>
      <div className="date">
        <h1>{format(new Date(value), `dd''`)}</h1>
        {format(new Date(value), `MMM'' yy`)}
      </div>
      <div className="day">{format(new Date(value), "EEEE")}</div>
    </div>
  );

  const [selectedAirport, setSelectedAirport] = useState(airports[0]);

  const handleSelectChange = (selectedOption) => {
    setSelectedAirport(selectedOption);
  };
  return (
    <div className=" m-auto">
      <div className="relative  searchContainer h-[211px] mx-auto mt-[14px] rounded-[10px] bg-[#14479F]">
        <div className="headingContainer  flex justify-between text-white">
          <h1 class="font-sans text-[32px] font-bold leading-[43.58px] pt-[21px] pl-[24px] text-left">
            Hotel in delhi
          </h1>
         
        </div>
        <form className="form_show ">
          <div className="flight_data">
            <div className="flight_search">
              <div className="from_to hotel">
                <label>
                  <p>City, Property name or Location</p>
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
              </div>
              <div className="search_dates">
                <label>
                  <p>Check In</p>
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="MMM d, yyyy"
                    customInput={<CustomInput />}
                  />
                </label>
                <label>
                  <p>check Out</p>
                  <DatePicker
                    selected={selectedReturndate}
                    onChange={(date) => setselectedReturndate(date)}
                    dateFormat="MMM d, yyyy"
                    customInput={<CustomInput />}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="submit_button absolute top-[5px] right-[5px]">
              <button className="submit_btn  !mt-[21px] " type="submit">
                Search
              </button>
            </div>
        </form>
      </div>
      <HotelCard/>
    </div>
  );
};

export default HotelsScreen;
