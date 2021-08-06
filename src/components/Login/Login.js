import React from 'react';
import { View, Text, TextInput, Image, Button } from 'react-native';

import { StyleSheet } from 'react-native';

import styles from './Login.styles';

const logo = require('../../../assets/landing-logo.png');

const containerStyles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#ffffff',
        // alignItems: 'center',
        // justifyContent: 'center',
        height: '100%',
        paddingTop: 120,
        paddingLeft: 40,
        paddingRight: 40,
        fontFamily: 'Open Sans'
    }
});

const login = ({ navigation }) => {
    return (
        <View style={containerStyles.container}>
            <View style={styles.loginContainer}>
                <View style={styles.headerContent}>
                    <Image
                        source={logo}
                        style={{ width: 55, height: 40, marginBottom: 30 }}
                    />

                    <Text style={styles.header}>
                        Welcome Back, Adeniran
                    </Text>
                    <Text style={styles.subHeader}>Lets get you back</Text>
                </View>

                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Email address</Text>
                    <TextInput style={styles.inputText} placeholder="email@domain.com" />
                </View>

                <View style={styles.inputField}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput style={styles.inputText} placeholder="email@domain.com" />
                </View>

                <Text style={{ ...styles.subHeader, marginBottom: 70, fontFamily: 'open-sans' }}>Unlink this device</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 75, }}>
                    <Image source={require('../../../assets/fingerprint.png')}
                        style={{ height: 20, width: 20, marginRight: 10 }} />
                    <Text style={styles.fingerprintText}>LOGIN WITH FINGERPRINT</Text>
                </View>

                <Button style={styles.loginBtn} color="#043171" title="LOGIN" onPress={() => navigation.navigate('Dashboard', { name: 'Dashboard' })} />
            </View>
        </View>
    );
};

export default login;