import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';
import styles from './Wallet.styles';
import containerStyles from '../../../App.styles';

const wallet = ({ navigation }) => {
    const [showBalance, setShowBalance] = useState(true);

    let accountBalance;

    if (showBalance) {
        accountBalance = 'NGN 10,000,000.00';
    } else {
        accountBalance = 'XXXXXXXXXXXXXXX';
    }

    const toggleAccountBalanceHandler = () => {
        setShowBalance((previousBalanceState) => !previousBalanceState);
    };
    return (
        <View style={{ height: '100%' }}>
            <View style={containerStyles.dashboardHeader}>
                <View>
                    <TouchableNativeFeedback onPress={() => navigation.navigate('Dashboard', { name: 'Dashboard ' })}>
                        <View style={styles.profileWrapper}>
                            <View style={styles.profile}>
                                <Image
                                    source={require('../../../assets/logo-white.png')}
                                    style={{ width: 40, height: 30, marginRight: 10 }}
                                />
                                <View>
                                    <Text style={[styles.baseText, styles.header]}>Wallet</Text>
                                    <Text style={[styles.baseText, styles.subHeader]}>Select an option to continue</Text>
                                </View>
                            </View>

                            <View>
                                <TouchableWithoutFeedback onPress={() => navigation.navigate('Dashboard', { name: 'Dashboard ' })}>
                                    <Image source={require('../../../assets/close.png')}
                                        style={{ width: 15, height: 15 }} />
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </TouchableNativeFeedback>

                    <View style={styles.balanceView}>
                        <View>
                            <Text style={[styles.baseText, { fontSize: 11 }]}>WALLET BALANCE</Text>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={[styles.baseText, { fontSize: 20, fontFamily: 'gilroy-extra-bold' }]}>{accountBalance}</Text>
                            </View>

                            <View style={{ marginLeft: 100 }}>
                                <TouchableNativeFeedback onPress={toggleAccountBalanceHandler}>
                                    <Image source={require('../../../assets/eye-slash-white.png')}
                                        style={styles.eye} />
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>



                    <View style={styles.profileFooter}>
                        <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', textTransform: 'uppercase' }]}>
                            Top up Wallet
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.dashboardContent}>
                <TouchableNativeFeedback onPress={() => navigation.navigate('Transfer')}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/transfer.png')}
                            style={{ width: 45, height: 45, marginBottom: 25 }} />

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Transfer</Text>
                            <Text style={styles.contentBody}>Send money to friends</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => navigation.navigate('AirtimeRecharge')}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/buy.png')}
                            style={{ width: 45, height: 45, marginBottom: 25 }} />

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Buy airtime</Text>
                            <Text style={styles.contentBody}>MTN, Glo, 9Mobile, Airtel</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => navigation.navigate('BillPayment')}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/pay.png')}
                            style={{ width: 45, height: 45, marginBottom: 25 }} />

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Pay bills</Text>
                            <Text style={styles.contentBody}>DSTV, Electricity etc.</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>

                <View style={styles.dashboardItem}>
                    <Image source={require('../../../assets/chat.png')}
                        style={{ width: 45, height: 45, marginBottom: 25 }} />

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.contentTitle}>Chat bot</Text>
                        <Text style={styles.contentBody}>Send money to friends</Text>
                    </View>
                </View>
            </View>

            {/* <View style={styles.navBar}>
                <View style={styles.navItem}>
                    <Image source={require('../../../assets/home.png')} />
                    <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#043171' }]}>Home</Text>
                </View>
                <View style={styles.navItem}>
                    <Image source={require('../../../assets/history.png')} />
                    <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#777777' }]}>History</Text>
                </View>
                <View style={styles.navItem}>
                    <Image source={require('../../../assets/user-circle.png')} />
                    <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#777777' }]}>Profile</Text>
                </View>
            </View> */}
        </View>
    );
}

export default wallet;