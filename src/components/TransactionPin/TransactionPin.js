import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { StyleSheet } from 'react-native';

import styles from './TransactionPin.styles';

const containerStyles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 80,
        paddingLeft: 40,
        paddingRight: 40,
        fontFamily: 'Open Sans'
    }
});


const transactionPin = ({ navigation }) => {
    return (
        <View style={containerStyles.container}>
            <View style={styles.headerContent}>
            <Button style={styles.backHeader} title="Back" onPress={() => navigation.navigate('LoginOptions', {name: 'LoginOptions'})}></Button>
                <Text style={styles.header}>
                    Transaction Pin
                </Text>
                <Text style={styles.subHeader}>Make changes to transaction pin</Text>
            </View>

            <View style={styles.inputField}>
                <TextInput style={styles.inputText} placeholder="Current PIN" />
            </View>

            <View style={[styles.inputField, { marginBottom: 50 }]}>
                <TextInput style={styles.inputText} placeholder="Enter New PIN" />
            </View>
            <Button title="Change Pin" onPress={() => navigation.navigate('AccountOptions', {name:'AccountOptions'})}></Button>
        </View>
    );
};

export default transactionPin;