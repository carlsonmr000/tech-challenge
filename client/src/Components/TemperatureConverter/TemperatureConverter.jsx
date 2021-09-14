import { useEffect, useState } from "react";
import "./TemperatureConverter.css";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [beingChanged, setBeingChange] = useState("fahrenheit");
  const [isNumber, setIsNumber] = useState("false");
  const [isEmpty, setIsEmpty] = useState("false");

  useEffect(() => {
    updateTemp();
  }, [celsius, fahrenheit]);

  const updateTemp = (e) => {
    setIsNumber(true);
    if (beingChanged === "fahrenheit") {
      setCelsius(parseInt((fahrenheit - 32) * (5 / 9)), 2);
    } else {
      setFahrenheit(parseInt((9 / 5) * celsius + 32), 2);
    }

    if (fahrenheit.length === 0) {
      setCelsius("-16");
      setIsNumber(true);
      setIsEmpty("empty")
    } 
    
    // else if (fahrenheit.length > 1) {
    //   setCelsius("true");
    //   setIsEmpty(true)

    // }

    // if (celsius.length === 0) {
    //   setFahrenheit("false");
    //   setIsNumber(false);
    // } 

    // if (fahrenheit === NaN) {
    //   setIsNumber(false);
    // }

    // if (celsius === NaN) {
    //   setIsNumber(false);
    //   setIsColor(false)
    // }
  };

  return (
    <div className="temp-wrapper">
      <h1>Temperature Converter Auto</h1>
      <form>
        <div>
          <input
            className={isNumber ? "true" : "false"}
            // className={isColor ? "yes" : "no"}
            id={isEmpty ? "empty" : "not-empty"}
            type="text"
            value={celsius}
            onChange={(e) => {
              setBeingChange("celsius");
              setCelsius(e.target.value);
              setIsNumber(!isNumber);
            }}
          />
          <label>Celsius=</label>

          <input
            className={isNumber ? "true" : "false"}
            // id={isEmpty ? "empty" : "not-empty"}
            type="text"
            value={fahrenheit}
            onChange={(e) => {
              setBeingChange("fahrenheit");
              setIsNumber(!isNumber);
              setFahrenheit(e.target.value);
            }}
          />
          <label>Fahrenheit</label>
        </div>
      </form>
    </div>
  );
}

export default TemperatureConverter;
