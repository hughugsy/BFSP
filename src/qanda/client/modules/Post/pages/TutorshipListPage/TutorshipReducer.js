import { ADD_TS, ADD_TSS, DELETE_TS } from './TutorshipActions';

// Initial State
const initialState = { data: [] };

const TutorshipReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TS :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_TSS :
      return {
        data: action.posts,
      };

    case DELETE_TS :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getTutorships = state => state.tutorship.data;

// Get post by cuid
export const getTutorship = (state, cuid) => state.tutorship.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default TutorshipReducer;
