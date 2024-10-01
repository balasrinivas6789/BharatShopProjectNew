import React, { useState } from "react";
import HotelImg from "../../images/HotelImages/HotelImg.png";
import { IoFilterOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import {  useNavigate } from "react-router-dom";

const HotelCard = () => {
  const [rating, setRating] = useState(0); // Initial rating
  const [hover, setHover] = useState(0); // Hover state

  const navigate = useNavigate();
  return (
    <div className="flex flex-row gap-[24px] mt-[20px]">
      <div className="FilterContainer bg-[#125fa7]   rounded-[8px]">
        <div className="filter-innerContainer px-[19px] py-[22px]">
          <div className="headingContainer flex justify-center">
            <div className=" flex flex-row justify-between w-[199px] ">
              <h1 class="font-open-sans text-[white] text-[20px] h-[27px] w-[60px] font-semibold leading-[27.24px] ">
                Filters
              </h1>
              <IoFilterOutline className="text-white w-[26px] h-[26px] " />
            </div>
          </div>
          <div className="searchContainer mt-[25px] gap-[10px] bg-white flex flex-row items-center w-[218px] h-[32px] rounded-[8px] px-2">
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
      <div className="hotelCardContainer ">
        <div className=" p-auto py-[15px] w-[100%] rounded-[8px] bg-[#2468a6]">
          <div className="flex  bg-white w-[98%] h-[242px] p-[14px_20px] items-center rounded-[12px] ml-2   gap-4">
            <div className="w-[25%] h-[100%]">
              <img
                src={HotelImg}
                alt="HotelImg"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="w-[50%]">
              <div>
                <h1 class="text-black font-open-sans text-[1xl] font-semibold leading-normal ">
                  Super Collection O Dabolim Near Goa International Airport
                </h1>
                <p class="overflow-hidden text-[#14479F] truncate font-roboto text-sm font-bold leading-normal mt-[4px]">
                  Hitec City
                </p>
              </div>

              <div className="star-rating mt-[10px]">
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;

                  return (
                    <button
                      type="button"
                      key={index}
                      className={
                        currentRating <= (hover || rating)
                          ? "text-black-500"
                          : "text-gray-400"
                      }
                      onClick={() => setRating(currentRating)}
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(0)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </button>
                  );
                })}
              </div>

              <div class="flex items-start gap-2 flex-1 mt-[10px] ">
                <p class="flex p-[6px_10px] justify-center items-center gap-2.5 bg-[#666] text-white font-open-sans text-[10px] font-semibold leading-normal">
                  Food and Dining
                </p>
                <p class="flex p-[6px_10px] justify-center items-center gap-2.5 bg-[#F9E1FF] text-black font-open-sans text-[10px] font-semibold leading-normal">
                  Couple Friendly
                </p>
                <p class="flex p-[6px_10px] justify-center items-center gap-2.5 bg-[#666] text-white font-open-sans text-[10px] font-semibold leading-normal">
                  Pet Friendly
                </p>
              </div>
              <div class="overflow-hidden text-black font-roboto text-sm font-normal leading-normal mt-[14px]">
                Lorem ipsum dolor sit amet consectetur. Pharetra nisl enim
                commodo adipiscing amet..
              </div>
            </div>

            <div className="w-[20%] p-3">
              <div className="w-[80%] m-auto">
                <p class="text-black font-open-sans text-sm font-semibold leading-normal line-through">
                  ₹ 8,800
                </p>
                <p class="text-black font-open-sans text-xs font-semibold leading-normal">
                  Per Night:
                </p>
                <p class="text-black font-open-sans text-2xl font-semibold leading-normal">
                  ₹ 6,256
                </p>
                <p class="text-black font-open-sans text-xs font-semibold leading-normal ">
                  +1200 Taxes and Charges
                </p>
              </div>
              <div>
                <button onClick={()=>navigate('/hotelBooking')} class="text-white font-open-sans text-base font-semibold leading-normal  mt-[10px] flex p-2.5 justify-center items-center gap-2.5 self-stretch rounded-md bg-[#456CAF]">
                  Book Room
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
