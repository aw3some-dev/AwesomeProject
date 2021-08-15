import React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import styles from './LoanRepayment.styles';
import Header from '../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 15
    }
});

const loanRepayment = ({ navigation, route }) => {
    return (
        <View>
            <Header nav={navigation} title="Loan History" returnNavLink="LoanHistory" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>{route.params.title}</Text>
                    <Text style={styles.subHeader}>Loan Application</Text>
                </View>

                <View style={styles.card}>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={[styles.cardHeader, { color: route.params.type === 'success' ? '#2DA74C' : '#FAA51E' }]}>
                            {route.params.status}
                        </Text>
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

                <TouchableWithoutFeedback>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                            Repay loan
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>

        </View >
    );
};

export default loanRepayment;