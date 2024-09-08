import React, { useState } from "react";

const TravelSearch = () => {
  const [tripType, setTripType] = useState("oneway");
  const [classType, setClassType] = useState("Economy");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-blue-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-white text-2xl mb-6">Traveling</h1>
        
        <div className="bg-blue-800 p-6 rounded-lg">
          <div className="flex justify-center space-x-6 mb-4">
            <button
              className={`${
                tripType === "oneway"
                  ? "bg-white text-blue-800"
                  : "bg-blue-800 text-white"
              } py-2 px-4 rounded-full focus:outline-none`}
              onClick={() => setTripType("oneway")}
            >
              One way
            </button>
            <button
              className={`${
                tripType === "roundtrip"
                  ? "bg-white text-blue-800"
                  : "bg-blue-800 text-white"
              } py-2 px-4 rounded-full focus:outline-none`}
              onClick={() => setTripType("roundtrip")}
            >
              Round Trip
            </button>
            <button
              className={`${
                tripType === "multicity"
                  ? "bg-white text-blue-800"
                  : "bg-blue-800 text-white"
              } py-2 px-4 rounded-full focus:outline-none`}
              onClick={() => setTripType("multicity")}
            >
              Multiple City
            </button>
          </div>

          <div className="flex justify-center space-x-4 mb-4">
            <button
              className={`${
                classType === "Economy"
                  ? "bg-white text-blue-800"
                  : "bg-blue-800 text-white"
              } py-2 px-4 rounded-full focus:outline-none`}
              onClick={() => setClassType("Economy")}
            >
              Economy
            </button>
            <button
              className={`${
                classType === "Premium Economy"
                  ? "bg-white text-blue-800"
                  : "bg-blue-800 text-white"
              } py-2 px-4 rounded-full focus:outline-none`}
              onClick={() => setClassType("Premium Economy")}
            >
              Premier Economy
            </button>
            <button
              className={`${
                classType === "Business"
                  ? "bg-white text-blue-800"
                  : "bg-blue-800 text-white"
              } py-2 px-4 rounded-full focus:outline-none`}
              onClick={() => setClassType("Business")}
            >
              Business
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white">From</label>
              <input
                type="text"
                placeholder="DEL, Delhi Airport India"
                className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>
            <div>
              <label className="block text-white">To</label>
              <input
                type="text"
                placeholder="BOM, Chhatrapati Shivaji Inter..."
                className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white">Departure</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>
            <div>
              <label className="block text-white">Return</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white">Traveler & Classes</label>
              <input
                type="text"
                placeholder="02 Travelers, Thursday"
                className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>
            <div>
              <label className="block text-white">Types of Fares</label>
              <div className="flex justify-between mt-2">
                <button className="bg-white text-blue-800 py-2 px-4 rounded-full">
                  Regular
                </button>
                <button className="bg-blue-800 text-white py-2 px-4 rounded-full">
                  Student
                </button>
                <button className="bg-blue-800 text-white py-2 px-4 rounded-full">
                  Senior citizen
                </button>
                <button className="bg-blue-800 text-white py-2 px-4 rounded-full">
                  Armed Forces
                </button>
              </div>
            </div>
          </div>

          <button className="w-full bg-blue-700 text-white py-3 rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelSearch;