import React from 'react';
import SearchIcon from '../../../images/Eccomerce/EcommerceMainPageImages/ic_baseline-search.png';
import CartIcon from '../../../images/Eccomerce/EcommerceMainPageImages/Cart.png';
import WishList from '../../../images/Eccomerce/EcommerceMainPageImages/Heart.png';
import EcommerceBanners from './EcommerceBanners';
import EcommerceCategorys from './EcommerceCategorys';
import ToysAndGifts from './ToysAndGifts';
import { NewArrival, Grocery, Accessories } from './EccommerceData';
import EcommerceCards from './EcommerceCards';
import { Link } from 'react-router-dom';

const EcommerceMainPage = () => {
  return (
    <div className="bg-[#17213c] w-[90%] max-w-[1104px] p-[1rem]">
      <div className="flex  justify-between items-center pt-[51px]">
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
            <img
              src={CartIcon}
              alt="Cart"
              className="w-[40px] h-[40px] p-[8px] rounded-[24px] bg-white"
            />


            <Link to='/cart'>
            <h1 className="text-white font-semibold text-[14px]">Cart</h1>
            </Link>
            

          </div>
          <div className="flex justify-center items-center gap-[15px]">
            <img
              src={WishList}
              alt="Wishlist"
              className="w-[40px] h-[40px] p-[8px] rounded-[24px] bg-white"
            />
            <Link to='/wishlist'>
            <h1 className="text-white font-semibold text-[14px]">Wishlist</h1>
            </Link>
            
          </div>
        </div>
      </div>

      <EcommerceBanners />
      <EcommerceCategorys />
      <EcommerceCards staticData={NewArrival} name="New Arrival" />
      <EcommerceCards staticData={Grocery} name="Grocery" />
      <ToysAndGifts />
      <EcommerceCards staticData={Accessories} name="Accessories" />
    </div>
  );
};

export default EcommerceMainPage;
