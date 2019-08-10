import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESSFULL,
  LOGIN_ERROR,
  LOGIN_START
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false
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
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case LOGIN_SUCCESSFULL:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: 'Authenication failed!',
        loading: false
      };
    default:
      return state;
  }
};
