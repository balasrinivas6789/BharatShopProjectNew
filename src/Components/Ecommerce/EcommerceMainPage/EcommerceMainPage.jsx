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
    <div className="bg-[#17213c] mx-auto  w-[100%] max-w-[1104px] p-[1rem]">
     

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
