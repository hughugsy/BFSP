import { ADD_ANSWER, ADD_ANSWERS, DELETE_ANSWER } from './AnswerActions';

// Initial State
const initialState = { data: [] };

const AnswerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANSWER :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_ANSWERS :
      return {
        data: action.posts,
      };

    case DELETE_ANSWER :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getAnswers = (state, question) => state.answer.data.filter(post => post.question === question);

// Get post by cuid
export const getAnswer = (state, cuid) => state.answer.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default AnswerReducer;
