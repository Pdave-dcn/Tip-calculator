const calculateResult = (bill: string, people: string, percentage: string) => {
  const billAmount = parseFloat(bill) || 0;
  const numPeople = parseInt(people) || 1;
  const tipPercentage = parseFloat(percentage) || 0;

  const tipAmount = (billAmount * (tipPercentage / 100)) / numPeople;
  const totalAmount = billAmount / numPeople + tipAmount;

  return {
    tipAmount: tipAmount.toFixed(2),
    totalAmount: totalAmount.toFixed(2),
  };
};

export default calculateResult;
