import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMPLOYEE_UPDATE, EMPLOYEE_ADDED, FETCH_EMPLOYEESS_SUCCESS } from './types';

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
  firebase
    .database()
    .ref(`/users/${uid}/employees`)
    .on('value', (snapshot$) => {
      const data = snapshot$.val();
      const employees = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(data)) {
        employees.push({ uid: key, ...value }); // key represent the uid and value is the whole object
      }
      successAction(dispatch, FETCH_EMPLOYEESS_SUCCESS, employees);
    });
};

const successAction = (dispatch, type, payload = null) => dispatch({
  type,
  payload
});
