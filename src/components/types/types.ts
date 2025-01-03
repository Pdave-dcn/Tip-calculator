export type BillAmountProps = {
  setTempBill: (value: string) => void;
  value: string;
  errorMessage: string;
};

export type PercentageListProps = {
  setTempPercentage: (value: string) => void;
  errorMessage: string;
  selectedPercentage: string | null;
  setSelectedPercentage: (value: string | null) => void;
};

export type PeopleAmountProps = {
  setTempPeople: (value: string) => void;
  value: string;
  errorMessage: string;
};

export type DisplayProps = {
  bill: string;
  people: string;
  percentage: string;
  isUpdated: boolean;
  onReset: () => void;
};
