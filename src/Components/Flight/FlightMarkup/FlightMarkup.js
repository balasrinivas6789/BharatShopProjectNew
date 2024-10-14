import React from "react";
import img from "../../../images/FlightImages/material-symbols-light_flight-takeoff.png";

const FlightMarkup = () => {
  return (
    <div>
      <div className="m-[34px]">
        <div>
          <p className="text-white">Domestic Flight Makeup Tool</p>
        </div>
        <div className="bg-[#ffffff] mt-3 rounded-md py-[24px] px-[27px]">
          <button className="bg-[#3E67B0] text-white p-[10px] border border-black">
            Domestic
          </button>
          <button className="bg-white p-[10px] ms-[1px] border border-black">
            International
          </button>
          <div className="grid grid-cols-3 mx-20 gap-3 mt-3">
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="adsf">
                Portal
              </label>
              <select
                className="border rounded-md border-black w-[100%] h-[59px]"
                id="adsf"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className="flex flex-col col-span-2">
              <label className="mb-2" htmlFor="ponit">
                All Domestic Airlines
              </label>
              <select
                className="border rounded-md border-black w-[100%] h-[59px]"
                id="ponit"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-2" htmlFor="fgjk">
                Basic (%)
              </label>
              <input
                className="border rounded-md border-black w-[100%] h-[59px]"
                id="fgjk"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="ouiy">
                YQ(%)
              </label>
              <input
                className="border rounded-md border-black w-[100%] h-[59px]"
                id="ouiy"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="fgd">
                INR (Rs.)
              </label>
              <input
                className="border rounded-md border-black w-[100%] h-[59px]"
                id="fgd"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="wqt">
                Coupon Fare (Rs.)
              </label>
              <input
                className="border rounded-md border-black w-[100%] h-[59px]"
                id="wqt"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="rtuyj">
                Moblie
              </label>
              <input
                className="border rounded-md border-black w-[100%] h-[59px]"
                id="rtuyj"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2" htmlFor="ryunf">
                Series fare (Rs.)
              </label>
              <input
                className="border rounded-md border-black w-[100%] h-[59px]"
                id="ryunf"
              />
            </div>
          </div>
          <button className="py-[12px] px-[16px] text-white mt-3 rounded-md bg-[#7D9DF9]">
            Update
          </button>
        </div>
        <div className="py-[26px]">
          <img src={img} alt="icon" />
        </div>
        <div className="bg-[#ffffff] w-[50%] rounded-md">
          <div className="overflow-x-auto">
            <table className="min-w-full w-[100%] text-center  rounded-md ">
              <thead>
                <tr>
                  <th className="border-2 text-[20px] w-[33.33%] border-[#18213B] p-4"></th>
                  <th className="border-2 text-[20px] w-[33.33%] border-[#18213B] p-4">
                    CMSN
                  </th>
                  <th className="border-2 text-[20px] w-[33.33%] border-[#18213B] p-4">
                    B2B
                  </th>
                </tr>
              </thead>
              <tbody className="font-semibold text-[14px]">
                <tr>
                  <td className="border-2 border-[#18213B] p-4">Basic(%)</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                </tr>
                <tr>
                  <td className="border-2 border-[#18213B] p-4">YQ(%)</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                </tr>
                <tr>
                  <td className="border-2 border-[#18213B] p-4">Fixed(Rs.)</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                </tr>
                <tr>
                  <td className="border-2 border-[#18213B] p-4">Coupon(Rs.)</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                </tr>
                <tr>
                  <td className="border-2 border-[#18213B] p-4">Corporate(Rs.)</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                </tr>
                <tr>
                  <td className="border-2 border-[#18213B] p-4">Series(Rs.)</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                </tr>
                <tr>
                  <td className="border-2 border-[#18213B] p-4">Service(Rs.)</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                  <td className="border-2 border-[#18213B] p-4">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightMarkup;