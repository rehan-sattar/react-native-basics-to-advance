import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_ADDED,
  FETCH_EMPLOYEESS_STARTED,
  FETCH_EMPLOYEESS_SUCCESS
} from '../actions';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  allEmployees: [],
  fetchingEmployees: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case EMPLOYEE_ADDED:
      return {
        ...state,
        name: '',
        phone: '',
        shift: ''
      };
    case FETCH_EMPLOYEESS_STARTED:
      return {
        ...state,
        fetchingEmployees: true
      };
    case FETCH_EMPLOYEESS_SUCCESS:
      return {
        ...state,
        fetchingEmployees: false,
        allEmployees: action.payload
      };
    default:
      return state;
  }
};
