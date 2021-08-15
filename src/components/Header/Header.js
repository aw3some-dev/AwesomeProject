import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './Header.styles';

const returnIcon = require('../../../assets/header-back.png');
const closeIcon = require('../../../assets/header-close.png');

const header = ({ nav, title, returnNavLink, showCloseIcon }) => {

    let headerIcon = returnIcon;

    if (!!showCloseIcon) {
        headerIcon = closeIcon;
    }

    return (
        <View style={styles.header}>
            <View style={styles.headerContent}>
                <TouchableWithoutFeedback onPress={() => nav.navigate(returnNavLink, { name: returnNavLink })}>
                    <View style={{ ...styles.testBorder, ...styles.headerIcon }}>
                        <Image source={headerIcon}
                        />
                    </View>
                </TouchableWithoutFeedback>

                <View style={{ ...styles.testBorder, ...styles.headerTitleSection }}>
                    <Text style={styles.headerTitle}>{title}</Text>
                </View>
            </View>
        </View>
    );
};

export default header;