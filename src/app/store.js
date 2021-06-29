import React from 'react';	
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

function reducer(state = {
  posts: [],
  subreddits: [],
}, action){
switch (action.type) {
    case "updateComments":
      state = {...state, comments: action.payload.comments}
      break;
    case "updatePosts":
      if(action.payload.name != state.subreddit) {
        state = {...state, posts: action.payload.posts, subreddit: action.payload.name}
      }
      break;
    case "updateSubreddits":
      state = {...state, subreddits: action.payload}
      break;
    case "setSubreddit":
      console.log(action);
      state = {...state, subredditName: action.payload}
      break;
    default:
      console.log(action);
    }
    return state;
}
 
const middlewares = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancers = [applyMiddleware(...middlewares), ];

    const store = createStore(
      reducer,
      composeEnhancers(applyMiddleware(thunk))
    );

    // Extensions
    export default store;