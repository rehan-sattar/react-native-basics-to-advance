import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESSFULL } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      };
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    case LOGIN_SUCCESSFULL:
      console.log(action);
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
