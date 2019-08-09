import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESSFULL } from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const signIn = ({ email, password }) => (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => dispatch({
      type: LOGIN_SUCCESSFULL,
      payload: response.user
    }))
    .catch(err => console.log(err));
};
