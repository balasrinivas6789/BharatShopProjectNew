import React, { useState } from "react";
import first from "../../../images/ImageReview/first.png";
import second from "../../../images/ImageReview/second.png";
import third from "../../../images/ImageReview/third.png";
import fourth from "../../../images/ImageReview/foruth.png";
import WishList from "../../../images/Eccomerce/EcommerceMainPageImages/Heart.png";
import { TiHeartFullOutline } from "react-icons/ti";
import { FaShare } from "react-icons/fa";

const ViewProduct = () => {
  const [previewImage, setPreviewImage] = useState(first);

  return (
    <div className="bg-[#18213B] p-4">
      <div className="flex flex-row justify-between">
        <div className="flex w-[60%] gap-4">
          <div className="flex w-[20%] flex-col gap-[7px] ">
            <img
              className="w-[100%] rounded  h-[140px] cursor-pointer"
              src={first}
              alt="first"
              onMouseEnter={() => setPreviewImage(first)}
            />
            <img
              className="w-[100%] rounded h-[140px] cursor-pointer"
              src={second}
              alt="second"
              onMouseEnter={() => setPreviewImage(second)}
            />
            <img
              className="w-[100%] rounded h-[140px] cursor-pointer"
              src={third}
              alt="third"
              onMouseEnter={() => setPreviewImage(third)}
            />
            <img
              className="w-[100%] rounded h-[140px] cursor-pointer"
              src={fourth}
              alt="fourth"
              onMouseEnter={() => setPreviewImage(fourth)}
            />
          </div>

          <div className="flex w-[80%] items-center relative justify-center  h-[581px]">
            <img
              className="w-full h-full object-cover"
              src={previewImage}
              alt="Preview"
            />
            <div className="absolute">
              <TiHeartFullOutline className="w-[60px] h-[60px] text-black p-[8px] rounded-[24px] ms-[500px] mb-[500px]" />
            </div>
            <div className="absolute">
              <button className="p-[10px] ms-[430px] mt-[480px] bg-[#1749A0] gap-1 rounded-md text-white flex items-center space-x-2">
                <FaShare size={24} />
                <p className="text-[24px]">Share</p>
              </button>
            </div>
          </div>
        </div>

        <div className="text-white w-[40%] ps-4">
          <p className="font-semibold text-[24px]">
            Apple AirPods Pro with MagSafe Case (USB-C) Bluetooth (White, True
            Wireless)
          </p>
          <p className="font-semibold mt-[20px] text-[32px]">
            MRP : ₹ 25 095.00
            <span className="font-bold text-[16px] text-red-600 self-end">
              ₹3999.00
            </span>
          </p>
          <div className="rounded-2xl mb-2 p-2 inline-flex bg-[#2BA73D] items-center space-x-2">
            <div className="rounded-full bg-[#18213B] h-[12px] w-[12px]"></div>
            <div className="text-[16px]">60% off</div>
            <div className="rounded-full bg-[#18213B] h-[12px] w-[12px]"></div>
          </div>
          <p>
            Inclusive of all taxes <br />
            (Also includes all applicable duties)
          </p>

          <div className="mt-[20px]">
            <p className="text-[32px] font-semibold">Color</p>
            <div className="flex gap-[10px]">
              <div className="w-[67px] rounded-full bg-[#414143] h-[67px]"></div>
              <div className="w-[67px] rounded-full bg-[#AFBAFF] h-[67px]"></div>
              <div className="w-[67px] rounded-full bg-[#E98824] h-[67px]"></div>
              <div className="w-[67px] rounded-full bg-[#FF14BD] h-[67px]"></div>
              <div className="w-[67px] rounded-full bg-[#2BA73D] h-[67px]"></div>
            </div>
          </div>

          <div className="mt-[138px]">
            <button className="bg-[#125fa7] rounded-md me-[25px] text-[24px] p-[16.85px]">
              Add to cart
            </button>
            <button className="bg-[#3986CF] rounded-md text-[24px] p-[16.85px]">
              Buy now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <p className="text-[32px] text-white font-bold">Product Details</p>
      </div>
      <div className="mt-[30px] mb-[16px]">
        <div className="bg-white p-[24px] rounded-lg">
          <p className="text-[16px] pb-5 font-bold">Features:</p>
          <ul className="pl-5 font-medium	text-[16px] list-disc">
            <li>
              AirPods Pro (2nd generation) with USB-C deliver up to 2x more
              Active Noise Cancellation than the previous generation, with
              Transparency mode that enables you to hear the world around you,
              and all-new Adaptive Audio that dynamically tailors noise control
              to your environment
            </li>
            <li>
              Conversation Awareness helps lower media volume and enhance the
              voices in front of you while you're interacting with others
            </li>
            <li>A single charge delivers up to 6 hours of battery life</li>
            <li>Touch control lets you easily adjust volume with a swipe</li>
            <li>
              The MagSafe Charging Case is a marvel on its own with Precision
              Finding, built-in speaker and lanyard loop
            </li>
            <li>Warranty: 1 year</li>
            <li>Warranty provided by brand/manufacturer</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-[24px]  mb-[16px] rounded-lg">
        <p className="text-[16px] pb-5 font-bold">Size & Fit</p>
        <div className="font-medium grid md:grid-cols-2 grid-cols-1 gap-[17px] text-[16px]">
          <div className="border-2 shadow-sm rounded-md  p-2">
            <p className="mb-1 text-[14px] font-bold">Type</p>
            <p>In Ear</p>
          </div>
          <div className="border-2 shadow-sm rounded-md p-2">
            <p className="mb-1 text-[14px] font-bold">Pattern</p>
            <p>Solid</p>
          </div>
          <div className="border-2 shadow-sm rounded-md p-2">
            <p className="mb-1 text-[14px] font-bold">Connectivity</p>
            <p>True Wireless</p>
          </div>
          <div className="border-2 shadow-sm rounded-md p-2">
            <p className="mb-1 text-[14px] font-bold">Number of Item</p>
            <p>1</p>
          </div>
          <div className="border-2 shadow-sm rounded-md p-2">
            <p className="mb-1 text-[14px] font-bold">Microphone</p>
            <p>Yes</p>
          </div>
          <div className="border-2 shadow-sm rounded-md p-2">
            <p className="mb-1 text-[14px] font-bold">Package Contains</p>
            <p>
              AirPods Pro (2nd Gen), MagSafe Charging Case, USB-C Cable,
              Documentation, Ear tips
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-[24px]  rounded-lg">
        <p className="text-[16px] pb-5 font-bold">Size & Fit</p>
        <ul className="pl-5 font-medium	text-[16px] list-disc">
          <li>
            AirPods Pro (2nd generation) with USB-C deliver up to 2x more Active
            Noise Cancellation than the previous generation, with Transparency
            mode that enables you to hear the world around you, and all-new
            Adaptive Audio that dynamically tailors noise control to your
            environment
          </li>
        </ul>
      </div>
    </div>    
  );
};

export default ViewProduct;   