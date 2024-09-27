import React, { useState } from "react";
import Calculation from "./components/Calculation";
import Values from "./components/Values";

export default function App() {
  return (
    <div>
      <Calculation />
      <Values />
    </div>
  );
}
