import { useEffect, useState } from "react";
import "./TemperatureConverter.css"

function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [beingChanged, setBeingChange] = useState("fahrenheit");
  const [disable, setDisable] = useState(false);


  useEffect(() => {
    console.log(beingChanged);
    updateTemp();
  }, [celsius, fahrenheit]);


  const updateTemp = (e) => {
    const validNumber = !isNaN(celsius);
    if (!validNumber) {
         ;
    }

 
    // if(fahrenheit.length === 0) {
    //   setDisable(!disable)
    // } else {
    //   setDisable(disable)
    // }

    // if(celsius.length === 0) {
    //   setDisable(!disable)
    // }

    if (beingChanged === "fahrenheit") {
      setCelsius(parseInt((fahrenheit - 32) * (5 / 9)), 2);
    } else {
      setFahrenheit(parseInt(celsius * (9 / 5) + 32), 2);
    }

    if(fahrenheit.length === 0) {
      setDisable(!disable)

    }
  };

  return (
    <div className="temp-wrapper">
      <h1>Temperature Converter Auto</h1>
      <form>
        <div>
          <input
            className="c-input"
            type="text"
            disabled={disable}
            value={celsius}
            onChange={(e) => {
              setBeingChange("celsius");
              setCelsius(e.target.value);
            }}
          />
          <label>Celsius = </label>

          <input
            className="f-input"
            type="text"
            disabled={disable}
            value={fahrenheit}
            onChange={(e) => {
              console.log("about to set fahrenheit state!!", e.target.value);
              setBeingChange("fahrenheit");
              setFahrenheit(e.target.value);
            }}
          />
          {/* <button type="button" onClick={handleClick}>
            toggle
          </button> */}
          <label>Fahrenheit</label>
        </div>
      </form>
    </div>
  );
}

export default TemperatureConverter;
