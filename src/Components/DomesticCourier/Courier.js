import React from "react";

const MakeBookingsCourier = () => {
  return (
    <div className="m-[0.5%] rounded-md p-2 bg-[#1749A0]">
      <div className="rounded-md">
        <p className="bg-[#83AFFD] rounded-t-md p-[10px]">Sender Address</p>

        <div className="bg-white p-3">
          <div className="flex justify-between p-3">
            <p className="text-black">Notify on whatsapp</p>
            <p>Notify by whatsapp</p>
          </div>
          <div className="flex flex-row gap-2 mb-4">
            <input type="radio"></input> <label>Ms </label>
            <input type="radio"></input> <label>Miss </label>
            <input type="radio"></input> <label>Mrs </label>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex flex-row w-[100%] gap-2 mr-4">
              <div className="w-[100%]">
                <label>Enter your First Name</label>
                <input
                  className="p-2 w-[100%] border border-slate-950 rounded-md"
                  type="text"
                />
              </div>
              <div className="w-[100%]">
                <label>Enter your last Name</label>
                <input
                  className="p-2 w-[100%] border border-slate-950 rounded-md"
                  type="text"
                />
              </div>
              <div className="w-[100%]">
                <label>Enter Email Id</label>
                <input
                  className="p-2 w-[100%] border border-slate-950 rounded-md"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-row gap-2 w-[100%]">
              <div className="w-[100%]">
                <label>Enter Phone Number</label>
                <input
                  className="p-2 border w-[100%] border-slate-950 rounded-md"
                  type="text"
                />
              </div>

              <div className="w-[100%]">
                <label>Enter Country</label>
                <input
                  className="p-2 border w-[100%] border-slate-950 rounded-md"
                  type="text"
                />
              </div>

              <div className="w-[100%]">
                <label>Enter City</label>
                <input
                  className="p-2 border w-[100%] border-slate-950 rounded-md"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-row gap-2 w-[100%]">
              <div className="w-[150%]">
                <label>Enter Addresses</label>
                <input
                  className="p-2 border w-[100%] border-slate-950 rounded-md"
                  type="text"
                />
              </div>

              <div className="w-[50%]">
                <label>ZIPCODE </label>
                <input
                  className="p-2 border w-[100%] border-slate-950 rounded-md"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-end gap-3 text-white">
              <button className="bg-[#FF4545] w-[10%] rounded-md p-[10px]">Save</button>
              <button className="bg-[#4C8DFF] w-[10%] rounded-md p-[10px]">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeBookingsCourier;