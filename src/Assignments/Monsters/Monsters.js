import React, { useState, useEffect } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(setMonsters)},
    []);

  function handleChange(e){
    setUserInput(e.target.value)
  }

  function nameFilter(){
    return monsters.filter((monster)=>(monster['name'].toLowerCase().includes(userInput)))
  }


  return (
    <>
      <div className="monsters">
        <h1>컴포넌트 재사용 연습!</h1>
        <SearchBox handleChange={handleChange} />
        <CardList monster={nameFilter()}/>
      </div>
    </>
  );
}

export default Monsters;