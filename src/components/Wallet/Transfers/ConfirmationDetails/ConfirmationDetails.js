import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableNativeFeedback } from 'react-native';

import styles from './ConfirmationDetails.styles';
import Header from '../../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const confirmationDetails = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Confirmation" returnNavLink="Transfer" />

            <View style={containerStyles.container}>
                <View style={styles.card}>
                    <View style={styles.detailsWrapper}>
                        <View style={styles.detailsRow}>
                            <Text style={styles.baseText}>Recievers bank</Text>
                            <Text style={[styles.baseText, { textAlign: 'right' }]}>First Bank</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.baseText}>Account number</Text>
                            <Text style={[styles.baseText, { textAlign: 'right' }]}>0031233456</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.baseText}>Recievers name</Text>
                            <Text style={[styles.baseText, { textAlign: 'right' }]}>Janet Doe</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.baseText}>Amount</Text>
                            <Text style={[styles.baseText, { textAlign: 'right' }]}>$4,000.00</Text>
                        </View>

                        <View style={styles.detailsRow}>
                            <Text style={styles.baseText}>Narration</Text>
                            <Text style={[styles.baseText, { textAlign: 'right' }]}>For your college tuition</Text>
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
                            Transfer money
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

export default confirmationDetails;