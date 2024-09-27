import { Button } from "antd";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { billSplitterContext } from "./BillSplitterContext";

export default function Calculation() {
  const {
    billValue,
    tipValue,
    noOfPeople,
    tipCalc,
    totalBillCalc,
    handleBillValue,
    handleNoOfPeople,
  } = useContext(billSplitterContext);

  return (
    <CalculationContainer>
      <div>
        Bill Amount
        <input type="number" value={billValue} onChange={handleBillValue} />
      </div>
      <div>
        <Button
          value={tipValue}
          onClick={() => {
            tipCalc(5);
          }}
        >
          5%
        </Button>
        <Button
          value={tipValue}
          onClick={() => {
            tipCalc(10);
          }}
        >
          10%
        </Button>
        <Button
          value={tipValue}
          onClick={() => {
            tipCalc(15);
          }}
        >
          15%
        </Button>
      </div>
      <div>
        Number of People
        <input type="number" value={noOfPeople} onChange={handleNoOfPeople} />
      </div>
      <Button onClick={totalBillCalc}>Calculate Bill</Button>
    </CalculationContainer>
  );
}

const CalculationContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
