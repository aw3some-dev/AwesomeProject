import React from 'react';

import { View, Text, Button } from 'react-native';

import styles from './LoginOptions.styles';

import { StyleSheet } from 'react-native';

const containerStyles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
        height: '100%',
        width: '100%',
        paddingTop: 40,
        paddingLeft: 40,
        paddingRight: 40,
        fontFamily: 'Open Sans'
    }
});

const loginOptions = ({ navigation }) => {
    return (
        <View>
            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>
                        Login Options
                    </Text>
                    <Text style={styles.subHeader}>Select preferred option</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.cardHeader}>Face ID</Text>
                        <Text style={styles.cardSubHeader}>Login with your face</Text>
                    </View>
                </View>

                <View style={[styles.card, { marginBottom: 50 }]}>
                    <View style={styles.cardIcon}>
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.cardHeader}>Fingerprint</Text>
                        <Text style={styles.cardSubHeader}>Login with your thumbprint</Text>
                    </View>
                </View>

                <Button title="Save changes" onPress={() => navigation.navigate('TransactionPin', { name: 'TransactionPin '})}></Button>
            </View>
        </View>
    );
};

export default loginOptions;