import BillAmount from "./BillAmount";
import DisplayResult from "./DisplayResult";
import PeopleAmount from "./PeopleAmount";
import PercentageList from "./PercentageList";

const CalculatorWrapper = () => {
  return (
    <div className="bg-white w-full rounded-xl p-[25px]">
      <BillAmount />
      <PercentageList />
      <PeopleAmount />
      <DisplayResult />
    </div>
  );
};

export default CalculatorWrapper;
