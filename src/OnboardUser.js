import React, { useState } from "react";
import CryptoJS from "crypto-js";
import axios from "axios";

const OnboardUser = () => {
 
 
  const [pan_card,setPanCard] = useState(null);
  const [aadhar_front,setAadharFront] = useState(null);
  const [aadhar_back,setAadharBack] = useState(null)
  const [formData,setFormData] = useState({
    modelname : '',
    devicenumber : ''
  });

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 
  const handleChangePan = (e) => {
    setPanCard(e.target.files[0]);
  };

  const handleChangeAadharFront = (e) => {
    setAadharFront(e.target.files[0]);
  };

  const handleChangeAadharBack = (e) => {
    setAadharBack(e.target.files[0]);
  };

  // Function to generate secret key
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
      const residenceAddress = {
        line: "123 Elm Street",
        city: "Springfield",
        state: "Telangana",
        pincode: "500011",
        district: "Sangamon",
        area: "Downtown"
      };
  
      const formattedResidenceAddress = JSON.stringify(residenceAddress);

      const options = {
        method: "PUT",
        headers: {
          accept: "application/json",
          "content-type": "application/x-www-form-urlencoded",
          developer_key: developerKey,
          "secret-key": secretKey,
          "secret-key-timestamp": secretKeyTimestamp.toString(),
        },
        body: new URLSearchParams(
          {
            user_code: '34819014',
            initiator_id: '9704432222',
            service_code: '43 / 52',
            modelname: '34566UI',
            devicenumber: '34566UI',
            office_address: formattedResidenceAddress,
            pan_card: pan_card,
            aadhar_front: aadhar_front,
            aadhar_back: aadhar_back,
            address_as_per_proof: formattedResidenceAddress
          }
        )
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
    <div className="bg-gray-800 min-h-screen flex justify-center items-center">
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
      >
        Onboard User
      </button>

      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-white font-bold mb-6">APES KYC </h2>
        <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
            <label className="block text-white">Pan Card</label>
            <input
              type="file"
              name="pan_card"
              onChange={handleChangePan}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-white">model name</label>
            <input
              type="text"
              name="modelname"
              value={formData.modelname}
              onChange={handleChange}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-white">device number</label>
            <input
              type="text"
              name="devicenumber"
              value={formData.devicenumber}
              onChange={handleChange}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white">Aadhar Front</label>
            <input
              type="file"
              name="aadhar_front"
              onChange={handleChangeAadharFront}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

    
          <div className="mb-4">
            <label className="block text-white">Aadhar Back</label>
            <input
              type="file"
              name="aadhar_back"
              onChange={handleChangeAadharBack}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

         
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
          >
            APES
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnboardUser;