import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './Dashboard.styles';
import containerStyles from '../../../App.styles';

const dashboard = ({ navigation }) => {
    return (
        <View style={{ height: '100%' }}>
            <View style={containerStyles.dashboardHeader}>
                <View>
                    <View style={styles.profileWrapper}>
                        <View style={styles.profile}>
                            <Image
                                source={require('../../../assets/user-profile.png')}
                                style={{ width: 45, height: 45, marginRight: 10 }}
                            />

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
                        <Text style={[styles.fadedText, { fontSize: 11 }]}>BALANCE</Text>
                        <Text style={[styles.baseText, { fontSize: 20, fontFamily: 'open-sans-bold' }]}>NGN 10,000,000.00</Text>
                    </View>

                    <View style={styles.profileFooter}>
                        <View>
                            <Text style={[styles.fadedText, { fontSize: 11 }]}>MONTHLY REPAYMENT</Text>
                            <Text style={[styles.baseText, { fontSize: 18, fontFamily: 'open-sans-bold' }]}>10,000</Text>
                        </View>

                        <View style={styles.walletLink}>
                            <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'open-sans' }]}>Top up Wallet</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.dashboardContent}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Wallet', { name: 'Wallet' })}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/wallet.png')}
                            style={{ width: 35, height: 35 }} />

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Transfer</Text>
                            <Text style={styles.contentBody}>Send money to friends</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Investment', { name: 'Investment' })}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/invest.png')}
                            style={{ width: 35, height: 35 }} />

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Investment</Text>
                            <Text style={styles.contentBody}>Send money to friends</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.dashboardItem}>
                    <Image source={require('../../../assets/apply.png')}
                        style={{ width: 35, height: 35 }} />

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.contentTitle}>Apply for loan</Text>
                        <Text style={styles.contentBody}>Borrow money</Text>
                    </View>
                </View>

                <View style={styles.dashboardItem}>
                    <Image source={require('../../../assets/wallet.png')}
                        style={{ width: 35, height: 35 }} />

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.contentTitle}>Space for AD</Text>
                        <Text style={styles.contentBody}>Learn more</Text>
                    </View>
                </View>
            </View>

            <View style={styles.navBar}>
                <View style={styles.navItem}>
                    <Image source={require('../../../assets/home.png')} />
                    <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'open-sans', color: '#043171' }]}>Home</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('TransactionHistory', { name: 'TransactionHistory' })}>
                    <View style={styles.navItem}>
                        <Image source={require('../../../assets/history.png')} />
                        <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'open-sans', color: '#777777' }]}>History</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.navItem}>
                    <Image source={require('../../../assets/user-circle.png')} />
                    <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'open-sans', color: '#777777' }]}>Profile</Text>
                </View>
            </View>
        </View>
    );
};

export default dashboard;