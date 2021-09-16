import { useState, useEffect } from "react";
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [max, setMax] = useState(0);
  // const [value, setValue] = useState(0);

  useEffect(() => {
    if (seconds >= 0) {
      setTimeout(() => setSeconds(seconds + 1), 1000);
    }
  });

  const handleReset = (e) => {
    e.preventDefault();
    setSeconds(0);
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      <form>
        <div>
          <label>Elapsed Time:</label>
          <input
            value={seconds}
            // step="1"
            // onChange={({ target }) => setValue(target.value)}
            type="range"
          />
          <br />
          <div>{seconds}s</div>
          <br />
          <label>Duration:</label>
          <input
            type="range"
            onInput={({ target }) => setMax(target.value)}
            value={max}
          />
          <br />

          <button onClick={handleReset} >Reset Timer</button>
        </div>
      </form>
    </div>
  );
}

export default Timer;
