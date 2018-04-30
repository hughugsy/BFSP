import { TOGGLE_ADD_TRC } from './TRCButtonActions';

// Initial State
const initialState = {
  showAddPost: false,
};

const TRCButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_TRC:
      return {
        showAddPost: !state.showAddPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddTRCButton = state => state.trcbutton.showAddPost;

// Export Reducer
export default TRCButtonReducer;
