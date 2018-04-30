import { ADD_TRCOMMENT, ADD_TRCOMMENTS, DELETE_TRCOMMENT } from './TRCommentActions';

// Initial State
const initialState = { data: [] };

const TRCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRCOMMENT :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_TRCOMMENTS :
      return {
        data: action.posts,
      };

    case DELETE_TRCOMMENT :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getTRComments = state => state.trcomment.data;

// Get post by cuid
export const getTRComment = (state, cuid) => state.trcomment.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default TRCommentReducer;
