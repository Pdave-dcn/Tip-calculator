const PercentageList = () => {
  return (
    <div className="mb-[40px]">
      <h1 className="mb-[20px]">Select Tip %</h1>
      <div className="grid grid-cols-2 grid-rows-3 gap-[15px]">
        <button
          type="button"
          className="bg-cust-button-bg h-[40px] rounded-lg text-white"
        >
          5%
        </button>
        <button
          type="button"
          className="bg-cust-button-bg h-[40px] rounded-lg text-white"
        >
          10%
        </button>
        <button
          type="button"
          className="bg-cust-button-bg h-[40px] rounded-lg text-white"
        >
          15%
        </button>
        <button
          type="button"
          className="bg-cust-button-bg h-[40px] rounded-lg text-white"
        >
          25%
        </button>
        <button
          type="button"
          className="bg-cust-button-bg h-[40px] rounded-lg text-white"
        >
          50%
        </button>
        <button
          type="button"
          className="bg-cust-button-bg h-[40px] rounded-lg text-black bg-cust-input-bg"
        >
          CUSTOM
        </button>
      </div>
    </div>
  );
};

export default PercentageList;
