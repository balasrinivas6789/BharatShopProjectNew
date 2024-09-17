import React, { useState } from "react";
import AepsFromInputs from "./AepsFromInputs";
import CryptoJS from "crypto-js";

const AepsFrom = () => {
  const inputsConfig = [
    // {
    //   name: "service_code",
    //   label: "Select Service Code",
    //   type: "dropdown",
    // },

    {
      name: "agentName",
      label: "Agent Name(As Per Aadhar/Pan Card)",
      type: "text",
    },
    { name: "moblieNo", label: "Moblie No", type: "number" },
    { name: "emailid", label: "Email ID", type: "email" },

    {
      name: "aadhar_number",
      label: "Aadhar Number",
      type: "text",
    },
    { name: "pan_number", label: "Pan Card Number", type: "text" },
    { name: "agencyName", label: "Agency Name", type: "text" },

    { name: "aadhar_front", label: "Upload Aadhar Front", type: "file" },
    { name: "aadhar_back", label: "Upload Aadhar Back", type: "file" },
    { name: "pan_card", label: "Upload PAN", type: "file" },
  ];

  const inputConfigAddressAsPerProof = [
    { name: "proofLine", label: "Line", type: "text" },
    { name: "proofCity", label: "City", type: "text" },
    { name: "proofPinCode", label: "Pin Code", type: "text" },
    { name: "proofState", label: "State", type: "dropdown" },
  ];

  const inputsConfigBiometric = [
    { name: "modelname", label: "Biometric device model name", type: "text" },
    { name: "devicenumber", label: "Bio-metric Device Number", type: "text" },
  ];

  const inputConfigOfficeAddress = [
    { name: "officeLine", label: "Line", type: "text" },
    { name: "officeCity", label: "City", type: "text" },
    { name: "officePinCode", label: "Pin Code", type: "text" },
    { name: "officeState", label: "State", type: "dropdown" },
  ];

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
    officePincode: "",
    pan_card: "",
    aadhar_front: "",
    aadhar_back: "",
    address_as_per_proof: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const generateSecretKey = (key, timestamp) => {
    // Encode the key in Base64
    const base64Key = CryptoJS.enc.Base64.stringify(
      CryptoJS.enc.Utf8.parse(key)
    );

    // Compute the HMAC-SHA256 signature
    const signature = CryptoJS.HmacSHA256(timestamp.toString(), base64Key);

    // Encode the signature in Base64
    return CryptoJS.enc.Base64.stringify(signature);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const developerKey = "36ecd45e6997cb888060391f3e4f3963";
    const key = "22abe4d7-5c20-4a74-bf63-30066251656b";

    const secretKeyTimestamp = Date.now();
    const secretKey = generateSecretKey(key, secretKeyTimestamp);

    const headers = {
      "Content-Type": "application/json",
      developer_key: developerKey,
      "secret-key": secretKey,
      "secret-key-timestamp": secretKeyTimestamp.toString(),
    };

    try {
      const addressAsPerProof = {
        line: formValues.proofline,
        city: formValues.proofline,
        state: formValues.proofState,
        pincode: formValues.proofPinCode,
      };

      const formattedAddressAsPerProof = JSON.stringify(addressAsPerProof);

      const officeAddress = {
        line: formValues.officeLine,
        city: formValues.officeCity,
        state: formValues.officeState,
        pincode: formValues.officePincode,
      };

      const formattedOfficeAddress = JSON.stringify(officeAddress);

      const options = {
        method: "PUT",
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
          developer_key: developerKey,
          "secret-key": secretKey,
          "secret-key-timestamp": secretKeyTimestamp.toString(),
        },
        body: new URLSearchParams({
          user_code: "34819014",
          initiator_id: "9704432222",
          service_code: "43 / 52",
          modelname: formValues.modelname,
          devicenumber: formValues.devicenumber,
          office_address: formattedOfficeAddress,
          pan_card: formValues.pan_card,
          aadhar_front: formValues.aadhar_front,
          aadhar_back: formValues.aadhar_back,
          address_as_per_proof: formattedAddressAsPerProof,
        }),
      };

      fetch(`https://api.eko.in:25002/ekoapi/v1/user/service/activate`, options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div className="w-[100%] mt-[30px] px-[68px]">
      <div className="rounded-lg  h-[1683px] mb-[10px] bg-[#FFFFFF] ">
        <div className="pt-[15px] mb-[36px] px-[12px]">
          <h1 className="bg-[#F4F4F4] p-[12px] font-[600] text-[24px] rounded-md">
            MAKE NEW AEPS TRANSACTION
          </h1>
        </div>

        <div className=" bg-[#3E67B0] rounded-lg mx-[55px] h-[1351px]">
          <div className="flex py-[30px] justify-between">
            <div>
              <p className="ms-[33px] p-3 bg-[#83AFFD] text-[20px] pe-[300px] text-white rounded-md">
                Agent Details
              </p>
            </div>

            <div className="me-[55px]">
              <select
                id={formValues.name}
                name={formValues.name}
                value={formValues.value}
                className="text-black rounded-[5px]   border border-black bg-white"
                required
              >
                <option value="" disabled>
                  Select
                </option>

                <option value="pranav">pranav</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3  gap-4">
            {inputsConfig.map((element) => {
              return (
                <div className="my-2">
                  <AepsFromInputs
                    key={element?.name}
                    name={element?.name}
                    label={element?.label}
                    type={element?.type}
                    options={element?.options}
                    onChange={handleChange}
                    value={formValues[element?.name]}
                  />
                </div>
              );
            })}
          </div>

          <div className="bg-[#3E67B0] text-white rounded-lg">
            <h3 className="py-[25px] ps-[36px] text-[20px] font-[600]">
              Address As Per Proof
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3  gap-4">
              {inputConfigAddressAsPerProof.map((element) => {
                return (
                  <div className="my-2">
                    <AepsFromInputs
                      key={element?.name}
                      name={element?.name}
                      label={element?.label}
                      type={element?.type}
                      options={element?.options}
                      onChange={handleChange}
                      value={formValues[element?.name]}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#3E67B0] text-white rounded-lg">
            <h3 className="py-[25px] ps-[36px] text-[20px] font-[600]">
              Biometric
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3  gap-4">
              {inputsConfigBiometric.map((element) => {
                return (
                  <div className="my-2">
                    <AepsFromInputs
                      key={element?.name}
                      name={element?.name}
                      label={element?.label}
                      type={element?.type}
                      options={element?.options}
                      onChange={handleChange}
                      value={formValues[element?.name]}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#3E67B0] text-white rounded-lg">
            <h3 className="py-[25px] ps-[36px] text-[20px] font-[600]">
              Office Address
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3  gap-4">
              {inputConfigOfficeAddress.map((element) => {
                return (
                  <div className="my-2">
                    <AepsFromInputs
                      key={element?.name}
                      name={element?.name}
                      label={element?.label}
                      type={element?.type}
                      options={element?.options}
                      onChange={handleChange}
                      value={formValues[element?.name]}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="my-[84px] text-center">
          <button onClick={handleSubmit} className="bg-[#3E67B0] font-600 text-[16px] py-[12px] px-[18px]">
            Create Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default AepsFrom;