import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  searchApi = async term => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'New York City'
        }
      });
      setSearchResults(res.data.businesses);
    } catch (err) {
      setErrorMessage('Something wend wrong.');
    }
  };

  // sidenote : This is similar to componentDidMount()
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onTermSubmit={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text> Saerch results are {searchResults.length}</Text>
    </View>
  );
};

export default SearchScreen;
