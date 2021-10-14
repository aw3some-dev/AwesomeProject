import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';

import styles from './Notifications.styles';
import Header from '../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const transactions = [
    { type: 'success', title: 'Housing loan', date: 'November 16, 2020', amount: 'N350.00', status: 'Approved' },
    { type: 'failure', title: 'School loan', date: 'November 16, 2020', amount: 'N350.00', status: 'Pending' },
    { type: 'success', title: 'Housing loan', date: 'November 16, 2020', amount: 'N350.00', status: 'Approved' },
    { type: 'success', title: 'Housing loan', date: 'November 16, 2020', amount: 'N350.00', status: 'Approved' },
    { type: 'success', title: 'Housing loan', date: 'November 16, 2020', amount: 'N350.00', status: 'Approved' },
];

const successImg = require('../../../../assets/incoming.png');
const failureImg = require('../../../../assets/failure.png');

const notifications = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Notifications" returnNavLink="Loans" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Notifications</Text>
                </View>

                <View>
                    {
                        transactions.map((trans, index) => {
                            return (
                                <TouchableWithoutFeedback 
                                    key={index}
                                    onPress={() => navigation.navigate('LoanRepayment', { title: trans.title, type: trans.type, status: trans.status })}>
                                    <View style={styles.listItem}>
                                        <View style={styles.listItemDetails}>
                                            {/* <Image
                                                source={trans.type === 'success' ? successImg : failureImg}
                                                style={{ width: 45, height: 45, marginRight: 10 }}
                                            /> */}

                                            <View>
                                                <Text style={[styles.baseHeaderText]}>{trans.title}</Text>
                                                <Text style={[styles.baseText]}>{trans.date}</Text>
                                            </View>
                                        </View>

                                        <View>
                                            <Text 
                                                style={[styles.baseText, { color: trans.type === 'success' ? '#2DA74C' : '#FAA51E' }]}>
                                                {trans.amount}
                                            </Text>
                                            <Text style={[styles.baseText, { color: '#1D1D1D6B' }]}>{trans.status}</Text>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        })
                    }

                </View>
            </View>
        </View>


    );
};

export default notifications;


{/* <View style={styles.bar}>
<TouchableWithoutFeedback onPress={() => navigation.navigate('Loans', { name: 'Loans' })}>
    <View>
        <Image source={require('../../../assets/back.png')}
            style={{ height: 20, width: 40, marginTop: 10 }}
        />
    </View>
</TouchableWithoutFeedback>

<Text style={styles.header}>Loan History</Text>
</View> */}