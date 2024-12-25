import BillAmount from "./BillAmount";
import DisplayResult from "./DisplayResult";
import PeopleAmount from "./PeopleAmount";
import PercentageList from "./PercentageList";

const CalculatorWrapper = () => {
  return (
    <div className="bg-white w-full rounded-xl p-[25px] font-spaceMono font-bold md:w-[600px] md:mb-[20px] lg:mb-[60px] lg:h-auto lg:w-[900px] lg:flex lg:items-stretch lg:h-full">
      <div className="lg:p-[30px] lg:flex-1">
        <BillAmount />
        <PercentageList />
        <PeopleAmount />
      </div>
      <div className="lg:flex-1">
        <DisplayResult />
      </div>
    </div>
  );
};

export default CalculatorWrapper;
