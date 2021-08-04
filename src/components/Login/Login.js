import React from 'react';
import { View, Text, TextInput, Image, Button } from 'react-native';

import { StyleSheet } from 'react-native';

import styles from './Login.styles';

const logo = require('../../../assets/logo.png');

const containerStyles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
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
                        style={{ width: 120, height: 60, marginBottom: 30 }}
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

                <Text style={{ ...styles.subHeader, marginBottom: 70 }}>Unlink this device</Text>

                <Text style={styles.fingerprintText}>LOGIN WITH FINGERPRINT</Text>

                <Button title="LOGIN" onPress={() => navigation.navigate('LoginOptions', { name: 'LoginOptions' })}></Button>
            </View>
        </View>
    );
};

export default login;