import React, { useState } from "react";

const MobileRecharge = () => {
  const [paymentType, setPaymentType] = useState("prepaid");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [circle, setCircle] = useState("");
  const [amount, setAmount] = useState("");
  const [activeButton, setActiveButton] = useState("Popular");

  const buttons = [
    "Popular",
    "Smart Phone",
    "True Unlimited Upgrade",
    "Data Add on",
    "Entertainment",
    "Jio Bharat",
    "Jio Phone",
  ];

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

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Basic validation
    if (!phoneNumber || !operator || !circle || !amount) {
      alert("Please fill out all fields.");
      return;
    }

    // You can handle the form submission logic here
    console.log({
      paymentType,
      phoneNumber,
      operator,
      circle,
      amount,
    });

    // Clear the form fields after submission
    setPhoneNumber("");
    setOperator("");
    setCircle("");
    setAmount("");
  };

  return (
    <div className="w-[100%] h-[auto]">
      <div className="headingContainer w-[100%] h-[83px] flex gap-[25%] pl-[3%] pt-[1%] bg-[#D4DEEC]">
        <h1 className="font-open-sans text-2xl font-semibold">
          Mobile Recharges
        </h1>
        <h1 className="font-open-sans text-2xl font-semibold">
          Recharge Plans
        </h1>
      </div>
      <div className="mobileReachargeAndPlans flex flex-row gap-x-[23px] mt-[-1.8%] mx-5 w-[98%]">
        <form
          className="mobileRecharges w-[38.2%] rounded-[8px] bg-white px-[36px] py-[29px]"
          onSubmit={handleSubmit}
        >
          <h1 className="font-sans text-2xl font-semibold">
            Recharge or Pay Mobile Bill
          </h1>
          <div className="radioBtnContainer flex flex-row justify-center mt-[22px] mb-[22px] gap-[40px]">
            <div className="flex items-center">
              <input
                type="radio"
                id="prepaid"
                name="paymentType"
                value="prepaid"
                checked={paymentType === "prepaid"}
                onChange={handlePaymentTypeChange}
              />
              <label htmlFor="prepaid" className="ml-2">
                Prepaid
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="postpaid"
                name="paymentType"
                value="postpaid"
                checked={paymentType === "postpaid"}
                onChange={handlePaymentTypeChange}
              />
              <label htmlFor="postpaid" className="ml-2">
                Postpaid
              </label>
            </div>
          </div>

          <div className="mobileNumber flex flex-col mb-4">
            <label
              htmlFor="enterPhoneNumber"
              className="font-sans text-base font-normal"
            >
              Enter Phone Number
            </label>
            <input
              type="tel"
              id="enterPhoneNumber"
              className="w-[100%] h-[59px] border border-black rounded-[5px]"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="operator flex flex-col mb-4">
            <label
              htmlFor="Operator"
              className="font-sans text-base font-normal"
            >
              Operator
            </label>
            <input
              type="text"
              id="Operator"
              className="w-[100%] h-[59px] border border-black rounded-[5px]"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              required
            />
          </div>

          <div className="circle flex flex-col mb-4">
            <label htmlFor="circle" className="font-sans text-base font-normal">
              Circle
            </label>
            <input
              type="text"
              id="circle"
              className="w-[100%] h-[59px] border border-black rounded-[5px]"
              value={circle}
              onChange={(e) => setCircle(e.target.value)}
              required
            />
          </div>

          <div className="amount flex flex-col mb-4">
            <label htmlFor="amount" className="font-sans text-base font-normal">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              className="w-[100%] h-[59px] border border-black rounded-[5px]"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="payBtn flex justify-center">
            <button
              type="submit"
              className="font-open-sans text-[24px] font-semibold px-[16px] py-[12px] bg-[#7D9DF9] rounded-[4px] text-white"
            >
              Proceed for Payment
            </button>
          </div>
        </form>

        <div className="rechargePlans w-[54.2%] h-[537px] rounded-[10px] bg-white">
          <div className="headerScroller flex flex-row px-[20px] py-[18px] space-x-[8px] overflow-x-auto h-[77px] items-center">
            {buttons.map((button) => (
              <button
                key={button}
                className={`font-sans text-base font-semibold rounded-[20px] p-[10px] whitespace-nowrap ${
                  activeButton === button
                    ? "bg-[#3E67B0] text-white"
                    : "border border-black text-black bg-transparent"
                }`}
                onClick={() => setActiveButton(button)}
              >
                {button}
              </button>
            ))}
          </div>
          <div className="plans bg-[#3E67B0] rounded-br-[10px] rounded-bl-[10px] p-5 h-[100%] space-y-[8px] overflow-x-auto scrollbar-hidden">
            <div className="planCard bg-white px-[30px] rounded-[8px] py-[16px]">
              <div className="content-one flex flex-row gap-[5%] items-center">
                <h1 className="font-open-sans text-2xl font-semibold text-[#FF4545]">
                  Plan <span className="text-black">RS.349</span>{" "}
                </h1>
                <h1 className="font-open-sans text-sm font-semibold ">
                  Validity: 28 Days
                </h1>
                <h1 className="font-open-sans text-sm font-semibold ">
                  Data 2GB/Day
                </h1>
              </div>
              <div className="content-two mt-[4px]">
                <p className="font-open-sans text-base font-normal">
                  Plan with Unlimited True 5G Data |Voice: Unlimited Calls | SMS
                  : 100 SMS/day | Note - You can recharge with above plan to
                  avail the same benefits of earlier Rs 299 Plan
                </p>
              </div>
              <div className="content-three mt-[4px] flex justify-end">
                <button className="p-[10px] font-open-sans text-base font-semibold text-white bg-[#3E67B0] rounded-[20px]">
                  Proceed to pay
                </button>
              </div>
            </div>
            <div className="planCard bg-white px-[30px] rounded-[8px] py-[16px]">
              <div className="content-one flex flex-row gap-[5%] items-center">
                <h1 className="font-open-sans text-2xl font-semibold text-[#FF4545]">
                  Plan <span className="text-black">RS.349</span>{" "}
                </h1>
                <h1 className="font-open-sans text-sm font-semibold ">
                  Validity: 28 Days
                </h1>
                <h1 className="font-open-sans text-sm font-semibold ">
                  Data 2GB/Day
                </h1>
              </div>
              <div className="content-two mt-[4px]">
                <p className="font-open-sans text-base font-normal">
                  Plan with Unlimited True 5G Data |Voice: Unlimited Calls | SMS
                  : 100 SMS/day | Note - You can recharge with above plan to
                  avail the same benefits of earlier Rs 299 Plan
                </p>
              </div>
              <div className="content-three mt-[4px] flex justify-end">
                <button className="p-[10px] font-open-sans text-base font-semibold text-white bg-[#3E67B0] rounded-[20px]">
                  Proceed to pay
                </button>
              </div>
            </div>
            <div className="planCard bg-white px-[30px] rounded-[8px] py-[16px]">
              <div className="content-one flex flex-row gap-[5%] items-center">
                <h1 className="font-open-sans text-2xl font-semibold text-[#FF4545]">
                  Plan <span className="text-black">RS.349</span>{" "}
                </h1>
                <h1 className="font-open-sans text-sm font-semibold ">
                  Validity: 28 Days
                </h1>
                <h1 className="font-open-sans text-sm font-semibold ">
                  Data 2GB/Day
                </h1>
              </div>
              <div className="content-two mt-[4px]">
                <p className="font-open-sans text-base font-normal">
                  Plan with Unlimited True 5G Data |Voice: Unlimited Calls | SMS
                  : 100 SMS/day | Note - You can recharge with above plan to
                  avail the same benefits of earlier Rs 299 Plan
                </p>
              </div>
              <div className="content-three mt-[4px] flex justify-end">
                <button className="p-[10px] font-open-sans text-base font-semibold text-white bg-[#3E67B0] rounded-[20px]">
                  Proceed to pay
                </button>
              </div>
            </div>
            <div className="planCard bg-white px-[30px] rounded-[8px] py-[16px]">
              <div className="content-one flex flex-row gap-[5%] items-center">
                <h1 className="font-open-sans text-2xl font-semibold text-[#FF4545]">
                  Plan <span className="text-black">RS.349</span>{" "}
                </h1>
                <h1 className="font-open-sans text-sm font-semibold ">
                  Validity: 28 Days
                </h1>
                <h1 className="font-open-sans text-sm font-semibold ">
                  Data 2GB/Day
                </h1>
              </div>
              <div className="content-two mt-[4px]">
                <p className="font-open-sans text-base font-normal">
                  Plan with Unlimited True 5G Data |Voice: Unlimited Calls | SMS
                  : 100 SMS/day | Note - You can recharge with above plan to
                  avail the same benefits of earlier Rs 299 Plan
                </p>
              </div>
              <div className="content-three mt-[4px] flex justify-end">
                <button className="p-[10px] font-open-sans text-base font-semibold text-white bg-[#3E67B0] rounded-[20px]">
                  Proceed to pay
                </button>
              </div>
            </div>
            <div className="planCard bg-white px-[30px] rounded-[8px] py-[16px]">
              <div className="content-one flex flex-row gap-[5%] items-center">
                <h1 className="font-open-sans text-2xl font-semibold text-[#FF4545]">
                  Plan <span className="text-black">RS.349</span>{" "}
                </h1>
                <h1 className="font-open-sans text-sm font-semibold ">
                  Validity: 28 Days
                </h1>
                <h1 className="font-open-sans text-sm font-semibold ">
                  Data 2GB/Day
                </h1>
              </div>
              <div className="content-two mt-[4px]">
                <p className="font-open-sans text-base font-normal">
                  Plan with Unlimited True 5G Data |Voice: Unlimited Calls | SMS
                  : 100 SMS/day | Note - You can recharge with above plan to
                  avail the same benefits of earlier Rs 299 Plan
                </p>
              </div>
              <div className="content-three mt-[4px] flex justify-end">
                <button className="p-[10px] font-open-sans text-base font-semibold text-white bg-[#3E67B0] rounded-[20px]">
                  Proceed to pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lastTenRechargePayments mt-[19px] mx-5">
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
  );
};

export default MobileRecharge;
