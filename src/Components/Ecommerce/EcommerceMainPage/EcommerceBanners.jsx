import React from 'react';

import './EcommerceBanners.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner from '../../../images/Eccomerce/EcommerceMainPageImages/Banners/Frame 1088.png';
import SecondBanner from '../../../images/Eccomerce/EcommerceMainPageImages/Banners/Frame 1100.png'
import ThirdBanner from '../../../images/Eccomerce/EcommerceMainPageImages/Banners/Frame 1101.png'

const EcommerceBanners = () => {
    return (
        <div className="flex mt-[24px] flex-col items-center gap-[24px]">
            <Carousel
             className="custom-carousel"
            showArrows={false} 
            showStatus={false} 
            showIndicators={true} 
            showThumbs={false} // Remove thumbnails
            infiniteLoop
            autoPlay
            interval={2000}
            
            >
                <div>
                    <img src={Banner} alt="Ecommerce Banner" />
                  
                </div>
                <div>
                    <img src={SecondBanner} alt="Banner 1" />
                    
                </div>
                <div>
                    <img src={ThirdBanner} alt="Banner 2" />
                    
                </div>
                
            </Carousel>
        </div>
    );
};

export default EcommerceBanners;
