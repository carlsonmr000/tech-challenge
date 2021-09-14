import { useEffect, useState } from "react";
import "./TemperatureConverter.css";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(1);
  const [fahrenheit, setFahrenheit] = useState(1);
  const [beingChanged, setBeingChange] = useState("fahrenheit");


  useEffect(() => {
    updateTemp();
  }, [celsius, fahrenheit]);

  const updateTemp = (e) => {
    if (beingChanged === "fahrenheit") {
      setCelsius(parseInt((fahrenheit - 32) * (5 / 9)), 2);
    } else {
      setFahrenheit(parseInt((9 / 5) * celsius + 32), 2);
    }
  };

  return (
    <div className="temp-wrapper">
      <h1>Temperature Converter Auto</h1>
      <form>

        {
         fahrenheit && celsius ? (

            <div>
            <input
              className="number"
              type="text"
              value={celsius}
              onChange={(e) => {
                setBeingChange("celsius");
                setCelsius(e.target.value);
              }}
            />
            <label>Celsius=</label>
  
            <input
              className="number"
              type="text"
              value={fahrenheit}
              onChange={(e) => {
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
              className="not-number"
              type="text"
              value={celsius}
              onChange={(e) => {
                setBeingChange("celsius");
                setCelsius(e.target.value);
              }}
            />
            <label>Celsius=</label>
  
            <input
              type="text"
              value={fahrenheit}
              onChange={(e) => {
                setBeingChange("fahrenheit");
                setFahrenheit(e.target.value);
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
