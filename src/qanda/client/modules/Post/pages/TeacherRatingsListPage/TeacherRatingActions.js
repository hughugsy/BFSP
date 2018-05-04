import callApi from '../../../../util/apiCaller';

// Export Constants
export const ADD_TR = 'ADD_TR';
export const ADD_TRS = 'ADD_TRS';
export const DELETE_TR = 'DELETE_TR';

// Export Actions
export function addTR(post) {
  return {
    type: ADD_TR,
    post,
  };
}

export function addTRRequest(post) {
  return (dispatch) => {
    return callApi('teacherratings', 'post', {
      post: {
        name: post.name,
        grading: post.grading,
        teaching: post.teaching,
        workload: post.workload,
      },
    }).then(res => dispatch(addTR(res.post)));
  };
}

export function addTRs(posts) {
  return {
    type: ADD_TRS,
    posts,
  };
}

export function fetchTRs() {
  return (dispatch) => {
    return callApi('teacherratings').then(res => {
      dispatch(addTRs(res.posts));
    });
  };
}

export function fetchTR(cuid) {
  return (dispatch) => {
    return callApi(`teacherratings/${cuid}`).then(res => dispatch(addTR(res.post)));
  };
}

export function deleteTR(cuid) {
  return {
    type: DELETE_TR,
    cuid,
  };
}

export function deleteTRRequest(cuid) {
  return (dispatch) => {
    return callApi(`teacherratings/${cuid}`, 'delete').then(() => dispatch(deleteTR(cuid)));
  };
}
