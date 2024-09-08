import React from "react";

const FlightBookingReview = () => {
  return (
    <>
      <header className="bg-[#d5deed] p-3">
        <p class="ps-[100px] pt-4 text-black text-[24px] font-semibold leading-normal ">
          Booking Review from Delhi to Mumbai
        </p>
      </header>

      <div className="flex justify-between ">
        <div className="ps-[100px] w-[60%]">
          <div className=" w-full rounded-2xl text-white bg-[#135FA7] overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div className="font-semibold text-xl mb-2">
                Enter Your Details
              </div>
              <button
                type="button"
                class="text-white h-[50px] bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300   text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 "
              >
                <span className="pe-3">+</span>
                Add Adult
              </button>
              <button
                type="button"
                class="text-white h-[50px] bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300   text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 "
              >
                <span className="pe-3">+</span>
                Add Child
              </button>
              <button
                type="button"
                className="text-white h-[50px] bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300   text-lg px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 "
              >
                <span className="pe-3">+</span>
                Add Infrant
              </button>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div class=" rounded-2xl overflow-hidden shadow-lg bg-[#f4f4f4] text-black">
                <div class="px-6 py-4 ">
                  <div class="font-bold text-xl mb-2">Adult 1</div>
                </div>
                <div class="px-6 pb-2">
                  <span class="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                    />
                    mr
                  </span>
                  <span class="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                    />
                    miss
                  </span>

                  <span class="inline-block   px-3 py-1 text-sm font-semibold text-gray-700 mb-2">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4"
                    />
                    mrs.
                  </span>
                </div>
                <div class="px-6 py-1 flex justify-between">
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm  mb-2"
                      for="username"
                    >
                      Enter your first name
                    </label>
                    <input
                      class="shadow appearance-none border border-gray-950 rounded-lg w-full py-3 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                    />
                  </div>

                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm mb-2"
                      for="username"
                    >
                      Enter your last name
                    </label>
                    <input
                      class="shadow appearance-none border border-gray-950 rounded-lg w-full py-3 px-4 text-gray-700 text-lg leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] ">
          <div class="max-w-sm mx-auto text-white bg-[#135FA7] shadow-md rounded-lg overflow-hidden">
            <div class="p-6 text-white">
              <h2 class="text-2xl font-bold mb-2">Card Title</h2>
              <p class=" mb-4 ">
                This is a description of the card. It can contain any kind of
                content, including text and images.
              </p>
              <a href="#" class="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default FlightBookingReview;
