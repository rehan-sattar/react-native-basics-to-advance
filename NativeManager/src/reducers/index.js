import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import createEmployeeReducer from './employeeForm.reducer';
import readAllEmployeesReducer from './employees.reducer';

export default combineReducers({
  auth: authReducer,
  employeeForm: createEmployeeReducer,
  employees: readAllEmployeesReducer
});
