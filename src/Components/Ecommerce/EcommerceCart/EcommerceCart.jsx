import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartlist } from "../ReduxToolkit/cartSlice";
import { toggleWishlist } from "../ReduxToolkit/wishlistSlice";
import { ElectronicsData } from "../EcommerceElectronicsPage/ElectronicsData";
import SuggestionsCards from "../Suggestions/SuggestionsCards";
import { useNavigate } from "react-router-dom";

const EcommerceCart = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  const cartItems = useSelector((state) => state.cartlist.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCartlist = (itemId) => {
    dispatch(toggleCartlist(itemId)); // Adjust this based on your action logic
  };

  const handleAddToWishlist = (itemId) => {
    dispatch(toggleWishlist(itemId)); // Adjust this based on your action logic
  };

  const showCoupons = () => {
    setShowCoupon(!showCoupon);
  };
  const [couponValue, setCouponValue] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-[#17213c] ml-11 mt-[53px] max-w-[1107px] ">
      <h2 className="font-open-sans text-[32px] font-bold leading-[43.58px] text-left text-white mt-[22px] mb-[12px]">
        Cart
      </h2>
      <div className="mainContainer flex flex-row gap-[24px]">
        <div className="addressContainer w-[45%] rounded-[8px] p-[13px] px-[16px] gap-[12px] bg-white">
          <div className="addressComponent h-[81px] w-[100%] bg-[#1749a0] flex flex-row justify-between items-center rounded-[4px] p-[17px]">
            <div className="buttonContainer bg-[#ff6d00] flex flex-row w-[30%] h-[47px] rounded-[4px] gap-2">
              <div className="flex justify-center items-center">
                <FaPlus className="w-[55%] h-[55%] text-white" />
              </div>

              <div className="flex justify-center items-center">
                <h3 className="font-open-sans  text-xs  font-semibold  text-white">
                  Add Address
                </h3>
              </div>
            </div>
            <div className="paraContainer">
              <p className="font-open-sans text-white md:text-sm  font-semibold ">
                Add your address to deliver
              </p>
            </div>
          </div>

          <div className="selectAllContainer flex items-center gap-[12px] mt-[12px] mb-[8px]">
            <input
              type="checkbox"
              id="selectAllCheckbox"
              className="w-[16px] h-[16px]"
            />
            <label
              htmlFor="selectAllCheckbox"
              className="font-open-sans text-[14px] font-semibold leading-[19.07px] text-center"
            >
              Select All
            </label>
          </div>

          {Array.from(cartItems).map((itemId) => {
            const item = ElectronicsData.find(
              (product) => product.id === itemId
            );
            return item ? (
              <div
                className="cartCardItem mb-[10px] flex flex-row w-[100%] h-[40%] rounded-[4px] pt-[11px] pr-[16px] pb-[11px] pl-[16px] gap-[16px] border border-gray-300 shadow-lg"
                key={itemId}
              >
                <div className="relative img-container w-[30%] h-[100%] rounded-[4px] overflow-hidden">
                  <input
                    type="checkbox"
                    className="absolute top-2 left-2 z-10 w-[16px] h-[16px]"
                  />
                  <img
                    src={item.img}
                    alt="img"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="content-container">
                  <div className="content-one">
                    <h1 className="font-sans text-[0.999rem] font-semibold  text-left">
                      {item.name}
                    </h1>
                    <h2 className="font-sans text-[0.655rem] font-normal  text-justify">
                      {item.description}
                    </h2>
                    <p className="font-sans text-[0.555rem] font-semibold  text-justify">
                      Sold By: Bharath Shop
                    </p>
                  </div>
                  <div className="content-two flex flex-row justify-between mt-[12px]">
                    <p className="font-open-sans text-1xl font-semibold  text-left">
                      {item.price}
                    </p>
                    <div className="flex flex-row justify-between w-[96px] h-[24px]">
                      <button className="w-[24px] h-[24px] bg-[#CDD0D6]">
                        -
                      </button>
                      <p className="font-sans text-[16px] font-semibold  text-left">
                        1
                      </p>
                      <button className="w-[24px] h-[24px] bg-[#3E67B0]">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="content-three flex flex-row gap-[5%] justify-between mt-[16px]">
                    <div className="removeButton bg-[#3E67B0] gap-[4px] rounded-[4px] p-[4px] flex justify-center items-center w-[60%] h-[32px]">
                      <RiDeleteBin5Fill className="text-white" />
                      <button
                        className="font-sans text-white  md:text-[.155rem] lg:text-xs font-semibold leading-5 text-left"
                        onClick={() => handleRemoveFromCartlist(item.id)}
                      >
                        Remove from cart
                      </button>
                    </div>
                    <div className="wishlistButton bg-[#3E67B0] gap-[4px] rounded-[4px] p-[4px] flex justify-center items-center w-[60%] h-[32px]">
                      <FaHeart className="text-white" />
                      <button
                        className="font-sans text-white text-xs md:text-xs lg:text-xs font-semibold leading-5 text-left"
                        onClick={() => handleAddToWishlist(item.id)}
                      >
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null;
          })}

          <div className="couponContainer">
            {/* Add coupon related content here if needed */}
          </div>
        </div>
        <div className="couponContainer bg-[#1749a0] w-[45%] h-auto  px-[15px] py-[16px] justify-center items-center rounded-[8px]">
          <div className="containerone flex flex-row justify-between w-[100%] h-[22px] mb-[10px]">
            <h1 className="font-sans text-base font-normal  text-left text-[white]">
              Coupon
            </h1>
            <button
              className="font-sans text-base font-bold  text-left text-[#5C9D33]"
              onClick={showCoupons}
            >
              Show Coupons
            </button>
          </div>
          <div className="containertwo  mb-[17px] relative">
            <input
              value={couponValue}
              type="text"
              className="w-[100%] h-[59px] rounded-[8px] "
            />
            <button className="w-[67px] h-[35px] bg-[#ff6d00]  right-5 top-1/2 transform -translate-y-1/2 text-white font-sans text-sm font-semibold leading-[19.07px] rounded-[4px] absolute ">
              Apply
            </button>
          </div>
          {showCoupon && (
            <>
              <div className="availableCoupons flex flex-col w-[100%] rounded-[8px] mb-1 bg-white">
                <button
                  onClick={() => setCouponValue("Enjoybuddy50")}
                  className="font-sans text-[16px] font-normal text-left p-4"
                >
                  Enjoybuddy50
                </button>
                <button
                  onClick={() => setCouponValue("Enjoybuddy51")}
                  className="font-sans text-[16px] font-normal text-left p-4"
                >
                  Enjoybuddy50
                </button>
                <button
                  onClick={() => setCouponValue("Enjoybuddy520")}
                  className="font-sans text-[16px] font-normal text-left p-4"
                >
                  Enjoybuddy50
                </button>
                <button
                  onClick={() => setCouponValue("Enjoybuddy530")}
                  className="font-sans text-[16px] font-normal text-left p-4"
                >
                  Enjoybuddy50
                </button>
              </div>
            </>
          )}
          <div className="containerthree bg-[white] px-[16px] py-[12px] w-[100%] h-[297px] rounded-[8px]">
            <h1 className="font-sans text-xl font-semibold leading-[27.24px] text-left">
              Price Details(for 2 Items)
            </h1>

            <div className="contentWithPrices ">
              <div className="totalMrp flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-base font-normal leading-[21.79px] text-left">
                  Total MRP
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹23,998
                </p>
              </div>
              <div className="discountOnMrp flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-base font-normal leading-[21.79px] text-left">
                  Discount on MRP
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹18,105
                </p>
              </div>
              <div className="couponDiscount flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-base font-normal leading-[21.79px] text-left">
                  Coupon Discount
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹900
                </p>
              </div>
              <div className="flatFormCharges flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-base font-normal leading-[21.79px] text-left">
                  Flat form Charges
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  Free
                </p>
              </div>
              <div className="shippingCharges flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-base font-normal leading-[21.79px] text-left">
                  Shipping charges
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹200
                </p>
              </div>
              <div className="totalAmount flex flex-row justify-between mt-[8px]">
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  Total Amount
                </p>
                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">
                  ₹ 26,148
                </p>
              </div>
            </div>
          </div>
          <div className="containerfour mt-[17px]  flex justify-center">
            <button
              className="w-[40%] h-[57px] rounded-[4px] bg-[#7e9df8] text-white font-sans text-1xl font-semibold "
              onClick={() => navigate(`/EcommerceMainPage/checkoutpage`)}
            >
              Proceed To pay
            </button>
          </div>
        </div>
      </div>
      <div className="suggestionContainer">
        <SuggestionsCards />
      </div>
    </div>
  );
};

export default EcommerceCart;
