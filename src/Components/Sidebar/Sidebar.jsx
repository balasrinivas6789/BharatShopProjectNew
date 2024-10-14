import React, { useState } from "react";
import "./Sidebar.css";
import accordions from "./SidebarData"; 
import { useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarToggle }) => {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="sidebar w-[18.88888888888889%] fixed scrollbar-hidden overflow-y-auto">
      <div className="pb-[7rem]">
        <div className="m-3">
          <h2 id="accordion-collapse-heading-0">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="w-full p-3 font-medium text-white rounded bg-blue-300 flex justify-normal"
            >
              {/* SVG Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Component 1">
                  <path
                    id="Vector"
                    d="M11 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H11V21ZM13 21H19C20.1 21 21 20.1 21 19V12H13V21ZM21 10V5C21 3.9 20.1 3 19 3H13V10H21Z"
                    fill="#FF6D00"
                  />
                </g>
              </svg>
              <span className="ms-[55px]">Dash Board</span>
            </button>
          </h2>
        </div>
        {accordions.map((accordion) => (
          <div className="m-3" key={accordion.id}>
            <h2 id={`accordion-collapse-heading-${accordion.id}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-3 font-medium text-white rounded gap-3 ${expanded === accordion.id ? "bg-[#011f51]" : "bg-blue-300"}`}
                onClick={() => toggleAccordion(accordion.id)}
                aria-expanded={expanded === accordion.id}
                aria-controls={`accordion-collapse-body-${accordion.id}`}
              >
                <img className="text-orange-500 shrink" src={accordion.icon} alt="icon" />
                <span class="text-xl  lg:text-sm xl:text-md   text-center  w-full">{accordion.title}</span>
                <svg
                  className={`w-3 h-3  transition-transform duration-1000 ${expanded === accordion.id ? "rotate-45" : "rotate-0"}`}
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
              </button>
            </h2>
            <div
              id={`accordion-collapse-body-${accordion.id}`}
              className={`overflow-hidden transition-all duration-1000 ${expanded === accordion.id ? "max-h-[500px]" : "max-h-0"}`}
            >
              <div className="p-3 bg-[#011f51] rounded-b-lg">
                <ul className="text-white space-y-2">
                  {accordion.items.map((item, index) => (
                    <li
                      key={index}
                      className="hover:text-orange-500 cursor-pointer"
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
  );
};

export default Sidebar;