const DisplayResult = () => {
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
            className="pointer-events-none h-[50px] w-[150px] text-3xl text-cust-strong-cyan text-right self-end bg-cust-very-dark-grayish-cyan lg:text-5xl"
            value={"$0.00"}
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
            className="pointer-events-none h-[50px] w-[150px] text-3xl text-cust-strong-cyan text-right bg-cust-very-dark-grayish-cyan lg:text-5xl"
            value={"$0.00"}
            readOnly
          />
        </div>
      </div>
      <button
        type="button"
        className="bg-cust-strong-cyan hover:bg-cust-hvr hover:opacity-100 opacity-15 h-[45px] rounded-md text-[1.2rem] text-cust-very-dark-grayish-cyan"
      >
        RESET
      </button>
    </div>
  );
};

export default DisplayResult;
