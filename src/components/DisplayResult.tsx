import { DisplayProps } from "./types/types";
import calculateResult from "./utils/calculateResult";

const DisplayResult = ({
  bill,
  people,
  percentage,
  isUpdated,
  onReset,
}: DisplayProps) => {
  const { tipAmount, totalAmount } = calculateResult(bill, people, percentage);

  const tipVal = isUpdated && Number(tipAmount) > 0 ? tipAmount : "0.00";
  const totalVal = isUpdated && Number(totalAmount) > 0 ? totalAmount : "0.00";

  return (
    <div className="bg-cust-very-dark-grayish-cyan p-[20px] rounded-xl flex flex-col justify-center gap-[20px] lg:p-[35px] lg:pt-[65px] lg:justify-between lg:h-full">
      <div className="flex flex-col gap-[20px] lg:gap-[40px]">
        <div className="flex justify-between">
          <div>
            <p className="text-white pointer-events-none lg:mb-[10px]">
              Tip Amount
            </p>
            <p className="text-cust-grayish-cyan text-[0.8rem] pointer-events-none">
              / Person
            </p>
          </div>
          <input
            type="text"
            name="tip-per-person"
            aria-label="Tip amount per person"
            className="pointer-events-none h-[50px] w-[180px] text-[1.7rem] text-cust-strong-cyan text-right self-end bg-cust-very-dark-grayish-cyan lg:text-5xl"
            value={`$${tipVal}`}
            readOnly
          />
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-white pointer-events-none lg:mb-[10px]">Total</p>
            <p className="text-cust-grayish-cyan text-[0.8rem] pointer-events-none">
              / Person
            </p>
          </div>
          <input
            type="text"
            name="tip-per-person"
            aria-label="Total per person"
            className="pointer-events-none h-[50px] w-[200px] text-[1rem text-cust-strong-cyan text-right bg-cust-very-dark-grayish-cyan lg:text-5xl"
            value={`$${totalVal}`}
            readOnly
          />
        </div>
      </div>
      <button
        type="button"
        onClick={onReset}
        className={`bg-cust-strong-cyan hover:bg-cust-hvr hover:opacity-100 ${
          isUpdated ? "opacity-100" : "opacity-15"
        } h-[45px] rounded-md text-[1.2rem] text-cust-very-dark-grayish-cyan`}
      >
        RESET
      </button>
    </div>
  );
};

export default DisplayResult;
