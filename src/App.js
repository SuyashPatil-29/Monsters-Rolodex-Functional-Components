import React, {useState} from 'react';
import './App.css';
import SearchBox from './components/search-box/searchBox';
import CardList from './components/card-list/cardList';





const App = ()=>{
   
  const [searchField, setSearchField] = useState("")



  const onSearchChange = (event)=>{
    return setSearchField(event.target.value.toLowerCase())
    }
  

  return (
    <div className="App">
        <h1 className='app-title'> Monsters Rolodex</h1>
        <h1>{searchField}</h1>
        <SearchBox className="search-box" type="search" placeholder="Search Monsters" onChange={onSearchChange} />
        {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  )
}


// class App extends Component {
//   constructor() {
//     super();
    
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }

//   }

//    componentDidMount(){
//      fetch('https://jsonplaceholder.typicode.com/users')
//        .then(response => response.json())
//        .then((users)=> this.setState(()=>{
//         return {monsters: users}
//        },
//        ()=>{
//         console.log(this.state);
//        })) 
//    }


//   render(){
//     const {monsters, searchField} = this.state
//     const {onSearchChange } = this
//     const filteredMonsters =monsters.filter((monster)=>{
//        return monster.name.toLowerCase().includes(searchField)
//     })


//   return (
//     <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//
//         <CardList monsters={filteredMonsters} />
//     </div>
//   );
// }
// }

export default App;
