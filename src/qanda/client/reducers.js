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
import teachrat from './modules/Post/pages/TeacherRatingsListPage/TeacherRatingReducer';
import trbutton from './modules/Post/pages/TeacherRatingsListPage/TRButtonReducer';
import answer from './modules/Post/pages/PostDetailPage/AnswerReducer';
import answerbutton from './modules/Post/pages/PostDetailPage/AnswerButtonReducer';
import trcomment from './modules/Post/pages/TeacherRatingsListPage/TRCommentReducer';
import trcbutton from './modules/Post/pages/TeacherRatingsListPage/TRCButtonReducer';
import user from './modules/User/UserReducer';
import tutorship from './modules/Post/pages/TutorshipListPage/TutorshipReducer';
import tutorshipbutton from './modules/Post/pages/TutorshipListPage/TutorshipButtonReducer';
// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  onres,
  orbutton,
  teachrat,
  trbutton,
  answer,
  answerbutton,
  trcomment,
  trcbutton,
  user,
  tutorship,
  tutorshipbutton
});
