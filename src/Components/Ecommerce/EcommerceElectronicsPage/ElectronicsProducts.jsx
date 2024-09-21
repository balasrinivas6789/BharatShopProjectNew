import React, { useState } from 'react';
import { ElectronicsData } from './ElectronicsData';

const ITEMS_PER_PAGE = 9; // 3 rows and 3 columns

const ElectronicsProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(ElectronicsData.length / ITEMS_PER_PAGE);

  // Get current items
  const currentItems = ElectronicsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mb-4">Pagination Example</h1>
      <div className="grid grid-cols-3 gap-6">
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            {/* Main container */}
            <div className="one-container flex flex-col w-[241px] rounded-[4px] items-center">
              
              {/* Image container */}
              <div className="img-container">
                <img
                  src={item.img}
                  alt="images"
                  className="h-[255px] w-[241px] object-cover "
                />
              </div>
              
              {/* Content container */}
              <div className="content-container mt-[19px] w-full">
                <div className="overflow-hidden text-black text-justify text-ellipsis whitespace-nowrap">
                  <h3 className="font-sans text-2xl font-semibold leading-normal">
                    {item.name}
                  </h3>
                </div>
                <div className="overflow-hidden text-black text-justify text-ellipsis whitespace-nowrap">
                  <p className="font-sans text-xs font-normal leading-normal">
                    {item.description}
                  </p>
                </div>
                <h2 className="text-black font-sans text-2xl font-semibold leading-normal mt-[4px] mb-[12px]">
                  {item.price}
                </h2>
                <div className=" mb-[20px] inline-flex flex-col items-start p-1.5 bg-[#011f51] px-3.5 rounded-[25px] gap-2.5">
                  <p className="text-[var(--Schemes-On-Primary)] text-justify font-sans text-xs text-[white] font-semibold leading-normal">
                    {item.deliveryDate}
                  </p>
                </div>
              </div>

              {/* Buttons container */}
              <div className="buttons-container flex w-[222px] justify-between items-center mt-4">
                <button className="text-[white] rounded-md bg-[#3986CF] flex h-[44px] p-2.5 justify-center items-center gap-2.5 text-[var(--Schemes-On-Primary)] font-sans text-sm font-semibold leading-normal">
                  Add to cart
                </button>
                <button className="text-[white] rounded-md bg-[#3986CF] flex h-[44px] p-2.5 justify-center items-center gap-2.5 text-[var(--Schemes-On-Primary)] font-sans text-sm font-semibold leading-normal">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={`px-4 py-2 mx-1 border rounded ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ElectronicsProducts;
