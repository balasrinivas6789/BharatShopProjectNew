import React from 'react'
import Grocery from '../../../images/Eccomerce/EcommerceMainPageImages/Category/Grocery.png'
import Mobiles from '../../../images/Eccomerce/EcommerceMainPageImages/Category/Mobile.png'
import Electronics from '../../../images/Eccomerce/EcommerceMainPageImages/Category/Electronics.png'
import Accessories  from '../../../images/Eccomerce/EcommerceMainPageImages/Category/Accessories.png'
import HomeAppliances from '../../../images/Eccomerce/EcommerceMainPageImages/Category/Homeapplicances.png'
import ToysandGifts from '../../../images/Eccomerce/EcommerceMainPageImages/Category/ToysAndGifts.png' 
import { Link } from 'react-router-dom'

const CategoryList = [
    {
        id:1,
        img : Grocery ,
        title : "Grocery"
    },
    {
        id:2,
        img : Mobiles ,
        title : "Mobiles"
    },
    {
        id:3,
        img : Electronics ,
        title : "Electronics",
        route : 'Electronics'
    },
    {
        id:4,
        img : Accessories ,
        title : "Accessories"
    },
    {
        id:5,
        img : HomeAppliances ,
        title : "Home Appliances"
    },
    {
        id:6,
        img : ToysandGifts ,
        title : "Toys and Gifts"
    },
]
const EcommerceCategorys = () => {
  return (
    <div className='mt-[24px] '>
        <h1 className="text-[var(--Schemes-On-Primary, #FFF)] text-white font-open-sans text-[32px] font-bold">Categories</h1>
        <div className='flex flex-row gap-[40px] bg-white p-[16px] rounded-[8px] mt-[16px]' >

            
            {
                CategoryList.map((item)=>(
                    <div  >
                        <Link to='/EcommerceMainPage/Electronics'>
                        <img src={item.img} alt={item.title} className='h-[146px]' />
                    <h3 className="text-black text-center font-open-sans text-[20px] font-semibold mt-[8px]">{item.title}</h3>
                        </Link>
                    
                </div>
                )
                
                )
            }
        
        </div>

    </div>
  )
}

export default EcommerceCategorys