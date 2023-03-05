import React, {useState, useEffect} from 'react';
import './App.css';
import SearchBox from './components/search-box/searchBox';
import CardList from './components/card-list/cardList';





const App = ()=>{
  const [searchField, setSearchField] = useState("");

  const [monsters , setMonsters] = useState([])



  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then((users)=> setMonsters(users))
  }, [])

   
  const filteredMonsters =monsters.filter((monster)=>{
           return monster.name.toLowerCase().includes(searchField)
        })
   

  const onSearchChange = (event)=>{
    return setSearchField(event.target.value.toLowerCase())
    }
  

  return (
    <div className="App">
        <h1 className='app-title'> Monsters Rolodex</h1>
        <SearchBox className="search-box" type="search" placeholder="Search Monsters" onChange={onSearchChange} />
        <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
