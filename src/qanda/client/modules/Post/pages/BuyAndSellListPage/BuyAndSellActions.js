import callApi from '../../../../util/apiCaller';

// Export Constants
export const ADD_BS = 'ADD_BS';
export const ADD_BSs = 'ADD_BSs';

// Export Actions
export function addBS(post) {
  return {
    type: ADD_BS,
    post,
  };
}

export function addBSRequest(post) {
  return (dispatch) => {
    return callApi('buyandsells', 'post', {
      post: {
        tags: post.tags,
        title: post.title,
        price: post.price,
        contact: post.contact,
        content: post.content,
      },
    }).then(res => dispatch(addBS(res.post)));
  };
}

export function addBSs(posts) {
  return {
    type: ADD_BSs,
    posts,
  };
}

export function fetchBSs() {
  return (dispatch) => {
    return callApi('buyandsells').then(res => {
      dispatch(addBSs(res.posts));
    });
  };
}

export function fetchBS(cuid) {
  return (dispatch) => {
    return callApi(`buyandsells/${cuid}`).then(res => dispatch(addBS(res.post)));
  };
}

