import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './Header.styles';

const header = ({ nav, title, returnNavLink }) => {
    return (
        <View style={styles.header}>
            <View style={styles.headerContent}> 
                <TouchableWithoutFeedback onPress={() => nav.navigate(returnNavLink, { name: returnNavLink })}>
                    <View style={{ ...styles.testBorder, ...styles.headerIcon }}>
                        <Image source={require('../../../assets/header-back.png')}
                        />
                    </View>
                </TouchableWithoutFeedback>

                <View style={{ ...styles.testBorder, ...styles.headerTitleSection }}>
                    <Text style={styles.headerTitle}>{ title }</Text>
                </View>
            </View>
        </View>
    );
};

export default header;