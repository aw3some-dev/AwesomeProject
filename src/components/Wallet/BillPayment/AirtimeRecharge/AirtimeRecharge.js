import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableNativeFeedback } from 'react-native';

import styles from './AirtimeRecharge.styles';
import Header from '../../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const airtimeRecharge = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Airtime recharge" returnNavLink="BillPayment" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Airtime recharge</Text>
                    <Text style={styles.subHeader}>Glo, MTN, Airtel, Etisalat</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Select biller"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter amount"
                    />

                </View>

                <TouchableNativeFeedback onPress={() => navigation.navigate('BillPaymentConfirmation', { name: 'BillPaymentConfirmation' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                            Continue
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
};

export default airtimeRecharge;