import React from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Card, CardSection, Input, Button
} from './common';
import * as actions from '../actions';

class EmployeeCreateForm extends React.Component {
  renderDaysPickers = () => {
    const { shift, updateEmployee } = this.props;

    return (
      <Picker
        style={{ paddingLeft: 10, paddingRight: 10 }}
        selectedValue={shift}
        onValueChange={value => updateEmployee({ prop: 'shift', value })}
      >
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
          <Picker.Item label={day} value={day} key={day} />
        ))}
      </Picker>
    );
  };

  onButtonPress = () => {
    const {
      name, phone, shift, employeeCreate
    } = this.props;
    employeeCreate({ name, phone, shift: shift || 'Monday' });
  };

  render() {
    const { name, phone, updateEmployee } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="jhone"
            value={name}
            onChangeText={value => updateEmployee({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="5555-555-555"
            name={phone}
            onChangeText={value => updateEmployee({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, paddingLeft: 18 }}>Shift</Text>
          <View>{this.renderDaysPickers()}</View>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ employees }) => {
  const { name, phone, shift } = employees;
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
