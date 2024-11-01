import React, { useState } from "react";
import axios from "axios";

const CreatePlans = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    plan_name: "",
    plan_price: "",
    plan_duration: "",
    plan_features: "",
    plan_status: "active",
    "token" : localStorage.getItem("accesstoken"),
    "accesstoken" : localStorage.getItem("token")
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });   
  };

  const handleSubmit = async (e) => {
    setLoading(true);

    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.1.39:3000/plan/createplan",
        formData,
        {
          headers: {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYW5hdnZhbGFib2p1MTIzQGdtYWlsLmNvbSIsImlhdCI6MTczMDExNTAzNn0.xUUv4hn1NtE_tZ41bWMvhLxI_jJcBPkgsS-Zc0m3xhQ",
            "accesstoken": "06ad83b593f645b193abfd8d9b10c93e",
          },
        }
      );
      setLoading(false);
      console.log("Plan created successfully!", response);
    } catch (error) {
      setLoading(false);
      console.error("Error creating plan:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80 space-y-4"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Create Plan</h2>
        <div>
          <label className="block font-semibold">Plan Name</label>
          <input
            type="text"
            name="plan_name"
            value={formData.plan_name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter plan name"
          />
        </div>
        <div>
          <label className="block font-semibold">Plan Price</label>
          <input
            type="number"
            name="plan_price"
            value={formData.plan_price}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter plan price"
          />
        </div>
        <div>
          <label className="block font-semibold">Plan Duration</label>
          <input
            type="text"
            name="plan_duration"
            value={formData.plan_duration}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            placeholder="e.g., 15 days"
          />
        </div>
        <div>
          <label className="block font-semibold">Plan Features</label>
          <input
            type="textarea"
            name="plan_features"
            value={formData.plan_features}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter plan features"
          />
        </div>
        <div>
          <label className="block font-semibold">Plan Status</label>
          <select
            name="plan_status"
            value={formData.plan_status}
            onChange={handleChange}
            className="w-full  text-black border rounded mt-1"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {loading === true && (
          <div className="flex items-center">
            <button
              disabled
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </button>
          </div>
        )}
        {loading === false && (
          <>
            <button
              type="submit"
              className="w-full bg-[#1749A0] text-white p-2 rounded"
            >
              Create Plan
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default CreatePlans;
