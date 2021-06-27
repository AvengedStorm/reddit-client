import React from 'react';


export const api_root = 'https://www.reddit.com';

export const getSubreddits = (cb) => {
  fetch(`${api_root}/subreddits.json`).then(s => {
    s.json().then(cb)
  })
}
export const getSubredditPosts = (name, cb) => {
  fetch(`${api_root}/r/${name}.json`).then(s => {
    s.json().then(cb);
  })
}
export const getPostsComments = (subreddit, id, title, cb) => {
  fetch(`${api_root}/r/${subreddit}/comments/${id}/${title}.json`).then(s => {
    s.json().then(cb);
  })
}