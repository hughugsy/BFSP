import { ADD_OR, ADD_ORS, DELETE_OR } from './OnlineResourceActions';
import { SEND_SELECTION } from '../../PostActions';

// Initial State
const initialState = {
  data: [],
  selection: [],
};

const OnlineResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OR :
      return {
        ...state,
        data: [action.post, ...state.data],
      };

    case ADD_ORS :
      return {
        ...state,
        data: action.posts,
      };

    case DELETE_OR :
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
export const getOnlineResources = state => state.onres.data.filter(post => state.onres.selection.every((value) => post.tags.includes(value)));

// Get post by cuid
export const getOnlineResource = (state, cuid) => state.onres.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default OnlineResourceReducer;
