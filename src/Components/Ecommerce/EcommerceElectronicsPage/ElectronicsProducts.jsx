// src/components/ElectronicsProducts.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ElectronicsData } from './ElectronicsData';
import { toggleWishlist } from '../ReduxToolkit/wishlistSlice'; 

import { toggleCartlist } from "../ReduxToolkit/cartSlice";

import ReactPaginate from 'react-paginate';

const ITEMS_PER_PAGE = 9;

const ElectronicsProducts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const wishedItems = useSelector((state) => state.wishlist.wishedItems);
  const dispatch = useDispatch();

  const totalPages = Math.ceil(ElectronicsData.length / ITEMS_PER_PAGE);
  const currentItems = ElectronicsData.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const toggleWishlistHandler = (index) => {
    dispatch(toggleWishlist(index));
  };

  const toggleCartlistHandler = (cartItemDetail) =>{
    dispatch(toggleCartlist(cartItemDetail))
  }


  return (
    <div className="container mt-[53px]">


      <div className="grid grid-cols-3 gap-[20px] py-8 px-[29px] rounded-[10px] w-[821px] bg-[#125fa7] mx-auto">
        {currentItems.map((item, index) => {
          const isWished = wishedItems.has(index);

          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="one-container flex flex-col w-[241px] h-auto rounded-[4px] items-center relative">
                <div
                  className="img-container h-[255px] w-[241px] relative"
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <img src={item.img} alt="images" className="w-[100%]" />
                  <button
                    className={`h-[36px] w-[36px] absolute top-2 right-2 ${isWished ? 'text-red-500' : 'text-black'} hover:text-red-700`}
                    onClick={() => toggleWishlistHandler(index)}
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                </div>

                <div className="content-container mt-[19px] items-center px-[9.5px] w-[241px]">
                  <h3 className="font-sans text-2xl font-semibold leading-normal">{item.name}</h3>
                  <p className="font-sans text-xs font-normal leading-normal">{item.description}</p>
                  <h2 className="text-black font-sans text-2xl font-semibold leading-normal mt-[4px] mb-[12px]">{item.price}</h2>
                  <div className="mb-[20px] inline-flex flex-col items-start p-1.5 bg-[#011f51] px-3.5 rounded-[25px] gap-2.5">
                    <p className="text-[var(--Schemes-On-Primary)] text-justify font-sans text-xs text-[white] font-semibold leading-normal">{item.deliveryDate}</p>
                  </div>
                </div>

                <div className="buttons-container flex w-[222px] justify-between items-center pb-[12px] mt-[20px]">

                  <button onClick={() => toggleCartlistHandler(index)} className="text-[white] rounded-md bg-[#3986CF] flex h-[44px] p-2.5 justify-center items-center gap-2.5 text-[var(--Schemes-On-Primary)] font-sans text-sm font-semibold leading-normal">

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
      </div>

      <div className="pagination-container mt-[28px] w-[821px] mx-auto">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'.'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName={'flex justify-between w-full'}
          pageClassName={'px-4 py-2 mx-1 text-gray-500 border-none rounded bg-transparent'}
          activeClassName={'px-4 py-2 mx-1 text-white border-2 border-white rounded'}
          previousClassName={'px-4 py-2 mx-1 border rounded text-white'}
          nextClassName={'px-4 py-2 mx-1 border rounded text-white'}
          disabledClassName={'bg-gray-300 cursor-not-allowed'}
        />
      </div>
    </div>
  );
};

export default ElectronicsProducts;
