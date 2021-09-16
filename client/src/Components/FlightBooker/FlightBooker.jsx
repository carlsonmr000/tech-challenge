import { useState } from "react";
// import { useForm } from "react-hook-form"

export default function FlightBooker() {
  // const { register } = useForm();
  const [selectedOption, setSelectedOption] = useState("one");
  const [dateOne, setDateOne] = useState();
  const [dateTwo, setDateTwo] = useState();

  console.log(dateOne);
  console.log(dateTwo);

  const handleOneBook = (e) => {
    e.preventDefault();
    alert(`You have booked a one-way flight on ${dateOne}`);
  };

  const handleReturnBook = (e) => {
    e.preventDefault();
    alert(`You have booked a flight from ${dateOne} to ${dateTwo}`);
  };

  return (
    <div className="App">
      <h1>Flight Booker</h1>
      <form>
        <div>
          <select onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="one">one-way flight</option>
            <option value="return">return flight</option>
          </select>

          {selectedOption === "one" && (
            <div>
              <input
                type="text"
                placeholder="09/15/2021"
                onInput={(e) => setDateOne(e.target.value)}
              />
              <input
                type="text"
                disabled={selectedOption === "one" ? true : false}
                placeholder="09/15/2021"
                onInput={(e) => setDateTwo(e.target.value)}
              />
              <button onClick={handleOneBook}>Book</button>
            </div>
          )}

          {selectedOption === "return" && (
            <div>
              <input
                type="text"
                placeholder="09/15/2021"
                onInput={(e) => setDateOne(e.target.value)}
              />
              <input
                type="text"
                placeholder="09/15/2021"
                onInput={(e) => setDateTwo(e.target.value)}
              />
              <button onClick={handleReturnBook}>Book</button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
