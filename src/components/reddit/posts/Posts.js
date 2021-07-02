import React, {useState} from 'react';
import './Posts.css';
import { getPostsComments } from '../reddit';
import Comments from '../comments/comments';

import logo from '../commentsLogo.png';

import Dialog from '@material-ui/core/Dialog';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const openLink = (url) => {
    window.open(url,'_blank')
}

export default (props) => {

    const posts = useSelector(state => state.posts);
    const comments = useSelector(state => state.comments);
    const dispatch = useDispatch();
    
    const [open, setOpen] = useState(false);

    const handleClickOpen = post => {
        getPostsComments(post.data.subreddit, post.data.id, post.data.title).then(r => r.json().then(result => {
            dispatch({type: "updateComments", payload: {comments: result[1].data.children}})
            setOpen(true)
        }))
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <main className="posts">
                {(posts || [] ).map(post => 
                    <article 
                    className="postItem" 
                    onClick={handleClickOpen.bind(null, post)} 
                    key={post}>
                        <a href="#" 
                        className="postLink">
                            {post.data.title}
                        </a>
                        <a href="#">
                            <img src={logo} className="commentsLogo" onClick={handleClickOpen.bind(null, post)} />
                        </a>
                                <h4 className="postKarma">{post.data.ups}</h4>
                        <br />
                        {post.data.url != "self" && post.data.domain != "i.redd.it" ?
                        (<a href={post.data.url}>
                            <p className="postOutLink" key={post}>
                                {post.data.url}
                            </p>
                        </a>)
                        :
                        <></>
                        }
                        <br />
                        {post.data.url != "self" && post.data.is_video == false && post.data.domain == "i.redd.it" ? 
                            (<img 
                                className="postPhoto" 
                                src={post.data.url} 
                                key={post} 
                            />)
                            :
                            <></>
                        }
                        <br />
                        {post.data.url != "self" && post.data.is_video == true && post.data.domain == "v.redd.it" ? 
                            (<video 
                                src={post.data.secure_media.reddit_video.scrubber_media_url} 
                                type="video/mp4" 
                                className="postVideo" 
                                key={post} 
                                controls>
                                    Your browser is not supporting a video tag
                            </video>):<></>}
                    </article>)
                }
            </main>
            <Dialog 
                open={open} 
                onClose={handleClose} 
                className="Dialog"
                scroll="paper"
                fullScreen
                >
                    <div className="commentsDialog">
                        {(comments || []).map(_comment => {
                            let comment = _comment.data;
                            return (
                                <article 
                                className="commentsArticle"
                                >
                                    <h2 className="commentAuthor">{comment.author}</h2>
                                    <p className="commentBody">{comment.body}</p>
                                    <h4 className="commentKarma">Karma: {comment.ups}</h4>
                                </article>
                            )
                        })}
                    </div>
            </Dialog>
        </div>
    )
}