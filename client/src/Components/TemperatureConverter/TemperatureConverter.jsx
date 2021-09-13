import { useEffect, useState } from "react";

function TemperatureConverter() {


  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [beingChanged, setBeingChange] = useState('fahrenheit')
  
  useEffect(() => {
    console.log('USEE EFFECT HAPPENING!', beingChanged)
    updateTemp()

  }, [celsius, fahrenheit])

  const updateTemp = (e) => {
   
    //e.preventDefault();
    const formValid = !isNaN(+celsius);
    if(!formValid) {
      return;
    }
    console.log('Fahrenheit!', fahrenheit)
    if(beingChanged === "fahrenheit") {
      setCelsius(parseInt((fahrenheit - 32) * ( 5 / 9)), 2)
    } else {
      setFahrenheit(parseInt(celsius * ( 9 / 5) + 32), 2)
    }
  }
  
 

  return (
    <div className="App">
      <h1>Temperature Converter Auto</h1>
      <form>
        <div>
        <input className="c-input" type="text" value={celsius} onChange={(e) => {
          setBeingChange('celsius')
          setCelsius(e.target.value)}
          } />
        <label>Celsius = </label>

        <input className="f-input" type="text" value={fahrenheit} onChange={(e) => {
          console.log('About to set Fahrehin state!!', e.target.value)
          setBeingChange('fahrenheit')
          setFahrenheit(e.target.value)
          }} />
        <label>Fahrenheit</label>
        </div>
      </form>
    </div>
  );
}

export default TemperatureConverter;
