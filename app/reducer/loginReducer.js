import {
  USER_NAME,
  USER_PASSWORD,
  CLEAR_LOGIN_DATA,
  CLEAR_LOGIN_VALIDATION,
} from '../actionTypes';

const initialState = {
  username: '',
  password: '',
  loginFailure: '',
};

export default (state = initialState, action) => {
  const {payload} = action;
  switch (action.type) {
    case USER_NAME:
      return {
        ...state,
        username: payload.trim(),
      };
    case USER_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    case CLEAR_LOGIN_DATA:
      return initialState;
    case CLEAR_LOGIN_VALIDATION:
      return {...state, loginFailure: ''};
    default:
      return state;
  }
};
