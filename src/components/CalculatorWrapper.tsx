import { useEffect, useState } from "react";
import BillAmount from "./BillAmount";
import DisplayResult from "./DisplayResult";
import PeopleAmount from "./PeopleAmount";
import PercentageList from "./PercentageList";

const CalculatorWrapper = () => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [percentage, setPercentage] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const [tempBill, setTempBill] = useState("");
  const [tempPeople, setTempPeople] = useState("");
  const [tempPercentage, setTempPercentage] = useState("");

  useEffect(() => {
    const handleKeyPres = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        if (tempBill && tempPeople && tempPercentage) {
          setBill(tempBill);
          setPeople(tempPeople);
          setPercentage(tempPercentage);
          setIsUpdated(true);
        }
      }
    };
    document.addEventListener("keydown", handleKeyPres);
    return () => document.removeEventListener("keydown", handleKeyPres);
  }, [tempBill, tempPeople, tempPercentage]);

  return (
    <div className="bg-white w-full rounded-xl p-[25px] font-spaceMono font-bold md:w-[600px] md:mb-[20px] lg:mb-[60px] lg:h-auto lg:w-[900px] lg:flex lg:items-stretch lg:h-full">
      <div className="lg:p-[30px] lg:flex-1">
        <BillAmount setTempBill={setTempBill} value={tempBill} />
        <PercentageList
          setTempPercentage={setTempPercentage}
          value={tempPercentage}
        />
        <PeopleAmount setTempPeople={setTempPeople} value={tempPeople} />
      </div>
      <div className="lg:flex-1">
        <DisplayResult
          bill={bill}
          people={people}
          percentage={percentage}
          isUpdated={isUpdated}
        />
      </div>
    </div>
  );
};

export default CalculatorWrapper;
