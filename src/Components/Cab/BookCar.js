import React from "react";
import carImg from "../../images/car_img.png";
import wifilocation from "../../images/CabImage/hugeicons_wifi-location.svg";
import fuel from "../../images/CabImage/material-symbols_gas-meter.svg";
import { MdOutlineCancel } from "react-icons/md";
import './BookCar.css'

const BookCar = () => {
  return (
    <div>
      <header className="bg-[#d5deed]  p-3 ps-[13px]">
        <p className=" text-black text-[24px] pb-4 pt-5 ps-3 font-semibold leading-normal ">
          Booking Review from HYD to Vijayawada
        </p>
      </header>
      <div className="flex flex-row">
        <div className="w-[60%] flex justify-center">
          <div className="bg-white w-[92%]  mt-[-15px] py-[16px] px-[24px]">
          <div className="car_cardss flex justify-between">
            <div className="car_img w-[20%]">
              <img src={carImg} alt="" />
            </div>
            <div className="car_details w-1/2 flex flex-col justify-between">
              <h2>Toyota Innova</h2>
              <div className="flex justify-between">
                <div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M8.5 1.3335C11.7467 1.3335 14.5 4.02216 14.5 7.28416C14.5 10.5975 11.702 12.9235 9.118 14.5042C8.92934 14.6103 8.71649 14.6661 8.5 14.6661C8.28351 14.6661 8.07066 14.6103 7.882 14.5042C5.302 12.9088 2.5 10.6102 2.5 7.28483C2.5 4.02216 5.25333 1.3335 8.5 1.3335Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.83203 6.31883C6.59803 5.6955 7.51203 5.3335 8.49536 5.3335C9.4807 5.3335 10.398 5.69816 11.1654 6.32483M9.94803 8.00016C9.51345 7.72387 9.00966 7.57597 8.4947 7.5735C7.98239 7.57603 7.48111 7.72248 7.04803 7.99616M8.4987 10.0002H8.5027"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      <span>Extra KM Fare</span> ₹13.9/km after 143km
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M5.83464 14.6668C5.1013 14.6668 4.47352 14.4057 3.9513 13.8835C3.42908 13.3613 3.16797 12.7335 3.16797 12.0002V5.3335C3.16797 4.60016 3.42908 3.97238 3.9513 3.45016C4.47352 2.92794 5.1013 2.66683 5.83464 2.66683H6.5013V1.3335H7.83464V2.66683H9.16797V1.3335H10.5013V2.66683H11.168C11.9013 2.66683 12.5291 2.92794 13.0513 3.45016C13.5735 3.97238 13.8346 4.60016 13.8346 5.3335V12.0002C13.8346 12.7335 13.5735 13.3613 13.0513 13.8835C12.5291 14.4057 11.9013 14.6668 11.168 14.6668H5.83464ZM5.83464 6.66683H11.168V5.3335H5.83464V6.66683ZM8.5013 12.0002C8.96797 12.0002 9.36241 11.8419 9.68464 11.5255C10.0069 11.2091 10.168 10.8228 10.168 10.3668C10.168 10.0002 10.0624 9.68638 9.8513 9.4255C9.64019 9.16461 9.19019 8.63394 8.5013 7.8335C7.8013 8.6335 7.34864 9.16683 7.1433 9.4335C6.93797 9.70016 6.83508 10.0113 6.83464 10.3668C6.83464 10.8224 6.99575 11.2086 7.31797 11.5255C7.64019 11.8424 8.03464 12.0006 8.5013 12.0002Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      <span>Fuel Type</span> CNG with refill breaks
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M5.83464 14.6668C5.1013 14.6668 4.47352 14.4057 3.9513 13.8835C3.42908 13.3613 3.16797 12.7335 3.16797 12.0002V5.3335C3.16797 4.60016 3.42908 3.97238 3.9513 3.45016C4.47352 2.92794 5.1013 2.66683 5.83464 2.66683H6.5013V1.3335H7.83464V2.66683H9.16797V1.3335H10.5013V2.66683H11.168C11.9013 2.66683 12.5291 2.92794 13.0513 3.45016C13.5735 3.97238 13.8346 4.60016 13.8346 5.3335V12.0002C13.8346 12.7335 13.5735 13.3613 13.0513 13.8835C12.5291 14.4057 11.9013 14.6668 11.168 14.6668H5.83464ZM5.83464 6.66683H11.168V5.3335H5.83464V6.66683ZM8.5013 12.0002C8.96797 12.0002 9.36241 11.8419 9.68464 11.5255C10.0069 11.2091 10.168 10.8228 10.168 10.3668C10.168 10.0002 10.0624 9.68638 9.8513 9.4255C9.64019 9.16461 9.19019 8.63394 8.5013 7.8335C7.8013 8.6335 7.34864 9.16683 7.1433 9.4335C6.93797 9.70016 6.83508 10.0113 6.83464 10.3668C6.83464 10.8224 6.99575 11.2086 7.31797 11.5255C7.64019 11.8424 8.03464 12.0006 8.5013 12.0002Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      <span>Ride Cancel</span> Freetill 1 hour of departure
                    </p>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>Sudan</li>
                    <li>AC</li>
                    <li>4 Seater</li>
                    <li>149 kms Included</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="car_price w-[20%] flex flex-col justify-between">
              <h2 className="mt-[2rem]">₹1700</h2>
              <a>Book Car</a>
            </div>
          </div>
            <div className="mt-[39px] px-[37px] rounded-xl py-[20px] bg-[#f4f4f4]">
              <p className="text-[24px] font-semibold">Driver & Cab details</p>
              <p className="text-[16px] mt-[36px] font-medium">
                Cab operator will be assigned on booking completion. Cab and
                driver details will be shared up to 30 mins prior to departure.
              </p>
              <div className="bg-[#FF6F66] text-white mt-[36px] rounded-md p-[10px]">
                <p className="text-[16px]">
                  Some points to note for CNG vehicles before your travel:
                </p>
                <ul className="list-disc list-outside pl-6">
                  <li className="pl-2">
                    On longer journeys, refill breaks are required which
                    typically last 30+ minutes because of fewer stations and
                    longer queues.
                  </li>
                  <li className="pl-2">
                    Diesel cabs have stronger ACs as compared to CNG vehicles.
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#1749A0] rounded-xl mt-[39px] text-white px-[18px] py-[20px]">
              <p className="text-[24px] pb-[14px]">Trip Details </p>
              <label htmlFor="pickupaddress">
                Pickup Address(This will help our driver reach you on time)
              </label>
              <input
                id="pickupaddress"
                type="text"
                className="w-full mt-1 rounded-md p-2 mb-[14px]"
                placeholder="Enter the pickup Addresses"
              />

              <label htmlFor="dropAddress">Drop Address</label>
              <input
                id="dropAddress"
                type="text"
                className="w-full rounded-md p-2 mt-2"
                placeholder="Enter the drop address"
              />
            </div>
          </div>
        </div>
        <div className="w-[40%]">
          <div
            className="px-3 me-2 mx-auto w-[93.65%] text-white bg-[#1447a0] shadow-md rounded-lg overflow-hidden"
            style={{
              position: "sticky",
              top: "150px",
              marginTop: "-50px",
              left: "25px"
              
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
    </div>
  );
};

export default BookCar;