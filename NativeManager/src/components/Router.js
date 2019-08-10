/**
|--------------------------------------------------
| @library react-native-router-flux
|--------------------------------------------------
*/

import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Login from './Login';
import EmployeeList from './EmployeeList';
import EmployeeCreateForm from './EmployeeCreateForm';

export default () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={Login} title="Login Please" />
      </Scene>
      <Scene key="main">
        <Scene
          key="employeelist"
          component={EmployeeList}
          title="Employees"
          rightTitle="+ Add"
          onRight={() => Actions.employeeCreate()}
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreateForm} title="Create Employee" />
      </Scene>
    </Scene>
  </Router>
);
