import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      {[
        { routeLink: 'Components', title: 'Go to Components demo' },
        { routeLink: 'List', title: 'Go to List demo' },
        { routeLink: 'Image', title: 'Go to Images demo' },
        { routeLink: 'Counter', title: 'Go to Counter demo' },
        { routeLink: 'Color', title: 'Go to Colors demo' },
        { routeLink: 'ColorMaker', title: 'Go to Color maker demo' },
        { routeLink: 'Text', title: 'Go to Text Screen  demo' }
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
