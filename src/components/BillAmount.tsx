const BillAmount = () => {
  return (
    <div className="flex flex-col mb-[30px]">
      <label
        htmlFor="bill"
        className="text-cust-dark-grayish-cyan pointer-events-none mb-[10px]"
      >
        Bill
      </label>
      <div className="relative ">
        <input
          className="bg-cust-very-light-grayish-cyan rounded-lg h-[40px] outline-offset-0 p-4 text-2xl text-right text-cust-very-dark-grayish-cyan caret-cust-strong-cyan placeholder-cust-grayish-cyan focus:outline-cust-strong-cyan focus:placeholder-transparent w-full md:cursor-pointer md:hover:outline-cust-strong-cyan"
          type="text"
          name="bill"
          id="bill"
          placeholder="0"
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
