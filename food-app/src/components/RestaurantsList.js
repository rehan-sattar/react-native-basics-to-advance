import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={restaurants}
        scroll
        keyExtractor={item => item.id}
        renderItem={({ item: restaurant }) => (
          <RestaurantCard restaurant={restaurant} />
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginVertical: 5
  }
});

export default RestaurantList;
