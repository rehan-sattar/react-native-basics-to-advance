import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer ayart8IUYYDIGvDHOKUAtkDo31pyBnmcQiYHilgXPX0m7sUj0CPI86TLmq9S6LMFSXe8vrd3AZHlC3QegHvL7Jzp_ahKqS1__L6aZTjlK8-MyFzdbopgM66dwLtbXXYx'
  }
});
