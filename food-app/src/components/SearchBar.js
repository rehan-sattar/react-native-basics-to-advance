import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onSearchTermChange, onTermSubmit }) => {
  return (
    <View style={styles.containerStyles}>
      <FontAwesome name='search' size={30} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Search'
        style={styles.searchStyles}
        value={searchTerm}
        onChangeText={onSearchTermChange}
        onEndEditing={() => onTermSubmit(searchTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    backgroundColor: '#f0EEEE',
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 5,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  searchStyles: {
    marginLeft: 10,
    fontSize: 18,
    flex: 1,
    // because, alignItems will center it and there will be a small vertical space
    // This will adjust that spacing to full height.
    alignSelf: 'stretch'
  }
});

export default SearchBar;
