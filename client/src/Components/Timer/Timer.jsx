import { useState, useEffect } from "react";
function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [max, setMax] = useState(10);
  // const [value, setValue] = useState(0);

  useEffect(() => {
    // console.log('I am second!', seconds)
    // if (seconds < max) {
    //   setTimeout(() => setSeconds(seconds + 1), 1000);
    // }
    var ticking = setInterval(()=> {
      if (seconds < max) {
        setSeconds(Math.round((seconds + 0.1) * 100) / 100)

      }
    }, 100)

    return () => {
      if (ticking) {
          clearInterval(ticking);
      }
  }
  });

  

  const handleReset = (e) => {
    e.preventDefault();
   
    //clearInterval(ticking)
    setSeconds(0);
  };

  console.log('max!!!', max)

  return (
    <div className="App">
      <h1>Timer</h1>
      <form>
        <div>
          <label>Elapsed Time:</label>
          <input
            value={seconds}
            max={max}
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
