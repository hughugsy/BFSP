/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import onres from './modules/Post/pages/OnlineResourcesListPage/OnlineResourceReducer';
import orbutton from './modules/Post/pages/OnlineResourcesListPage/OrButtonReducer';
import answer from './modules/Post/pages/PostDetailPage/AnswerReducer';
import answerbutton from './modules/Post/pages/PostDetailPage/AnswerButtonReducer';
// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  onres,
  orbutton,
  answer,
  answerbutton,
});
