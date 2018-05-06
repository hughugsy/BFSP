import { ADD_TR, ADD_TRS, DELETE_TR } from './TeacherRatingActions';

// Initial State
const initialState = { data: [] };

const TeacherRatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TR :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_TRS :
      return {
        data: action.posts,
      };

    case DELETE_TR :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getTeacherRatings = state => state.teachrat.data;

// Get post by cuid
export const getTeacherRating = (state, cuid) => state.teachrat.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default TeacherRatingReducer;
