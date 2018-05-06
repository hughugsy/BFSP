import { ADD_BS, ADD_BSs } from './BuyAndSellActions';
import { SEND_SELECTION } from '../../PostActions';

// Initial State
const initialState = {
  data: [],
  selection: [],
};

const BuyAndSellReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BS :
      return {
        ...state,
        data: [action.post, ...state.data],
      };

    case ADD_BSs :
      return {
        ...state,
        data: action.posts,
      };
    case SEND_SELECTION:
      return {
        ...state,
        selection: action.selection,
      };
    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getBuyAndSells = state => state.buyandsells.data.filter(post => state.buyandsells.selection.every((value) => post.tags.includes(value)));

// Get post by cuid
export const getBuyAndSell = (state, cuid) => state.buyandsells.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default BuyAndSellReducer;
