import { useState } from "react";
import "./styles.css";

export default function App() {
  const [range, setRange] = useState(1);
  const [input, setInput] = useState(0);
  function handleRangeChange(e) {
    setRange(e.target.value);
  }
  function handleInputChange(e) {
    setInput(e.target.value);
  }
  function handleInputIncrease() {
    setInput(() => Number(input) + Number(range));
  }
  function handleInputDecrease() {
    setInput(() => Number(input) - Number(range));
  }

  const date = new Date(`2025-07-16`);
  date.setDate(date.getDate() + Number(input));
  return (
    <div className="App">
      <div
        style={{
          width: "250px",

          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginInline: "auto",
          borderRadius: "10px",
          boxShadow: "0 0 15px 2px #ddd",
        }}
      >
        <span>step:</span>
        <input
          type="range"
          step={1}
          onChange={handleRangeChange}
          value={range}
        />{" "}
        <span>{range}</span>
      </div>
      <div
        style={{
          width: "250px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "10px",
          boxShadow: "0 0 15px 2px #ddd",
          marginInline: "auto",
          marginTop: "20px",
        }}
      >
        <span>
          <button onClick={handleInputDecrease}>-</button>{" "}
        </span>{" "}
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          style={{
            textAlign: "center",
            padding: "5px",
            border: "none",
            boxShadow: "0 0 5px 1px #ddd ",
          }}
        />{" "}
        <span>
          <button onClick={handleInputIncrease}>+</button>
        </span>
      </div>
      <div
        style={{
          marginTop: "20px",
          boxShadow: "0 0 8px 2px #ddd",
          width: "400px",
          padding: "10px 20px",
          borderRadius: "10px",
          marginInline: "auto",
        }}
      >
        {" "}
        {input === 0
          ? "Today Is "
          : input > 0
          ? `After ${input} Days Form Now Is `
          : `Before ${-input} Days From Now Is `}
        {date.toDateString()}
      </div>
    </div>
  );
}
