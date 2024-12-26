export type BillAmountProps = {
  setTempBill: (value: string) => void;
  value: string;
};

export type PercentageListProps = {
  setTempPercentage: (value: string) => void;
  value: string;
};

export type PeopleAmountProps = {
  setTempPeople: (value: string) => void;
  value: string;
};

export type DisplayProps = {
  bill: string;
  people: string;
  percentage: string;
  isUpdated: boolean;
};
