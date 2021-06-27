import React, {useState, useEffect} from 'react';
import './menu.css';
import { getSubredditPosts, getSubreddits } from '../reddit/reddit';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const Menu = (props) => {

    const subs = useSelector(state => state.subreddits);
    const dispatch = useDispatch();
    console.log('hi from render');
    return (
        <div>
            <select className="dropMenu" onChange={e => {
                getSubredditPosts(e.target.value, (posts) => {
                    dispatch({type: "updatePosts", payload: {name: e.target.value, posts: posts.data.children}})
                });
            }}>
                {(subs || []).map(b => {
                    return <option>{b.data.display_name}</option>
                })}
            </select>
        </div>
    )
}