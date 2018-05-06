import callApi from '../../../../util/apiCaller';

// Export Constants
export const ADD_TRCOMMENT = 'ADD_TRCOMMENT';
export const ADD_TRCOMMENTS = 'ADD_TRCOMMENTS';
export const DELETE_TRCOMMENT = 'DELETE_TRCOMMENT';

// Export Actions
export function addTRCOMMENT(post) {
  return {
    type: ADD_TRCOMMENT,
    post,
  };
}

export function addTRCOMMENTRequest(post) {
  return (dispatch) => {
    return callApi('/trcomments', 'post', {
      post: {
        content: post.content,
        teacher: post.teacher,
      },
    }).then(res => dispatch(addTRCOMMENT(res.post)));
  };
}

export function addTRCOMMENTS(posts) {
  return {
    type: ADD_TRCOMMENTS,
    posts,
  };
}

export function fetchTRCOMMENTS() {
  return (dispatch) => {
    return callApi('/trcomments').then(res => {
      dispatch(addTRCOMMENTS(res.posts));
    });
  };
}

export function fetchTRCOMMENT(cuid) {
  return (dispatch) => {
    return callApi(`/trcomments/${cuid}`).then(res => dispatch(addTRCOMMENT(res.post)));
  };
}

export function deleteTRCOMMENT(cuid) {
  return {
    type: DELETE_TRCOMMENT,
    cuid,
  };
}

export function deleteTRCOMMENTRequest(cuid) {
  return (dispatch) => {
    return callApi(`/trcomments/${cuid}`, 'delete').then(() => dispatch(deleteTRCOMMENT(cuid)));
  };
}
