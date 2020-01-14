import {
  USER_NAME,
  USER_PASSWORD,
  VALIDATION_CHECK_LOGIN,
  CLEAR_LOGIN_DATA,
  CLEAR_LOGIN_VALIDATION,
  CLEAR_LOGIN_VALIDATION_ERROR,
} from '../actionTypes';

export const userNameAction = receivedUsername => {
  return {
    type: USER_NAME,
    payload: receivedUsername,
  };
};

export const passwordAction = receivedPassword => {
  return {
    type: USER_PASSWORD,
    payload: receivedPassword,
  };
};

export const validationCheck = fieldData => {
  return {
    type: VALIDATION_CHECK_LOGIN,
    payload: fieldData,
  };
};

export const clearValidation = () => {
  return {
    type: CLEAR_LOGIN_VALIDATION,
  };
};

export const clearValidationError = () => {
  return {
    type: CLEAR_LOGIN_VALIDATION_ERROR,
  };
};
export const clearLoginDataOnBackPress = () => {
  return {
    type: CLEAR_LOGIN_DATA,
  };
};
