import { ADD_POST, ADD_POSTS, DELETE_POST, SEND_SELECTION } from './PostActions';

// Initial State
const initialState = {
  data: [],
  selection: [],
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        ...state,
        data: [action.post, ...state.data],
      };

    case ADD_POSTS :
      return {
        ...state,
        data: action.posts,
      };

    case DELETE_POST :
      return {
        ...state,
        data: state.data.filter(post => post.cuid !== action.cuid),
      };
    case SEND_SELECTION:
      return {
        ...state,
        selection: action.selection,
      };


    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data.filter(post => state.posts.selection.every((value) => post.tags.includes(value)));

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default PostReducer;
