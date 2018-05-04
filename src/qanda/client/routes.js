/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import cookie from 'react-cookie';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
  require('./modules/Post/pages/OnlineResourcesListPage/OnlineResourcesListPage');
  require('./modules/Post/pages/OnlineResourceDetailPage/OnlineResourceDetailPage');
  require('./modules/Post/pages/TeacherRatingsListPage/TeacherRatingsListPage');
  require('./modules/Post/pages/TeacherRatingsListPage/TeacherRatingDetailPage');
  require('./modules/User/pages/LoginPage/LoginPage');
  require('./modules/User/pages/RegisterPage/RegisterPage');
  require('./modules/User/pages/ProfilePage/ProfilePage');
}

const requireLoggedIn = (nextState, replace, cb) => {
  const authCookie = cookie.load('mernAuth');
  if(!authCookie || !authCookie.t) {
    replace('/');
  }
  cb();
};
const requireNotLoggedIn = (nextState, replace, cb) => {
  const authCookie = cookie.load('mernAuth');
  if(authCookie && authCookie.t) {
      replace('/');
  }
  cb();
};

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostListPage/PostListPage').default);
        });
      }}
    />
    <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);
        });
      }}
    />
    <Route
      path="/onlineresources"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/OnlineResourcesListPage/OnlineResourcesListPage').default);
        });
      }}
    />
    <Route
      path="/onlineresources/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/OnlineResourceDetailPage/OnlineResourceDetailPage').default);
        });
      }}
    />
    <Route
      path="/teacherratings"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/TeacherRatingsListPage/TeacherRatingsListPage').default);
        });
      }}
    />
    <Route
      path="/trcomments/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/TeacherRatingsListPage/TeacherRatingDetailPage').default);
          });
      }}
    />
    <Route 
      path="/login"
      onEnter={requireNotLoggedIn} 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/User/pages/LoginPage/LoginPage').default);
        });
      }}
    />
    <Route 
      path="/register"
      onEnter={requireNotLoggedIn} 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/User/pages/RegisterPage/RegisterPage').default);
        });
      }}
    />
    {/* TODO refactor above to use !requireLoggedIn and get rid of requireNotLoggedIn???*/}
    <Route 
      path="/profile"
      onEnter={requireLoggedIn} 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/User/pages/ProfilePage/ProfilePage').default);
        });
      }}
    />
  </Route>
);
