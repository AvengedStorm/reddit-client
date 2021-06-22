import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "./components/SearchBar/SearchBar";

import { getPostComments, getSubredditPosts, getSubreddits } from './components/reddit/reddit';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <article>
        <getSubredditPosts />
      </article>
      <aside>
        <getSubreddits />
      </aside>
    </div>
  );
}

export default App;
