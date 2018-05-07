import { ADD_TS, ADD_TSS, DELETE_TS } from './TutorshipActions';
import { SEND_SELECTION } from '../../PostActions';

// Initial State
const initialState = {
  data: [],
  selection: [],
};

const TutorshipReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TS :
      return {
        ...state,
        data: [action.post, ...state.data],
      };

    case ADD_TSS :
      return {
        ...state,
        data: action.posts,
      };

    case DELETE_TS :
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
export const getTutorships = state => state.tutorship.data.filter(post => state.tutorship.selection.every((value) => post.tags.includes(value)));

// Get post by cuid
export const getTutorship = (state, cuid) => state.tutorship.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default TutorshipReducer;
