import { TOGGLE_ADD_TR } from './TRButtonActions';

// Initial State
const initialState = {
  showAddPost: false,
};

const TRButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_TR:
      return {
        showAddPost: !state.showAddPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.trbutton.showAddPost;

// Export Reducer
export default TRButtonReducer;
