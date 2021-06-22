import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "./NavBar.css";
import App from '../../App';
import logo from '../../logo.svg';

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            }
    }

    render() {
        return (
            <div className="nav" id="nav">
                <a href="#"><img src={logo} className="App-logo" alt="logo" /></a>
                <a href="#" style={{textDecoration:"none"}} className="h1"><h1>Redditly</h1></a>
            </div>
        )
    }
}



export default NavBar;