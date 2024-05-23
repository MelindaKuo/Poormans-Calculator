import React from "react";
import Operator from "./Operator";
import { useState } from "react";

export default function Calculator() {
  const [localTotalAdd, setLocalTotalAdd] = useState(0);
  const [localTotalSub, setLocalTotalSub] = useState(0);

  const values = [10, 15, 20];

  function updateLocalTotalAdd(newTotal) {
    setLocalTotalAdd(newTotal);
  }

  function updateLocalTotalSub(newTotal) {
    setLocalTotalSub(newTotal);
  }

  const globalTotal = localTotalAdd + localTotalSub;
  return (
    <div className="Global-calculator">
      <div> Global Total: {globalTotal}</div>
      <Operator values={values} operations={["+"]} />
      <Operator values={values} operations={["-"]} />
    </div>
  );
}
