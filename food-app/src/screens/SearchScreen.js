import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  searchApi = async () => {
    const res = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'New York City'
      }
    });
    setSearchResults(res.data.businesses);
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onTermSubmit={searchApi}
      />
      <Text>{searchTerm}</Text>
      <Text> Saerch results are {searchResults.length}</Text>
    </View>
  );
};

export default SearchScreen;
