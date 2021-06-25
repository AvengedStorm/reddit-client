import React, {useState, useEffect} from 'react';
import './menu.css';
import { getSubredditPosts, getSubreddits } from '../reddit/reddit';

export default  (props) => {
    const [subs, setSubs] = useState();
    
    if(!subs) {
        getSubreddits((subreddits) => {
            // console.log(subreddits);
            setSubs(subreddits.data.children);
        })
    }
    return (
        <div className="dropBG">
            <select className="dropMenu" onChange={e => {
                getSubredditPosts(e.target.value, (result) => {
                    props.updatePosts(result.data.children);
                });
            }}>
                {(subs || []).map(b => {
                    // console.log(b);
                    return <option className="dropOp">{b.data.display_name}</option>
                })}
            </select>
        </div>
    )
}