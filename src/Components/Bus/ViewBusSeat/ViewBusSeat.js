import React, { useState } from "react";
import seatSelected from "../../../images/BusImages/busesservices/busSelectedSeat.svg";
import seat from "../../../images/BusImages/busesservices/Component 49.svg";
import dom from "../../../images/Vector 9.svg";
import unavailableSeat from "../../../images/FlightImages/unavailableSeat.svg";
import otherSeatSelected from "../../../images/BusImages/busesservices/otherbusSelected.svg";
import otherSeatAvaliable from "../../../images/BusImages/busesservices/otherSeatAvailable.svg";
import otherSeatUnAvaliable from "../../../images/BusImages/busesservices/otherUnavailable.svg";

const ViewBusSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedOtherSeats, setSelectedOtherSeats] = useState([]);

  const totalSeats = 15;
  const seatsPerRow = 2;
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

  const handleSeatOtherClick = (rowIndex, seatIndex) => {
    const seatId = `${rowIndex}-${seatIndex}`;
    setSelectedOtherSeats((prevSelected) => {
      if (prevSelected.includes(seatId)) {
        return prevSelected.filter((id) => id !== seatId);
      } else {
        return [...prevSelected, seatId];
      }
    });
  };

  return (
    <div className="w-[100%]">
      <header className="bg-[#d5deed] p-3 ps-[50px]">
        <p className="pt-4 text-black text-[24px] font-semibold leading-normal ">
          Booking Review from Delhi to Mumbai
        </p>
      </header>
      <div className="p-[31px] flex justify-between w-[100%]">
        <div className="w-[59%] rounded-lg px-[46px] py-[48px] bg-[#14479F]">
          <p className="text-white">Seat Selection</p>

          <div className="flex flex-row w-[100%] mt-4 gap-10">
            <div className="flex w-[33%] pt-10 bg-white border-t-4 border-black flex-col">
              {Array.from({ length: totalRows }, (_, rowIndex) => (
                <div key={rowIndex} className="flex items-center m-4">
                  <div className="flex justify-between w-full">
                    <div className="flex space-x-4">
                      {Array.from({ length: seatsPerRow / 2 }).map(
                        (_, seatIndex) => (
                          <div key={seatIndex}>
                            <img
                              src={
                                selectedSeats.includes(
                                  `${rowIndex}-${seatIndex}`
                                )
                                  ? seatSelected
                                  : seat
                              }
                              alt={`Seat ${rowIndex + 1}`}
                              onClick={() =>
                                handleSeatClick(rowIndex, seatIndex)
                              }
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex space-x-4">
                      {Array.from({ length: seatsPerRow / 2 }).map(
                        (_, seatIndex) => (
                          <div key={seatIndex + seatsPerRow / 2}>
                            <img
                              src={
                                selectedSeats.includes(
                                  `${rowIndex}-${seatIndex + seatsPerRow / 2}`
                                )
                                  ? seatSelected
                                  : seat
                              }
                              alt={`Seat ${rowIndex + 1}`}
                              onClick={() =>
                                handleSeatClick(
                                  rowIndex,
                                  seatIndex + seatsPerRow / 2
                                )
                              }
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex ms-10 space-x-4">
                      {Array.from({ length: seatsPerRow / 2 }).map(
                        (_, seatIndex) => (
                          <div key={seatIndex + seatsPerRow / 2}>
                            <img
                              src={
                                selectedOtherSeats.includes(
                                  `${rowIndex}-${seatIndex + seatsPerRow / 2}`
                                )
                                  ? otherSeatSelected
                                  : otherSeatAvaliable
                              }
                              alt={`Seat ${rowIndex + 1}`}
                              onClick={() =>
                                handleSeatOtherClick(
                                  rowIndex,
                                  seatIndex + seatsPerRow / 2
                                )
                              }
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex space-x-4">
                      {Array.from({ length: seatsPerRow / 2 }).map(
                        (_, seatIndex) => (
                          <div key={seatIndex + seatsPerRow / 2}>
                            <img
                              src={
                                selectedOtherSeats.includes(
                                  `${rowIndex}-${seatIndex + seatsPerRow / 2}`
                                )
                                  ? otherSeatSelected
                                  : otherSeatAvaliable
                              }
                              alt={`Seat ${rowIndex + 1}`}
                              onClick={() =>
                                handleSeatOtherClick(
                                  rowIndex,
                                  seatIndex + seatsPerRow / 2
                                )
                              }
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-center font-bold text-[14px] pb-2">Lower</p>
            </div>
            <div className="flex w-[33%] pt-10 bg-white border-t-4 border-black flex-col">
              {Array.from({ length: totalRows }, (_, rowIndex) => (
                <div key={rowIndex} className="flex items-center m-4">
                  <div className="flex justify-between w-full">
                    <div className="flex space-x-4">
                      {Array.from({ length: seatsPerRow / 2 }).map(
                        (_, seatIndex) => (
                          <div key={seatIndex + seatsPerRow / 2}>
                            <img
                              src={
                                selectedOtherSeats.includes(
                                  `${rowIndex}-${seatIndex + seatsPerRow / 2}`
                                )
                                  ? otherSeatSelected
                                  : otherSeatAvaliable
                              }
                              alt={`Seat ${rowIndex + 1}`}
                              onClick={() =>
                                handleSeatOtherClick(
                                  rowIndex,
                                  seatIndex + seatsPerRow / 2
                                )
                              }
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex space-x-4">
                      {Array.from({ length: seatsPerRow / 2 }).map(
                        (_, seatIndex) => (
                          <div key={seatIndex + seatsPerRow / 2}>
                            <img
                              src={
                                selectedOtherSeats.includes(
                                  `${rowIndex}-${seatIndex + seatsPerRow / 2}`
                                )
                                  ? otherSeatSelected
                                  : otherSeatAvaliable
                              }
                              alt={`Seat ${rowIndex + 1}`}
                              onClick={() =>
                                handleSeatOtherClick(
                                  rowIndex,
                                  seatIndex + seatsPerRow / 2
                                )
                              }
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex ms-10 space-x-4">
                      {Array.from({ length: seatsPerRow / 2 }).map(
                        (_, seatIndex) => (
                          <div key={seatIndex + seatsPerRow / 2}>
                            <img
                              src={
                                selectedOtherSeats.includes(
                                  `${rowIndex}-${seatIndex + seatsPerRow / 2}`
                                )
                                  ? otherSeatSelected
                                  : otherSeatAvaliable
                              }
                              alt={`Seat ${rowIndex + 1}`}
                              onClick={() =>
                                handleSeatOtherClick(
                                  rowIndex,
                                  seatIndex + seatsPerRow / 2
                                )
                              }
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        )
                      )}
                    </div>

                    <div className="flex space-x-4">
                      {Array.from({ length: seatsPerRow / 2 }).map(
                        (_, seatIndex) => (
                          <div key={seatIndex + seatsPerRow / 2}>
                            <img
                              src={
                                selectedOtherSeats.includes(
                                  `${rowIndex}-${seatIndex + seatsPerRow / 2}`
                                )
                                  ? otherSeatSelected
                                  : otherSeatAvaliable
                              }
                              alt={`Seat ${rowIndex + 1}`}
                              onClick={() =>
                                handleSeatOtherClick(
                                  rowIndex,
                                  seatIndex + seatsPerRow / 2
                                )
                              }
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-center font-bold text-[14px] pb-2">Upper</p>
            </div>
            <div className="flex w-[33%] flex-col self-end h-[100%]">
              <div className="bg-white rounded-lg p-[20px]">
                <p className="text-[20px] font-bold" >seat legend</p>
                <p className="font-semibold text-[14px] pt-3">Available</p>
                <p className="font-semibold text-[14px]">Selected</p>
                <p className="font-semibold text-[14px]">Un Available</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <div
            className="px-3 me-2  w-[100%] text-white bg-[#1447a0] shadow-md rounded-lg overflow-hidden"
            style={{
              position: "sticky",
              top: "150px",
              marginTop: "-50px",
            }}
          >
            <div className="p-6 text-white">
              <h2 className="text-3xl font-bold mb-2">Fare Details</h2>
              <div className="container rounded-lg p-3  text-black mx-auto bg-white">
                <div className="grid  gap-5">
                  <div>Basic Fare</div>

                  <div className="flex justify-between">
                    <p>Adults(1x6295)</p>
                    <p>99</p>
                  </div>
                </div>
              </div>

              <div className="container rounded-lg p-3 mt-2 text-black mx-auto bg-white">
                <div className="grid  gap-5">
                  <div>Taxes and subcharges</div>

                  <div className="flex justify-between">
                    <p>Airline Taxes and Surcharges</p>
                    <p>99</p>
                  </div>
                </div>
              </div>

              <div className="container rounded-lg p-3 mt-2 text-black mx-auto bg-white">
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

              <div className="container rounded-lg p-3 mt-2 text-black mx-auto bg-white">
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
                  className="px-5 text-2xl py-3 font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-400 dark:bg-[#7e9df8] dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Procced For Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBusSeat;