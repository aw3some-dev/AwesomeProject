import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './LoanHistory.styles';

const loanHistory = ({ navigation }) => {
    return (
        <View style={styles.headerContent}>
            <View style={styles.bar}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('CorporateDetailsPage', { name: 'CorporateDetailsPage' })}>
                    <View>
                        <Image source={require('../../../assets/back.png')}
                            style={{ height: 20, width: 40, marginTop: 10 }}
                        />
                    </View>
                </TouchableWithoutFeedback>

                <Text style={styles.header}>Loan History</Text>
            </View>

            <View>
                <Text style={styles.header}>Loan History</Text>

                <Text style={{ ...styles.fadedText, marginBottom: 30 }}>MY LOANS</Text>

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
        </View>
    );
};

export default loanHistory;