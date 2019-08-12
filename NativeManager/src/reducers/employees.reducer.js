import { FETCH_EMPLOYEESS_STARTED, FETCH_EMPLOYEESS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  allEmployees: [],
  fetchingAllEmployees: false
};

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_EMPLOYEESS_STARTED:
      return {
        ...state,
        fetchingAllEmployees: true
      };
    case FETCH_EMPLOYEESS_SUCCESS:
      return {
        ...state,
        fetchingAllEmployees: false,
        allEmployees: payload
      };
    default:
      return state;
  }
};
