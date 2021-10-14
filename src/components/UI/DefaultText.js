import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = (props) => {
  return <Text style={[styles.defaultText, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'montserrat-medium',
    color: 'rgba(29, 29, 29, 0.42);',
    fontSize: 12,
    lineHeight: 15
  },
});

export default DefaultText;
