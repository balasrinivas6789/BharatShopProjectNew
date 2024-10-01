import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./customArrowsForSuggestionContainer.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 bg-gray-300 p-2 rounded-full"
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      &#8592; {/* Left arrow symbol */}
    </button>
  );
};

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 bg-gray-300 p-2 rounded-full"
      style={{ top: "50%", transform: "translateY(-50%)" }}
    >
      &#8594; {/* Right arrow symbol */}
    </button>
  );
};

const data = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1204039347/photo/apple-airpods-on-a-white-background.jpg?s=612x612&w=0&k=20&c=2__4hfynkvBt7PA0UE7N5JxSTuaGRFVKaXJUuoQlBzk=",
    name: "Apple Air pods Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat porttitor in porttitor id feugiat condimentum.",
    price: "₹25999/-",
    deliveryDate: "FREE delivery Fri, 20 Sept",
  },
  {
    id: 2,
    img: "https://media.istockphoto.com/id/1204039347/photo/apple-airpods-on-a-white-background.jpg?s=612x612&w=0&k=20&c=2__4hfynkvBt7PA0UE7N5JxSTuaGRFVKaXJUuoQlBzk=",
    name: "Apple Air pods Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat porttitor in porttitor id feugiat condimentum.",
    price: "₹25999/-",
    deliveryDate: "FREE delivery Fri, 20 Sept",
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1204039347/photo/apple-airpods-on-a-white-background.jpg?s=612x612&w=0&k=20&c=2__4hfynkvBt7PA0UE7N5JxSTuaGRFVKaXJUuoQlBzk=",
    name: "Apple Air pods Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat porttitor in porttitor id feugiat condimentum.",
    price: "₹25999/-",
    deliveryDate: "FREE delivery Fri, 20 Sept",
  },
  {
    id: 4,
    img: "https://kingdomgadgetsofficial.com/wp-content/uploads/2021/01/airpods6.jpg",
    name: "Apple Air pods Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat porttitor in porttitor id feugiat condimentum.",
    price: "₹25999/-",
    deliveryDate: "FREE delivery Fri, 20 Sept",
  },
  {
    id: 5,
    img: "https://media.istockphoto.com/id/1204039347/photo/apple-airpods-on-a-white-background.jpg?s=612x612&w=0&k=20&c=2__4hfynkvBt7PA0UE7N5JxSTuaGRFVKaXJUuoQlBzk=",
    name: "Apple Air pods Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat porttitor in porttitor id feugiat condimentum.",
    price: "₹25999/-",
    deliveryDate: "FREE delivery Fri, 20 Sept",
  },
  {
    id: 6,
    img: "https://media.istockphoto.com/id/1204039347/photo/apple-airpods-on-a-white-background.jpg?s=612x612&w=0&k=20&c=2__4hfynkvBt7PA0UE7N5JxSTuaGRFVKaXJUuoQlBzk=",
    name: "Apple Air pods Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur. Consequat porttitor in porttitor id feugiat condimentum.",
    price: "₹25999/-",
    deliveryDate: "FREE delivery Fri, 20 Sept",
  },
];

const SuggestionsCards = ({ deviceType }) => {
  return (
    <div className="bg-[#0f5faa] w-[93%] mt-[50px] p-[36px_40px] gap-[12px] rounded-[10px] relative">
      <div className="flex justify-between mb-[16px]">
        <h1 className="font-open-sans text-[32px] font-bold leading-[43.58px] text-left text-white">
          Recommended
        </h1>
      </div>

      

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="m-[16px] gap-[24px]"
      >
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-white w-[241px] rounded-[4px] shadow-md flex flex-col items-center"
            >
              <div className="one-container flex flex-col mb-[19px] w-[241px] h-auto rounded-[4px] items-center">
                <div
                  className="img-container h-[255px] w-[241px] relative"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <button className={`h-[36px] w-[36px] absolute top-2 right-2`}>
                    <i className="fas fa-heart"></i>
                  </button>
                </div>

                <div className="content-container items-center px-[9.5px] w-[241px]">
                  <h3 className="font-sans text-2xl font-semibold leading-normal">
                    {item.name}
                  </h3>
                  <p className="font-sans text-xs font-normal leading-normal">
                    {item.description}
                  </p>
                  <h2 className="text-black font-sans text-2xl font-semibold leading-normal mt-[4px] mb-[12px]">
                    {item.price}
                  </h2>
                  <div className="mb-[20px] inline-flex flex-col items-start p-1.5 bg-[#011f51] px-3.5 rounded-[25px] gap-2.5">
                    <p className="text-[var(--Schemes-On-Primary)] text-justify font-sans text-xs text-[white] font-semibold leading-normal">
                      {item.deliveryDate}
                    </p>
                  </div>
                </div>

                <div className="buttons-container flex w-[222px] justify-between items-center pb-[12px]">
                  <button className="text-[white] rounded-md bg-[#3986CF] flex h-[44px] p-2.5 justify-center items-center gap-2.5 text-[var(--Schemes-On-Primary)] font-sans text-sm font-semibold leading-normal">
                    Add to cart
                  </button>
                  <button className="text-[white] rounded-md bg-[#3986CF] flex h-[44px] p-2.5 justify-center items-center gap-2.5 text-[var(--Schemes-On-Primary)] font-sans text-sm font-semibold leading-normal">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default SuggestionsCards;
