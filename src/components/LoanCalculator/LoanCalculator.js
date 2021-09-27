import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Picker } from '@react-native-picker/picker';

import styles from './LoanCalculator.styles';
import Header from '../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const loanCalculator = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Loan Calculator" returnNavLink="Loans" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Loan Calculator</Text>
                    <Text style={styles.subHeader}>See how your loan will be charged</Text>
                </View>

                <View style={styles.card}>
                    <View style={{ marginBottom: 30 }}>
                        <Text style={[styles.subHeader, { fontSize: 12 }]}>ENTER AMOUNT</Text>
                    </View>

                    <View style={styles.calcWrapper}>
                        <View style={styles.calcRow}>
                            <View style={styles.calcIcon}>
                                <Image source={require('../../../assets/minus.png')}
                                />
                            </View>
                            <View>
                                <Text style={styles.figure}>N20,000</Text>
                            </View>
                            <View style={styles.calcIcon}>
                                <Image source={require('../../../assets/plus.png')}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 60 }}>
                        <View style={styles.pillsWrapper}>
                            <View style={styles.pill}>
                                <Text style={styles.pillText}>N20,000</Text>
                            </View>
                            <View style={[styles.pill, { backgroundColor: '#0000001A' }]}>
                                <Text style={[styles.pillText, { color: '#898A8D' }]}>N500,000</Text>
                            </View>
                            <View style={[styles.pill, { backgroundColor: '#0000001A' }]}>
                                <Text style={[styles.pillText, { color: '#898A8D' }]}>N2,000,000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.cardFooterTitle}>Current Loan Balance</Text>
                            <Text style={styles.cardFooterBody}>N2,500,000</Text>
                        </View>

                        <View style={{ width: '50%' }}>
                            <Text style={styles.cardFooterTitle}>Interest Rate</Text>
                            <Text style={styles.cardFooterBody}>13%</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            placeholder="Select loan tenure"
                        />
                    </SafeAreaView>

                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter repayment option"
                        />
                    </SafeAreaView>

                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter repayment amount"
                        />
                    </SafeAreaView>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('ProcessLoan', { name: 'ProcessLoan' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                            Apply for Loan
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>

        </View>
    );
};

export default loanCalculator;
