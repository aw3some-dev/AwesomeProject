import React from 'react';
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Image } from 'react-native';

import { StyleSheet } from 'react-native';

import styles from './ChangePhoneNumber.styles';
import Header from '../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const changePhoneNumber = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Phone Number" returnNavLink="NewLoans" />
            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>
                        Change Phone Number
                    </Text>
                    <Text style={styles.subHeader}>Update your phone details</Text>
                </View>

                <View style={styles.card1}>
                    <TextInput placeholder="Current Phone Number"></TextInput>
                </View>

                <View style={{ flexDirection: 'row'}}>
                    <TextInput style={styles.card2}>+1(USA)</TextInput>
                    <TextInput style={styles.card3} placeholder="New Phone Number">123 000 00</TextInput>
                </View>

                <TouchableWithoutFeedback onPress={()=> navigation.navigate('VerifyPhoneNumber', {name: 'VerifyPhoneNumber'})}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', fontSize: 18, color: '#ffffff', textAlign: 'center' }}>
                            Save Changes
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </View>
    );
};

export default changePhoneNumber;