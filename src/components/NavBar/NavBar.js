import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";
const NavBar = () => {
        return (
            <div>
                <ul className="nav">
                    <li>Welcome to redditly</li>
                    <li><a href="#">HOME</a></li>
                </ul>
            </div>
        )
}

export default NavBar;