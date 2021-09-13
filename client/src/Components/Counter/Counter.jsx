import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <h1>Counter</h1>
      <div className="counter-wrapper">
        <div className="count">{count}</div>
        <button className="count-button" onClick={() => setCount(count + 1)}>
          Count
        </button>
      </div>
    </div>
  );
}

export default Counter;
