import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={searchTerm => setSearchTerm(searchTerm)}
        onTermSubmit={() => console.log('Submitted')}
      />
      <Text>{searchTerm}</Text>
    </View>
  );
};

export default SearchScreen;
