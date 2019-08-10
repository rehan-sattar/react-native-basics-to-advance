/**
|--------------------------------------------------
| @library react-native-router-flux
|--------------------------------------------------
*/

import React, { Fragment } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './Login';
import EmployeeList from './EmployeeList';

export default () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={Login} title="Login Please" />
      </Scene>
      <Scene key="main">
        <Scene key="employeelist" component={EmployeeList} title="Employees" />
      </Scene>
    </Scene>
  </Router>
);
