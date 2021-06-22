import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(a) {
        this.setState({term: a.target.value})
    }

    render() {
        return (
            <div className  ="search">
                <label for="search"></label><br/>
                <input type="search" id="search" value={this.state.term} onChange={this.handleSearchChange} placeholder="Search Your Mind" /><br />
                {/* <p>{this.state.term}</p> */}
            </div>
        )
    }
}

export default SearchBar;