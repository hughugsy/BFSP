import callApi from '../../../../util/apiCaller';

// Export Constants
export const ADD_ANSWER = 'ADD_ANSWER';
export const ADD_ANSWERS = 'ADD_ANSWERS';
export const DELETE_ANSWER = 'DELETE_ANSWER';

// Export Actions
export function addAnswer(post) {
  return {
    type: ADD_ANSWER,
    post,
  };
}

export function addAnswerRequest(post) {
  return (dispatch) => {
    return callApi('/answers', 'post', {
      post: {
        content: post.content,
        question: post.question,
      },
    }).then(res => dispatch(addAnswer(res.post)));
  };
}

export function addAnswers(posts) {
  return {
    type: ADD_ANSWERS,
    posts,
  };
}

export function fetchAnswers() {
  return (dispatch) => {
    return callApi('/answers').then(res => {
      dispatch(addAnswers(res.posts));
    });
  };
}

export function fetchAnswer(cuid) {
  return (dispatch) => {
    return callApi(`/answers/${cuid}`).then(res => dispatch(addAnswer(res.post)));
  };
}

export function deleteAnswer(cuid) {
  return {
    type: DELETE_ANSWER,
    cuid,
  };
}

export function deleteAnswerRequest(cuid) {
  return (dispatch) => {
    return callApi(`/answers/${cuid}`, 'delete').then(() => dispatch(deleteAnswer(cuid)));
  };
}
