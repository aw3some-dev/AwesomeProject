import React from 'react';
import { View, Text, TextInput, Image, TouchableWithoutFeedback } from 'react-native';

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
                    <TextInput style={styles.inputText} />
                </View>

                <Text style={{ ...styles.subHeader, marginBottom: 70, fontFamily: 'open-sans' }}>Unlink this device</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 65, }}>
                    <Image source={require('../../../assets/fingerprint.png')}
                        style={{ height: 20, width: 20, marginRight: 10 }} />
                    <Text style={styles.fingerprintText}>LOGIN WITH FINGERPRINT</Text>
                </View>

                {/* <Button color="#043171" title="LOGIN" /> */}
                <View style={{ alignItems: 'center' }}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Dashboard', { name: 'Dashboard' })}>
                        <View style={[styles.loginBtn]}>
                            <Text style={{ fontFamily: 'open-sans-bold', color: '#ffffff', textAlign: 'center' }}>LOGIN</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontFamily: 'open-sans' }}>
                        New to NobleServe?
                        <Text style={{ color: '#043171', fontFamily: 'open-sans' }}> Create Account</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default login;