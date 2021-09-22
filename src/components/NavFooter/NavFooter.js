import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';

import styles from './NavFooter.styles';

const navFooter = () => {
    return (
        <View style={styles.navBar}>
            <View style={styles.navItem}>
                <Image source={require('../../../assets/home.png')} />

                {/* <NavIcon color="black" /> */}
                <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#043171' }]}>Home</Text>
            </View>
            <TouchableNativeFeedback onPress={() => navigation.navigate('TransactionHistory', { name: 'TransactionHistory' })}>
                <View style={styles.navItem}>
                    <Image source={require('../../../assets/history.png')} />
                    <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#777777' }]}>History</Text>
                </View>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback onPress={() => navigation.navigate('Profile')}>
                <View style={styles.navItem}>
                    <Image source={require('../../../assets/user-circle.png')} />
                    <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#777777' }]}>Profile</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default navFooter;