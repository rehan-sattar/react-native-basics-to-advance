import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useYelpSearch from '../hooks/useYelpSearch';
import RestaurantsList from '../components/RestaurantsList';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchApi, searchResults, errorMessage] = useYelpSearch();

  const filterByPrices = price =>
    searchResults.filter(restaurant => restaurant.price === price);

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onTermSubmit={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantsList
          restaurants={filterByPrices('$')}
          title='Cost Effective'
        />
        <RestaurantsList
          restaurants={filterByPrices('$$')}
          title='Bit Pricer'
        />
        <RestaurantsList
          restaurants={filterByPrices('$$$')}
          title='Big Spender'
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
