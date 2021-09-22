import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, FlatList } from 'react-native';

import styles from './TransactionHistory.styles';

const transactions = [
    { title: 'Incoming funds', date: 'November 16, 2020', }
];

const transactionHistory = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Dashboard', { name: 'Dashboard ' })}>
                    <Image source={require('../../../assets/back-arrow.png')}
                        style={{ height: 18, width: 23, marginBottom: 15 }} />
                </TouchableWithoutFeedback>
            </View>

            <Text style={styles.header}>Transaction History</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
                <Text style={{ ...styles.fadedText }}>MY TRANSACTIONS</Text>

                <View style={styles.dropdown}>
                    <Text style={{ ...styles.baseText, color: '#1D1D1D' }}>This month</Text>
                    <Image source={require('../../../assets/dropdown-caret.png')} />
                </View>
            </View>

            <View style={styles.listItem}>
                <View style={styles.listItemDetails}>
                    <Image
                        source={require('../../../assets/incoming.png')}
                        style={{ width: 45, height: 45, marginRight: 10 }}
                    />

                    <View>
                        <Text style={[styles.baseHeaderText]}>Incoming funds</Text>
                        <Text style={[styles.baseText]}>November 16, 2020</Text>
                    </View>
                </View>

                <Text style={[styles.baseText, { color: '#2DA74C' }]}>N350.00</Text>
            </View>
            <View style={styles.listItem}>
                <View style={styles.listItemDetails}>
                    <Image
                        source={require('../../../assets/incoming.png')}
                        style={{ width: 45, height: 45, marginRight: 10 }}
                    />

                    <View>
                        <Text style={[styles.baseHeaderText]}>Incoming funds</Text>
                        <Text style={[styles.baseText]}>November 16, 2020</Text>
                    </View>
                </View>

                <Text style={[styles.baseText, { color: '#2DA74C' }]}>N350.00</Text>
            </View>
            <View style={styles.listItem}>
                <View style={styles.listItemDetails}>
                    <Image
                        source={require('../../../assets/incoming.png')}
                        style={{ width: 45, height: 45, marginRight: 10 }}
                    />

                    <View>
                        <Text style={[styles.baseHeaderText]}>Incoming funds</Text>
                        <Text style={[styles.baseText]}>November 16, 2020</Text>
                    </View>
                </View>

                <Text style={[styles.baseText, { color: '#2DA74C' }]}>N350.00</Text>
            </View>
            <View style={styles.listItem}>
                <View style={styles.listItemDetails}>
                    <Image
                        source={require('../../../assets/incoming.png')}
                        style={{ width: 45, height: 45, marginRight: 10 }}
                    />

                    <View>
                        <Text style={[styles.baseHeaderText]}>Incoming funds</Text>
                        <Text style={[styles.baseText]}>November 16, 2020</Text>
                    </View>
                </View>

                <Text style={[styles.baseText, { color: '#2DA74C' }]}>N350.00</Text>
            </View>
        </View>
    );
};

export default transactionHistory;