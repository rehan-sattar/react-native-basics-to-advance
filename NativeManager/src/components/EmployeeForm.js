import React from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import * as actions from '../actions';

class EmployeeForm extends React.Component {
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

  render() {
    const { name, phone, updateEmployee } = this.props;
    return (
      <View>
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
            value={phone}
            onChangeText={value => updateEmployee({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={{ fontSize: 18, paddingLeft: 18 }}>Shift</Text>
          <View>{this.renderDaysPickers()}</View>
        </CardSection>
      </View>
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
)(EmployeeForm);
