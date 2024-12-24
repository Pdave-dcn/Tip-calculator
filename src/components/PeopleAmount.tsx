const PeopleAmount = () => {
  return (
    <div className="flex flex-col mb-[30px]">
      <label htmlFor="people">Number of people</label>
      <input
        type="text"
        name="people"
        id="people"
        className="bg-cust-input-bg rounded-lg h-[40px] outline-none"
      />
    </div>
  );
};

export default PeopleAmount;
