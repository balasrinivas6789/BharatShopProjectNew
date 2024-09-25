import React, { useState } from "react";
import AepsFromInputs from "./AepsFromInputs";
import CryptoJS from "crypto-js";
import { statesAndDistricts } from "../CreateAgentScreen/StatesDistrictsData";

const AepsFrom = () => {
  const inputsConfig = [
    {
      name: "agentName",
      label: "Agent Name (As Per Aadhar/Pan Card)",
      type: "text",
    },
    { name: "mobileNo", label: "Mobile No", type: "number" },
    { name: "emailid", label: "Email ID", type: "email" },
    { name: "aadhar_number", label: "Aadhar Number", type: "text" },
    { name: "pan_number", label: "PAN Card Number", type: "text" },
    { name: "agencyName", label: "Agency Name", type: "text" },
    { name: "aadhar_front", label: "Upload Aadhar Front", type: "file" },
    { name: "aadhar_back", label: "Upload Aadhar Back", type: "file" },
    { name: "pan_card", label: "Upload PAN", type: "file" },
  ];

  const inputConfigAddressAsPerProof = [
    { name: "proofLine", label: "Line", type: "text" },
    { name: "proofCity", label: "City", type: "text" },
    { name: "proofPinCode", label: "Pin Code", type: "text" },
    {
      name: "proofState",
      options: Object.keys(statesAndDistricts),
      label: "State",
      type: "dropdown",
    },
  ];

  const inputsConfigBiometric = [
    { name: "modelname", label: "Biometric Device Model Name", type: "text" },
    { name: "devicenumber", label: "Biometric Device Number", type: "text" },
  ];

  const inputConfigOfficeAddress = [
    { name: "officeLine", label: "Line", type: "text" },
    { name: "officeCity", label: "City", type: "text" },
    { name: "officePinCode", label: "Pin Code", type: "text" },
    {
      name: "officeState",
      options: Object.keys(statesAndDistricts),
      label: "State",
      type: "dropdown",
    },
  ];

  const [pan_card, setPan_card] = useState(null);
  const [aadhar_front, setAadhar_front] = useState(null);
  const [aadhar_back, setAadhar_back] = useState(null);

  const [formValues, setFormValues] = useState({
    user_code: "",
    initiator_id: "",
    service_code: "",
    modelname: "",
    devicenumber: "",
    office_address: "",
    proofline: "",
    proofCity: "",
    proofState: "",
    proofPinCode: "",
    officeLine: "",
    officeCity: "",
    officeState: "",
    officePinCode: "",

    address_as_per_proof: "",
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };


  const convertToBase64WithName = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Data = reader.result.split(",")[1]; // Extract base64 string without metadata
        const mimeType = file.type; // Get MIME type (e.g., image/jpeg)
        const fileName = file.name; // Get the name of the file
        const fullBase64 = `data:${mimeType};name=${fileName};base64,${base64Data}`;
        resolve(fullBase64);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handlePan_cardChange = async (e) => {

    const file = e.target.files[0];
    if (file) {
      const base64File = await convertToBase64WithName(file);
      setPan_card(base64File);
    }

  
  };

  const handleAadhar_FrontChange = async (e) => {

    
    const file = e.target.files[0];
    if (file) {
      const base64File = await convertToBase64WithName(file);
      
    setAadhar_front(base64File);
    }

  };

  const handleAadhar_BackChange = async (e) => {
    
    const file = e.target.files[0];
    if (file) {
      const base64File = await convertToBase64WithName(file);
      
      setAadhar_back(base64File);
    }
  };

  const generateSecretKey = (key, timestamp) => {
    const base64Key = CryptoJS.enc.Base64.stringify(
      CryptoJS.enc.Utf8.parse(key)
    );
    const signature = CryptoJS.HmacSHA256(timestamp.toString(), base64Key);
    return CryptoJS.enc.Base64.stringify(signature);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const developerKey = "36ecd45e6997cb888060391f3e4f3963";
    const key = "22abe4d7-5c20-4a74-bf63-30066251656b";

    const secretKeyTimestamp = Date.now();
    const secretKey = generateSecretKey(key, secretKeyTimestamp);

    const headers = {
      accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
      developer_key: developerKey,
      "secret-key": secretKey,
      "secret-key-timestamp": secretKeyTimestamp.toString(),
    };

    try {
      const addressAsPerProof = {
        line: formValues.proofline,
        city: formValues.proofCity,
        state: formValues.proofState,
        pincode: formValues.proofPinCode,
      };

      const formattedAddressAsPerProof = JSON.stringify(addressAsPerProof);

      const officeAddress = {
        line: formValues.officeLine,
        city: formValues.officeCity,
        state: formValues.officeState,
        pincode: formValues.officePinCode,
      };

      const formattedOfficeAddress = JSON.stringify(officeAddress);


      const options = {
        method: "PUT",
        headers,
        body: new URLSearchParams({
          user_code: "34819014",
          initiator_id: "9704432222",
          service_code: "43 ",
          modelname: formValues.modelname,
          devicenumber: formValues.devicenumber,
          office_address: formattedOfficeAddress,
          pan_card: pan_card,
          aadhar_front: aadhar_front,
          aadhar_back: aadhar_back,
          address_as_per_proof: formattedAddressAsPerProof,
        }),
      };

      const response = await fetch(
        "https://api.eko.in:25002/ekoicici/v1/user/service/activate",
        options
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Agent created successfully");
      } else {
        alert("Failed to create agent");
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div className="w-[100%] mt-[30px] px-[68px]">
      <div className="rounded-lg h-[1683px] mb-[10px] bg-[#FFFFFF]">
        <div className="pt-[15px] mb-[36px] px-[12px]">
          <h1 className="bg-[#F4F4F4] p-[12px] font-[600] text-[24px] rounded-md">
            MAKE NEW AEPS TRANSACTION
          </h1>
        </div>

        <div className="bg-[#3E67B0] rounded-lg mx-[55px] h-[1351px]">
          <div className="flex py-[30px] justify-between">
            <div>
              <p className="ms-[33px] p-3 bg-[#83AFFD] text-[20px] pe-[300px] text-white rounded-md">
                Agent Details
              </p>
            </div>

            <div className="me-[55px]">
              <select
                name="service_code"
                className="text-black rounded-[5px] border border-black bg-white"
                required
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="pranav">Pranav</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {inputsConfig.map((element) => (
              <div className="my-2" key={element.name}>
                <AepsFromInputs
                  name={element.name}
                  label={element.label}
                  type={element.type}
                  options={element.options}
                  onChange={handleChange}
                  value={formValues[element.name]}
                />
              </div>
            ))}
          </div>

          <div className="bg-[#3E67B0] text-white rounded-lg">
            <h3 className="py-[25px] ps-[36px] text-[20px] font-[600]">
              Address As Per Proof
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {inputConfigAddressAsPerProof.map((element) => (
                <div className="my-2" key={element.name}>
                  <AepsFromInputs
                    name={element.name}
                    label={element.label}
                    type={element.type}
                    options={element.options}
                    onChange={handleChange}
                    value={formValues[element.name]}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#3E67B0] text-white rounded-lg">
            <h3 className="py-[25px] ps-[36px] text-[20px] font-[600]">
              Biometric
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {inputsConfigBiometric.map((element) => (
                <div className="my-2" key={element.name}>
                  <AepsFromInputs
                    name={element.name}
                    label={element.label}
                    type={element.type}
                    options={element.options}
                    onChange={handleChange}
                    value={formValues[element.name]}
                  />
                </div>
              ))}
            </div>
          </div>

          <>
            <label>pan card</label>
            <input
              type="file"
              id={"pancard"}
              name={"pancard"}
              onChange={handlePan_cardChange}
            />
          </>

          <>
            <label>Aadhar front</label>
            <input
              type="file"
              id={"aadharfront"}
              name={"aadharfront"}
              onChange={handleAadhar_FrontChange}
            />
          </>

          <>
            <label>Aadhar back</label>
            <input
              type="file"
              id={"aadharback"}
              name={"aadharback"}
              onChange={handleAadhar_BackChange}
            />
          </>

          <div className="bg-[#3E67B0] text-white rounded-lg">
            <h3 className="py-[25px] ps-[36px] text-[20px] font-[600]">
              Office Address
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {inputConfigOfficeAddress.map((element) => (
                <div className="my-2" key={element.name}>
                  <AepsFromInputs
                    name={element.name}
                    label={element.label}
                    type={element.type}
                    options={element.options}
                    onChange={handleChange}
                    value={formValues[element.name]}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-[84px] text-center">
          <button
            onClick={handleSubmit}
            className="bg-[#3E67B0] font-600 text-[16px] py-[12px] px-[18px]"
          >
            Create Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default AepsFrom;
