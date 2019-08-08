import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends React.Component {
  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const {
      expanded,
      library: { description }
    } = this.props;
    return expanded ? <Text>{description}</Text> : null;
  }

  render() {
    const {
      library: { id, title },
      selectLibrary
    } = this.props;
    const { titleStyles } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyles}>{title}</Text>
          </CardSection>
          <CardSection>{this.renderDescription()}</CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => ({
  expanded: ownProps.library.id === state.selectedLibraryId
});

export default connect(
  mapStateToProps,
  actions
)(ListItem);
