import React from 'react';
import { Counter } from './features/counter/Counter';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <img src={logo} className="App-logo" alt="logo" />
      <NavBar />
    </div>
  );
}

export default App;
