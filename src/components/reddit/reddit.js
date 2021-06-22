import React from 'react';


export const api_root = 'https://www.reddit.com';

export const getProfile = () => {
  let profile = fetch(`${api_root}/u/deepfuckingvalue.json`)
  console.log(profile);
}
// export const getSubredditPosts
export const getSubreddits = () => {
  let subreddit = fetch(`${api_root}/r/superstonk.json`);
  console.log(subreddit);
}
// (getSubreddits())
// export const getPostComment