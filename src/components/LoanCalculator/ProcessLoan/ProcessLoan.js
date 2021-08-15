import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Picker } from '@react-native-picker/picker';

import styles from './ProcessLoan.styles';
import Header from '../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 15
    }
});

const processLoan = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Loan Calculator" returnNavLink="LoanCalculator" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Loan Calculator</Text>
                    <Text style={styles.subHeader}>See how your loan will be charged</Text>
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
                </View>

                <TouchableWithoutFeedback>
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


export default processLoan;

