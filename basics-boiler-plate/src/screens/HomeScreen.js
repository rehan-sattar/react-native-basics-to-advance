import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      {[
        { routeLink: 'Components', title: 'Go to Components demo' },
        { routeLink: 'Lists', title: 'Go to List demo' },
        { routeLink: 'Images', title: 'Go to Images demo' },
        { routeLink: 'Counter', title: 'Go to Counter demo' },
        { routeLink: 'Colors', title: 'Go to Colors demo' }
      ].map(({ routeLink, title }, index) => (
        <View style={styles.buttonWrapper} key={index}>
          <Button
            onPress={() => navigation.navigate(routeLink)}
            title={title}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    margin: 10
  }
});

export default HomeScreen;
