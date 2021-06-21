import React, { useState } from 'react';

const searchtermvalue = (e) => {
    const searchTerm = e.target.value;
}

export default function SearchBar(prop) {
    const [search, setSearch] = useState("");
    
    const handleTermChange = (evt) => {
        evt.preventDefault();

    }


    return (
        <div>
            <label for="sTerm"></label><br/>
            <input type="text" value={searchtermvalue} /><br />
            <p>{searchtermvalue}</p>
        </div>
    )
}
