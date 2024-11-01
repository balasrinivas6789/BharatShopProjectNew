import React, { useMemo } from "react";
import { useEffect, useState } from "react";

const AccountDetails = ({ userDetails }) => {

  // const [imageSrc, setImageSrc] = useState('');

  // useEffect(() => {
  //   if (userDetails?.profile_pic?.data) {

  //     const base64String = btoa(
  //       String.fromCharCode(...new Uint8Array(userDetails.profile_pic.data))
  //     );
  //     const newImageSrc = `data:image/png;base64,${base64String}`;
      
  //     if (newImageSrc !== imageSrc) {
  //       setImageSrc(newImageSrc);
  //     }
  //   }
  // }, [userDetails]);

  return (
    <div>
      <div className="bg-slate-50 p-[12px] rounded-md">
        <div className="bg-[#1749A0] text-white p-2 mb-[12px] rounded-md font-semibold text-[24px] pl-2">
          Account Details
        </div>
        <div className="flex justify-end">
          <p className="bg-[#1749A0] text-white py-[8px] px-[14px] rounded-md">
            My Wallet 200 INR
          </p>
        </div>
        <div>
          <div class="image-section">
            <div class="image-container">
              <img
                className="object-cover img"
                // src={imageSrc}
                alt="Profile"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#1749A0] rounded-md mt-2 p-1">
          <p className="text-[14px] text-white p-1 ">Personal Details</p>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2 text-white">
          <div className="bg-[#021F51] rounded-md p-2">
            <p>
              Agent Name:
              <span className="ml-3">
                <span> {userDetails?.agent_first_name || "Not Provided"} </span>
                <span className="ml-2">
                  {userDetails?.agent_middle_name || "Not Provided"}
                </span>
                <span className="ml-2">                
                  {userDetails?.agent_last_name || "Not Provided"}
                </span>
              </span>
            </p>
            <p>
              Agent Code:
              <span className="ml-3">
                {userDetails?.agent_code || "Not Available"}
              </span>
            </p>
            <p>
              Branch:
              <span className="ml-3">
                {userDetails?.agent_branch || "Not Available"}
              </span>
            </p>
            <p>
              Created Date:
              <span className="ml-3">
                {userDetails?.agent_updatedAt || "Not Available"}
              </span>
            </p>
          </div>
          <div className="bg-[#021F51] rounded-md p-2">
            <p>
              Address:
              <span className="ml-3">
                {userDetails?.agent_address || "Not Provided"}
              </span>
            </p>
            <p>
              City:
              <span className="ml-3">
                {userDetails?.agent_city || "Not Provided"}
              </span>
            </p>
            <p>
              State:
              <span className="ml-3">
                {userDetails?.agent_state || "Not Provided"}
              </span>
            </p>
            <p>
              Pincode:
              <span className="ml-3">
                {userDetails?.agent_pincode || "Not Provided"}
              </span>
            </p>
          </div>
          <div className="bg-[#021F51] rounded-md p-2">
            <p>
              Bank Name:
              <span className="ml-3">
                {userDetails?.bank_name || "Not Provided"}
              </span>
            </p>
            <p>
              Beneficiary:
              <span className="ml-3">
                {userDetails?.beneficiary || "Not Provided"}
              </span>
            </p>
            <p>
              Beneficiary Nick Name:
              <span className="ml-3">
                {userDetails?.beneficiary_nick_name || "Not Provided"}
              </span>
            </p>
            <p>
              Account Number :
              <span className="ml-3">
                {userDetails?.account_number || "Not Provided"}
              </span>
            </p>
            <p>
              IFSC :
              <span className="ml-3">{userDetails?.ifsc || "Not Provided"}</span>
            </p>
            <p>
              Account Type :
              <span className="ml-3">
                {userDetails?.account_type || "Not Provided"}
              </span>
            </p>
            <p>
              Branch :
              <span className="ml-3">
                {userDetails?.agent_branch || "Not Provided"}
              </span>
            </p>
            <p>
              Validation :
              <span className="ml-3">
                {userDetails?.validation || "Not Provided"}
              </span>
            </p>
          </div>
          <div className="bg-[#021F51] flex flex-col justify-between rounded-md p-2">
           <div>
           <p>
              Email :
              <span className="ml-3">
                {userDetails?.agent_login_email || "Not Provided"}
              </span>
            </p>
            <p>
              Mobile :
              <span className="ml-3">
                {userDetails?.agent_mobile || "Not Provided"}
              </span>
            </p>
            <p>
              Mobile2 :
              <span className="ml-3">
                {userDetails?.agent_mobile2 || "Not Provided"}
              </span>
            </p>
            <p>
              Landline :
              <span className="ml-3">
                {userDetails?.agent_landline || "Not Provided"}
              </span>
            </p>
            <p>
              Fax :
              <span className="ml-3">
                {userDetails?.agent_fax || "Not Provided"}
              </span>
            </p>
           </div>

            <div>
              <button className="p-2 rounded-md slef-end bg-[#1749A0]">
                Update Bank Details
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#1749A0] rounded-md mt-2 p-1">
          <p className="text-[14px] text-white p-1">Proof</p>
        </div>
        <div>
          <div className="grid grid-cols-3 pt-2 gap-2">
            <div className="max-w-[500px] max-h-[500px] ">
              <img
                className="rounded-lg w-[100%] overflow-hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO3lBX06Q8JhHviLdUMxqWfO88Zd7SvvWSg&s"
              />
            </div>
            <div className="max-w-[500px] max-h-[500px] ">
              <img
                className="rounded-lg w-[100%] overflow-hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO3lBX06Q8JhHviLdUMxqWfO88Zd7SvvWSg&s"
              />
            </div>
            <div className="max-w-[500px] max-h-[500px] ">
              <img
                className="rounded-lg  w-[100%] overflow-hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO3lBX06Q8JhHviLdUMxqWfO88Zd7SvvWSg&s"
              />
            </div>
            <div className="max-w-[500px] max-h-[500px] ">
              <img
                className="rounded-lg w-[100%] overflow-hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO3lBX06Q8JhHviLdUMxqWfO88Zd7SvvWSg&s"
              />
            </div>
            <div className="max-w-[500px] max-h-[500px] ">
              <img
                className="rounded-lg w-[100%] overflow-hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO3lBX06Q8JhHviLdUMxqWfO88Zd7SvvWSg&s"
              />
            </div>
            <div className="max-w-[500px] max-h-[500px] ">
              <img
                className="rounded-lg w-[100%] overflow-hidden"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO3lBX06Q8JhHviLdUMxqWfO88Zd7SvvWSg&s"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 pt-2 gap-2">
            <div className="rounded-lg overflow-hidden">
              <img
                className="w-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO3lBX06Q8JhHviLdUMxqWfO88Zd7SvvWSg&s"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                className="w-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuO3lBX06Q8JhHviLdUMxqWfO88Zd7SvvWSg&s"
              />
            </div>
          </div>
          <div className="bg-[#1749A0] rounded-md mt-2 p-1">
            <p className="text-[14px] text-white p-1">Script</p>
          </div>
          <div className="p-2 bg-[#A1C3FD] rounded-md mt-2">
            <p className="text-[14px] font-bold leading-8">
              वीडियो KYC लिपि हिंदी में: मेरा एजेंसी कोड BSA253295 डीलर का नाम_
              _ _ _ _ __ _ मेरा नाम _ _ _ _ _ _ _ _ _ है, मेरे एजेंसी का नाम _ _
              _ _ _ _ _ _ _ है, मेरा आधार नंबर _ _ _ _ _ _ _ _ _ है, मेरा
              पैनकार्ड नंबर _ _ _ _ _ _ _है, मेरा मोबाइल नंबर _ _ _ _ _ _ _ है,
              मेरा ईमेल _ _ _ _ _ _ है, मेरा पूरा पता _ _ _ _ _ _ _ _ जिला _ _ _
              शहर _ _ _ राज्य _ _ _ पिनकोड _ _ _ _है, मैंने मनी ट्रांसफर AEPS और
              AADHAARPAY सर्विस के लिए अप्लाई किया है
            </p>
            <p className="bg-white text-red-600 rounded-md p-1 inline-block ">
              नोट: कृपया विडिओ बनाते समय अपना आधार कार्ड और पैनकार्ड दिखाए
            </p>
          </div>
          <div className="p-2 bg-[#A1C3FD] rounded-md mt-2">
            <p className="text-[14px] font-bold leading-8">
              Video KYC Script English: My Agency Code BSA253295 DEALER NAME _ _
              _ _ _ _My name is _ _ _ _ _ _, My agency name is _ _ _ _ _, My
              aadhaar number is _ _ _ _ _, My pancard number is _ _ _ _ _, My
              mobile number is _ _ _ _ _, My Email id is _ _ _ _ _, My full
              address is _ _ _ _ _ _ _ _ _ _ _District_ _ _ _City_ _ _ _State_ _
              _ _Pincode_ _ _ _ , I have applied for MONEY TRANSFER, AEPS and
              AADHAARPAY services
            </p>
            <p className="bg-white text-red-600 rounded-md p-1 inline-block">
              Note: Please show your Aadhar Card and PAN Card while making the
              video.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;