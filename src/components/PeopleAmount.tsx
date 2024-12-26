import { PeopleAmountProps } from "./types/types";
const PeopleAmount = ({ setTempPeople, value }: PeopleAmountProps) => {
  return (
    <div className="flex flex-col mb-[30px] lg:mb-0">
      <label
        htmlFor="people"
        className="text-cust-dark-grayish-cyan pointer-events-none mb-[10px]"
      >
        Number of people
      </label>
      <div className="relative">
        <input
          type="text"
          name="people"
          id="people"
          className="bg-cust-very-light-grayish-cyan rounded-lg h-[40px] outline-none p-4 text-2xl text-right text-cust-very-dark-grayish-cyan caret-cust-strong-cyan placeholder-cust-grayish-cyan focus:outline-cust-strong-cyan focus:placeholder-transparent w-full sm:cursor-pointer"
          placeholder="0"
          value={value}
          onChange={(e) => setTempPeople(e.target.value)}
        />
        <img
          className="absolute top-0 translate-x-4 translate-y-3"
          src="images/icon-person.svg"
          alt="Person icon"
        />
      </div>
    </div>
  );
};

export default PeopleAmount;
