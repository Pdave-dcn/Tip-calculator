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
  const [numbersErrorMessage, setNumbersErrorMessage] = useState("");
  const [tipErrorMessage, setTipErrorMessage] = useState("");

  const [tempBill, setTempBill] = useState("");
  const [tempPeople, setTempPeople] = useState("");
  const [tempPercentage, setTempPercentage] = useState("");

  useEffect(() => {
    const handleKeyPres = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        let hasError = false;

        if (!tempBill || !tempPeople) {
          setNumbersErrorMessage("Fields can't be empty");
          hasError = true;
        } else if (tempBill === "0" || tempPeople === "0") {
          setNumbersErrorMessage("Can't be zero");
          hasError = true;
        } else if (Number(tempBill) < 0 || Number(tempPeople) < 0) {
          setNumbersErrorMessage("Values can't be negative");
          hasError = true;
        } else if (isNaN(Number(tempBill)) || isNaN(Number(tempPeople))) {
          setNumbersErrorMessage("Enter a valid number");
          hasError = true;
        } else {
          setNumbersErrorMessage("");
        }

        if (!tempPercentage) {
          setTipErrorMessage("Select a tip percentage");
          hasError = true;
        } else if (
          isNaN(Number(tempPercentage)) ||
          Number(tempPercentage) < 0
        ) {
          setTipErrorMessage("Invalid tip percentage");
          hasError = true;
        } else {
          setTipErrorMessage("");
        }

        if (!hasError) {
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

  const handleReset = () => {
    setBill("");
    setPeople("");
    setPercentage("");
    setTempBill("");
    setTempPeople("");
    setTempPercentage("");
    setIsUpdated(false);
  };

  return (
    <div className="bg-white w-full rounded-xl p-[25px] font-spaceMono font-bold md:w-[600px] md:mb-[20px] lg:mb-[60px] lg:h-auto lg:w-[900px] lg:flex lg:items-stretch lg:h-full">
      <div className="lg:p-[30px] lg:flex-1">
        <BillAmount
          setTempBill={setTempBill}
          value={tempBill}
          errorMessage={numbersErrorMessage}
        />
        <PercentageList
          setTempPercentage={setTempPercentage}
          errorMessage={tipErrorMessage}
        />
        <PeopleAmount
          setTempPeople={setTempPeople}
          value={tempPeople}
          errorMessage={numbersErrorMessage}
        />
      </div>
      <div className="lg:flex-1">
        <DisplayResult
          bill={bill}
          people={people}
          percentage={percentage}
          isUpdated={isUpdated}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default CalculatorWrapper;
