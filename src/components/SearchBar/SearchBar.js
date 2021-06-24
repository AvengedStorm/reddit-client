import React, { useState } from 'react';
import './SearchBar.css';

const openLink = (url) => {
    window.open(url,'_blank')
}

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
            <input className="searchInput" type="search" id="search" value={term} onChange={e => setTerm(e.target.value)} placeholder="Search Your Mind" /><br />    
            <button className="searchButton" type="submit" onClick={handleSubmit.bind(null, term, props)}>SEARCH!</button>
        </div>
    )
}