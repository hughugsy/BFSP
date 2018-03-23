import { ADD_OR, ADD_ORS, DELETE_OR } from './OnlineResourceActions';

// Initial State
const initialState = { data: [] };

const OnlineResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OR :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_ORS :
      return {
        data: action.posts,
      };

    case DELETE_OR :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getOnlineResources = state => state.onres.data;

// Get post by cuid
export const getOnlineResource = (state, cuid) => state.onres.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default OnlineResourceReducer;
