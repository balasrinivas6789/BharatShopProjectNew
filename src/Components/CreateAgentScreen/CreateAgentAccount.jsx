import React, { useState, useEffect } from "react";
import AgentsInputs from "./AgentsInputs";
import CryptoJS from "crypto-js";
import { statesAndDistricts } from "./StatesDistrictsData";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()

  
  const [districts, setDistricts] = useState([]);
  const [error, setError] = useState("");
 const [message,setMessage] = useState("");
 
  const inputsConfig = [
    {
      name: "distributor",
      label: "Distributor",
      inputType: "dropdown",
      options: ["Admin", "Distributor", "Client"],
    },
    {
      name: "category",
      label: "Category",
      inputType: "dropdown",
      options: ["superAdmin", "Admin", "Distributor"],
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
    { name: "billAddress", label: "Billing Address"   },
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
      label: "City/Town",
      // inputType: "dropdown",
      // options: [
      //   "Mumbai",
      //   "Delhi",
      //   "Bengaluru",
      //   "Hyderabad",
      //   "Ahmedabad",
      //   "Chennai",
      //   "Kolkata",
      //   "Surat",
      //   "Pune",
      //   "Jaipur",
      //   "Lucknow",
      //   "Kanpur",
      //   "Nagpur",
      //   "Indore",
      //   "Thane",
      //   "Bhopal",
      //   "Patna",
      //   "Ludhiana",
      //   "Agra",
      //   "Nashik",
      //   "Vadodara",
      //   "Faridabad",
      //   "Meerut",
      //   "Rajkot",
      //   "Varanasi",
      //   "Srinagar",
      //   "Aurangabad",
      //   "Dhanbad",
      //   "Amritsar",
      //   "Navi Mumbai",
      //   "Allahabad",
      //   "Others"
      // ],
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

  const handleCreateAgent = async(e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
   
    const residenceAddress = {
      line: formValues.address,
      city: formValues.city,
      state: formValues.state,
      pincode: formValues.pincode,
      district: formValues.district,
      area: formValues.landmark,
    };
    const formattedResidenceAddress = JSON.stringify(residenceAddress);



    const formData = new URLSearchParams();
    formData.append("agent_pan_number", formValues.pancardNumber);
    formData.append("agent_first_name", formValues.firstName);
    formData.append("agent_middle_name", formValues.middleName);
    formData.append("agent_last_name", formValues.lastName);
    formData.append("agent_dob", formValues.dob);
    formData.append("agent_mobile", formValues.mobile);
    formData.append("agent_role", formValues.category);
    formData.append("agent_company_name", formValues.companyName);
    formData.append("agent_full_name", `${formValues.firstName} ${formValues.middleName} ${formValues.lastName}`);
    formData.append("agent_login_email", formValues.emailId);
    formData.append("agent_login_password", formValues.password);
    formData.append("agent_country", formValues.country);
    formData.append("agent_state", formValues.state);
    formData.append("agent_city", formValues.city);
    formData.append("agent_dist", formValues.district);
    formData.append("agent_pincode", formValues.pincode);
    formData.append("agent_address", formValues.address);
    formData.append("agent_landline", formValues.landlineNumber);
    formData.append("agent_tc", "yes");



    try {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
        },
        body: formData,
      };
    
      const response = await fetch("http://192.168.1.17:3000/user/register", options);
      
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        if(data.success === true){
          navigate("/otpForCreateAgent"); 
        } else {
          setMessage(data.message)
        }

      



      } else {
        const errorData = await response.json();
        console.error("Error:", errorData); // Log the error response
      }
    } catch (error) {
      console.error("Fetch error:", error); // Log any fetch errors
    }
  }    

  return (
    <div className="w-[90%] h-[2222px] mt-[30px] mb-[87px] m-auto rounded-[12px] bg-white">
      <div className="inline-flex items-center w-[98%] mt-[1%] mx-[1%] p-[2%] justify-between rounded-[4px] bg-[#F4F4F4] mb-[3%] ">
        <h1 className="text-black font-[600] text-[3xl]  font-open-sans">
          Create Agent Account
        </h1>
        <div>
          <input type="checkbox" id="checkbox" className="w-[16px] h-[16px]" />
          <label
            className="text-black font-[600] text-[14px] font-open-sans ml-[14px]"
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
      <div className="inline-flex items-center p-[10px_21px_10px_10px] gap-[290px] rounded-[4px] bg-[#F4F4F4] w-[98%] h-[53] mx-auto  mt-[12px] mb-[30px]">
        <h1 className="text-black font-[600] text-[24px] leading-normal font-open-sans">
        GST Details
        </h1>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-3 gap-4">
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

        
      </div>
      <div className="flex justify-center items-center">
  <div className="flex w-[192px] p-[21px_24px] flex-col m-auto justify-center items-center gap-[31px] rounded-[8px] bg-[#18213B] shadow-[0px_0px_12.3px_3px_rgba(0,0,0,0.25)]  mt-[62px] text-white mb-[62px]">
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
         {message && (
        <p className="text-[#FF4545] ml-[58px] mb-[86px] font-open-sans text-[16px] font-normal leading-normal">
          {message}
        </p>
      )}
      <div className="gap-[23px] flex justify-end  mb-[56px]">
        <button className="w-[20%] h-[46px] p-[12px_18px] rounded-[5px] bg-white border border-[#000] text-black">
          Cancel
        </button>
        <button
          className="w-[20%]  h-[46px] p-[12px_18px] mr-[1%] rounded-[5px] bg-[#3E67B0] text-white"
          onClick={handleCreateAgent}
        >
          Create Agent
        </button>
      </div>
    </div>
  );
};

export default CreateAgentAccount;