import { useState } from "react";
import "./Crud.css";


function Crud() {
  const [people, setPeople] = useState([]);
  const [filterPeopled, setFilteredPeopled] = useState([]);
  const [filterInput, setFilteredInput] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [personSelected, setPersonSelected] = useState({})

  console.log("this is the name", name);
  console.log("this is the name", surname);
  console.log("heres our people", people);
  console.log('person to update!!', personSelected)

  const handleCreate = (e) => {
    e.preventDefault();
    let person = {};
    person.name = name;
    person.surname = surname;

    let joined = people.concat(person);
    setPeople(joined);
  };

  const handleFilter = (e) => {
    let peopleToKeep = [];

    for (let i = 0; i < people.length; i++) {
      let fullName = people[i].name + people[i].surname;
      if (fullName.indexOf(e.target.value) > -1) {
       peopleToKeep.push(people[i]);
      }
    }
    setFilteredInput(e.target.value);
    setFilteredPeopled(peopleToKeep);
  };

  const selectPerson = (e) => {
    e.preventDefault();
    
    let personSelected = JSON.parse(e.target.value)
    setPersonSelected(personSelected)

  }

  const handleUpdate = (e) => {
    e.preventDefault();

    let tempPeople = people


     for(let i = 0; i < tempPeople.length; i++) {
      if(tempPeople[i].name === personSelected.name && tempPeople[i].surname === personSelected.surname) {
        console.log("we found a match", tempPeople[i])
        tempPeople[i].name = name
        tempPeople[i].surname = surname
      }
      
    }
    setPeople([...tempPeople])
  }

  const handleDelete = (e) => {
    e.preventDefault();
    const peopleToKeep = []

    for(let i = 0; i < people.length; i++) {

      if(people[i].name === personSelected.name && people[i].surname === personSelected.surname) {
        console.log("we found a match", people[i])
      } else {
        peopleToKeep.push(people[i])
      }
      
    }
    setPeople([...peopleToKeep])


  }


  let peopleToDisplay = people;

  if (filterInput.length > 0) {
    peopleToDisplay = filterPeopled;
  }

  return (
    <div className="App">
      <h1>CRUD</h1>
      <form className="crud-wrapper">
        <div className="crud-parent"> 
          <label>Filter prefix:</label>
          <input onInput={handleFilter} />

          {peopleToDisplay.length > 0 ? (
            <select 
            className="select"
            onChange={selectPerson}
            size="2">
              {peopleToDisplay.map(function (item, i) {
                console.log("test");
                return (
                  <option value={JSON.stringify(item)} key={i}>{item.name + " " + item.surname}</option>
                );
              })}
              
            </select>
          ) : (
            <select className="select" size={people.length}>
              <option></option>
            </select>
          )}

          <label>Name:</label>
          <input
            value={name}
            onInput={(e) => {
              setName(e.target.value);
            }}
          />
          <label>Surname:</label>
          <input
            value={surname}
            onInput={(e) => {
              setSurname(e.target.value);
            }}
          />
          <div className="button-parent">

          <button className="crud-button" onClick={handleCreate}>Create</button>
          <button className="crud-button" onClick={handleUpdate}>Update</button>
          <button className="crud-button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Crud;
