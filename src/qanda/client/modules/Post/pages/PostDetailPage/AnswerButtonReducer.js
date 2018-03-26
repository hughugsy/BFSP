import { TOGGLE_ADD_ANSWER } from './AnswerButtonActions';


// Initial State
const initialState = {
  showAddAnswer: false,
};

const AnswerButtonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_ANSWER:
      return {
        showAddAnswer: !state.showAddAnswer,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddAnswer = state => state.answerbutton.showAddAnswer;

// Export Reducer
export default AnswerButtonReducer;
