import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import RestaurantCard from './RestaurantCard';

const RestaurantList = ({ title, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={restaurants}
        scroll
        keyExtractor={item => item.id}
        renderItem={({ item: restaurant }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantDetails', {
                restId: restaurant.id
              })
            }
          >
            <RestaurantCard restaurant={restaurant} />
          </TouchableOpacity>
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

export default withNavigation(RestaurantList);
