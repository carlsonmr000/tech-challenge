import { useEffect, useState } from "react";
import "./TemperatureConverter.css";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState();
  const [beingChanged, setBeingChange] = useState("fahrenheit");

  const handleClick = (e) => {
    e.target.select();
  };

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
      <h1>Temperature Converter</h1>
      <form>
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
      </form>
    </div>
  );
}

export default TemperatureConverter;
