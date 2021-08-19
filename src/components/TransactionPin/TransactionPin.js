import React from 'react';
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Image } from 'react-native';

import { StyleSheet } from 'react-native';

import styles from './TransactionPin.styles';
import Header from '../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});


const transactionPin = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Transaction Pin" returnNavLink="Profile" />
            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    {/* <Button style={styles.backHeader} title="Back" onPress={() => navigation.navigate('LoginOptions', { name: 'LoginOptions' })}></Button> */}
                    <Text style={styles.header}>
                        Transaction Pin
                    </Text>
                    <Text style={styles.subHeader}>Make changes to transaction pin</Text>
                </View>

                <View style={styles.card}>
                    <View>
                        <TextInput placeholder="Current PIN" ></TextInput>
                    </View>

                    <View>
                        <Image source={require('../../../assets/eye.png')}
                            style={{ height: 15, width: 23, marginRight: 20 }} />
                    </View>
                </View>

                <View style={[styles.inputField, { marginBottom: 50 }]}>
                    <TextInput style={styles.inputText} placeholder="Enter New PIN" />
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Success', {name: 'Success'})}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', fontSize: 18, color: '#ffffff', textAlign: 'center' }}>
                            Change Pin
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </View>
    );
};

export default transactionPin;