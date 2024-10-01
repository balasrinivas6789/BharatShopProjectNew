import React, { useState } from "react";
import "./carCard.css";
import carImg from "../../images/car_img.png";

const CabTrasactions = () => {
  const accordionData = [
    {
      id: "cartype",
      title: "Car Type",
      options: [{ title: "sudan" }, { title: "suv" }],
    },
    {
      id: "fueltype",
      title: "Fuel Type",
      options: [{ title: "CNG" }, { title: "disele" }, { title: "petrol" }],
    },
    {
      id: "carmodel",
      title: "Car Model",
      options: [
        { title: "Maruti Suzuki Ertiga" },
        { title: "Toyota Innova" },
        { title: "Innova Crysta" },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(null);

  const toggleAccordion = (optId) => {
    setIsOpen(isOpen === optId ? null : optId);
  };

  const [sortOption, setSortOption] = useState("Sort By");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    // console.log("Selected Sort Option:", event.target.value); // Do something with the sort option
  };

  return (
    <>
      <div className="card_filter my-[2rem] mx-[auto] w-[80%] flex gap-[15px]">
        <div className="car_filters text-center">
          <div className="flex justify-between">
            <h4>Filters</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M9.75 17.0625C9.75 16.847 9.8356 16.6403 9.98798 16.488C10.1403 16.3356 10.347 16.25 10.5625 16.25H15.4375C15.653 16.25 15.8597 16.3356 16.012 16.488C16.1644 16.6403 16.25 16.847 16.25 17.0625C16.25 17.278 16.1644 17.4847 16.012 17.637C15.8597 17.7894 15.653 17.875 15.4375 17.875H10.5625C10.347 17.875 10.1403 17.7894 9.98798 17.637C9.8356 17.4847 9.75 17.278 9.75 17.0625ZM6.5 12.1875C6.5 11.972 6.5856 11.7653 6.73798 11.613C6.89035 11.4606 7.09701 11.375 7.3125 11.375H18.6875C18.903 11.375 19.1097 11.4606 19.262 11.613C19.4144 11.7653 19.5 11.972 19.5 12.1875C19.5 12.403 19.4144 12.6097 19.262 12.762C19.1097 12.9144 18.903 13 18.6875 13H7.3125C7.09701 13 6.89035 12.9144 6.73798 12.762C6.5856 12.6097 6.5 12.403 6.5 12.1875ZM3.25 7.3125C3.25 7.09701 3.3356 6.89035 3.48798 6.73798C3.64035 6.5856 3.84701 6.5 4.0625 6.5H21.9375C22.153 6.5 22.3597 6.5856 22.512 6.73798C22.6644 6.89035 22.75 7.09701 22.75 7.3125C22.75 7.52799 22.6644 7.73465 22.512 7.88702C22.3597 8.0394 22.153 8.125 21.9375 8.125H4.0625C3.84701 8.125 3.64035 8.0394 3.48798 7.88702C3.3356 7.73465 3.25 7.52799 3.25 7.3125Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="filter_options mb-[1.5rem]">
            {accordionData.map((item) => (
              <div className="filter_option" key={item.id}>
                <div
                  className="option_head"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <p>{item.title}</p>
                  <span>{isOpen === item.id ? "-" : "+"}</span>
                </div>
                {isOpen === item.id && (
                  <div
                    className={
                      isOpen === item.id ? "option_body open" : "option_body"
                    }
                  >
                    {item.options.map((option, index) => (
                      <div className="option_type" key={index}>
                        <label className="checkbox-container">
                          <input
                            name={option.title}
                            className="custom-checkbox"
                            type="checkbox"
                          />
                          <span className="checkmark"></span>
                        </label>
                        <p>{option.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <a>Apply Filters</a>
        </div>
        <div className="car_card">
          <div className="sort-by-container">
            <label htmlFor="sortBy">{sortOption}</label>
            <select id="sortBy" value={sortOption} onChange={handleSortChange}>
              <option value="all">All</option>
              <option value="price">Price</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
              <option value="newest">Newest</option>
            </select>
          </div>
          <div className="car_cards flex justify-between">
            <div className="car_img w-[20%]">
              <img src={carImg} alt="" />
            </div>
            <div className="car_details w-1/2 flex flex-col justify-between">
              <h2>Toyota Innova</h2>
              <div className="flex justify-between">
                <div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M8.5 1.3335C11.7467 1.3335 14.5 4.02216 14.5 7.28416C14.5 10.5975 11.702 12.9235 9.118 14.5042C8.92934 14.6103 8.71649 14.6661 8.5 14.6661C8.28351 14.6661 8.07066 14.6103 7.882 14.5042C5.302 12.9088 2.5 10.6102 2.5 7.28483C2.5 4.02216 5.25333 1.3335 8.5 1.3335Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.83203 6.31883C6.59803 5.6955 7.51203 5.3335 8.49536 5.3335C9.4807 5.3335 10.398 5.69816 11.1654 6.32483M9.94803 8.00016C9.51345 7.72387 9.00966 7.57597 8.4947 7.5735C7.98239 7.57603 7.48111 7.72248 7.04803 7.99616M8.4987 10.0002H8.5027"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      <span>Extra KM Fare</span> ₹13.9/km after 143km
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M5.83464 14.6668C5.1013 14.6668 4.47352 14.4057 3.9513 13.8835C3.42908 13.3613 3.16797 12.7335 3.16797 12.0002V5.3335C3.16797 4.60016 3.42908 3.97238 3.9513 3.45016C4.47352 2.92794 5.1013 2.66683 5.83464 2.66683H6.5013V1.3335H7.83464V2.66683H9.16797V1.3335H10.5013V2.66683H11.168C11.9013 2.66683 12.5291 2.92794 13.0513 3.45016C13.5735 3.97238 13.8346 4.60016 13.8346 5.3335V12.0002C13.8346 12.7335 13.5735 13.3613 13.0513 13.8835C12.5291 14.4057 11.9013 14.6668 11.168 14.6668H5.83464ZM5.83464 6.66683H11.168V5.3335H5.83464V6.66683ZM8.5013 12.0002C8.96797 12.0002 9.36241 11.8419 9.68464 11.5255C10.0069 11.2091 10.168 10.8228 10.168 10.3668C10.168 10.0002 10.0624 9.68638 9.8513 9.4255C9.64019 9.16461 9.19019 8.63394 8.5013 7.8335C7.8013 8.6335 7.34864 9.16683 7.1433 9.4335C6.93797 9.70016 6.83508 10.0113 6.83464 10.3668C6.83464 10.8224 6.99575 11.2086 7.31797 11.5255C7.64019 11.8424 8.03464 12.0006 8.5013 12.0002Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      <span>Fuel Type</span> CNG with refill breaks
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M5.83464 14.6668C5.1013 14.6668 4.47352 14.4057 3.9513 13.8835C3.42908 13.3613 3.16797 12.7335 3.16797 12.0002V5.3335C3.16797 4.60016 3.42908 3.97238 3.9513 3.45016C4.47352 2.92794 5.1013 2.66683 5.83464 2.66683H6.5013V1.3335H7.83464V2.66683H9.16797V1.3335H10.5013V2.66683H11.168C11.9013 2.66683 12.5291 2.92794 13.0513 3.45016C13.5735 3.97238 13.8346 4.60016 13.8346 5.3335V12.0002C13.8346 12.7335 13.5735 13.3613 13.0513 13.8835C12.5291 14.4057 11.9013 14.6668 11.168 14.6668H5.83464ZM5.83464 6.66683H11.168V5.3335H5.83464V6.66683ZM8.5013 12.0002C8.96797 12.0002 9.36241 11.8419 9.68464 11.5255C10.0069 11.2091 10.168 10.8228 10.168 10.3668C10.168 10.0002 10.0624 9.68638 9.8513 9.4255C9.64019 9.16461 9.19019 8.63394 8.5013 7.8335C7.8013 8.6335 7.34864 9.16683 7.1433 9.4335C6.93797 9.70016 6.83508 10.0113 6.83464 10.3668C6.83464 10.8224 6.99575 11.2086 7.31797 11.5255C7.64019 11.8424 8.03464 12.0006 8.5013 12.0002Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      <span>Ride Cancel</span> Freetill 1 hour of departure
                    </p>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>Sudan</li>
                    <li>AC</li>
                    <li>4 Seater</li>
                    <li>149 kms Included</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="car_price w-[20%] flex flex-col justify-between">
              <h2 className="mt-[2rem]">₹1700</h2>
              <a>Book Car</a>
            </div>
          </div>

          <div className="car_cards flex justify-between">
            <div className="car_img w-[20%]">
              <img src={carImg} alt="" />
            </div>
            <div className="car_details w-1/2 flex flex-col justify-between">
              <h2>Toyota Innova</h2>
              <div className="flex justify-between">
                <div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M8.5 1.3335C11.7467 1.3335 14.5 4.02216 14.5 7.28416C14.5 10.5975 11.702 12.9235 9.118 14.5042C8.92934 14.6103 8.71649 14.6661 8.5 14.6661C8.28351 14.6661 8.07066 14.6103 7.882 14.5042C5.302 12.9088 2.5 10.6102 2.5 7.28483C2.5 4.02216 5.25333 1.3335 8.5 1.3335Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.83203 6.31883C6.59803 5.6955 7.51203 5.3335 8.49536 5.3335C9.4807 5.3335 10.398 5.69816 11.1654 6.32483M9.94803 8.00016C9.51345 7.72387 9.00966 7.57597 8.4947 7.5735C7.98239 7.57603 7.48111 7.72248 7.04803 7.99616M8.4987 10.0002H8.5027"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      <span>Extra KM Fare</span> ₹13.9/km after 143km
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M5.83464 14.6668C5.1013 14.6668 4.47352 14.4057 3.9513 13.8835C3.42908 13.3613 3.16797 12.7335 3.16797 12.0002V5.3335C3.16797 4.60016 3.42908 3.97238 3.9513 3.45016C4.47352 2.92794 5.1013 2.66683 5.83464 2.66683H6.5013V1.3335H7.83464V2.66683H9.16797V1.3335H10.5013V2.66683H11.168C11.9013 2.66683 12.5291 2.92794 13.0513 3.45016C13.5735 3.97238 13.8346 4.60016 13.8346 5.3335V12.0002C13.8346 12.7335 13.5735 13.3613 13.0513 13.8835C12.5291 14.4057 11.9013 14.6668 11.168 14.6668H5.83464ZM5.83464 6.66683H11.168V5.3335H5.83464V6.66683ZM8.5013 12.0002C8.96797 12.0002 9.36241 11.8419 9.68464 11.5255C10.0069 11.2091 10.168 10.8228 10.168 10.3668C10.168 10.0002 10.0624 9.68638 9.8513 9.4255C9.64019 9.16461 9.19019 8.63394 8.5013 7.8335C7.8013 8.6335 7.34864 9.16683 7.1433 9.4335C6.93797 9.70016 6.83508 10.0113 6.83464 10.3668C6.83464 10.8224 6.99575 11.2086 7.31797 11.5255C7.64019 11.8424 8.03464 12.0006 8.5013 12.0002Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      <span>Fuel Type</span> CNG with refill breaks
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M5.83464 14.6668C5.1013 14.6668 4.47352 14.4057 3.9513 13.8835C3.42908 13.3613 3.16797 12.7335 3.16797 12.0002V5.3335C3.16797 4.60016 3.42908 3.97238 3.9513 3.45016C4.47352 2.92794 5.1013 2.66683 5.83464 2.66683H6.5013V1.3335H7.83464V2.66683H9.16797V1.3335H10.5013V2.66683H11.168C11.9013 2.66683 12.5291 2.92794 13.0513 3.45016C13.5735 3.97238 13.8346 4.60016 13.8346 5.3335V12.0002C13.8346 12.7335 13.5735 13.3613 13.0513 13.8835C12.5291 14.4057 11.9013 14.6668 11.168 14.6668H5.83464ZM5.83464 6.66683H11.168V5.3335H5.83464V6.66683ZM8.5013 12.0002C8.96797 12.0002 9.36241 11.8419 9.68464 11.5255C10.0069 11.2091 10.168 10.8228 10.168 10.3668C10.168 10.0002 10.0624 9.68638 9.8513 9.4255C9.64019 9.16461 9.19019 8.63394 8.5013 7.8335C7.8013 8.6335 7.34864 9.16683 7.1433 9.4335C6.93797 9.70016 6.83508 10.0113 6.83464 10.3668C6.83464 10.8224 6.99575 11.2086 7.31797 11.5255C7.64019 11.8424 8.03464 12.0006 8.5013 12.0002Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      <span>Ride Cancel</span> Freetill 1 hour of departure
                    </p>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>Sudan</li>
                    <li>AC</li>
                    <li>4 Seater</li>
                    <li>149 kms Included</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="car_price w-[20%] flex flex-col justify-between">
              <h2 className="mt-[2rem]">₹1700</h2>
              <a>Book Car</a>
            </div>
          </div>

          <div className="car_cards flex justify-between">
            <div className="car_img w-[20%]">
              <img src={carImg} alt="" />
            </div>
            <div className="car_details w-1/2 flex flex-col justify-between">
              <h2>Toyota Innova</h2>
              <div className="flex justify-between">
                <div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M8.5 1.3335C11.7467 1.3335 14.5 4.02216 14.5 7.28416C14.5 10.5975 11.702 12.9235 9.118 14.5042C8.92934 14.6103 8.71649 14.6661 8.5 14.6661C8.28351 14.6661 8.07066 14.6103 7.882 14.5042C5.302 12.9088 2.5 10.6102 2.5 7.28483C2.5 4.02216 5.25333 1.3335 8.5 1.3335Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.83203 6.31883C6.59803 5.6955 7.51203 5.3335 8.49536 5.3335C9.4807 5.3335 10.398 5.69816 11.1654 6.32483M9.94803 8.00016C9.51345 7.72387 9.00966 7.57597 8.4947 7.5735C7.98239 7.57603 7.48111 7.72248 7.04803 7.99616M8.4987 10.0002H8.5027"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      <span>Extra KM Fare</span> ₹13.9/km after 143km
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M5.83464 14.6668C5.1013 14.6668 4.47352 14.4057 3.9513 13.8835C3.42908 13.3613 3.16797 12.7335 3.16797 12.0002V5.3335C3.16797 4.60016 3.42908 3.97238 3.9513 3.45016C4.47352 2.92794 5.1013 2.66683 5.83464 2.66683H6.5013V1.3335H7.83464V2.66683H9.16797V1.3335H10.5013V2.66683H11.168C11.9013 2.66683 12.5291 2.92794 13.0513 3.45016C13.5735 3.97238 13.8346 4.60016 13.8346 5.3335V12.0002C13.8346 12.7335 13.5735 13.3613 13.0513 13.8835C12.5291 14.4057 11.9013 14.6668 11.168 14.6668H5.83464ZM5.83464 6.66683H11.168V5.3335H5.83464V6.66683ZM8.5013 12.0002C8.96797 12.0002 9.36241 11.8419 9.68464 11.5255C10.0069 11.2091 10.168 10.8228 10.168 10.3668C10.168 10.0002 10.0624 9.68638 9.8513 9.4255C9.64019 9.16461 9.19019 8.63394 8.5013 7.8335C7.8013 8.6335 7.34864 9.16683 7.1433 9.4335C6.93797 9.70016 6.83508 10.0113 6.83464 10.3668C6.83464 10.8224 6.99575 11.2086 7.31797 11.5255C7.64019 11.8424 8.03464 12.0006 8.5013 12.0002Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      <span>Fuel Type</span> CNG with refill breaks
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M5.83464 14.6668C5.1013 14.6668 4.47352 14.4057 3.9513 13.8835C3.42908 13.3613 3.16797 12.7335 3.16797 12.0002V5.3335C3.16797 4.60016 3.42908 3.97238 3.9513 3.45016C4.47352 2.92794 5.1013 2.66683 5.83464 2.66683H6.5013V1.3335H7.83464V2.66683H9.16797V1.3335H10.5013V2.66683H11.168C11.9013 2.66683 12.5291 2.92794 13.0513 3.45016C13.5735 3.97238 13.8346 4.60016 13.8346 5.3335V12.0002C13.8346 12.7335 13.5735 13.3613 13.0513 13.8835C12.5291 14.4057 11.9013 14.6668 11.168 14.6668H5.83464ZM5.83464 6.66683H11.168V5.3335H5.83464V6.66683ZM8.5013 12.0002C8.96797 12.0002 9.36241 11.8419 9.68464 11.5255C10.0069 11.2091 10.168 10.8228 10.168 10.3668C10.168 10.0002 10.0624 9.68638 9.8513 9.4255C9.64019 9.16461 9.19019 8.63394 8.5013 7.8335C7.8013 8.6335 7.34864 9.16683 7.1433 9.4335C6.93797 9.70016 6.83508 10.0113 6.83464 10.3668C6.83464 10.8224 6.99575 11.2086 7.31797 11.5255C7.64019 11.8424 8.03464 12.0006 8.5013 12.0002Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      <span>Ride Cancel</span> Freetill 1 hour of departure
                    </p>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>Sudan</li>
                    <li>AC</li>
                    <li>4 Seater</li>
                    <li>149 kms Included</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="car_price w-[20%] flex flex-col justify-between">
              <h2 className="mt-[2rem]">₹1700</h2>
              <a>Book Car</a>
            </div>
          </div>

          <div className="car_cards flex justify-between">
            <div className="car_img w-[20%]">
              <img src={carImg} alt="" />
            </div>
            <div className="car_details w-1/2 flex flex-col justify-between">
              <h2>Toyota Innova</h2>
              <div className="flex justify-between">
                <div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M8.5 1.3335C11.7467 1.3335 14.5 4.02216 14.5 7.28416C14.5 10.5975 11.702 12.9235 9.118 14.5042C8.92934 14.6103 8.71649 14.6661 8.5 14.6661C8.28351 14.6661 8.07066 14.6103 7.882 14.5042C5.302 12.9088 2.5 10.6102 2.5 7.28483C2.5 4.02216 5.25333 1.3335 8.5 1.3335Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.83203 6.31883C6.59803 5.6955 7.51203 5.3335 8.49536 5.3335C9.4807 5.3335 10.398 5.69816 11.1654 6.32483M9.94803 8.00016C9.51345 7.72387 9.00966 7.57597 8.4947 7.5735C7.98239 7.57603 7.48111 7.72248 7.04803 7.99616M8.4987 10.0002H8.5027"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>
                      <span>Extra KM Fare</span> ₹13.9/km after 143km
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M5.83464 14.6668C5.1013 14.6668 4.47352 14.4057 3.9513 13.8835C3.42908 13.3613 3.16797 12.7335 3.16797 12.0002V5.3335C3.16797 4.60016 3.42908 3.97238 3.9513 3.45016C4.47352 2.92794 5.1013 2.66683 5.83464 2.66683H6.5013V1.3335H7.83464V2.66683H9.16797V1.3335H10.5013V2.66683H11.168C11.9013 2.66683 12.5291 2.92794 13.0513 3.45016C13.5735 3.97238 13.8346 4.60016 13.8346 5.3335V12.0002C13.8346 12.7335 13.5735 13.3613 13.0513 13.8835C12.5291 14.4057 11.9013 14.6668 11.168 14.6668H5.83464ZM5.83464 6.66683H11.168V5.3335H5.83464V6.66683ZM8.5013 12.0002C8.96797 12.0002 9.36241 11.8419 9.68464 11.5255C10.0069 11.2091 10.168 10.8228 10.168 10.3668C10.168 10.0002 10.0624 9.68638 9.8513 9.4255C9.64019 9.16461 9.19019 8.63394 8.5013 7.8335C7.8013 8.6335 7.34864 9.16683 7.1433 9.4335C6.93797 9.70016 6.83508 10.0113 6.83464 10.3668C6.83464 10.8224 6.99575 11.2086 7.31797 11.5255C7.64019 11.8424 8.03464 12.0006 8.5013 12.0002Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      <span>Fuel Type</span> CNG with refill breaks
                    </p>
                  </div>
                  <div className="flex gap-[5px] items-center my-[5px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <path
                        d="M5.83464 14.6668C5.1013 14.6668 4.47352 14.4057 3.9513 13.8835C3.42908 13.3613 3.16797 12.7335 3.16797 12.0002V5.3335C3.16797 4.60016 3.42908 3.97238 3.9513 3.45016C4.47352 2.92794 5.1013 2.66683 5.83464 2.66683H6.5013V1.3335H7.83464V2.66683H9.16797V1.3335H10.5013V2.66683H11.168C11.9013 2.66683 12.5291 2.92794 13.0513 3.45016C13.5735 3.97238 13.8346 4.60016 13.8346 5.3335V12.0002C13.8346 12.7335 13.5735 13.3613 13.0513 13.8835C12.5291 14.4057 11.9013 14.6668 11.168 14.6668H5.83464ZM5.83464 6.66683H11.168V5.3335H5.83464V6.66683ZM8.5013 12.0002C8.96797 12.0002 9.36241 11.8419 9.68464 11.5255C10.0069 11.2091 10.168 10.8228 10.168 10.3668C10.168 10.0002 10.0624 9.68638 9.8513 9.4255C9.64019 9.16461 9.19019 8.63394 8.5013 7.8335C7.8013 8.6335 7.34864 9.16683 7.1433 9.4335C6.93797 9.70016 6.83508 10.0113 6.83464 10.3668C6.83464 10.8224 6.99575 11.2086 7.31797 11.5255C7.64019 11.8424 8.03464 12.0006 8.5013 12.0002Z"
                        fill="black"
                      />
                    </svg>
                    <p>
                      <span>Ride Cancel</span> Freetill 1 hour of departure
                    </p>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>Sudan</li>
                    <li>AC</li>
                    <li>4 Seater</li>
                    <li>149 kms Included</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="car_price w-[20%] flex flex-col justify-between">
              <h2 className="mt-[2rem]">₹1700</h2>
              <a>Book Car</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CabTrasactions;