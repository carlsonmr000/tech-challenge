import { useState } from "react";

export default function FlightBooker() {
  const [selectedOption, setSelectedOption] = useState("one");
  const [dateOne, setDateOne] = useState("");
  const [dateTwo, setDateTwo] = useState("");

  const handleOneBook = (e) => {
    e.preventDefault();
    alert(`You have booked a one-way flight on ${dateOne}`);
  };

  const handleReturnBook = (e) => {
    e.preventDefault();

    var d1 = Date.parse(dateOne);
    var d2 = Date.parse(dateTwo);

    if (d1 < d2) {
      alert(`You have booked a flight from ${dateOne} to ${dateTwo}`);
    } else {
      alert(`Return flight on ${dateTwo} cannot be before ${dateOne}`);
    }
  };

  var d1 = Date.parse(dateOne);
  var d2 = Date.parse(dateTwo);
  var showButton = true;
  console.log("d1, d2", d1, d2);

  if (d1 < d2) {
    //alert(`You have booked a flight from ${dateOne} to ${dateTwo}`);
  } else {
    //alert(`Return flight on ${dateTwo} cannot be before ${dateOne}`);
    showButton = false;
  }

  var dateOneClass = "";
  var dateTwoClass = "";

  if (dateOne.length > 0) {
    if (!d1) {
      console.log("D1 is nan! !d1", d1);
      dateOneClass = "notnumber";
    }
  }

  if (dateTwo.length > 0) {
    if (!d2) {
      console.log("D1 is nan! !d1", d1);
      dateTwoClass = "notnumber";
    }
  }

  // console.log('show button', showButton)

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
                className={dateOneClass}
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
                className={dateOneClass}
                onInput={(e) => setDateOne(e.target.value)}
              />
              <input
                type="text"
                placeholder="09/15/2021"
                className={dateTwoClass}
                onInput={(e) => setDateTwo(e.target.value)}
              />
              {showButton ? (
                <button onClick={handleReturnBook}>Book</button>
              ) : (
                <button disabled onClick={handleReturnBook}>
                  Book
                </button>
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
