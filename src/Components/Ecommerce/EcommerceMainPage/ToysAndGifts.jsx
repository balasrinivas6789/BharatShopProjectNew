import React from 'react'
import FirstImage from '../../../images/Eccomerce/EcommerceMainPageImages/ToysGiftsImages/first.png'
import MiddleOne from '../../../images/Eccomerce/EcommerceMainPageImages/ToysGiftsImages/middleone.png'
import MiddleTwo from '../../../images/Eccomerce/EcommerceMainPageImages/ToysGiftsImages/middletwo.png'
import Last from '../../../images/Eccomerce/EcommerceMainPageImages/ToysGiftsImages/last.png'
import "./grid.css"

const ToysAndGifts = () => {
  return (
    <div className='mt-[24px]'>
        <h2 className="text-[var(--Schemes-On-Primary, #FFF)] pb-[11px] pt-[24px] text-white font-open-sans text-[32px] font-bold leading-normal mb-[16px]">Toys and Gifts</h2>
        <div className='main_grid'>
        
        <div className='img1'>
            <img src={FirstImage} alt='ToysAndGiftsImage' />
        </div>
        <div className='flex flex-col gap-[10px] justify-between img2'>
             <img src={MiddleOne} alt='ToysAndGiftsImage' />
             <img src={MiddleTwo} alt='ToysAndGiftsImage' />
        </div>
        <div className='img3'>
                <img src={Last} alt='ToysAndGiftsImage' />
        </div>
        
    </div>
    </div>
    
  )
}

export default ToysAndGifts