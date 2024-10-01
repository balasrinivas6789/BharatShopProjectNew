import React from 'react'
import ElectronicsBanners from './ElectronicsBanners'
import SearchIcon from '../../../images/Eccomerce/EcommerceMainPageImages/ic_baseline-search.png';
import CartIcon from '../../../images/Eccomerce/EcommerceMainPageImages/Cart.png';
import WishList from '../../../images/Eccomerce/EcommerceMainPageImages/Heart.png';
import ElectronicsContent from './ElectronicsContent';
import ElectronicsProducts from './ElectronicsProducts';
import EcommerceWishlist from '../EcommerceWishlist/EcommerceWishlist';
import { Link } from 'react-router-dom';


const ElectronicsMainPage = () => {
  return (
    <div className='bg-[#17213c] mx-auto  w-[100%] max-w-[1104px]'>

      
      <ElectronicsBanners/>
      <ElectronicsContent/>
      <ElectronicsProducts/>
      



    </div>
  )
}

export default ElectronicsMainPage