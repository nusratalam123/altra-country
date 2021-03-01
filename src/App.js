import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countr from './Component/Countr';
import fakeData from './Data/fake.json'

function App() {
  const [countries,setCountries]=useState([])
const [cart,setCart]=useState([])
const [fake,setFake]=useState([])

useEffect(()=>{
  setFake(fakeData);
  console.log(fakeData)
})
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>{setCountries(data)
    
      // const name=data.map(country=>country.name)
    })
  },[])

  const handleAddCountry=(country)=>{

    const newCart=[...cart,country];
    setCart(newCart);
  }
  
  return (
    <div className="App">
      <h1>country loaded{countries.length}</h1>
      <h4>added country:{cart.length}</h4>
      <ul>{
    countries.map(country=><Countr country={country} handleAddCountry={handleAddCountry}>{country.name}</Countr>)
      }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
