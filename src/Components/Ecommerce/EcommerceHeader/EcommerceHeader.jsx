import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import SearchIcon from '../../../images/Eccomerce/EcommerceMainPageImages/ic_baseline-search.png';
import { IoMdHeart } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";

const EcommerceHeader = () => {
  const location = useLocation(); // Get the current location

  // Determine active states based on the current pathname
  const isCartActive = location.pathname === '/EcommerceMainPage/cartpage';
  const isWishlistActive = location.pathname === '/EcommerceMainPage/wishlist';

  return (
    <div className="flex max-w-[90%] mx-auto justify-between items-center pt-[51px]">
      <div className="flex h-[44px] p-[4px_9px] items-center self-stretch">
        <img src={SearchIcon} alt="Search" className="h-[32px] rounded-tl-[8px] rounded-bl-[8px]" />
        <input
          type="search"
          placeholder="Search"
          className="flex w-[316px] h-[32px] rounded-tr-[8px] rounded-br-[8px]"
        />
      </div>

      <div className="flex items-center gap-[53px]">
        <div className="flex justify-center items-center gap-[15px]">
          <MdShoppingCart 
            className={`w-[40px] h-[40px] p-[8px] bg-white rounded-[24px] ${isCartActive ? 'text-[#ff6d00]' : 'text-[#1749A0]'}`} 
          />
          <Link to='/EcommerceMainPage/cartpage'>
            <h1 className="text-white font-semibold text-[14px]">
              Cart
            </h1>
          </Link>
        </div>

        <div className="flex justify-center items-center gap-[15px]">
          <IoMdHeart 
            className={`w-[40px] h-[40px] bg-white p-[8px] rounded-[24px] ${isWishlistActive ? 'text-[#ff6d00]' : 'text-[#1749A0]'}`} 
          />
          <Link to='/EcommerceMainPage/wishlist'>
            <h1 className="text-white font-semibold text-[14px]">
              Wishlist
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EcommerceHeader;
