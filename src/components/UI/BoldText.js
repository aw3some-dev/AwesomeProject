import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BoldText = (props) => {
  return <Text style={styles.boldText}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  boldText: {
    fontFamily: 'montserrat-semi-bold',
    color: '#1D1D1D',
    fontSize: 14,
    lineHeight: 17
  },
});

export default BoldText;
