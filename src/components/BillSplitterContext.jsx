import { createContext, useState } from "react";

export const billSplitterContext = createContext();

export const BillSplitterProvider = ({ children }) => {
  const [billValue, setBillValue] = useState(0);
  const [tipValue, setTipValue] = useState(0);
  const [noOfPeople, setNoOfPeople] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [individualBill, setIndividualBill] = useState(0);

  const handleBillValue = (e) => {
    setBillValue(e.target.value);
  };

  const tipCalc = (value) => {
    setTipValue(value);
  };

  const handleNoOfPeople = (e) => setNoOfPeople(e.target.value);

  const totalBillCalc = () => {
    let bill = (billValue * tipValue) / 100 + Number(billValue);
    setTotalBill(bill);
    setIndividualBill(bill / noOfPeople);
  };

  const reset = () => {
    setBillValue(0);
    setTipValue(0);
    setNoOfPeople(0);
    setTotalBill(0);
    setIndividualBill(0);
  };
  return (
    <billSplitterContext.Provider
      value={{
        billValue,
        tipValue,
        noOfPeople,
        totalBill,
        individualBill,
        tipCalc,
        totalBillCalc,
        handleBillValue,
        handleNoOfPeople,
        reset,
      }}
    >
      {children}
    </billSplitterContext.Provider>
  );
};
