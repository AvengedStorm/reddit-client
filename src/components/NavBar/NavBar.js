import React from "react"
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
                    <h1>Redditly</h1>
            </div>
        )
    }
}



export default NavBar;