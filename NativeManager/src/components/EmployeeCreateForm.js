import React from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import {
  Card, CardSection, Input, Button
} from './common';
import * as actions from '../actions';

const EmployeeCreateForm = (props) => {
  const {
    name, phone, shift, updateEmployee
  } = props;
  const renderDaysPickers = () => (
    <Picker
      style={{ flex: 1 }}
      selectedValue={shift}
      onValueChange={value => updateEmployee({ prop: 'shift', value })}
    >
      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(
        (day, index) => (
          <Picker.Item label={day} value={day} key={index} />
        )
      )}
    </Picker>
  );
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
        <View>{renderDaysPickers()}</View>
      </CardSection>
      <CardSection>
        <Button>Create</Button>
      </CardSection>
    </Card>
  );
};

const mapStateToProps = ({ createEmployee }) => {
  console.log(createEmployee);
  const { name, phone, shift } = createEmployee;
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
