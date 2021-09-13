import Counter from "./Components/Counter/Counter";
import TemperatureConverter from "./Components/TemperatureConverter/TemperatureConverter";
import FlightBooker from "./Components/FlightBooker/FlightBooker";
import Timer from "./Components/Timer/Timer";
import Crud from "./Components/Crud/Crud";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
      <TemperatureConverter />
      <FlightBooker />
      <Timer />
      <Crud />
    </div>
  );
}

export default App;
