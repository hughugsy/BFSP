import { TOGGLE_ADD_OR } from './OrButtonActions';

// Initial State
const initialState = {
  showAddPost: false,
};

const OrButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_OR:
      return {
        showAddPost: !state.showAddPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.orbutton.showAddPost;

// Export Reducer
export default OrButtonReducer;
