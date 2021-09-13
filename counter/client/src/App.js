import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);



  return (
    <div className="App">

      <div className="counter-wrapper">
        <div className="count">{count}</div>
        <button className="count-button" onClick={() => setCount(count + 1)}>Count</button>
      </div>

    </div>
  );
}

export default App;
