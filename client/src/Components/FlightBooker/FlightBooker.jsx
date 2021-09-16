import { useState } from "react";
function FlightBooker() {
  const [selectedOption, setSelectedOption] = useState(null);
  let disabled = false;
  console.log("SELECTED", selectedOption);



  const handleBook = (e) => {
    e.preventDefault();
    alert(`You have set a date from  `);
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
              <input type="text" placeholder="09/15/2021" />
              <input type="text" disabled={ selectedOption === 'one' ? true : false } placeholder="09/15/2021"  />
              <button onClick={handleBook}>Book</button>
            </div>
          )}

          {selectedOption === "return" && (
            <div>
              <input type="text" placeholder="09/15/2021" />
              <input type="text" placeholder="09/15/2021"  />
              <button onClick={handleBook}>Book</button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default FlightBooker;
