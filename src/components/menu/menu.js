import React, {useState, useEffect} from 'react';
import './menu.css';
import { getSubredditPosts, getSubreddits } from '../reddit/reddit';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Menu = (props) => {

    const subs = useSelector(state => state.subreddits);
    const dispatch = useDispatch();
    return (
        <div>
            <select className="dropMenu" onChange={e => {
                getSubredditPosts(e.target.value).then(r => r.json().then(result => {
                    dispatch({type: 'updatePosts', payload: {name: e.target.value, posts: result.data.children}});
                }));
            }}>
                {(subs || []).map(b => {
                    return <option key={b}>{b.data.display_name}</option>
                })}
            </select>
        </div>
    )
}