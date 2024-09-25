import React from "react";

const AgentsInputs = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  options = [],
  inputType = "input",
}) => {
  const inputHeight =
    name === "address" || name === "billAddress" ? "124px" : "59px";

  return (
    <div className="flex flex-col w-[265px]  ml-[9%] mr-[2%] mb-4">
      <label
        htmlFor={name}
        className="text-black font-[400] text-[16px] leading-normal mb-[10px]"
      >
        {label}
      </label>
      {inputType === "input" && (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={`rounded-[5px] border border-black bg-white px-2`}
          style={{ height: inputHeight }}
          required
        />
      )}
      {inputType === "dropdown" && (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="h-[59px] rounded-[5px] border border-black bg-white px-2"
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
      )}
      {inputType === "radio" && (
        <div className="h-[59px] flex items-center rounded-[5px] border border-black bg-white px-2">
          {options.map((option) => (
            <label key={option} className="flex items-center gap-2 mr-4">
              <input
                type="radio"
                name={name}
                value={option}
                onChange={onChange}
                checked={value === option}
              />
              <span className="text-black font-[400] text-[16px] leading-normal font-open-sans">
                {option}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default AgentsInputs;