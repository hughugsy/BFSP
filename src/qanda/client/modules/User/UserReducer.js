// Auth Actions
import { REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from './UserActions';
import { UPDATE_USER_INFO_SUCCESS, UPDATE_USER_INFO_FAILURE, LOAD_USER_PROPS, PROFILE_ENTERED} from './UserActions';

// Initial State
const initialState = {
  data: null,
  entered: false,
  register_success: false,
  register_failure: false,
  login_success: false,
  login_failure: false,
  update_success: false,
  update_failure: false, 
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        register_success: !state.register_success,
      };
      
    case REGISTER_FAILURE:
      return {
        ...state,
        register_failure: !state.register_failure,
      };
      
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: action.user,
        login_success: !state.login_success,
      };

    case LOGIN_FAILURE:
      return {    
        ...state,
        login_failure: !state.login_failure,
      };

    case LOGOUT:
      return {
        ...state,
        data: null,
      };

    case UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        data: action.user,
        update_success: !state.update_success,
      };
      
    case UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        update_failure: !state.update_failure,
      };

    case LOAD_USER_PROPS:
      return {
        ...state,
        data: action.user,
      };

    case PROFILE_ENTERED:
      return {
        ...state,
        entered: !state.entered,
      };

    default:
      return state;
  }
};

export const getUser = state => state.user.data;
export const getProfileEntered = state => state.user.entered;
export const getLoginSuccess = state => state.user.login_success;
export const getLoginFailure = state => state.user.login_failure;
export const getRegisterSuccess = state => state.user.register_success;
export const getRegisterFailure = state => state.user.register_failure;
export const getUpdateSuccess= state => state.user.update_success;
export const getUpdateFailure = state => state.user.update_failure;


// Export Reducer
export default UserReducer;