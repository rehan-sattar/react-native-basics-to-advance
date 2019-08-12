import { EMPLOYEE_UPDATE, EMPLOYEE_ADDED, EMPLOYEE_SAVE_SUCCESS } from '../actions';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case EMPLOYEE_ADDED:
    case EMPLOYEE_SAVE_SUCCESS:
      return {
        ...state,
        name: '',
        phone: '',
        shift: ''
      };
    default:
      return state;
  }
};
