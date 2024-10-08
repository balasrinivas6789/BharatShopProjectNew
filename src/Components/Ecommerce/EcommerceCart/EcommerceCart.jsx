import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartlist, } from '../ReduxToolkit/cartSlice';
import { toggleWishlist } from '../ReduxToolkit/wishlistSlice';
import { ElectronicsData } from '../EcommerceElectronicsPage/ElectronicsData';

const EcommerceCart = () => {
    const cartItems = useSelector((state) => state.cartlist.cartItems);
    const dispatch = useDispatch();

    const handleRemoveFromCartlist = (itemId) => {
        dispatch(toggleCartlist(itemId)); // Adjust this based on your action logic
    };

    const handleAddToWishlist = (itemId) => {
        dispatch(toggleWishlist(itemId)); // Adjust this based on your action logic
    };

    return (
        <div className='bg-[#17213c] h-[1891px]'>
            <h2 className="font-open-sans text-[32px] font-bold leading-[43.58px] text-left text-white mt-[22px] mb-[12px]">Cart</h2>
            <div className='mainContainer flex flex-row gap-[24px]'>
                <div className='addressContainer w-[634px] rounded-[8px] p-[13px] px-[16px] gap-[12px] bg-white'>
                    <div className='addressComponent h-[81px] w-[602px] bg-[#1749a0] flex flex-row justify-between items-center rounded-[4px] p-[17px]'>
                        <div className='buttonContainer bg-[#ff6d00] flex flex-row w-[176px] h-[47px] p-[10px] rounded-[4px] gap-[10px]'>
                            <FaPlus className='w-[24px] h-[24px] text-white' />
                            <h3 className="font-open-sans text-[20px] font-semibold leading-[27.24px] text-white">Add Address</h3>
                        </div>
                        <div className='paraContainer'>
                            <p className="font-open-sans text-white text-[20px] font-semibold leading-[27.24px]">Add your address to deliver</p>
                        </div>
                    </div>

                    <div className='selectAllContainer flex items-center gap-[12px] mt-[12px] mb-[8px]'>
                        <input type='checkbox' id='selectAllCheckbox' className='w-[16px] h-[16px]' />
                        <label htmlFor='selectAllCheckbox' className="font-open-sans text-[14px] font-semibold leading-[19.07px] text-center">Select All</label>
                    </div>

                    {Array.from(cartItems).map((itemId) => {
                        const item = ElectronicsData.find((product) => product.id === itemId);
                        return item ? (
                            <div className='cartCardItem mb-[10px] flex flex-row w-[593px] h-[209px] rounded-[4px] pt-[11px] pr-[16px] pb-[11px] pl-[16px] gap-[16px] border border-gray-300 shadow-lg' key={itemId}>
                                <div className="relative img-container w-[126px] h-[187px] rounded-[4px] overflow-hidden">
                                    <input type="checkbox" className="absolute top-2 left-2 z-10 w-[16px] h-[16px]" />
                                    <img
                                        src={item.img}
                                        alt='img'
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="content-container">
                                    <div className='content-one'>
                                        <h1 className="font-sans text-[20px] font-semibold leading-[27.24px] text-left">{item.name}</h1>
                                        <h2 className="font-sans text-[16px] font-normal leading-[21.79px] text-justify">{item.description}</h2>
                                        <p className="font-sans text-[10px] font-semibold leading-[13.62px] text-justify">Sold By: Bharath Shop</p>
                                    </div>
                                    <div className='content-two flex flex-row justify-between mt-[12px]'>
                                        <p className="font-open-sans text-[20px] font-semibold leading-[27.24px] text-left">{item.price}</p>
                                        <div className='flex flex-row justify-between w-[96px] h-[24px]'>
                                            <button className='w-[24px] h-[24px] bg-[#CDD0D6]'>-</button>
                                            <p className="font-sans text-[16px] font-semibold leading-[21.79px] text-left">1</p>
                                            <button className='w-[24px] h-[24px] bg-[#3E67B0]'>+</button>
                                        </div>
                                    </div>
                                    <div className='content-three flex flex-row justify-between mt-[16px]'>
                                        <div className="removeButton bg-[#3E67B0] gap-[4px] rounded-[4px] p-[4px] flex justify-center items-center w-[184px] h-[32px]">
                                            <RiDeleteBin5Fill className='text-white' />
                                            <button
                                                className="font-sans text-[14px] text-white font-semibold leading-[19.07px] text-left"
                                                onClick={() => handleRemoveFromCartlist(item.id)}
                                            >
                                                Remove from the cart
                                            </button>
                                        </div>
                                        <div className="wishlistButton bg-[#3E67B0] gap-[4px] rounded-[4px] p-[4px] flex justify-center items-center w-[136px] h-[32px]">
                                            <FaHeart className='text-white' />
                                            <button
                                                className="font-sans text-white text-[14px] font-semibold leading-[19.07px] text-left"
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

                    <div className='couponContainer'>
                        {/* Add coupon related content here if needed */}
                    </div>
                </div>
                <div className='couponContainer bg-[#1749a0] w-[446px] h-[511px]  px-[15px] py-[16px] justify-center items-center rounded-[8px]'>
                    <div className="containerone flex flex-row justify-between w-[416px] h-[22px] mb-[10px]">
                        <h1 className='font-sans text-base font-normal leading-[21.79px] text-left text-[white]'>Coupon</h1>
                        <button className='font-sans text-base font-bold leading-[21.79px] text-left text-[#5C9D33]'>Show Coupons</button>
                    </div>
                    <div className="containertwo  mb-[17px] relative">

                        <input type='text' className='w-[416px] h-[59px] rounded-[8px] ' />
                        <button className='w-[67px] h-[35px] bg-[#ff6d00] absolute right-2 top-1/2 transform -translate-y-1/2 text-white font-sans text-sm font-semibold leading-[19.07px] rounded-[4px] absolute '>Apply</button>
                        
                    </div>
                    <div className="containerthree bg-[white] px-[16px] py-[12px] w-[416px] h-[297px] rounded-[8px]">
                        <h1 className='font-sans text-xl font-semibold leading-[27.24px] text-left'>Price Details(for 2 Items)</h1>

                        <div className="contentWithPrices ">
                            <div className="totalMrp flex flex-row justify-between mt-[8px]">
                                <p class="font-sans text-base font-normal leading-[21.79px] text-left">Total MRP</p>
                                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">₹23,998</p>
                            </div>
                            <div className="discountOnMrp flex flex-row justify-between mt-[8px]">
                                <p class="font-sans text-base font-normal leading-[21.79px] text-left">Discount on MRP</p>
                                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">₹18,105</p>
                            </div>
                            <div className="couponDiscount flex flex-row justify-between mt-[8px]">
                                <p class="font-sans text-base font-normal leading-[21.79px] text-left">Coupon Discount</p>
                                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">₹900</p>
                            </div>
                            <div className="flatFormCharges flex flex-row justify-between mt-[8px]">
                                <p class="font-sans text-base font-normal leading-[21.79px] text-left">Flat form Charges</p>
                                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">Free</p>
                            </div>
                            <div className="shippingCharges flex flex-row justify-between mt-[8px]">
                                <p class="font-sans text-base font-normal leading-[21.79px] text-left">Shipping charges</p>
                                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">₹200</p>
                            </div>
                            <div className="totalAmount flex flex-row justify-between mt-[8px]">
                                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">Total Amount</p>
                                <p class="font-sans text-2xl font-semibold leading-[32.68px] text-left">₹ 26,148</p>
                            </div>


                        </div>


                    </div>
                    <div className="containerfour mt-[17px]  "></div>

                    <button className='w-[209px] h-[57px] rounded-[4px] bg-[#7e9df8] text-white font-sans text-2xl font-semibold leading-[32.68px] '>Proceed To pay</button>
                </div>
            </div>

        </div>
    );
}

export default EcommerceCart;
