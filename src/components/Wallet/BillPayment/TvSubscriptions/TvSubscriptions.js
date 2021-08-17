import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';

import styles from './TvSubscriptions.styles';
import Header from '../../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const tvSubscriptions = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="TV Subscriptions" returnNavLink="BillPayment" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>TV Subscriptions</Text>
                    <Text style={styles.subHeader}>DSTv, GOTv, Startimes</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Select biller"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Select product"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Enter amount"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Refrence number"
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

export default tvSubscriptions;