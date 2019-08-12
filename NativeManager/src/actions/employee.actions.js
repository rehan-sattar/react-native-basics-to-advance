import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_ADDED,
  FETCH_EMPLOYEESS_SUCCESS,
  FETCH_EMPLOYEESS_STARTED,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const updateEmployee = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: {
    prop,
    value
  }
});

export const employeeCreate = ({ name, phone, shift }) => (dispatch) => {
  const {
    currentUser: { uid }
  } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      successAction(dispatch, EMPLOYEE_ADDED);
      Actions.pop();
    });
};

export const fetchAllEmployees = () => (dispatch) => {
  const {
    currentUser: { uid }
  } = firebase.auth();
  dispatch({ type: FETCH_EMPLOYEESS_STARTED });
  firebase
    .database()
    .ref(`/users/${uid}/employees`)
    .on('value', (snapshot$) => {
      const data = snapshot$.val();
      const employees = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(data)) {
        // key represent the uid and value is the whole object
        employees.push({ uid: key, ...value });
      }
      successAction(dispatch, FETCH_EMPLOYEESS_SUCCESS, employees);
    });
};

export const employeeSave = ({
  name, phone, shift, uid
}) => (dispatch) => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({
      name,
      phone,
      shift
    })
    .then(() => {
      successAction(dispatch, EMPLOYEE_SAVE_SUCCESS);
      Actions.pop();
    });
};

const successAction = (dispatch, type, payload = null) => dispatch({
  type,
  payload
});
