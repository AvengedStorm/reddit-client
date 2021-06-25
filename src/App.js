import React, {useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Posts from './components/reddit/posts/Posts';
import Menu from './components/menu/menu';

let changefunc = (e) => {
  console.log(e.target.value)
}

function App() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="App">
      <NavBar />
      <Menu updatePosts={setPosts}/>
      <Posts posts={posts}/>
      <SearchBar onChange={setPosts} />
    </div>
  );
}

export default App;
