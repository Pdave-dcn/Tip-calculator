import { BillAmountProps } from "./types/types";

const BillAmount = ({ setTempBill, value, errorMessage }: BillAmountProps) => {
  return (
    <div className="flex flex-col mb-[30px]">
      <div className="flex justify-between items-baseline">
        <label
          htmlFor="bill"
          className="text-cust-dark-grayish-cyan pointer-events-none mb-[10px]"
        >
          Bill
        </label>
        {errorMessage && (
          <div className="text-red-600 text-xs">{errorMessage}</div>
        )}
      </div>
      <div className="relative ">
        <input
          className={`bg-cust-very-light-grayish-cyan rounded-lg h-[40px] outline-none p-4 text-2xl text-right text-cust-very-dark-grayish-cyan caret-cust-strong-cyan placeholder-cust-grayish-cyan lg:hover:border-cust-strong-cyan w-full sm:cursor-pointer ${
            errorMessage
              ? "border-red-600 border-2"
              : "focus:border-cust-strong-cyan border-2"
          } focus:placeholder-transparent`}
          type="text"
          name="bill"
          id="bill"
          placeholder="0"
          value={value}
          onChange={(e) => setTempBill(e.target.value)}
        />
        <img
          className="absolute top-0 translate-x-4 translate-y-3"
          src="images/icon-dollar.svg"
          alt="Dollar sign"
        />
      </div>
    </div>
  );
};

export default BillAmount;
