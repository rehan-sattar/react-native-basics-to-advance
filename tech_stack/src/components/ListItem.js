import React from "react";
import { Text } from "react-native";
import { CardSection } from "./common";

class ListItem extends React.Component {
  render() {
    const { library } = this.props;
    return (
      <CardSection>
        <Text>{library.title}</Text>
      </CardSection>
    );
  }
}

export default ListItem;
