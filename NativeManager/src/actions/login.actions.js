import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESSFULL,
  LOGIN_ERROR,
  LOGIN_START
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const signIn = ({ email, password }) => (dispatch) => {
  dispatchAction(dispatch, LOGIN_START, true);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatchAction(dispatch, LOGIN_SUCCESSFULL, response.user);
      Actions.main();
    })
    .catch(() => {
      /** handling the signin fallback, if user doesnt exist, create it. */
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          dispatchAction(dispatch, LOGIN_SUCCESSFULL, response.user);
          Actions.main();
        })
        .catch(err => dispatchAction(dispatch, LOGIN_ERROR, err));
    });
};

const dispatchAction = (dispatch, type, payload = null) => {
  dispatch({
    type,
    payload
  });
};
