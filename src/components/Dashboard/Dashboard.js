import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';

import styles from './Dashboard.styles';
import containerStyles from '../../../App.styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const dashboard = ({ navigation }) => {
    return (
        <View style={{ height: '100%' }}>
            <View style={containerStyles.dashboardHeader}>
                <View>
                    <View style={styles.profileWrapper}>
                        <View style={styles.profile}>
                            <TouchableWithoutFeedback onPress={()=> navigation.navigate('Profile')}>
                                <Image
                                    source={require('../../../assets/user-profile.png')}
                                    style={{ width: 45, height: 45, marginRight: 10 }} />
                            </TouchableWithoutFeedback>

                            <View>
                                <Text style={styles.profileText}>Hi Adeniran</Text>
                                <Text style={styles.profileText}>Good morning!</Text>
                            </View>
                        </View>

                        <View>
                            <Image source={require('../../../assets/notification.png')}
                                style={{ width: 30, height: 30 }} />
                        </View>
                    </View>

                    <View style={styles.balanceView}>
                        <Text style={[styles.fadedText, { fontSize: 12 }]}>BALANCE</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[styles.baseText, { fontSize: 26, fontFamily: 'gilroy-bold', marginRight: 40 }]}>
                                NGN 10,000,000.00
                            </Text>
                            <Image source={require('../../../assets/eye-slash-white.png')} />
                        </View>
                    </View>

                    <View style={styles.profileFooter}>
                        <View>
                            <Text style={[styles.fadedText, { fontSize: 12 }]}>MONTHLY REPAYMENT</Text>
                            <Text style={[styles.baseText, { fontSize: 18, fontFamily: 'gilroy-medium' }]}>10,000</Text>
                        </View>

                        <View style={styles.walletLink}>
                            <Text style={[styles.baseText, { fontSize: 12, fontFamily: 'gilroy-medium' }]}>Top up Wallet</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.dashboardContent}>
                <TouchableNativeFeedback onPress={() => navigation.navigate('Wallet', { name: 'Wallet' })}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/wallet.png')}
                            style={{ width: 40, height: 40, marginBottom: 25 }} />

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Wallet</Text>
                            <Text style={styles.contentBody}>Send money to friends</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => navigation.navigate('Investment', { name: 'Investment' })}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/invest.png')}
                            style={{ width: 40, height: 40, marginBottom: 25 }} />

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Investment</Text>
                            <Text style={styles.contentBody}>Target savings, investments</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => navigation.navigate('Loans', { name: 'Loans' })}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/apply.png')}
                            style={{ width: 40, height: 40, marginBottom: 25 }} />

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Apply for loan</Text>
                            <Text style={styles.contentBody}>Borrow money</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>

                <View style={styles.dashboardItem}>
                    {/* <Image source={require('../../../assets/wallet.png')}
                        style={{ width: 40, height: 40 }} /> */}

                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                        <Text style={styles.contentTitle}>Space for AD</Text>
                        <Text style={styles.contentBody}>Learn more</Text>
                    </View>
                </View>
            </View>

            <View style={styles.navBar}>
                <View style={styles.navItem}>
                    <Image source={require('../../../assets/home.png')} />
                    <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#043171' }]}>Home</Text>
                </View>
                <TouchableNativeFeedback onPress={() => navigation.navigate('TransactionHistory', { name: 'TransactionHistory' })}>
                    <View style={styles.navItem}>
                        <Image source={require('../../../assets/history.png')} />
                        <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#777777' }]}>History</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => navigation.navigate('Profile', { name: 'Profile' })}>
                    <View style={styles.navItem}>
                        <Image source={require('../../../assets/user-circle.png')} />
                        <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#777777' }]}>Profile</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
};

export default dashboard;