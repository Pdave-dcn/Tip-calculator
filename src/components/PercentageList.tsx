const PercentageList = () => {
  return (
    <div className="mb-[40px]">
      <p className="mb-[20px] text-cust-dark-grayish-cyan pointer-events-none">
        Select Tip %
      </p>
      <div className="grid grid-cols-2 grid-rows-3 gap-[15px] lg:grid-cols-3 lg:grid-rows-2">
        <button
          type="button"
          className="bg-cust-very-dark-grayish-cyan h-[50px] rounded-lg text-white text-2xl md:hover:text-cust-very-dark-grayish-cyan md:hover:bg-cust-hvr focus:bg-cust-strong-cyan focus:text-cust-very-dark-grayish-cyan"
        >
          5%
        </button>
        <button
          type="button"
          className="bg-cust-very-dark-grayish-cyan h-[50px] rounded-lg text-white text-2xl md:hover:text-cust-very-dark-grayish-cyan md:hover:bg-cust-hvr focus:bg-cust-strong-cyan focus:text-cust-very-dark-grayish-cyan"
        >
          10%
        </button>
        <button
          type="button"
          className="bg-cust-very-dark-grayish-cyan h-[50px] rounded-lg text-white text-2xl md:hover:text-cust-very-dark-grayish-cyan md:hover:bg-cust-hvr focus:bg-cust-strong-cyan focus:text-cust-very-dark-grayish-cyan"
        >
          15%
        </button>
        <button
          type="button"
          className="bg-cust-very-dark-grayish-cyan h-[50px] rounded-lg text-white text-2xl md:hover:text-cust-very-dark-grayish-cyan md:hover:bg-cust-hvr focus:bg-cust-strong-cyan focus:text-cust-very-dark-grayish-cyan"
        >
          25%
        </button>
        <button
          type="button"
          className="bg-cust-very-dark-grayish-cyan h-[50px] rounded-lg text-white text-2xl md:hover:text-cust-very-dark-grayish-cyan md:hover:bg-cust-hvr focus:bg-cust-strong-cyan focus:text-cust-very-dark-grayish-cyan"
        >
          50%
        </button>
        <input
          type="text"
          name="custom-%"
          id="custom-%"
          className="h-[50px] rounded-lg text-cust-dark-grayish-cyan text-2xl bg-cust-very-light-grayish-cyan text-center caret-cust-strong-cyan placeholder-cust-very-dark-grayish-cyan focus:text-right focus:placeholder-transparent focus:outline-cust-strong-cyan p-4 cursor-pointer"
          placeholder="Custom"
        />
      </div>
    </div>
  );
};

export default PercentageList;
