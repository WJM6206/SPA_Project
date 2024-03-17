import logo from '../../Images/icons8-dice-55-dark.png';
import './App.css';
import React from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "../Home/Home";
import Battle from "../Battleship/Battle";
import Phase from "../Phase10/Phase10";
import Shut from "../ShutTheBox/Shut";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>

      <HashRouter>
      <div className='container'>
        <h1>Game Night</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/battle">Battleship Outerspace</NavLink></li>
          <li><NavLink to="/phase">Phase10</NavLink></li>          
          <li><NavLink to="/shut">Shut the Box</NavLink></li>
        </ul>
        <div className="content"> 
          <Routes>           
            <Route exact path="/" Component={Home}/>
            <Route path="/battle" Component={Battle}/>
            <Route path="/phase" Component={Phase}/>            
            <Route path="/shut" Component={Shut}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
    </div>
  );
}

export default App;
