const DisplayResult = () => {
  return (
    <div className="bg-cust-button-bg p-[20px] rounded-xl flex flex-col justify-center gap-[20px]">
      <div className="flex justify-between">
        <div className="">
          <p>Tip Amount</p>
          <p>/ Person</p>
        </div>
        <input
          type="text"
          name="tip-per-person"
          aria-label="Tip per person"
          className="pointer-events-none"
          value={"$0.00"}
          readOnly
        />
      </div>
      <div className="flex justify-between">
        <div>
          <p>Total</p>
          <p>/ Person</p>
        </div>
        <input
          type="text"
          name="tip-per-person"
          aria-label="Total per person"
          className="pointer-events-none"
          value={"$0.00"}
          readOnly
        />
      </div>
      <button type="button" className="bg-cust-strong-cyan">
        RESET
      </button>
    </div>
  );
};

export default DisplayResult;
