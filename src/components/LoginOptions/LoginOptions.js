import React from 'react';
import { View, Text, Button, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './LoginOptions.styles';
import { StyleSheet } from 'react-native';
import Header from '../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const loginOptions = ({ navigation }) => {
    return (
        <View>
         <Header nav={navigation} title="Login Options" returnNavLink="NewLoans"/>
            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>
                        Login Options
                    </Text>
                    <Text style={styles.subHeader}>Select preferred option</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <Image source={require('../../../assets/grin-alt.png')}
                            style={{ height: 15, width: 15 }} />
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.cardHeader}>Face ID</Text>
                        <Text style={styles.cardSubHeader}>Login with your face</Text>
                    </View>
                </View>

                <View style={[styles.card, { marginBottom: 50 }]}>
                    <View style={styles.cardIcon}>
                        <Image source={require('../../../assets/fingerprint-alt.png')}
                            style={{ height: 15, width: 15 }} />
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.cardHeader}>Fingerprint</Text>
                        <Text style={styles.cardSubHeader}>Login with your thumbprint</Text>
                    </View>
                </View>

                <TouchableWithoutFeedback>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold',fontSize: 18, color: '#ffffff', textAlign: 'center' }}>
                            Save Changes
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

export default loginOptions;