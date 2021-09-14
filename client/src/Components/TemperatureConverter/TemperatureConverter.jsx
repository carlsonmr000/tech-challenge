import { useEffect, useState } from "react";
import "./TemperatureConverter.css";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(" ");
  const [fahrenheit, setFahrenheit] = useState(" ");
  const [beingChanged, setBeingChange] = useState("fahrenheit");

  

  // const clearInput = () => (celsius.current.value = " ");

  useEffect(() => {
    // clearInput();
    const updateTemp = (e) => {

      if (beingChanged === "fahrenheit") {
        setCelsius(parseInt((fahrenheit - 32) * (5 / 9)), 2);
      } else {
        setFahrenheit(parseInt((9 / 5) * celsius + 32), 2);
      }
    };

    updateTemp();
  }, [beingChanged, fahrenheit, celsius]);

  return (
    <div className="temp-wrapper">
      <h1>Temperature Converter Auto</h1>
      <form>
        {fahrenheit && celsius ? (
          <div>
            <input
              className="number"
              type="number"
              value={celsius}
              // onReset={clearInput}
              onInput={(e) => {
                setBeingChange("celsius");
                setCelsius(e.target.value);
              }}
            />
            <label>Celsius=</label>

            <input
              className="number"
              type="number"
              value={fahrenheit}
              // onReset={clearInput}
              onInput={(e) => {
                setBeingChange("fahrenheit");
                setFahrenheit(e.target.value);
              }}
            />
            <label>Fahrenheit</label>
          </div>
        ) : (
          <div>
            <input
              className="not-number"
              type="number"
              value={celsius}
              onInput={(e) => {
                setBeingChange(" ");
                setCelsius(" ");
              }}
            />
            <label>Celsius=</label>

            <input
              className="not-number"
              type="number"
              value={fahrenheit}
              onInput={(e) => {
                setBeingChange(" ");
                setFahrenheit(" ");
              }}
            />
            <label>Fahrenheit</label>
          </div>
        )}
      </form>
    </div>
  );
}

export default TemperatureConverter;
