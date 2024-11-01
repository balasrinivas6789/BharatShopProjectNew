import React, { useState, useEffect, useRef } from "react";
import bharatshoplogo from "../../images/Frame 387.png";
import { IoMdSearch } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { LuMail, LuWallet } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import "./Header.css";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = ({ sidebarToggle, setSidebarToggle }) => {
  // notification display handling
  const [activeNotification, setActiveNotification] = useState(null);
  const notificationRef = useRef(null); // Create a reference for the notification div
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleNotification = (divId) => {
    setActiveNotification(divId);
  };

  // Close the notification when clicking outside
  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setActiveNotification(null); // Close the notification
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // notification display handling end

  // search bar functionality
  const [searchTerm, setSearchTerm] = useState(""); // State to store search input
  const [searchResults, setSearchResults] = useState([]); // Example results, can be used for filtering

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term state
    performSearch(e.target.value); // Call search function when input changes
  };

  const performSearch = (term) => {
    // Example: Filter through data or make an API call based on search term
    console.log("Searching for:", term);
    const filteredResults = mockData.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const mockData = ["Task 1", "Message", "Notification", "Task 2"];

  const formData = new URLSearchParams();
  formData.append("token", localStorage.getItem("token"));
  formData.append("accesstoken", localStorage.getItem("accesstoken"));

  const handleLogout = () => {
    axios
      .post(`http://192.168.1.39:3000/user/logout`, formData)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const accordions = [
    {
      id: 1,
      icon: <IoSettingsSharp />,
      title: "Settings",
      items: [
        { name: "Tax Settings" },
        { name: "Other Settings" },
        { name: "Payment Gateway" },
        { name: "SMS Setttings" },
        { name: "Convenience Fee" },
      ],
    },
    { id: 2, icon: <IoIosLock />, title: "Log out" },
    {
      id: 3,
      icon: <TbLogout />,
      title: "Change Password",
      items: [
        { name: "My Password" },
        { name: "My Transction pin" },
        { name: "Employee Password" },
      ],
    },
    {
      id: 4,
      icon: <IoPerson onClick={() => navigate("/profile")} />,
      title: "Profile",
      items: [
        { name: "Account Details", route: "profile/accountdetails" },
        { name: "Manage Funds", route: "profile/managefunds" },
        { name: "Manage Credits", route: "profile/managecredits" },
      ],
    },
  ];

  return (
    <header className="px-[2%] sticky top-0 flex items-center z-50 justify-between p-4 pt-1 pb-1 bg-white shadow-md">
      <div className="flex items-center space-x-40">
        <div className="flex items-center space-x-2">
          <button
            className="p-2 text-black-600"
            onClick={() => {
              setSidebarToggle(!sidebarToggle);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[36px] w-[36px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>  

          <div className="flex w-[204px] h-[102px] pt-[5px] pr-[38px] pb-[6px] pl-[8px] justify-center items-center flex-shrink-0">
            <img
              src={bharatshoplogo}
              alt="bharatshoplogo"
              className="w-[128px] h-[91px] flex-shrink-0"
            />
          </div>
        </div>

        <div className=" md:flex items-center space-x-4">
          <a
            className={
              activeNotification === "tasks"
                ? "notification_holder"
                : "notification_holder"
            }
            onClick={() => handleNotification("tasks")}
            ref={notificationRef}
          >
            <div className="w-[36px] h-[36px] flex bg-[#18479e]  justify-center items-center text-white rounded-full">
              <FaRegCalendarCheck size={20} />
            </div>
            <div
              className={
                activeNotification === "tasks"
                  ? "pop_notification show"
                  : "pop_notification hide"
              }
              onClick={() => handleNotification("tasks")}
            >
              <div className="triangle_top"></div>
              <div className="loading_notification">
                <ul>
                  <li>Loading...</li>
                </ul>
              </div>
              <div className="notifications">
                <ul>
                  <li>Please wait while loading</li>
                  <li>See all pending tasks</li>
                </ul>
              </div>
            </div>
          </a>
          <a
            className={
              activeNotification === "message"
                ? "notification_holder"
                : "notification_holder"
            }
            onClick={() => handleNotification("message")}
            ref={notificationRef}
          >
            <div className="w-[36px] h-[36px] flex  bg-[#18479e]  justify-center items-center text-white  rounded-full">
              <LuMail size={20} />
            </div>
            <div
              className={
                activeNotification === "message"
                  ? "pop_notification message_continer show"
                  : "pop_notification message_continer hide"
              }
              onClick={() => handleNotification("message")}
            >
              <div className="triangle_top"></div>
              <div className="loading_notification">
                <ul>
                  <li>You have 01 New Message</li>
                </ul>
              </div>
              <div className="notifications">
                <div className="message">
                  <div className="message_icon">
                    <span>C</span>
                  </div>
                  <div className="message_data">
                    <h4>Contact Support</h4>
                    <p>
                      we have a special offer only for you, since you are
                      Joining with us you will availe varius of offers daily.
                    </p>
                  </div>
                  <div className="message_time">
                    <p>02:37 P.M</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a
            className={
              activeNotification === "notification"
                ? "notification_holder"
                : "notification_holder"
            }
            onClick={() => handleNotification("notification")}
            ref={notificationRef}
          >
            <div className="w-[36px] h-[36px] flex bg-[#18479e] justify-center text-white items-center rounded-full">
              <FaRegBell size={20} />
            </div>
            <div
              className={
                activeNotification === "notification"
                  ? "pop_notification message_continer show"
                  : "pop_notification message_continer hide"
              }
              onClick={() => handleNotification("notification")}
            >
              <div className="triangle_top"></div>
              <div className="loading_notification">
                <ul>
                  <li>You have 01 New Notification</li>
                </ul>
              </div>
              <div className="notifications">
                <div className="message">
                  <div className="message_data">
                    <h4>Contact Support</h4>
                    <p>
                      we have a special offer only for you, since you are
                      Joining with us you will availe varius of offers daily.
                    </p>
                  </div>
                  <div className="message_time">
                    <p>02:37 P.M</p>
                  </div>
                </div>
                <div className="message">
                  <div className="message_data">
                    <h4>Contact Support</h4>
                    <p>
                      we have a special offer only for you, since you are
                      Joining with us you will availe varius of offers daily.
                    </p>
                  </div>
                  <div className="message_time">
                    <p>02:37 P.M</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        {/* Search bar with action */}
        <div className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange} // Handle search input change
            className="border rounded-lg px-4 py-2 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Example of search results */}
          {searchTerm && (
            <div className="search-results absolute search_container">
              {searchResults.length > 0 ? (
                <ul>
                  {searchResults.map((result, index) => (
                    <a>
                      <li key={index}>{result}</li>
                    </a>
                  ))}
                </ul>
              ) : (
                <p>No results found</p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center md:space-x-20 lg:space-x-40 ">
        <div className="w-[36px] h-[36px] flex bg-[#18479e] justify-center text-white items-center rounded-full">
          <LuWallet size={20} />
        </div>

        <div className="w-[36px] h-[36px] flex bg-[#18479e] justify-center text-white items-center rounded-full">
          <a
            className={
              activeNotification === "wallet"
                ? "notification_holder"
                : "notification_holder"
            }
            onClick={() => handleNotification("wallet")}
            ref={notificationRef}
          >
            <div className="w-[36px] h-[36px] flex  bg-[#18479e]  justify-center items-center text-white  rounded-full">
              <LuUser2 size={20} />
            </div>
            <div
              className={
                activeNotification === "wallet"
                  ? "pop_notificationwallet message_continer show"
                  : "pop_notificationwallet message_continer hide"
              }
              onClick={() => handleNotification("wallet")}
            >
              <div className="triangle_wallet_top"></div>
              <div className="loading_notification">
                <ul>
                  <li className="text-[20px]">
                    User Name
                    <span className="text-[14px] pl-2 self-end">
                      Agent :7842154
                    </span>
                  </li>
                </ul>
              </div>
              <div className="notificationswallet">
                <div className="message w-[100%] flex flex-col text-black">
                  {accordions.map((accordion) => (
                    <div className="w-[100%]" key={accordion.id}>
                      <h2 id={`accordion-collapse-heading-${accordion.id}`}>
                        <button
                          type="button"
                          className={`flex items-center font-semibold m-0 space-x-2 w-[100%]`}
                          onClick={() => toggleAccordion(accordion.id)}
                          aria-expanded={expanded === accordion.id}
                          aria-controls={`accordion-collapse-body-${accordion.id}`}
                        >
                          <div className="flex justify-between w-[100%]">
                            <p className="flex items-center font-semibold p-2 m-0 space-x-2">
                              {accordion.icon}
                              <span> {accordion.title}</span>
                            </p>
                            <div className="flex items-center font-semibold p-2 m-0 space-x-2">
                              <svg
                                className={`w-3 h-3  transition-transform duration-1000 `}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 5h8M5 1v8"
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                      </h2>
                      <div
                        id={`accordion-collapse-body-${accordion.id}`}
                        className={`overflow-hidden transition-all duration-1000 w-[100%] ${
                          expanded === accordion.id
                            ? "max-h-[500px]"
                            : "max-h-0"
                        }`}
                      >
                        <div className="w-[100%] rounded-b-lg">
                          <ul className="text-black w-[100%] space-y-2">
                            {accordion?.items?.map((item, index) => (
                              <li
                                key={index}
                                className="hover:bg-[#96ADD4] pl-9 text-sm cursor-pointer"
                                onClick={() => navigate(`/${item.route}`)}
                              >
                                {item.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;