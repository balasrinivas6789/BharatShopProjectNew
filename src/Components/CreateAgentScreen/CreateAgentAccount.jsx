import React, { useState, useEffect } from "react";
import AgentsInputs from "./AgentsInputs";
import CryptoJS from "crypto-js";
import { statesAndDistricts } from "./StatesDistrictsData";

const CreateAgentAccount = () => {
  const [formValues, setFormValues] = useState({
    distributor: "",
    category: "",
    agentName: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    gender: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    transactionPin: "",
    address: "",
    billAddress: "",
    state: "",
    district: "",
    city: "",
    country: "",
    pincode: "",
    landmark: "",
    mobile: "",
    pancardNumber: "",
    landlineNumber: "",
    fax: "",
    geocode: "",
    companyName: "",
    gstStateCode: "",
    gstNumber: "",
    aadharNumber: "",
    bankAccountNumber: "",
    bankAccountName: "",
    accountType: "",
    branchName: "",
    ifscCode: "",
  });

  const [districts, setDistricts] = useState([]);
  const [error, setError] = useState("");

  const generateSecretKey = (key, timestamp) => {
    const base64Key = CryptoJS.enc.Base64.stringify(
      CryptoJS.enc.Utf8.parse(key)
    );

    const signature = CryptoJS.HmacSHA256(timestamp.toString(), base64Key);

    return CryptoJS.enc.Base64.stringify(signature);
  };

  const inputsConfig = [
    {
      name: "distributor",
      label: "Distributor",
      inputType: "dropdown",
      options: ["Distributor 1", "Distributor 2", "Distributor 3"],
    },
    {
      name: "category",
      label: "Category",
      inputType: "dropdown",
      options: ["Category 1", "Category 2", "Category 3"],
    },
    { name: "agentName", label: "Agency/Agent/Admin name" },
    { name: "firstName", label: "First Name" },
    { name: "middleName", label: "Middle Name" },
    { name: "lastName", label: "Last Name" },
    { name: "dob", label: "Date Of Birth", type: "date" },
    {
      name: "gender",
      label: "Gender",
      inputType: "radio",
      options: ["Male", "Female", "Other"],
    },
    { name: "emailId", label: "Email Id", type: "email" },
    { name: "password", label: "Password", type: "password" },
    { name: "confirmPassword", label: "Confirm Password", type: "password" },
    { name: "transactionPin", label: "Transaction Pin", type: "password" },
    { name: "address", label: "Address" },
    { name: "billAddress", label: "Billing Address" },
    {
      name: "state",
      label: "State",
      inputType: "dropdown",
      options: Object.keys(statesAndDistricts),
    },
    {
      name: "district",
      label: "District",
      inputType: "dropdown",
      options: districts,
    },
    {
      name: "city",
      label: "City",
      inputType: "dropdown",
      options: ["City 1", "City 2", "City 3"],
    },
    {
      name: "country",
      label: "Country",
      inputType: "dropdown",
      options: ["India"],
    },
    { name: "pincode", label: "Pincode" },
    { name: "landmark", label: "Landmark" },
    { name: "mobile", label: "Mobile", type: "tel" },
    { name: "pancardNumber", label: "PAN Card Number" },
    { name: "landlineNumber", label: "Landline Number", type: "tel" },
    { name: "fax", label: "Fax" },
    { name: "geocode", label: "Geocode" },
  ];

  const inputsConfig2 = [
    { name: "companyName", label: "Company Name" },
    { name: "gstStateCode", label: "GST State Code" },
    { name: "gstNumber", label: "GST Number" },
    { name: "aadharNumber", label: "Aadhar Number" },
    { name: "bankAccountNumber", label: "Bank Account Number" },
    { name: "bankAccountName", label: "Bank Account Name" },
    {
      name: "accountType",
      label: "Account Type",
      inputType: "dropdown",
      options: ["Savings Account", "Current Account"],
    },
    { name: "branchName", label: "Branch Name" },
    { name: "ifscCode", label: "IFSC Code" },
  ];

  useEffect(() => {
    if (formValues.state) {
      setDistricts(statesAndDistricts[formValues.state] || []);
    }
  }, [formValues.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCreateAgent = (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    const developerKey = "36ecd45e6997cb888060391f3e4f3963";
    const key = "22abe4d7-5c20-4a74-bf63-30066251656b";

    const secretKey = generateSecretKey(key, Date.now());

    const residenceAddress = {
      line: formValues.address,
      city: formValues.city,
      state: formValues.state,
      pincode: formValues.pincode,
      district: formValues.district,
      area: formValues.landmark,
    };
    const formattedResidenceAddress = JSON.stringify(residenceAddress);

    try {
      const options = {
        method: "PUT",
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
          developer_key: developerKey,
          "secret-key": secretKey,
          "secret-key-timestamp": Date.now().toString(),
        },
        body: new URLSearchParams({
          initiator_id: "9704432222",
          pan_number: formValues.pancardNumber,
          mobile: formValues.mobile,
          first_name: formValues.firstName,
          middle_name: formValues.middleName,
          last_name: formValues.lastName,
          email: formValues.emailId,
          residence_address: formattedResidenceAddress,
          dob: formValues.dob,
          shop_name: formValues.companyName,
        }),
      };

      fetch("https://api.eko.in:25002/ekoicici/v1/user/onboard", options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[1104px] h-[2222px] rounded-[12px] bg-white">
      <div className="inline-flex items-center p-[10px_61px_10px_10px] gap-[290px] rounded-[4px] bg-[#F4F4F4] ml-[15px] mr-[15px] mt-[12px] mb-[29px]">
        <h1 className="text-black font-[600] text-[24px] leading-normal font-open-sans">
          Create Agent Account
        </h1>
        <div>
          <input type="checkbox" id="checkbox" className="w-[16px] h-[16px]" />
          <label
            className="text-black font-[600] text-[14px] leading-normal font-open-sans ml-[14px]"
            htmlFor="checkbox"
          >
            Please check the box to create this agent under any Distributor.
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {inputsConfig.map(
          ({
            name,
            label,
            type = "text",
            inputType = "input",
            options = [],
          }) => (
            <AgentsInputs
              key={name}
              name={name}
              label={label}
              type={type}
              inputType={inputType}
              options={options}
              onChange={handleChange}
              value={formValues[name]}
            />
          )
        )}
      </div>
      <div className="inline-flex items-center p-[10px_61px_10px_10px] gap-[290px] rounded-[4px] bg-[#F4F4F4] w-[1074px] h-[53] ml-[15px] mr-[15px] mt-[12px] mb-[30px]">
        <h1 className="text-black font-[600] text-[24px] leading-normal font-open-sans">
          Bank Details
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {inputsConfig2.map(
          ({
            name,
            label,
            type = "text",
            inputType = "input",
            options = [],
          }) => (
            <AgentsInputs
              key={name}
              name={name}
              label={label}
              type={type}
              inputType={inputType}
              options={options}
              onChange={handleChange}
              value={formValues[name]}
              error={
                name === "password" &&
                formValues.password !== formValues.confirmPassword
                  ? error
                  : undefined
              }
            />
          )
        )}

        <div className="flex w-[192px] p-[21px_24px] flex-col justify-center items-center gap-[31px] rounded-[8px] bg-[#18213B] shadow-[0px_0px_12.3px_3px_rgba(0,0,0,0.25)] ml-[458px] mr-[502px] mt-[62px] text-white mb-[62px]">
          <h1>Basic</h1>
          <p>
            ₹0.00/ <span>Month</span>
          </p>
          <div>
            <input type="checkbox" id="claimItcheckbox" />
            <label htmlFor="claimItcheckbox">Claim it</label>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#FF4545] ml-[58px] mb-[86px] font-open-sans text-[16px] font-normal leading-normal">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
      {error && (
        <p className="text-[#FF4545] ml-[58px] mb-[86px] font-open-sans text-[16px] font-normal leading-normal">
          {error}
        </p>
      )}
      <div className="gap-[23px] inline-flex ml-[569px] mb-[56px]">
        <button className="w-[231px] p-[12px_18px] rounded-[5px] bg-white border border-[#000] text-black">
          Cancel
        </button>
        <button
          className="w-[231px] p-[12px_18px] rounded-[5px] bg-[#3E67B0] text-white"
          onClick={handleCreateAgent}
        >
          Create Agent
        </button>
      </div>
    </div>
  );
};

export default CreateAgentAccount;