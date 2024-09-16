import React, { useState } from "react";
import CryptoJS from "crypto-js";
import axios from "axios";

const OnboardUser = () => {
 
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
        body: new URLSearchParams({
          initiator_id: "9704432222",
          pan_number: "EEZPB7460G",
          mobile: "9581722064",
          first_name: "valaboju",
          middle_name: "pranav",
          last_name: "string",
          email: "pranavvalaboju@gmail.com",
          residence_address: formattedResidenceAddress,
          dob: "2024-09-12",
          shop_name: "string",
        }),
      };
       
      fetch(`https://api.eko.in:25002/ekoicici/v1/user/onboard`, options)
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

      {/* <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-white font-bold mb-6">User Onboarding</h2>
        <form onSubmit={handleSubmit}>
        
          <div className="mb-4">
            <label className="block text-white">Pan Number</label>
            <input
              type="text"
              name="pan_number"
              value={formData.pan_number}
              onChange={handleChange}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-white">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-white">First Name</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

    
          <div className="mb-4">
            <label className="block text-white">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-white">residence_address</label>
            <input
              type="text"
              name="residence_address"
              value={formData.residence_address}
              onChange={handleChange}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

       
          <div className="mb-4">
            <label className="block text-white">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

         
          <div className="mb-4">
            <label className="block text-white">Shop Name</label>
            <input
              type="text"
              name="shop_name"
              value={formData.shop_name}
              onChange={handleChange}
              className="w-full p-2 mt-2 text-black rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
          >
            Onboard User
          </button>
        </form>
      </div> */}
    </div>
  );
};

