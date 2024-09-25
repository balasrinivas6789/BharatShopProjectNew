import React from "react";

const AepsFromInputs = ({
  label,
  name,
  value,
  onChange,
  type,
  options = [],
}) => {
  const inputHeight =
    name === "address" || name === "billAddress" ? "124px" : "59px";

  const renderInputField = () => {
    switch (type) {
      case "text":
      case "number":
      case "email":
        return (
          <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            style={{ height: inputHeight }}
            className="text-black rounded-[5px] border border-black bg-white px-2"
            required
          />
        );
      case "dropdown":
        return (
          <select
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className="text-black rounded-[5px] border border-black bg-white p-2"
            style={{ height: "60px" }}
            required
          >
            <option value="" disabled>
              Select {label}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      // case "file":
      //   return (
      //     <div
      //       className="relative flex items-center w-full cursor-pointer"
      //     //  onClick={() => document.getElementById(name).click()}
      //     >
      //       <input
      //         type="text"
      //         placeholder="No file chosen"
      //         value={value || "No file chosen"}
      //         className="text-black rounded-[5px] border border-black bg-white p-4 w-full cursor-pointer"
      //         style={{ height: "60px" }}
      //         readOnly
      //       />
      //       <label
      //         htmlFor={name}
      //         className="absolute right-2 bg-[#1c4698] text-white p-2 rounded-md cursor-pointer"
      //       >
      //         Upload File
      //       </label>
      //       <input
      //         type="file"
      //         id={name}
      //         name={name}
      //         onChange={(e) => {
      //           const fileName = e.target.files[0].name || "";
      //           //console.log(e.target.files[0].name, "event")
      //           onChange(e, fileName);
      //         }}
      //         style={{ display: "none" }}
      //       />
      //     </div>
      //   );

      
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-[285px] ml-[9%] mr-[2%]">
      <label
        htmlFor={name}
        className="text-white font-[400] text-[16px] leading-normal font-open-sans mb-[10px]"
      >
        {label}
      </label>
      {renderInputField()}
    </div>
  );
};

export default AepsFromInputs;
