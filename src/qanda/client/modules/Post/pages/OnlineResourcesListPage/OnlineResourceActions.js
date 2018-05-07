import callApi from '../../../../util/apiCaller';

// Export Constants
export const ADD_OR = 'ADD_OR';
export const ADD_ORS = 'ADD_ORS';
export const DELETE_OR = 'DELETE_OR';

// Export Actions
export function addOnRes(post) {
  return {
    type: ADD_OR,
    post,
  };
}

export function addOnResRequest(post) {
  return (dispatch) => {
    return callApi('onlineresources', 'post', {
      post: {
        tags: post.tags,
        title: post.title,
        content: post.content,
        link: post.link,
      },
    }).then(res => dispatch(addOnRes(res.post)));
  };
}

export function addOnRs(posts) {
  return {
    type: ADD_ORS,
    posts,
  };
}

export function fetchOnRs() {
  return (dispatch) => {
    return callApi('onlineresources').then(res => {
      dispatch(addOnRs(res.posts));
    });
  };
}

export function fetchOnRes(cuid) {
  return (dispatch) => {
    return callApi(`onlineresources/${cuid}`).then(res => dispatch(addOnRes(res.post)));
  };
}

export function deleteOnRes(cuid) {
  return {
    type: DELETE_OR,
    cuid,
  };
}

export function deleteOnResRequest(cuid) {
  return (dispatch) => {
    return callApi(`onlineresources/${cuid}`, 'delete').then(() => dispatch(deleteOnRes(cuid)));
  };
}
