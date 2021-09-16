function Crud() {
  //   const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>CRUD</h1>
      <form>
          <div>
          <label>Filter prefix:</label>
          <input/>
          <textarea placeholder="Carlson, Maxi"/>
          <label>Name:</label>
          <input/>
          <label>Surname:</label>
          <input/>
          <button>Create</button>
          <button>Update</button>
          <button>Delete</button>
          </div>
        </form>
    </div>
  );
}

export default Crud;
