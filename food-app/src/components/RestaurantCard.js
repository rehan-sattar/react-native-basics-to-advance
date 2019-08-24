import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RestaurantCard = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      <Text>{restaurant.name}</Text>
      <Text>
        Ratings: {restaurant.rating} - Reviews: {restaurant.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 5,
    marginBottom: 5
  }
});

export default RestaurantCard;
