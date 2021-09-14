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
    const validNumber = !isNaN(+celsius);
    console.log("is number valid?",validNumber)
 


    // if(celsius.length === 0) {
    //   setDisable(!disable)
    // }

    if (beingChanged === "fahrenheit") {
      console.log("this is fahrenheit", fahrenheit)
      setCelsius(parseInt((fahrenheit - 32.4) * (5 / 9)), 2);
    } 

    if(beingChanged === "celsius") {
      setFahrenheit(
        parseInt(   (celsius * 1.8) + 32), 2);
      console.log("this is celsius", celsius)
      }

    }


  return (
    <div className="temp-wrapper">
      <h1>Temperature Converter Auto</h1>
      <form>
        <div>
          <input
            className="c-input"
            type="text"
            // disabled={disable}
            value={celsius}
            onChange={(e) => {
              setBeingChange("celsius");
              setCelsius(e.target.value);
              // setDisable(!disable)
            }}
          />
          <label>Celsius=</label>

          <input
            className="f-input"
            type="text"
            value={fahrenheit}
            // disabled={disable}
            onChange={(e) => {
              setBeingChange("fahrenheit");
              setFahrenheit(e.target.value);
              // setDisable(!disable)

            }}
          />
          <label>Fahrenheit</label>
        </div>
      </form>
    </div>
  );
}

export default TemperatureConverter;
