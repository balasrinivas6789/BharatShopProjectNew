import React, { useState, useRef, useEffect } from "react";
import { GiMoneyStack } from "react-icons/gi";
import { BsBank2 } from "react-icons/bs";
import { MdWallet, MdSearch } from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import { IoMdRefresh } from "react-icons/io";
import upiIcon from "../../../images/PaymentsImages/UPI Icon.png";
import icici from "../../../images/bankingNames/image (1).png";
import Hdfc from "../../../images/bankingNames/image (2).png";
import Kotak from "../../../images/bankingNames/image.png";
import Axis from "../../../images/bankingNames/idCKxuopm4 1.png";
import googlePay from "../../../images/bankingNames/upiLogos/googlePay.png";
import phonePay from "../../../images/bankingNames/upiLogos/phonepay.png";
import upiLogo from "../../../images/bankingNames/upiLogos/upi_logo_icon_170312 1.png";
import hdfcLogo from "../../../images/bankingNames/upiLogos/Hdfc.png";
import sbiLogo from "../../../images/bankingNames/upiLogos/sbi-logo-744E8B0C10-seeklogo 2.png";
import axisisLogo from "../../../images/bankingNames/upiLogos/Axisis.png";
import paytmLogo from "../../../images/bankingNames/upiLogos/Paytm_logo 1.png";

