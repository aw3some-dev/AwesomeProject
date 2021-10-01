import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return <View style={{ ...styles.card, ...props.style }}>
      {props.children}
  </View>;
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    elevation: 4,
  },
});

export default Card;
