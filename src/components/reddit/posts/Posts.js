import React, {useState} from 'react';

export const posts = (props) => {
    const [state, setState] = useState('');
    return (
        <div className  ="search">
            <label htmlFor="search"></label><br/>
            <input type="search" id="search" value={state.term} onChange={handleSearchChange} placeholder="Search Your Mind" /><br />
            <button type="submit" onClick={handleSubmit}>Banana</button>
            <ul>
                {this.state.data.children.map(el => 
                                                <li className="postItem" key={el}>
                                                    <div>
                                                        <a href={el.data.url}>
                                                            {el.data.title}
                                                        </a>
                                                        <img src={el.data.} />
                                                    </div>
                                                </li>)}
                </ul>    
            </div>
        )
    }

    const handleSubmit = (e) => {
        const [state, setState] = useState('');
        let s = state;
        e.preventDefault();
        const api_root = 'https://www.reddit.com';
        fetch(`${api_root}/r/${state.term}.json`).then((s) => {
            s.json().then(result => setState({...s, data: result.data}));
        });
    }

    const handleSearchChange = (e) => {
        setState({term: e.target.value})
    }