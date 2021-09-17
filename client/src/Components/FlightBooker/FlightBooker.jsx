import { useState } from "react";
import "./FlightBooker.css";


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

    let d1 = Date.parse(dateOne);
    let d2 = Date.parse(dateTwo);

    if (d1 < d2) {
      alert(`You have booked a flight from ${dateOne} to ${dateTwo}`);
    } else {
      alert(`Return flight on ${dateTwo} cannot be before ${dateOne}`);
    }
  };

  let d1 = Date.parse(dateOne);
  let d2 = Date.parse(dateTwo);
  let showButton = true;

  if (d1 < d2) {
  } else {
    showButton = false;
  }

  let dateOneClass = "";
  let dateTwoClass = "";

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

 
  return (
    <div className="App">
      <h1>Flight Booker</h1>
      <form>
        <div>
          <select className="option"  onChange={(e) => setSelectedOption(e.target.value)}>
            <option className="option" value="one">one-way flight</option>
            <option className="option" value="return">return flight</option>
          </select>

          {selectedOption === "one" && (
            <div>
              <input
                type="text"
                placeholder="09/15/2021"
                onInput={(e) => setDateOne(e.target.value)}
                className={dateOneClass}
                style={{border: 'none', borderRadius: '6px', padding: '5px', margin: '10px, auto', color: 'purple', fontFamily: 'Nunito', fontSize: '16px', color: 'rgba(90, 24, 154)'

              }} 
              />
              <input
                type="text"
                disabled={selectedOption === "one" ? true : false}
                onInput={(e) => setDateTwo(e.target.value)}
                style={{border: 'none', borderRadius: '6px', padding: '8px', color: 'white', backgroundColor: 'white', margin: '10px'}} 
                placeholder="N/A"
              />
              <button className="button" onClick={handleOneBook}>Book</button>
            </div>
          )}

          {selectedOption === "return" && (
            <div>
              <input
                type="text"
                placeholder="09/15/2021"
                className={dateOneClass}
                onInput={(e) => setDateOne(e.target.value)}
                style={{border: 'none', margin: '10px', borderRadius: '6px', padding: '5px', fontSize: '16px', color: 'rgba(90, 24, 154)'}} 

              />
              <input
                type="text"
                placeholder="09/15/2021"
                className={dateTwoClass}
                onInput={(e) => setDateTwo(e.target.value)}
                style={{border: 'none', borderRadius: '6px', padding: '5px', fontSize: '16px', color: 'rgba(90, 24, 154)'}} 
              />
              {showButton ? (
                <button className="button" onClick={handleReturnBook}>Book</button>
              ) : (
                <button className="button" disabled onClick={handleReturnBook}>
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
