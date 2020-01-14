import {
  VALIDATION_CHECK_LOGIN,
  CLEAR_LOGIN_VALIDATION_ERROR,
  PASSWORD_VALIDATION,
  USERNAME_VALIDATION,
} from '../actionTypes';

const initialState = {
  username: '',
  password: '',
  errors: {name: '', password: ''},
  isErrorAvailable: 'initial',
  isRegisterErrorAvailable: 'initial',
  errormsg: {
    username: '',
    password: '',
  },
};

export default (state = initialState, action) => {
  const {payload} = action;
  const loginFieldErrors = {};
  let isErrorAvailable = false;
  switch (action.type) {
    case VALIDATION_CHECK_LOGIN:
      const {username, password} = payload;
      if (username === '') {
        loginFieldErrors.name = 'Username cannot be empty';
        isErrorAvailable = true;
      } else if (username !== '') {
        loginFieldErrors.name = '';
      }

      if (password === '') {
        loginFieldErrors.password = 'Password cannot be empty';
        isErrorAvailable = true;
      } else if (password !== '') {
        loginFieldErrors.password = '';
      }
      return {
        ...state,
        isErrorAvailable,
        errors: loginFieldErrors,
        isRegisterErrorAvailable: 'initial',
      };
    case CLEAR_LOGIN_VALIDATION_ERROR:
      return {
        ...state,
        isErrorAvailable: 'initial',
        isRegisterErrorAvailable: 'initial',
      };
    default:
      return state;
  }
};
