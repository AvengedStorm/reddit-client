import React, { useState } from "react"
import "./NavBar.css";
import App from '../../App';
import logo from '../../logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import Menu from '../menu/menu';


export default (props) => {
    const [posts, setPosts] = useState([]);
    
    return (
        <div className="nav" id="nav">
            <a href="#"><img src={logo} className="App-logo" alt="logo" /></a>
                <h1 className="pageHeader">Redditly</h1>
        </div>
    )
}