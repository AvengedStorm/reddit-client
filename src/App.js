import React, {useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Posts from './components/reddit/posts/Posts';
import { Menu } from './components/menu/menu';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSubreddits } from './components/reddit/reddit';

function App() {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  
  getSubreddits((result) => {
    dispatch({
        type: "updateSubreddits",
        payload: result.data.children
    })
})
  return (
    <div className="App">
      <NavBar 
      />
      <Menu 
      updatePosts={setPosts}
      />
      <Posts 
      posts={posts}
      />
      <SearchBar 
      onChange={setPosts} 
      />
    </div>
  );
}

export default App;
