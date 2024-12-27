import { PercentageListProps } from "./types/types";
import { useState } from "react";

const PercentageList = ({
  setTempPercentage,
  errorMessage,
}: PercentageListProps) => {
  const [customValue, setCustomValue] = useState("");

  const handleButtonClick = (value: string) => {
    setCustomValue("");
    setTempPercentage(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCustomValue(inputValue);
    setTempPercentage(inputValue);
  };

  return (
    <div className="mb-[40px]">
      <div className="flex justify-between items-baseline">
        <p className="mb-[20px] text-cust-dark-grayish-cyan pointer-events-none">
          Select Tip %
        </p>
        {errorMessage && (
          <div className="text-red-600 text-xs">{errorMessage}</div>
        )}
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-[15px] lg:grid-cols-3 lg:grid-rows-2">
        {[5, 10, 15, 25, 50].map((percent) => (
          <button
            type="button"
            key={percent}
            className="bg-cust-very-dark-grayish-cyan h-[50px] rounded-lg text-white text-2xl md:hover:text-cust-very-dark-grayish-cyan md:hover:bg-cust-hvr focus:bg-cust-strong-cyan focus:text-cust-very-dark-grayish-cyan"
            onClick={() => handleButtonClick(percent.toString())}
          >
            {percent}%
          </button>
        ))}

        <input
          type="text"
          name="custom-%"
          id="custom-%"
          className="h-[50px] rounded-lg text-cust-dark-grayish-cyan text-cust-very-dark-grayish-cyan text-2xl bg-cust-very-light-grayish-cyan text-center caret-cust-strong-cyan placeholder-cust-very-dark-grayish-cyan focus:text-right focus:placeholder-transparent focus:outline-cust-strong-cyan p-4 cursor-pointer"
          placeholder="Custom"
          value={customValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default PercentageList;
