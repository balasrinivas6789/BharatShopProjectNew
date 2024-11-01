import React, { useState } from "react";
import bharatLogo from "../images/Frame 387.png";
import loginTemplateImage from "../images/Sign in to the account on the phone.png";
import smallLogoOfBharathShop from "../images/Frame 1439.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formValues.email === "" || formValues.password === "") {
      setError("Please Enter The Required Fields");
      setLoading(false);
      return null;
    }

    const formData = new URLSearchParams();
    formData.append("email", formValues.email);
    formData.append("password", formValues.password);

    try {
      axios
        .post(`http://192.168.1.39:3000/user/login`, formData)
        .then((response) => {
          console.log(response);
          localStorage.setItem("accesstoken", response.data.accesstoken);
          localStorage.setItem("token", response.data.token);
          navigate("/otpLogin", { state : formValues.email});
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="headerContainer fixed z-20 w-[100%]  p-[3%] bg-white">
        <img
          src={bharatLogo}
          className="w-[128.18px] h-[90.97px] top-[5px] left-[105px] fixed"
          alt="bharatShopLogo"
        />
      </div>
      <div className="loginPage flex flex-row">
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

        <div className="loginPageContent justify-center text-white w-[60%] min-h-[100dvh] bg-[#17213c] flex flex-col items-center p-8">
          <div className="w-[80%]">
            <div className="oneContainer mb-8 flex items-center justify-center">
              <img
                src={smallLogoOfBharathShop}
                alt="BharathShopLogo"
                className="w-[108px]  h-[108px]"
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
                <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
                  <h1 className="font-sans text-xl font-semibold leading-[32.68px] text-left">
                    Partner Login
                  </h1>
                  <label
                    className="font-sans text-lg mt-5 font-bold leading-5 text-left"
                    htmlFor="mailIdField"
                  >
                    Enter your Mail-ID
                  </label>
                  <input
                    type="text"
                    id="mailIdField"
                    name="email"
                    className="w-full h-[48px] rounded-[5px] p-2 text-black"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <label
                    className="font-sans text-lg mt-5 font-bold leading-5 text-left"
                    htmlFor="passwordField"
                  >
                    Password-          
                  </label>
                  <input
                    type="password"
                    id="passwordField"
                    name="password"
                    className="w-full h-[48px] rounded-[5px] p-2  text-black"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <div className="flex justify-center mt-2">
                    <div>
                      {!isLoading && (
                        <button
                          type="submit"
                          className="font-sans text-base font-semibold leading-5 w-[171px] h-[42px] p-[10px] bg-[#547ec8] rounded-[8px]"
                        >
                          Login
                        </button>
                      )}

                      {isLoading && (
                        <>
                          <button
                            disabled
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                          >
                            <svg
                              aria-hidden="true"
                              role="status"
                              className="inline w-4 h-4 me-3 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                            Loading...
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="text-center">
                    {error && (
                      <div className="text-[20px] font-bold text-red-800">
                        {error}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="fourthContainer mt-4 text-center">
              <p className="font-sans text-base font-normal leading-5">
                Don't have an account?
                <a href="/register" className="text-[#547ec8]">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;