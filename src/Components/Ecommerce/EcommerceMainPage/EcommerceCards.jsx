import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import newArrival from '../../../images/Eccomerce/EcommerceMainPageImages/NewArrivals/newArrival.png';
import './CustomArrows.css'; // Import your custom CSS file

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const EcommerceCards = ({ deviceType, name, staticData }) => {
  return (
    <div>
      <div className="mt-[24px] w-[1104px] bg-[#1749a0] p-[24px] relative">
        <h2 className="text-white pb-[11px] pt-[24px] font-open-sans text-[32px] font-bold leading-normal">{name}</h2>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="m-[16px] gap-[24px]"
        >
          {staticData.map(item => (
            <div key={item.id} className="flex w-[240px] py-[29px] px-[24px] h-[100%] flex-col items-start gap-[16px] bg-white relative">
              <div className='h-[192px] w-[192px]' style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>  
                {/* <img src={item.img} alt={item.title} className="h-[100%] w-[100%] " />    */}
             </div>
             
              <h3 className="text-black font-open-sans text-[20px] font-semibold leading-normal">{item.title}</h3>
              <h3 className="text-[#5C913B] font-open-sans text-[20px] font-semibold leading-normal">Min 50% off</h3>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default EcommerceCards;
