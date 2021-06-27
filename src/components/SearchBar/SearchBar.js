import React, { useState } from 'react';
import './SearchBar.css';

const handleSubmit = (term, props) => {
    // console.log(term);
    const api_root = "https://www.reddit.com"
    fetch(`${api_root}/r/${term}.json`).then((s) => {
        s.json().then(result => props.onChange(result.data.children))
    })
}

export default (props) => {
    const [term, setTerm] = useState("");

    return (
        <div className  ="search">
            <input className="w3-input w3-border w3-round-xxlarge"
            type="search"
            id="search" 
            value={term} 
            onChange={e => setTerm(e.target.value)} 
            placeholder="Search Your Mind" />
            <br />    
            <a href="#">
                <h1 
                className="searchIcon" 
                onClick={handleSubmit.bind(null, term, props)}>
                    &#128269;
                </h1>
            </a>
        </div>
    )
}