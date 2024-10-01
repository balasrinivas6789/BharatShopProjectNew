import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from '../ReduxToolkit/wishlistSlice';
import { ElectronicsData } from '../EcommerceElectronicsPage/ElectronicsData';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { toggleCartlist } from '../ReduxToolkit/cartSlice';

const EcommerceWishlist = () => {
    const wishedItems = useSelector((state) => state.wishlist.wishedItems);
    const dispatch = useDispatch();

    // Update the function to handle removal by item id
    const handleRemoveFromWishlist = (itemId) => {
        dispatch(toggleWishlist(itemId));
    };
    const toggleCartlistHandler = (cartItemDetail) =>{
        dispatch(toggleCartlist(cartItemDetail))
      }

    return (
        <div className="container bg-[#17213c] h-[1255px] mt-[53px] max-w-[1107px] mx-auto">
            <h2 className="font-open-sans text-[32px] font-bold leading-[43.58px] text-left text-white mb-[12px] ">Your Wishlist</h2>
            <div className="grid grid-cols-4 gap-[25px]  py-8 px-[29px] rounded-[10px] ">
                {Array.from(wishedItems).map((itemId) => {
                    const item = ElectronicsData.find((product) => product.id === itemId);

                    return item ? (
                        <div key={item.id} className="bg-white w-[258px] h-auto rounded-lg shadow-md flex flex-col items-center border border-t-0">
                            <div className="flex flex-col w-[258px] h-auto rounded-[4px] items-center relative">
                                {/* Image Section */}
                                <div className="img-container h-[152px] w-[210px] mt-[24px] rounded-tl-[4px] relative" 
                                    style={{
                                        backgroundImage: `url(${item.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}>
                                    <div className="h-[152px] w-[210px]">
                                        <img src={item.img} alt="product" className="w-full h-full object-cover rounded-tl-[4px]" />
                                    </div>
                                </div>

                                {/* Product Info Section */}
                                <div className="content-container   items-center px-[9.5px] w-[241px]">
                                    <h3 className="font-open-sans text-[20px] font-semibold leading-[27.24px] text-left">{item.name}</h3>
                                    <div className='flex flex-row mt-[4px] justify-between justify-center items-center mb-[12px]'>
                                    <h2 className="font-sans text-2xl font-semibold leading-normal  text-[#5C913B]">{item.price}</h2>
                                    <div className='flex flex-row bg-[#2ca73d] h-[30px] w-[101px] justify-center items-center rounded-[22px] gap-[4px]'>
                                    <div className="w-[12px] h-[12px] bg-white rounded-full"></div>
                                    <p className='font-open-sans text-[16px] font-normal leading-[21.79px] text-left text-white'>60 % off</p>
                                    <div className="w-[12px] h-[12px] bg-white rounded-full"></div>
                                    </div>

                                    </div>
                                    
                                </div>

                                {/* Remove Button Section */}
                                <div className="buttons-container flex w-[210px] h-[40px] items-center justify-center text-white rounded-md bg-[#1749a0] mb-[24px] gap-2.5 p-2.5 text-sm font-semibold">
                                    <RiDeleteBin6Line />
                                    <button onClick={() => handleRemoveFromWishlist(item.id)}>
                                        Remove from wishlist
                                    </button>
                                </div>
                            </div>

                            {/* Move to Cart Section */}
                            <div className='px-[24px] py-[16px] mt-[2px] bg-white w-[258px] h-auto rounded-lg shadow-md flex flex-col items-center border border-t-0'>
                                <div className="flex w-[210px] h-[40px] items-center justify-center text-white rounded-md bg-white gap-2.5 p-2.5 text-sm font-semibold">
                                    <IoMdCart className='text-[#1749a0] w-[40px] h-[40px]' />
                                    <button onClick={() => toggleCartlistHandler(item.id)} className='text-[#1749a0] font-sans text-[20px] font-semibold leading-[27.24px] text-left'>
                                        Move to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : null;
                })}
            </div>
            {wishedItems.size === 0 && (
                <p className="text-center text-gray-600">Your wishlist is empty.</p>
            )}
        </div>
    );
};

export default EcommerceWishlist;