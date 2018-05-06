import { ADD_TR, ADD_TRS, DELETE_TR } from './TeacherRatingActions';
import { SEND_SELECTION } from '../../PostActions';

// Initial State
const initialState = {
  data: [],
  selection: [],
};

const TeacherRatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TR :
      return {
        ...state,
        data: [action.post, ...state.data],
      };

    case ADD_TRS :
      return {
        ...state,
        data: action.posts,
      };

    case DELETE_TR :
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
export const getTeacherRatings = state => state.teachrat.data.filter(post => state.teachrat.selection.every((value) => post.tags.includes(value)));

// Get post by cuid
export const getTeacherRating = (state, cuid) => state.teachrat.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default TeacherRatingReducer;
