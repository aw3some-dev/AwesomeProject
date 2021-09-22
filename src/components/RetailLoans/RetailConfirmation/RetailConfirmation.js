import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Picker } from '@react-native-picker/picker';

import styles from './RetailConfirmation.styles';
import Header from '../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 15
    }
});

const retailConfirm = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Retail Loan" returnNavLink="RetailDetailsPage" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Confirmation</Text>
                    <Text style={styles.subHeader}>Select loan</Text>
                </View>

                <View style={styles.card}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={styles.cardHeader}>Amount</Text>
                        <Text style={styles.figure}>N20,000</Text>
                    </View>

                    <View style={{ marginBottom: 30 }}>
                        <Text style={styles.cardHeader}>Fees</Text>

                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                            <View style={{ width: '50%' }}>
                                <Text style={styles.statTitle}>Current Loan Balance</Text>
                                <Text style={styles.statContent}>N2,500,000</Text>
                            </View>

                            <View style={{ width: '50%' }}>
                                <Text style={styles.statTitle}>Monthly Repayment</Text>
                                <Text style={styles.statContent}>N45,000</Text>
                            </View>
                        </View>

                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <View style={{ width: '50%' }}>
                                <Text style={styles.statTitle}>Interest Rate</Text>
                                <Text style={styles.statContent}>13%</Text>
                            </View>

                            <View style={{ width: '50%' }}>
                                <Text style={styles.statTitle}>Loan Tenure</Text>
                                <Text style={styles.statContent}>48 Months</Text>
                            </View>
                        </View>
                    </View>


                    <View>
                        <Text style={styles.cardHeader}>Personal Info</Text>

                        <View>
                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.statTitle}>Name</Text>
                                <Text style={styles.statContent}>Adedoyin Bolaji</Text>
                            </View>

                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.statTitle}>Phone Number</Text>
                                <Text style={styles.statContent}>0800 000 0000</Text>
                            </View>

                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.statTitle}>Email Address</Text>
                                <Text style={styles.statContent}>example@yahoo.com</Text>
                            </View>

                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.statTitle}>CAC Number</Text>
                                <Text style={styles.statContent}>RC12345678</Text>
                            </View>

                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.statTitle}>Reason for the loan</Text>
                                <Text style={styles.statContent}>Personal</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('PinVerification', { name: 'PinVerification' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                            Confirm
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );

};


export default retailConfirm;