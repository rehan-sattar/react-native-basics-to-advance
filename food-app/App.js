import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantDetails: RestaurantDetailsScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Restaurant Search App'
    },
    headerLayoutPreset: 'center'
  }
);

export default createAppContainer(navigator);
