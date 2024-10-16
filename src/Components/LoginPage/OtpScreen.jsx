import React, { useEffect, useRef, useState } from "react";
import bharatLogo from "../../images/Frame 387.png";
import loginTemplateImage from "../../images/Signing in to user account.png";
import smallLogoOfBharathShop from "../../images/Frame 1439.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpScreen = () => {
  const length = 4; // Define OTP length
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const accesstoken = localStorage.getItem("accesstoken");
    const token = localStorage.getItem("token");

    // Redirect to login page if tokens are missing
    if (!accesstoken || !token) {
      navigate("/login");
    }

    // Listen for page refresh event to clear tokens
    const handleBeforeUnload = () => {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("token");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [navigate]);

  const handleChange = (e, index) => {
    const { value } = e.target;

    // Only allow one character per input (numbers)
    if (/[^0-9]/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value.charAt(value.length - 1);
    setOtp(updatedOtp);

    // Move to next input if a value was entered
    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new URLSearchParams();
    formData.append("otp", otp);
    formData.append("accesstoken", localStorage.getItem("accesstoken"));
    formData.append("token", localStorage.getItem("token"));

    try {
      axios
        .post(`http://192.168.1.17:3000/user/otpverification`, formData)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="headerContainer fixed z-20 w-[100%] h-[112px] bg-white">
        <img
          src={bharatLogo}
          className="w-[128.18px] h-[90.97px] top-[5px] left-[105px] fixed"
          alt="bharatShopLogo"
        />
      </div>
      <div className="loginPage flex flex-row">
        {/* Left Side: Login Template Image */}
        <div className="loginTemplateImg w-[40%] min-h-[100dvh] bg-[#395fa2] flex flex-col items-center justify-center">
          <img
            src={loginTemplateImage}
            alt="loginTemplateImage"
            className="w-[644px] h-[644px]"
          />
          <h1 className="font-open-sans text-[32px] font-bold text-white text-center">
            OTP Verification
          </h1>
        </div>

        {/* Right Side: OTP Form */}
        <div className="loginPageContent justify-center text-white w-[60%] min-h-[100dvh] bg-[#17213c] flex flex-col items-center p-8">
          <div className="w-[80%]">
            <div className="oneContainer mb-8 flex items-center justify-center">
              <img
                src={smallLogoOfBharathShop}
                alt="BharathShopLogo"
                className="w-[108px] h-[108px]"
              />
            </div>

            <div className="twoContainer items-start w-[100%] mb-4 text-start">
              <h1 className="font-sans text-3xl font-bold">Verify OTP</h1>
              <p className="font-open-sans text-[14px] font-semibold">
                Please check your mobile for OTP.
              </p>
            </div>

            <div className="threeContainer flex justify-center">
              <div className="flex flex-col bg-[#3a61a6] w-[100%] rounded-[8px] p-[20px] gap-[19px]">
                <form onSubmit={handleSubmit}>
                  <h1 className="font-sans text-xl font-semibold leading-[32.68px] text-left">
                    Enter OTP
                  </h1>
                  <p>OTP will send to +91981****458</p>

                  <div className="flex gap-2 justify-center my-4 text-black">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (inputsRef.current[index] = el)}
                        type="text"
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleBackspace(e, index)}
                        maxLength="1"
                        className="w-[40px] h-[40px] text-center text-2xl border border-gray-300 rounded"
                      />
                    ))}
                  </div>

                  <div className="flex justify-center mt-[98px]">
                    <button
                      type="submit"
                      className="font-sans text-base font-semibold leading-5 w-[171px] h-[42px] p-[10px] bg-[#547ec8] rounded-[8px]"
                    >
                      Verify
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpScreen;
