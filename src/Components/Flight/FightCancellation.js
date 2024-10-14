import React from "react";

const FlightCancellation = () => {
  return (
    <div>
      <div className="m-[34px]">
        <div>
          <p className="text-white">Domestic Flight Markup Tool</p>
        </div>
        <div className="bg-[#ffffff] mt-3 rounded-md py-[24px] px-[27px]">
          <button className="bg-[#3E67B0] text-white text-[14px] p-[10px] border border-black">
            Domestic
          </button>
          <button className="bg-white p-[10px] text-[14px] ms-[1px] border border-black">
            International
          </button>
          <div className="flex flex-row mx-20 gap-3 mt-3">
            <div className="flex flex-col w-[24.01%]">
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

            <div className="flex flex-col w-[37.59%]">
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

            <div className="flex flex-col w-[37.59%]">
              <label className="mb-2" htmlFor="fgjk">
                INR(Rs.)
              </label>
              <input
                className="border rounded-md border-black w-[100%] h-[59px]"
                id="fgjk"
              />
            </div>
          </div>
          <button className="py-[12px] font-bold px-[16px] border-2 border-black text-black mt-3 rounded-md bg-white">
            Cancel
          </button>
          <button className="py-[12px] px-[16px] ml-[42px] border-2 border-[#7D9DF9] text-white mt-3 rounded-md bg-[#7D9DF9]">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCancellation;