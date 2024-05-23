import React, { useState } from "react";

function Values({ value, handleValue }) {
  return <button onClick={() => handleValue(value)}>{value}</button>;
}

function Operation({ operation, handleOperation }) {
  return (
    <button onClick={() => handleOperation(operation)}>{operation}</button>
  );
}

export default function Operator({ values, operations }) {
  const [localTotal, setLocalTotal] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);

  function handleOperation(op) {
    if (op === "+") {
      setLocalTotal(localTotal + selectedValue);
    }
    if (op === "-") {
      setLocalTotal(localTotal - selectedValue);
    }
  }

  function handleValue(value) {
    setSelectedValue(value);
  }

  return (
    <div className="Local-Calculator">
      <div> Local Total: {localTotal}</div>
      {values.map((value) => (
        <Values key={value} value={value} handleValue={handleValue} />
      ))}
      {operations.map((operation) => (
        <Operation
          key={operation}
          operation={operation}
          handleOperation={handleOperation}
        />
      ))}
    </div>
  );
}
