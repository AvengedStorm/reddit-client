import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            data: {children: []},
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearchChange(e) {
        this.setState({term: e.target.value})
    }

    handlePostView() {
        return this.state.data.children.map(e => {<li>{e}</li>})
    }

    handleSubmit(e) {
        let s = this.state;
        e.preventDefault();
        const api_root = 'https://www.reddit.com';
        fetch(`${api_root}/r/${this.state.term}.json`).then((s) => {
            s.json().then(result => this.setState({...s, data: result.data}));
        });
        
    }
    render() {
        console.log(this.state.data);
        return (
            <div className  ="search">
                <label htmlFor="search"></label><br/>
                <input type="search" id="search" value={this.state.term} onChange={this.handleSearchChange} placeholder="Search Your Mind" /><br />
                <button type="submit" onClick={this.handleSubmit}>Banana</button>
                <ul>
                    {this.state.data.children.map(el => 
                                                    <li className="postItem" key={el}>
                                                        <div>
                                                            <a href={el.data.url}>
                                                                {el.data.title}
                                                            </a>
                                                        </div>
                                                    </li>)}
                </ul>    
            </div>
        )
    }
}

export default SearchBar;