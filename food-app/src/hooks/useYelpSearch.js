import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
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

  return [searchApi, searchResults, errorMessage];
};
