import { useState } from "react";

function FlightBooker() {
  const [selectedOption, setSelectedOption] = useState("one");
  let disabled = false;
  console.log("SELECTED", selectedOption);

  const handleOneBook = (e) => {
    e.preventDefault();
    alert(`You have booked a one-way flight on`);
  };

  const handleReturnBook = (e) => {
    e.preventDefault();
    alert(`You have booked one-way and return flights on`);
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
              <input type="date" placeholder="09/15/2021" />
              <input
                type="date"
                disabled={selectedOption === "one" ? true : false}
                placeholder="09/15/2021"
              />
              <button onClick={handleOneBook}>Book</button>
            </div>
          )}

          {selectedOption === "return" && (
            <div>
              <input type="date" placeholder="09/15/2021" />
              <input type="date" placeholder="09/15/2021" />
              <button onClick={handleReturnBook}>Book</button>
            </div>
          )}

        </div>
      </form>
    </div>
  );
}

export default FlightBooker;
