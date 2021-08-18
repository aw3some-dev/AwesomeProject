import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableNativeFeedback } from 'react-native';

import styles from './OtherBillPayments.styles';
import Header from '../../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const otherBillPayments = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Other bill payments" returnNavLink="BillPayment" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Other bill payments</Text>
                    <Text style={styles.subHeader}>Pay other bills</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Refrence number"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter amount"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Amount"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Phone number"
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

export default otherBillPayments;