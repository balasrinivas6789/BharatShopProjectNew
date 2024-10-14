import React from "react";

const DthRechargePage = () => {
  const data = [
    {
      date: "21/09/2024",
      details:
        "Plan with Unlimited True 5G Data | Voice: Unlimited Calls | SMS : 100 SMS/day | Note - You can recharge with above plan to avail the same benefits of earlier Rs 299 Plan",
      amount: "₹299",
      status: "Success",
    },
    {
      date: "21/09/2024",
      details:
        "Plan with Unlimited True 5G Data | Voice: Unlimited Calls | SMS : 100 SMS/day | Note - You can recharge with above plan to avail the same benefits of earlier Rs 299 Plan",
      amount: "₹299",
      status: "Failed",
    },
    {
      date: "21/09/2024",
      details:
        "Plan with Unlimited True 5G Data | Voice: Unlimited Calls | SMS : 100 SMS/day | Note - You can recharge with above plan to avail the same benefits of earlier Rs 299 Plan",
      amount: "₹299",
      status: "Success",
    },
    {
      date: "21/09/2024",
      details:
        "Plan with Unlimited True 5G Data | Voice: Unlimited Calls | SMS : 100 SMS/day | Note - You can recharge with above plan to avail the same benefits of earlier Rs 299 Plan",
      amount: "₹299",
      status: "Failed",
    },
    {
      date: "21/09/2024",
      details:
        "Plan with Unlimited True 5G Data | Voice: Unlimited Calls | SMS : 100 SMS/day | Note - You can recharge with above plan to avail the same benefits of earlier Rs 299 Plan",
      amount: "₹299",
      status: "Success",
    },
    {
      date: "21/09/2024",
      details:
        "Plan with Unlimited True 5G Data | Voice: Unlimited Calls | SMS : 100 SMS/day | Note - You can recharge with above plan to avail the same benefits of earlier Rs 299 Plan",
      amount: "₹299",
      status: "Failed",
    },
    {
      date: "21/09/2024",
      details:
        "Plan with Unlimited True 5G Data | Voice: Unlimited Calls | SMS : 100 SMS/day | Note - You can recharge with above plan to avail the same benefits of earlier Rs 299 Plan",
      amount: "₹299",
      status: "Success",
    },
    {
      date: "21/09/2024",
      details:
        "Plan with Unlimited True 5G Data | Voice: Unlimited Calls | SMS : 100 SMS/day | Note - You can recharge with above plan to avail the same benefits of earlier Rs 299 Plan",
      amount: "₹299",
      status: "Failed",
    },
    {
      date: "21/09/2024",
      details:
        "Plan with Unlimited True 5G Data | Voice: Unlimited Calls | SMS : 100 SMS/day | Note - You can recharge with above plan to avail the same benefits of earlier Rs 299 Plan",
      amount: "₹299",
      status: "Success",
    },
  ];
  return (
    <div className="wholeContainer  bg-[#17213c] h-[auto]">
      <div className="div bg-[#D4DEEC]  w-[100%] h-[83px]"></div>
      <div className="sub-whole-con mx-[2%]">
        <div className="dthRechargeContainer  w-[38.18%] mt-[-5%] ">
          <h1 className="font-sans text-2xl font-semibold mb-[16px]">
            DTH Recharge
          </h1>
          <div className="subDthCon bg-white flex flex-col px-[36px] py-[29px] rounded-[10px]">
            <h1 className="mb-[22px] font-sans text-2xl font-semibold text-black">
              Recharge DTH or TV
            </h1>
            <label className="mb-[10px] font-sans text-base font-normal text-black">
              Mobile Number / Subscriber ID
            </label>
            <input
              type="text"
              className="w-[100%] mb-[12px] h-[59px] border border-black rounded-[4px]"
            />
            <label className="mb-[10px] font-sans text-base font-normal text-black">
              Recharge DTH or TV
            </label>
            <input
              type="text"
              className="w-[100%] mb-[12px] h-[59px] border border-black rounded-[4px]"
            />
            <label className=" mb-[10px] font-sans text-base font-normal text-black">
              Amount
            </label>
            <input
              type="text"
              className="w-[100%] mb-[12px] h-[59px] border border-black rounded-[4px]"
            />
            <div className="btnCon flex justify-center items-center">
              <button className="mt-[22px] font-sans text-2xl font-semibold text-white bg-[#7D9DF9] rounded-[4px] w-[70%] py-[12px] px-[16px]">
                Proceed for Payment
              </button>
            </div>
          </div>
        </div>
        <div className="lastTenRechargePayments mt-[19px] ">
          <h1 className="font-open-sans text-2xl font-semibold text-white">
            Last 10 Recharge Payments
          </h1>
          <div className="tableContainer w-[96%] mb-[9%] mt-[8px] rounded-[8px]  h-[auto] bg-white">
            <table className="min-w-full border-collapse border  border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-200">
                  <th className=" px-4 py-3 font-sans text-sm font-semibold">
                    Date/Refer Id
                  </th>
                  <th className="font-sans text-sm font-semibold px-4 py-3 ">
                    Details
                  </th>
                  <th className="font-sans text-sm font-semibold px-4 py-3">
                    Amount
                  </th>
                  <th className="font-sans text-sm font-semibold px-4 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      item.status === "Failed" ? "bg-red-100" : "bg-white"
                    }`}
                  >
                    <td className="font-sans text-sm font-semibold px-4 py-3">
                      {item.date}
                    </td>
                    <td className="font-sans text-sm font-semibold px-4 py-3">
                      {item.details}
                    </td>
                    <td className="font-sans text-sm font-semibold px-4 py-3">
                      {item.amount}
                    </td>
                    <td className="font-sans text-sm font-semibold px-4 py-3">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DthRechargePage;
