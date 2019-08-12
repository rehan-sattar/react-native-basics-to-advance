import React from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import * as actions from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreateForm extends React.Component {
  onButtonPress = () => {
    const {
      name, phone, shift, employeeCreate
    } = this.props;
    employeeCreate({ name, phone, shift: shift || 'Monday' });
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
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
)(EmployeeCreateForm);
