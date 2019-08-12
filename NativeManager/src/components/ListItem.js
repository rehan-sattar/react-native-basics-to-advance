import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

const ListItem = ({ employee }) => {
  const { empNameStyles } = styles;
  const onRowPress = () => {
    Actions.employeeEdit({ employee });
  };
  return (
    <TouchableWithoutFeedback onPress={onRowPress}>
      <View>
        <CardSection>
          <Text style={empNameStyles}>{employee.name}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  empNameStyles: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
