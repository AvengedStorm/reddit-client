import React from 'react';
import './Posts.css';

const openLink = (url) => {
    window.open(url,'_blank')
}

export default (props) => {
    return (
        <div>
            <ul>
                {props.posts.map(el => 
                    <li className="postItem" key={el}>
                        <a href="#" onClick={openLink.bind(null, el.data.url)} className="postLink">
                            {el.data.title}
                        </a><br /><br />
                        {el.data.thumbnail != "self" && el.data.is_video == false ? (<img className="postPhoto" src={el.data.thumbnail} />):<></>}
                        {el.data.thumbnail != "self" && el.data.is_video == true ? (<video src={el.data.url} type="video/mp4" className="postVideo" controls>Your browser is not supporting a video tag</video>):<></>}
                    </li>)}
            </ul>
        </div>
    )
}