import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const heaader = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.heaaderTitle}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heaaderTitle: {
    color: 'black',
    fontSize: 18,
  },
});
export default heaader;
