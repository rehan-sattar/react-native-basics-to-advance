import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Soha', age: 22 },
    { name: 'Neha', age: 21 },
    { name: 'Tahreem', age: 21 },
    { name: 'Batool', age: 23 }
  ];
  return (
    <View>
      <Text>The List Component!</Text>
      {/**
       *  @component FlatList - creating optimized lists in react-native
       *  @prop horizontal - for showing the horizontal list */
      /** @prop showsHorizontalScrollIndicator- for disabeling the scrollbar which comes in the bottom */}
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        // creating an alias to item property for better code readibility
        renderItem={({ item: firend }) => (
          <Text style={styles.listItemStyles}>
            {firend.name} - Age {firend.age}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItemStyles: {
    fontSize: 18,
    paddingLeft: 10
  }
});

export default ListScreen;
