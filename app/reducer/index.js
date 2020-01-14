import {combineReducers} from 'redux';
import LoginReducer from './loginReducer';
import ValidationReducer from './validationCheckReducer';

export default combineReducers({
  login: LoginReducer,
  validation: ValidationReducer,
});
