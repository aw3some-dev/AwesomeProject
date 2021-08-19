import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ReactComponent as Icon } from '../../../../assets/Home.svg';

const navIcon = (props) => (
    <View>
        <Icon fill={props.color} />
    </View>
);

export default navIcon;