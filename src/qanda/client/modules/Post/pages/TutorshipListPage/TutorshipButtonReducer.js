import { TOGGLE_ADD_TS } from './TutorshipButtonActions';

// Initial State
const initialState = {
  showAddPost: false,
};

const TutorshipButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_TS:
      return {
        showAddPost: !state.showAddPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.tutorshipbutton.showAddPost;

// Export Reducer
export default TutorshipButtonReducer;
