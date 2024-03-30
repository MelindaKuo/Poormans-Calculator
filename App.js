import React, { useState } from "react";

function Values({ value, handleValue }) {
  return <button onClick={() => handleValue(value)}>{value}</button>;
}

function Operation({ operation, handleOperation }) {
  return (
    <button onClick={() => handleOperation(operation)}>{operation}</button>
  );
}

export default function Calculator() {
  const [localTotalAdd, setLocalAddTotal] = useState(0);
  const [localTotalSub, setLocalSubTotal] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);

  function handleOperation(op) {
    if (op === "+") {
      setLocalAddTotal(localTotalAdd + selectedValue);
    }
    if (op === "-") {
      setLocalSubTotal(localTotalSub - selectedValue);
    }
  }

  function handleValue(value) {
    setSelectedValue(value);
  }
  const globalTotal = localTotalAdd + localTotalSub;

  return (
    <div class="Global calculator">
      <div> Global Total: {globalTotal}</div>
      <div class="Local-Calculator">
        <div> Local Total : {localTotalAdd}</div>
        <Values value={10} handleValue={handleValue} />
        <Values value={15} handleValue={handleValue} />
        <Values value={20} handleValue={handleValue} />
        <Operation operation="+" handleOperation={handleOperation} />
      </div>
      <div class="Local-Calculator">
        <div> Local Total: {localTotalSub}</div>
        <Values value={10} handleValue={handleValue} />
        <Values value={15} handleValue={handleValue} />
        <Values value={20} handleValue={handleValue} />
        <Operation operation="-" handleOperation={handleOperation} />
      </div>
    </div>
  );
}
