const BillAmount = () => {
  return (
    <div className="flex flex-col mb-[30px]">
      <label htmlFor="bill">Bill</label>
      <input
        className="bg-cust-input-bg rounded-lg h-[40px] outline-none"
        type="text"
        name="bill"
        id="bill"
      />
    </div>
  );
};

export default BillAmount;