const CheckOutPage = () => {
  const [selectedTab, setSelectedTab] = useState("CashOnDelivery");
  const [otherStates, setOtherStates] = useState(false);
  const modalRef = useRef(null); // Create a reference for the modal

  const logosArray = [
    { id: 1, logo: googlePay },
    { id: 2, logo: phonePay },
    { id: 3, logo: upiIcon },
    { id: 4, logo: hdfcLogo },
    { id: 5, logo: sbiLogo },
    { id: 6, logo: axisisLogo },
    { id: 7, logo: paytmLogo },
  ];
  // Close the modal if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOtherStates(false); // Close the modal if clicked outside
      }
    };

    // Add the event listener when the modal is open
    if (otherStates) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount or when modal is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [otherStates]);

  return (
    <div className="w-[100%] h-[100dvh]">
      <div className="heading w-[76.66666666666667%] pl-[1%] mt-[1%] mb-[1%]">
        <h1 className="font-bold text-[32px]  text-left text-white">
          Check Out
        </h1>
      </div>
      <div className="checkOutContainer flex flex-row gap-7 ">
        <div className="paymentsCon flex flex-row w-[54.27%] ms-3 ">
          <div className="paymentsMethods w-[37.18%] rounded-tl-[8px] rounded-bl-[8px] bg-[#1749A0]  px-[10px] pt-[18px] pb-[81px]">
            <div className="headingPayments">
              <h1 className="font-semibold text-[20px] text-left text-white p-[10px]">
                Payments Methods
              </h1>
            </div>
            <div className="contentContainer flex flex-col pt-[53px] gap-3">
              <button
                onClick={() => setSelectedTab("CashOnDelivery")}
                className={`${
                  selectedTab === "CashOnDelivery" ? "bg-[#FF6D00]" : ""
                } font-semibold text-[20px] text-left text-white p-[10px] flex items-center`}
              >
                <GiMoneyStack className="mr-2" />
                Cash On Delivery
              </button>

              <button
                onClick={() => setSelectedTab("upiPayment")}
                className={`${
                  selectedTab === "upiPayment" ? "bg-[#FF6D00]" : ""
                } font-semibold text-[20px] text-left text-white p-[10px] flex items-center`}
              >
                <img
                  src={upiIcon}
                  alt="upiIcon"
                  className="w-[20px] h-auto mr-2"
                />
                UPI Payment
              </button>
              <button
                onClick={() => setSelectedTab("bankPayment")}
                className={`${
                  selectedTab === "bankPayment" ? "bg-[#FF6D00]" : ""
                } font-semibold text-[20px] text-left text-white p-[10px] flex items-center`}
              >
                <BsBank2 className="mr-2" /> Bank Payment
              </button>
              <button
                onClick={() => setSelectedTab("cardPayment")}
                className={`${
                  selectedTab === "cardPayment" ? "bg-[#FF6D00]" : ""
                } font-semibold text-[20px] text-left text-white p-[10px] flex items-center`}
              >
                <AiFillCreditCard className="mr-2" />
                Card Payment
              </button>
              <button
                onClick={() => setSelectedTab("wallet")}
                className={`${
                  selectedTab === "wallet" ? "bg-[#FF6D00]" : ""
                } font-semibold text-[20px] text-left text-white p-[10px] flex items-center`}
              >
                <MdWallet className="mr-2" />
                Wallet
              </button>
            </div>
          </div>

          <div className="cashOnDelivery w-[62.82%] p-[3%] rounded-tr-[8px] relative rounded-br-[8px] bg-white">
            {selectedTab === "CashOnDelivery" && (
              <>
                <div className="headingCashOnDelivery">
                  <h1 className="font-sans text-[20px] font-semibold text-left">
                    Cash On Delivery
                  </h1>
                </div>
                <div className="contentContainer flex flex-col pt-[57px] ">
                  <label
                    htmlFor="enterTheCapture"
                    className="font-sans text-[20px] font-semibold pb-[8px] "
                  >
                    Enter the Capture
                  </label>
                  <input
                    type="text"
                    id="enterTheCapture"
                    className="w-[100%] h-[59px] rounded-[5px] border border-black"
                  />
                </div>
                <div className="contentTwo pt-[27px]">
                  <div className="flex justify-center items-center bg-gray-100 border border-gray-300 rounded-md mb-4 h-[97px]">
                    <span className="text-4xl font-bold">5 k l 8</span>
                  </div>
                  <div className="refreshCaptcha flex justify-between">
                    <p className="font-sans text-xs font-semibold text-[#F42A2A]">
                      You have entered Wrong Capture{" "}
                    </p>
                    <IoMdRefresh className="w-[24px] h-[24px]" />
                  </div>
                  <div className="btnContainer flex justify-center pt-[32px]">
                    <button className="rounded-[4px] text-white font-sans text-[16px] font-semibold p-[10px] w-[50%] bg-[#1749A0]">
                      Place Order
                    </button>
                  </div>
                </div>
              </>
            )}

            {selectedTab === "upiPayment" && (
              <>
                <div className="upiContainer">
                  <div className="headingUpi">
                    <h1 className="font-sans text-[20px] font-semibold">
                      UPI Payments
                    </h1>
                  </div>
                  <div className="scannerContainer border border-black p-[12px]">
                    <div className="scannerAndContentContainer flex gap-[12px]">
                      <div className="scannerImg w-[25%] border border-black flex items-center ">
                        <img
                          src="https://kreatology.com/wp-content/media/b218806a3b9959730eb78f7b06d8cc76.png"
                          alt="na"
                        />
                      </div>
                      <div className="scanner-content flex flex-col justify-center space-y-[15px] ">
                        <h1 className="font-sans text-[14px] font-normal ">
                          Pay With UPI QR
                        </h1>
                        <h1 className="font-sans text-[10px] font-semibold">
                          Scan the QR using any UPI app on your phone.
                        </h1>
                        <h1 className="font-sans text-[10px] font-semibold">
                          QR Code is valid for
                          <span className="text-[#FD5151]"> 7:53</span> minutes
                        </h1>
                      </div>
                    </div>
                    <div className="bankingLogosContainer flex flex-row justify-center items-center mt-[12px]">
                      {logosArray.map((item) => (
                        <div>
                          <img
                            src={item.logo}
                            alt="upiLogos"
                            className="w-[50%]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="phoneNumberContainer mt-[13px]">
                    <label
                      htmlFor="upiIdInput-one"
                      className="font-sans text-[14px] font-semibold pb-[8px]"
                    >
                      Enter the UPI ID or Phone Number
                    </label>
                    <input
                      type="text"
                      id="upiIdInput-one"
                      className="w-[100%] h-[59px] rounded-[5px] border border-black"
                    />
                  </div>
                  <div className="btnContainer flex justify-center mt-[43px]">
                    <button className="rounded-[4px] text-white font-sans text-[16px] font-semibold p-[10px] w-[50%] bg-[#1749A0]">
                      Pay
                    </button>
                  </div>
                </div>
              </>
            )}

            {selectedTab === "bankPayment" && (
              <>
                <div className="netBankingCon px-[32px] py-[16px]  ">
                  <div className="headingNetBanking">
                    <h1 className="font-sans text-lg font-semibold">
                      Net Banking
                    </h1>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-[43px]">
                    <img src={icici} alt="ICICI" className="w-full h-auto" />
                    <img src={Hdfc} alt="HDFC" className="w-full h-auto" />
                    <img src={Kotak} alt="Kotak" className="w-full h-auto" />
                    <img src={icici} alt="ICICI" className="w-full h-auto" />
                    <img src={Hdfc} alt="HDFC" className="w-full h-auto" />
                    <img src={Kotak} alt="Kotak" className="w-full h-auto" />
                  </div>
                  <div className="pt-[43px]">
                    <button
                      className="text-[#1749A0] font-sans text-base font-semibold "
                      onClick={() => setOtherStates(!otherStates)}
                    >
                      +Others Banks
                    </button>
                  </div>
                  <div className="btnContainer flex justify-center pt-[43px]">
                    <button className="rounded-[4px] text-white font-sans text-[16px] font-semibold p-[10px] w-[50%] bg-[#1749A0]">
                      Pay
                    </button>
                  </div>
                </div>
              </>
            )}

            {selectedTab === "cardPayment" && (
              <div className="cardPayment p-3">
                <div className="content-one flex flex-col">
                  <h1 className="font-sans text-[20px] font-semibold pb-[37px]">
                    Card Payment
                  </h1>
                  <label
                    htmlFor="upiIdInput"
                    className="font-sans text-[14px] font-semibold pb-[8px]"
                  >
                    Enter the UPI ID or Phone Number
                  </label>
                  <input
                    type="text"
                    id="upiIdInput"
                    className="w-[100%] h-[43px] rounded-[5px] border border-black"
                  />
                  <label
                    htmlFor="cardHolderName"
                    className="pt-[8px] font-sans text-[14px] font-semibold pb-[8px]"
                  >
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    id="cardHolderName"
                    className="w-[100%] h-[43px] rounded-[5px] border border-black"
                  />
                </div>
                <div className="content-two pt-[10px]">
                  <div className="expiryAndCvv flex flex-row gap-[7%]">
                    <div className="expiry">
                      <label
                        htmlFor="expiryDate"
                        className=" font-sans text-[14px] font-semibold"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        className=" mt-[8px] w-[100%] h-[43px] rounded-[5px] border border-black"
                      />
                    </div>
                    <div className="cvv">
                      <label
                        htmlFor="CVV"
                        className=" font-sans text-[14px] font-semibold"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        id="CVV"
                        className="mt-[8px] w-[100%] h-[43px] rounded-[5px] border border-black"
                      />
                    </div>
                  </div>
                </div>
                <div className="content-Three">
                  <div className="btnContainer flex justify-center pt-[43px]">
                    <button className="rounded-[4px] text-white font-sans text-[16px] font-semibold p-[10px] w-[50%] bg-[#1749A0]">
                      Pay
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "wallet" && (
              <div className="space-y-[30px]">
                <div className="heading ">
                  <h1 className="font-sans text-[20px] font-semibold">
                    Net Banking{" "}
                  </h1>
                </div>
                <div className="banksContent px-[22px] py-[24px] space-y-[10px] bg-[#FFDFC8] rounded-[8px]">
                  <button className="axisBank w-[100%] flex p-[8px] bg-white">
                    <img
                      src={Axis}
                      alt="bankName"
                      className="w-[24px] h-[24px] mr-[18px]"
                    />
                    <h1 className="text-black font-sans text-[16px] font-semibold">
                      Axis Bank
                    </h1>
                  </button>
                  <button className="axisBank w-[100%] flex p-[8px] bg-white">
                    <img
                      src={Axis}
                      alt="bankName"
                      className="w-[24px] h-[24px] mr-[18px]"
                    />
                    <h1 className="text-black font-sans text-[16px] font-semibold">
                      Axis Bank
                    </h1>
                  </button>
                </div>
                <div className="btnContainer flex justify-center pt-[10px]">
                  <button className="rounded-[4px] text-white font-sans text-[16px] font-semibold p-[10px] w-[60%] bg-[#1749A0]">
                    Pay
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="couponContainer bg-[#1749a0] w-[38.2%] h-[511px] px-[15px] py-[16px] justify-center items-center rounded-[8px]">
          <div className="containerone flex flex-row justify-between w-[100%] h-[22px] mb-[10px]">
            <h1 className="font-sans text-base font-normal  text-left text-[white]">
              Coupon
            </h1>
            <button className="font-sans text-base font-bold  text-left text-[#5C9D33]">
              Show Coupons
            </button>
          </div>
          <div className="containertwo  mb-[17px] relative">
            <input type="text" className="w-[100%] h-[59px] rounded-[8px] " />
            <button className="w-[67px] h-[35px] bg-[#ff6d00] absolute right-5 top-1/2 transform -translate-y-1/2 text-white font-sans text-sm font-semibold leading-[19.07px] rounded-[4px] absolute ">
              Apply
            </button>
          </div>
          <div className="containerthree bg-[white] px-[16px] py-[12px] w-[100%] h-[297px] rounded-[8px]">
            <h1 className="font-sans text-xl font-semibold leading-[27.24px] text-left">
              Price Details(for 2 Items)
            </h1>

            <div className="contentWithPrices ">
              <div className="totalMrp flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-base font-normal leading-[21.79px] text-left">
                  Total MRP
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹23,998
                </p>
              </div>
              <div className="discountOnMrp flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-base font-normal leading-[21.79px] text-left">
                  Discount on MRP
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹18,105
                </p>
              </div>
              <div className="couponDiscount flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-base font-normal leading-[21.79px] text-left">
                  Coupon Discount
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹900
                </p>
              </div>
              <div className="flatFormCharges flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-base font-normal leading-[21.79px] text-left">
                  Flat form Charges
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  Free
                </p>
              </div>
              <div className="shippingCharges flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-base font-normal leading-[21.79px] text-left">
                  Shipping charges
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹200
                </p>
              </div>
              <div className="totalAmount flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  Total Amount
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹ 26,148
                </p>
              </div>
            </div>
          </div>
          <div className="containerfour mt-[17px]  flex justify-center">
            <button className="w-[40%] h-[57px] rounded-[4px] bg-[#7e9df8] text-white font-sans text-1xl font-semibold ">
              Proceed To pay
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Other Banks */}
      {otherStates && (
        <div className="bankListPopUp w-[100%] h-[100dvh] absolute top-0 left-0 bg-[#02020280] flex justify-center items-center">
          <div
            ref={modalRef} // Attach the reference to the modal container
            className=" bg-[white] p-[12px] text-white w-[25%]"
          >
            <div className="searchContent border border-black rounded-[4px] flex items-center">
              <MdSearch className="text-black h-[25px] w-[25px]" />
              <input
                type="search"
                placeholder="Search for Bank"
                className="h-[44px] outline-none border-none text-black"
              />
            </div>

            <div className="banksContent">
              <button className="axisBank flex p-[8px]">
                <img
                  src={Axis}
                  alt="bankName"
                  className="w-[24px] h-[24px] mr-[18px]"
                />
                <h1 className="text-black font-sans text-[16px] font-semibold">
                  Axis Bank
                </h1>
              </button>
              {/* Other bank buttons */}
            </div>
            <div className="btnContainer flex justify-center pt-[10px]">
              <button className="rounded-[4px] text-white font-sans text-[16px] font-semibold p-[10px] w-[80%] bg-[#1749A0]">
                Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
