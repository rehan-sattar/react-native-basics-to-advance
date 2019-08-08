import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library.item} />;
  }
  render() {
    const { libraries } = this.props;
    return (
      <FlatList
        data={libraries}
        renderItem={this.renderItem}
        keyExtractor={library => parseInt(library.id)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToProps)(LibraryList);
