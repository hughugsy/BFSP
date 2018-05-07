import callApi from '../../../../util/apiCaller';

// Export Constants
export const ADD_TS = 'ADD_TS';
export const ADD_TSS = 'ADD_TSS';
export const DELETE_TS = 'DELETE_TS';

// Export Actions
export function addTutorship(post) {
  return {
    type: ADD_TS,
    post,
  };
}

export function addTutorshipRequest(post) {
  return (dispatch) => {
    return callApi('tutorship', 'post', {
      post: {
        title: post.title,
        content: post.content,
        type: post.type,
      },
    }).then(res => dispatch(addTutorship(res.post)));
  };
}

export function addTutorships(posts) {
  return {
    type: ADD_TSS,
    posts,
  };
}

export function fetchTutorships() {
  return (dispatch) => {
    return callApi('tutorship').then(res => {
      dispatch(addTutorships(res.posts));
    });
  };
}

export function fetchTutorship(cuid) {
  return (dispatch) => {
    return callApi(`tutorship/${cuid}`).then(res => dispatch(addTutorship(res.post)));
  };
}

export function deleteTutorship(cuid) {
  return {
    type: DELETE_TS,
    cuid,
  };
}

export function deleteTutorshipRequest(cuid) {
  return (dispatch) => {
    return callApi(`tutorship/${cuid}`, 'delete').then(() => dispatch(deleteTutorship(cuid)));
  };
}
