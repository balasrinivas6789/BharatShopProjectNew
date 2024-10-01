import React from "react";
import bharatLogo from "../../images/Frame 387.png";
import loginTemplateImage from "../../images/Sign in to the account on the phone.png";
import smallLogoOfBharathShop from "../../images/Frame 1439.png";

const Login = () => {
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
          <h1 className="font-open-sans text-[32px] font-bold leading-[43.58px] text-white text-center mt-4">
            LOGIN TO BHARAT SHOP
          </h1>
        </div>

        {/* Right Side: Login Form */}
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
            <h1 className="font-sans text-3xl font-bold leading-[43.58px]">
              Welcome Back,
            </h1>
            <p className="font-sans text-base font-normal leading-[21.79px]">
              We are glad to see you here again.
            </p>
          </div>
          <div className="threeContainer flex justify-center">
            <div className="flex flex-col bg-[#3a61a6] w-[100%] rounded-[8px] p-[20px] gap-[19px]">
              <h1 className="font-sans text-xl font-semibold leading-[32.68px] text-left">
                Partner Login
              </h1>
              <label
                className="font-sans text-lg font-bold leading-5 text-left"
                htmlFor="mailIdField"
              >
                Enter your Mail-ID
              </label>
              <input
                type="text"
                id="mailIdField"
                className="w-full h-[48px] rounded-[5px] p-2"
              />
              <label
                className="font-sans text-lg font-bold leading-5 text-left"
                htmlFor="passwordField"
              >
                Password
              </label>
              <input
                type="password"
                id="passwordField"
                className="w-full h-[48px] rounded-[5px] p-2"
              />
              <div className="flex justify-center">
                <button className="font-sans text-base font-semibold leading-5 w-[171px] h-[42px] p-[10px] bg-[#547ec8] rounded-[8px]">
                  Login
                </button>
              </div>
            </div>
          </div>
          <div className="fourthContainer mt-4 text-center">
            <p className="font-sans text-base font-normal leading-5">
              Don't have an account? <a href="/register" className="text-[#547ec8]">Register</a>
            </p>
          </div>
         </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
