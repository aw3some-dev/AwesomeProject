import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableNativeFeedback } from 'react-native';

import styles from './BillPaymentConfirmation.styles';
import Header from '../../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const billPaymentConfirmation = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Confirmation" returnNavLink="BillPayment" />

            <View style={containerStyles.container}>
                <View style={styles.card}>
                    <View style={styles.detailsWrapper}>
                        <View style={styles.detailsRow}>
                            <Text style={styles.baseText}>Biller</Text>
                            <Text style={[styles.baseText, { textAlign: 'right' }]}>DSTv Nigeria</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.baseText}>Product</Text>
                            <Text style={[styles.baseText, { textAlign: 'right' }]}>DSTv Jolly package</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.baseText}>Amount</Text>
                            <Text style={[styles.baseText, { textAlign: 'right' }]}>$4,000.00</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.baseText}>Refrence number</Text>
                            <Text style={[styles.baseText, { textAlign: 'right' }]}>4555123112</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.baseText}>Phone number</Text>
                            <Text style={[styles.baseText, { textAlign: 'right' }]}>0810 000 0000</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Enter transaction pin</Text>

                    <TextInput style={styles.input}></TextInput>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('TransferResult', { name: 'TransferResult' })}>
                        <View style={[styles.button, { width: '80%' }]}>
                            <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                            Continue
                            </Text>
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback>
                        <View style={[styles.button, { width: '15%' }]}>
                            <Image source={require('../../../../../assets/fingerprint-white.png')} />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    );
};

export default billPaymentConfirmation;