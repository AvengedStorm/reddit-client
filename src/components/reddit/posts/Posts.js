import React, {useState} from 'react';
import './Posts.css';
import { getSubredditPosts, getSubreddits, getPostsComments } from '../reddit';
import comments from '../comments/comments';

import logo from '../commentsLogo.png';

import Dialog from '@material-ui/core/Dialog';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const openLink = (url) => {
    window.open(url,'_blank')
}

export default (props) => {
    const [postComments, setPostComments] = useState([]);

    const [isDialogOpen, setDialogOpen] = useState(false);

    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    return (
        <div>
            <main className="posts">
                {(posts || [] ).map(el => 
                    <article 
                    className="postItem" 
                    key={el}>
                        <a href="#" 
                        onClick={openLink.bind(null, el.data.url)} 
                        className="postLink">
                            {el.data.title}
                        </a>
                        <a href="#">
                            <img src={logo} className="commentsLogo" onClick={setDialogOpen(true)}/>
                        </a>
                        <Dialog>
                            <div className="commentsDialog">

                            </div>
                        </Dialog>
                        <br />
                        <br />
                        {el.data.url != "self" && el.data.is_video == false ? 
                            (<img 
                                className="postPhoto" 
                                src={el.data.url} 
                                key={el} 
                            />)
                            :
                            <></>}
                        {el.data.url != "self" && el.data.is_video == true ? 
                            (<video 
                                src={el.data.secure_media.reddit_video.scrubber_media_url} 
                                type="video/mp4" 
                                className="postVideo" 
                                key={el} 
                                controls>
                                    Your browser is not supporting a video tag
                            </video>):<></>}
                    </article>)
                }
            </main>
        </div>
    )
}