import React, { useContext } from "react";
import { billSplitterContext } from "./BillSplitterContext";
import styled from "styled-components";
import { Button } from "antd";

export default function Values() {
  const { billValue, tipValue, noOfPeople, totalBill, reset, individualBill } =
    useContext(billSplitterContext);
  return (
    <ValueContainer>
      <div>Bill Amount: {billValue}</div>
      <div>Tip amount: {(billValue * tipValue) / 100}</div>
      <div>Total: {totalBill}</div>
      <div>Individual Amount: {individualBill}</div>
      <Button onClick={reset}>Reset</Button>
    </ValueContainer>
  );
}
const ValueContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: red;
`;
