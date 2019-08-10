import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import createEmployeeReducer from './employee.reducer';

export default combineReducers({
  auth: authReducer,
  createEmployee: createEmployeeReducer
});
