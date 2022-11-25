import { useState, useEffect } from "react";
import Cardlist from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/serch-box.component";

const App = () => {
  const [monsters, setMontsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  // constructor() {
  //   super();

  //   this.state = {
  //     monsters: [],
  //     searchField: [],
  //   };
  // }

  //console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMontsters(users));
  }, []);

  //Annoynimous Function

  const onSearchChange = (event) => {
    //console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    setSearchField(searchField);
  };

  // const { monsters, searchField } = this.state;
  // const { onSearchChange } = this;

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div className="App">
      {/* {filteredMonsters.map((items) => {
          console.log(items);
          return (
            <div key={items.id}>
              <h1>{items.name}</h1>
            </div>
          );
        })} */}
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        className="search-box"
        placeholder="Search Monsters"
      />
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
};

export default App;
