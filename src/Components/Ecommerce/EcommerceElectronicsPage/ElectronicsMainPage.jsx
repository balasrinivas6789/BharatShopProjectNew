import React from "react";
import ElectronicsBanners from "./ElectronicsBanners";
import SearchIcon from "../../../images/Eccomerce/EcommerceMainPageImages/ic_baseline-search.png";
import CartIcon from "../../../images/Eccomerce/EcommerceMainPageImages/Cart.png";
import WishList from "../../../images/Eccomerce/EcommerceMainPageImages/Heart.png";
import ElectronicsContent from "./ElectronicsContent";
import ElectronicsProducts from "./ElectronicsProducts";
import EcommerceWishlist from "../EcommerceWishlist/EcommerceWishlist";
import { Link } from "react-router-dom";

const ElectronicsMainPage = () => {
  return (
    <div className="bg-[#17213c] p-[1rem]">
      <div className="flex w-[100%] justify-between items-center pt-[51px]">
        <div className="flex h-[44px] p-[4px_9px] items-center self-stretch">
          <img
            src={SearchIcon}
            alt="Search"
            className="h-[32px] rounded-tl-[8px] rounded-bl-[8px]"
          />
          <input
            type="search"
            placeholder="Search"
            className="flex w-[316px] h-[32px] rounded-tr-[8px] rounded-br-[8px]"
          />
        </div>

        <div className="flex items-center gap-[53px]">
          <div className="flex justify-center items-center gap-[15px]">
            <img
              src={CartIcon}
              alt="Cart"
              className="w-[40px] h-[40px] p-[8px] rounded-[24px] bg-white"
            />
            <h1 className="text-white font-semibold text-[14px]">Cart</h1>
          </div>
          <div className="flex justify-center items-center gap-[15px]">
            <img
              src={WishList}
              alt="Wishlist"
              className="w-[40px] h-[40px] p-[8px] rounded-[24px] bg-white"
            />
            <Link to="/wishlist">
              <h1 className="text-white font-semibold text-[14px]">Wishlist</h1>
            </Link>
          </div>
        </div>
      </div>
      <ElectronicsBanners />
      <ElectronicsContent />
      <ElectronicsProducts />
    </div>
  );
};

export default ElectronicsMainPage;