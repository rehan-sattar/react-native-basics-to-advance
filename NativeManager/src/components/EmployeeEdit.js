import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import Communications from 'react-native-communications';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import * as actions from '../actions';
import { Confirm } from './common/Confirm';

class EmployeeEdit extends Component {
  state = {
    visibility: false
  };

  componentDidMount() {
    const { employee, updateEmployee } = this.props;
    _.each(employee, (value, prop) => {
      updateEmployee({ prop, value });
    });
  }

  onButtonPress = () => {
    const {
      name,
      phone,
      shift,
      employeeSave,
      employee: { uid }
    } = this.props;
    employeeSave({
      name,
      phone,
      shift,
      uid
    });
  };

  onTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your shift is on ${shift}`);
  };

  onFirePress = () => {
    this.setState({
      visibility: !this.state.visibility
    });
  };

  onAccept = () => {
    const {
      deleteEmployee,
      employee: { uid }
    } = this.props;
    deleteEmployee(uid);
  };

  onDecline = () => this.setState({ visibility: false });

  render() {
    const { visibility } = this.state;
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save Changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress}>Send Text</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onFirePress}>Fire Employee</Button>
        </CardSection>

        <Confirm visibility={visibility} onAccept={this.onAccept} onDecline={this.onDecline}>
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return {
    name,
    phone,
    shift
  };
};

export default connect(
  mapStateToProps,
  actions
)(EmployeeEdit);
