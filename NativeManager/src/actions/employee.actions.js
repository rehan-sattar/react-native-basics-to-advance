import { EMPLOYEE_UPDATE } from './types';

export const updateEmployee = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: {
    prop,
    value
  }
});
