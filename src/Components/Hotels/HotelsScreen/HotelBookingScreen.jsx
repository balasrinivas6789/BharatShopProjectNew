import React from "react";
import hotelImg1 from "../../../images/HotelImages/Frame 736.png";
import hotelImg2 from "../../../images/HotelImages/Frame 735.png";
import hotelImg3 from "../../../images/HotelImages/Frame 733.png";

const HotelBookingScreen = () => {
  return (
    <div >
      <div className="headingContainer ps-6  bg-[#D4DEEC] flex items-center">
        <h1 class="font-sans text-2xl font-semibold leading-8  py-[2%]">
          Hotel Booking
        </h1>
      </div>
      <div className="contentContainer px-6 flex flex-row mt-[-1.5%] ">
        <div className="w-[60%]">
        <div className="oneContainer flex flex-col rounded-[12px] px-[46px] py-[28px] gap-[12px] bg-[#FFFFFF]">
          <div className="hotelimgcontainer  bg-[#14479F] w-[100%] h-[449px] rounded-[12px] ">
            <div className="hotelImgContainer  px-[24px] py-[28px] gap-[12px] text-white ">
              <div className="imgHeading">
                <h1 class="font-sans text-xl font-semibold leading-[27.24px] text-left">
                  Super Collection O Dabolim Near Goa International Airport
                </h1>
              </div>
              <div className="imgContainer py-[12px]  justify-center gap-[32px] flex flex-row">
                <div className="oneimg flex flex-col gap-y-[21px]">
                  <img
                    src={hotelImg1}
                    className="w-[236px] h-[146.5px] rounded-[4px]"
                    alt="hotelimgone"
                  />
                  <img
                    src={hotelImg2}
                    className="w-[236px] h-[146.5px] rounded-[4px]"
                    alt="hotelimgtwo"
                  />
                </div>

                <div className="twoImage">
                  <img
                    src={hotelImg3}
                    className="w-[286px] h-[314px] rounded-[4px]"
                    alt="hotelImgthree"
                  />
                </div>
              </div>
              <div>
                <h1 class="font-sans text-[10px] font-semibold leading-[13.62px]">
                  Lorem ipsum dolor sit amet consectetur. Aliquet turpis in
                  laoreet in feugiat in donec imperdiet. Vulputate scelerisque
                  ac dis feugiat eget auctor et sit. Amet ultrices eu ac purus
                  dui. Nec tellus nisl tortor orci purus.
                </h1>
              </div>
            </div>
          </div>

          <div className="travelerDetailsContainer  rounded-[12px] bg-[#14479F] mt-[12px] text-white">
            <div className="innerContainer px-[24px] pb-[58px] pt-[20px]">
              <div className="headingCon flex justify-between">
                <div className="partone">
                  <h1 class="font-sans text-2xl font-semibold leading-[32.68px] text-left pb-[12px]">
                    Traveler Details{" "}
                  </h1>
                  <div className="flex flex-row gap-[36px]">
                    <label className="font-sans text-sm font-semibold leading-[19.07px] ">
                      <input
                        className="w-[16px] h-[16px] "
                        type="radio"
                        value="Mr."
                        //   checked={selectedTitle === 'Mr.'}
                        //   onChange={handleChange}
                      />
                      Mr.
                    </label>

                    <label className="font-sans text-sm font-semibold leading-[19.07px] ">
                      <input
                        className="w-[16px] h-[16px] "
                        type="radio"
                        value="Miss"
                        //   checked={selectedTitle === 'Miss'}
                        //   onChange={handleChange}
                      />
                      Miss
                    </label>

                    <label className="font-sans text-sm font-semibold leading-[19.07px]">
                      <input
                        className="w-[16px] h-[16px] "
                        type="radio"
                        value="Mrs."
                        //   checked={selectedTitle === 'Mrs.'}
                        //   onChange={handleChange}
                      />
                      Mrs.
                    </label>
                  </div>
                </div>
                <div className="partTwo flex flex-col h-[64px] w-[86px] justify-between">
                  <label
                    htmlFor="numOfDays"
                    class="font-sans text-base font-normal leading-[21.79px]"
                  >
                    No. of Days
                  </label>
                  <input
                    type="text"
                    id="numOfDays"
                    className="w-[67px] h-[24px] rounded-[2px]  border-black border-[1px]"
                  />
                </div>
              </div>
              <div className=" rounded-[5px] grid grid-cols-2  flex-wrap  gap-[1rem] p-[24px] text-black bg-white m-auto mt-[16px]">
                <div className="firstName flex flex-col">
                  <label
                    htmlFor="firstName"
                    class="font-sans text-base font-normal leading-[21.79px] "
                  >
                    Enter your First Name(*)
                  </label>
                  <input
                    class="w-[100%] h-[59px] rounded-[5px]  border-black border-[1px] mt-[10px]"
                    type="text"
                    id="firstName"
                  />
                </div>
                <div className="lastName flex flex-col">
                  <label
                    htmlFor="lastName"
                    class="font-sans text-base font-normal leading-[21.79px] "
                  >
                    Enter your last Name(*)
                  </label>
                  <input
                    class="w-[100%] h-[59px] rounded-[5px]  border-black border-[1px] mt-[10px]"
                    type="text"
                    id="lastName"
                  />
                </div>
                <div className="emailID flex flex-col">
                  <label
                    htmlFor="emailId"
                    class="font-sans text-base font-normal leading-[21.79px] "
                  >
                    Enter Email Id(*)
                  </label>
                  <input
                    class="w-[100%] h-[59px] rounded-[5px]  border-black border-[1px] mt-[10px]"
                    type="text"
                    id="emailID"
                  />
                </div>
                <div className="mobileNumber flex flex-row">
                  <div className="DailNo flex flex-col">
                    <label
                      htmlFor="dailNo"
                      class="font-sans text-base font-normal leading-[21.79px] "
                    >
                      Dail No:
                    </label>
                    <select
                      id="dailNo"
                      className="w-[90%] h-[59px]  border-black border-[1px] rounded-[5px] mr-[10px] mt-[10px]"
                    >
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                      {/* Add more options here */}
                    </select>
                  </div>

                  <div className="phoneNumber flex flex-col ">
                    <label
                      htmlFor="phoneNumber"
                      class="font-sans text-base font-normal "
                    >
                      Enter Phone Number
                    </label>
                    <input
                      class="w-[100%] h-[59px] rounded-[5px] mt-[10px]  border-black border-[1px]"
                      type="text"
                      id="phoneNumber"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      <div className="w-[40%]">
      <div className="twoContainer flex flex-col  h-[512px] bg-[#14479F] rounded-[12px] ml-[19px] mt-[-2%]">
          <div className="twoInnerContainer px-[36px] py-[24px]">
            <div className="firstCon pb-[10px]">
              <h1 class="font-sans text-4xl font-bold leading-[43.58px] text-left text-white">
                Details
              </h1>
            </div>
            <div className="secondCon  gap-y-[8px] rounded-[8px] bg-white px-[16px] py-[12px]">
              <div className="fareDetails mb-[8px] items-center">
                <h1 className="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  Fare Details
                </h1>
              </div>
              <div className="amount flex justify-between mb-[8px] items-center">
                <h1 className="font-sans text-base font-normal leading-[21.79px] text-left">
                  1X Room, 1 Night
                </h1>
                <h1 className="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹2000
                </h1>
              </div>
              <div className="tax flex justify-between mb-[8px] items-center">
                <h1 className="font-sans text-base font-normal leading-[21.79px] text-left">
                  Tax + Other Charges
                </h1>
                <h1 className="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹150
                </h1>
              </div>
              <div className="totalAmount flex justify-between items-center">
                <h1 className="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  Total Amount
                </h1>
                <h1 className="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹2150
                </h1>
              </div>
            </div>
          </div>

          <div className="thirdCon  h-[131px] flex flex-row justify-between lg:shrink  gap-[auto] bg-white mx-10 rounded-[8px] ">
            <div className="one flex justify-center ps-2 items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.190148060063!2d78.37861227582759!3d17.45061080097938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ded9f6f0d7%3A0xa3d91e5d00d50b63!2sCyber%20Towers!5e0!3m2!1sen!2sin!4v1727679270366!5m2!1sen!2sin"
                class="w-[108px] h-[97px]"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="two flex flex-col justify-center items-center text-center">
              <h1 class="font-sans text-base font-normal">Hitech city</h1>
              <h1 class="font-sans text-xs font-semibold">
                Hyderabad, Telangana
              </h1>
            </div>
            <div className="three flex flex-col justify-center items-center">
              <h1 class="font-sans text-base font-semibold px-4 py-2 rounded text-[#14479F]">
                Open Map
              </h1>
            </div>
          </div>

          <div className="fourthCon flex justify-center pt-[32px] pb-[24px]">
            <button class="font-sans text-2xl font-semibold leading-[32.68px] w-[127px] h-[57px] px-[16px] py-[12px] text-white rounded-[4px] bg-[#7D9DF9]">
              Proceed
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HotelBookingScreen;
