import React from 'react';
import { View, Text, Image, StyleSheet, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

import styles from './BillPayment.styles';
import Header from '../..//Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const billPayment = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Bill Payment" returnNavLink="Wallet" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.subHeader}>SELECT OPTION</Text>
                </View>

                <TouchableNativeFeedback onPress={() => navigation.navigate('TvSubscriptions', { name: 'TvSubscriptions' })}>
                    <View style={styles.card}>
                        <View style={styles.mainContent}>
                            <View style={styles.cardIcon}>
                                <Image source={require('../../../../assets/tv.png')}
                                    style={{ height: 15, width: 15 }} />
                            </View>
                            
                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}>TV Subscriptions</Text>
                                <Text style={styles.cardSubHeader}>DSTv, GOTv, Startimes</Text>
                            </View>
                        </View>

                        <View style={styles.sideContent}>
                            <Image source={require('../../../../assets/Vector.png')} />
                        </View>
                    </View>
                </TouchableNativeFeedback>


                <TouchableNativeFeedback onPress={() => navigation.navigate('AirtimeRecharge', { name: 'AirtimeRecharge' })}>
                    <View style={styles.card}>
                        <View style={styles.mainContent}>
                            <View style={styles.cardIcon}>
                                <Image source={require('../../../../assets/mobile-alt.png')}
                                    style={{ height: 18, width: 10 }} />
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}>Airtime recharge</Text>
                                <Text style={styles.cardSubHeader}>Glo, MTN, Airtel, Etisalat</Text>
                            </View>
                        </View>

                        <View style={styles.sideContent}>
                            <Image source={require('../../../../assets/Vector.png')} />
                        </View>

                    </View>
                </TouchableNativeFeedback>


                <TouchableNativeFeedback onPress={() => navigation.navigate('OtherBillPayments', { name: 'OtherBillPayments' })}>
                    <View style={styles.card}>
                        <View style={styles.mainContent}>
                            <View style={styles.cardIcon}>
                                <Image source={require('../../../../assets/receipt.png')}
                                    style={{ height: 19, width: 13 }} />
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}>Other bill payments</Text>
                                <Text style={styles.cardSubHeader}>Pay other bills</Text>
                            </View>
                        </View>

                        <View style={styles.sideContent}>
                            <Image source={require('../../../../assets/Vector.png')} />
                        </View>

                    </View>
                </TouchableNativeFeedback>
                {/* <Button title="Save changes" onPress={() => navigation.navigate('TransactionPin', { name: 'TransactionPin '})}></Button> */}
            </View>
        </View>
    );
};

export default billPayment;