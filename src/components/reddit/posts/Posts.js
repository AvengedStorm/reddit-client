import React, {useState} from 'react';
import './Posts.css';
import { getSubredditPosts, getSubreddits } from '../reddit';

const openLink = (url) => {
    window.open(url,'_blank')
}

export default (props) => {
    return (
        <div>
            <main className="posts">
                {props.posts.map(el => 
                    <article className="postItem" key={el}>
                        <a href="#" onClick={openLink.bind(null, el.data.url)} className="postLink">
                            {el.data.title}
                        </a><br /><br />
                        {el.data.url != "self" && el.data.is_video == false ? 
                            (<img className="postPhoto" src={el.data.url} key={el} />)
                            :
                            <></>}
                        {el.data.url != "self" && el.data.is_video == true ? 
                            (<video src={el.data.secure_media.reddit_video.scrubber_media_url} type="video/mp4" className="postVideo" key={el} controls>
                                Your browser is not supporting a video tag
                            </video>):<></>}
                    </article>)}
            </main>
        </div>
    )
}