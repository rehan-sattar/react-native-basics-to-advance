import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const ListItem = ({ name }) => {
  const { empNameStyles } = styles;
  return (
    <CardSection>
      <Text style={empNameStyles}>{name}</Text>
    </CardSection>
  );
};

const styles = {
  empNameStyles: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
