import { ADD_BS, ADD_BSs } from './BuyAndSellActions';

// Initial State
const initialState = { data: [] };

const BuyAndSellReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BS :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_BSs :
      return {
        data: action.posts,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getBuyAndSells = state => state.buyandsells.data;

// Get post by cuid
export const getBuyAndSell = (state, cuid) => state.buyandsells.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default BuyAndSellReducer;
