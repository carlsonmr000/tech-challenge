import { useEffect, useState } from "react";
import "./TemperatureConverter.css";

function TemperatureConverter() {
  const handleClick = (e) => {
    e.target.select();
  };

  const [celsius, setCelsius] = useState(" ");
  const [fahrenheit, setFahrenheit] = useState(" ");
  const [beingChanged, setBeingChange] = useState("fahrenheit");
  
  useEffect(() => {
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
              onInput={(e) => {
                setBeingChange("celsius");
                setCelsius(e.target.value);
              }}
              onClick={handleClick}
            />
            <label>Celsius=</label>

            <input
              className="number"
              type="number"
              value={fahrenheit}
              onInput={(e) => {
                setBeingChange("fahrenheit");
                setFahrenheit(e.target.value);
              }}
              onClick={handleClick}
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
                setCelsius(null);
              }}
              onClick={handleClick}
            />
            <label>Celsius=</label>

            <input
              className="not-number"
              type="number"
              value={fahrenheit}
              onInput={(e) => {
                setBeingChange(" ");
                setFahrenheit(null);
              }}
              onClick={handleClick}

            />
            <label>Fahrenheit</label>
          </div>
        )}
      </form>
    </div>
  );
}

export default TemperatureConverter;
