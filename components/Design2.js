import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Design2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainOutline} />
      <View style={styles.innerOutline} />
      <View style={styles.middleSpace} />
      {/* Add components for red, blue, green, yellow corners, lines, and home */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainOutline: {
    width: 750,
    height: 750,
    borderColor: 'black',
    borderWidth: 2,
  },
  innerOutline: {
    width: 790,
    height: 790,
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 2,
  },
  middleSpace: {
    width: 300,
    height: 300,
    backgroundColor: 'black',
    position: 'absolute',
    top: 5,
    left: 5,
  },
  // Add more styles for other components
});

export default Design2;
