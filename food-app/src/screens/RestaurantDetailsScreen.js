import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import { ScrollView } from 'react-native-gesture-handler';

const RestaurantDetailsScreen = ({ navigation }) => {
  const id = navigation.getParam('restId');
  const [restaurant, setRestaurant] = useState(null);
  const getRestaurant = async id => {
    const res = await yelp.get(`/${id}`);
    setRestaurant(res.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!restaurant) {
    return null;
  }

  return (
    <View>
      <ScrollView>
        <FlatList
          data={restaurant.photos}
          keyExtractor={item => item}
          renderItem={({ item: image }) => (
            <Image
              source={{ uri: image }}
              style={{ height: 400, width: 400 }}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default RestaurantDetailsScreen;
