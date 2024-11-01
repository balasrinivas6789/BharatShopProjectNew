// Profile.js
import React, { useEffect, useState } from "react";
import profileImage from "../../images/BharatLogo/Frame387.png";
import "./Profile.css";
import AccountDetails from "./AccountDetails";
import ManageFunds from "./ManageFunds";
import CreditLimitRequests from "./CreditLimitRequests";
import axios from "axios";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { option } = useParams();
  const [activeTab, setActiveTab] = useState(option || "accountdetails");
  const [userDetails, setUserDetails] = useState({});

  const getProfileDetails = () => {
    axios
      .post(
        "http://192.168.1.39:3000/user/viewprofile",
        {},
        {
          headers: {
            email: "basavaprasanna2001@gmail.com",
          },
        }
      )
      .then((response) => {
        setUserDetails(response?.data?.data || {}); 
        console.log(response);
        
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProfileDetails();
    if (option) setActiveTab(option);
  }, [option]);

  return (
    <div className="w-[100%] p-2">
      <div className="flex flex-row">  
        <div className="w-[20%] p-3">
          <div className="bg-slate-50 rounded-md text-center">
            <div className="flex flex-col rounded-md font-semibold text-[24px]">
              <button
                onClick={() => setActiveTab("accountdetails")}
                className={`p-1 ${activeTab === "accountdetails" ? "bg-[#1749A0] text-white rounded-t-md" : ""}`}
              >
                Account Details
              </button>
              <button
                onClick={() => setActiveTab("managefunds")}
                className={`p-1 ${activeTab === "managefunds" ? "bg-[#1749A0] text-white" : ""}`}
              >
                Manage Funds
              </button>
              <button
                onClick={() => setActiveTab("managecredits")}
                className={`p-1 ${activeTab === "managecredits" ? "bg-[#1749A0] text-white rounded-b-md" : ""}`}
              >
                Manage Credits
              </button>
            </div>
          </div>
        </div>
        <div className="w-[80%] p-3">
          {activeTab === "accountdetails" && (
            <AccountDetails userDetails={userDetails} />
          )}
          {activeTab === "managecredits" && (
            <CreditLimitRequests userDetails={userDetails} />
          )}
          {activeTab === "managefunds" && (
            <ManageFunds userDetails={userDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;