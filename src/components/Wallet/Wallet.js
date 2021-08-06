import React from 'react';
import { View, Text, Image, Button, TouchableWithoutFeedback } from 'react-native';

import styles from './Wallet.styles';
import containerStyles from '../../../App.styles';

const wallet = ({ navigation }) => {
    return (
        <View style={{ height: '100%' }}>
            <View style={containerStyles.dashboardHeader}>
                <View>
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
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Dashboard', { name: 'Dashboard '})}>
                                <Image source={require('../../../assets/close.png')}
                                    style={{ width: 15, height: 15 }} />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <View style={styles.balanceView}>
                        <Text style={[styles.baseText, { fontSize: 11 }]}>WALLET BALANCE</Text>
                        <Text style={[styles.baseText, { fontSize: 20, fontFamily: 'open-sans-bold' }]}>NGN 10,000,000.00</Text>
                    </View>

                    <View style={styles.profileFooter}>
                        <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'open-sans', textTransform: 'uppercase' }]}>
                            Top up Wallet
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.dashboardContent}>
                <View style={styles.dashboardItem}>
                    <Image source={require('../../../assets/transfer.png')}
                        style={{ width: 45, height: 45, marginBottom: 25 }} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.contentTitle}>Transfer</Text>
                        <Text style={styles.contentBody}>Send money to friends</Text>
                    </View>
                </View>
                <View style={styles.dashboardItem}>
                    <Image source={require('../../../assets/buy.png')}
                        style={{ width: 45, height: 45, marginBottom: 25 }} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.contentTitle}>Buy airtime</Text>
                        <Text style={styles.contentBody}>MTN, Glo, 9Mobile, Airtel</Text>
                    </View>
                </View>
                <View style={styles.dashboardItem}>
                    <Image source={require('../../../assets/pay.png')}
                        style={{ width: 45, height: 45, marginBottom: 25 }} />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.contentTitle}>Pay bills</Text>
                        <Text style={styles.contentBody}>DSTV, Electricity etc.</Text>
                    </View>
                </View>
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
                    <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'open-sans', color: '#043171' }]}>Home</Text>
                </View>
                <View style={styles.navItem}>
                    <Image source={require('../../../assets/history.png')} />
                    <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'open-sans', color: '#777777' }]}>History</Text>
                </View>
                <View style={styles.navItem}>
                    <Image source={require('../../../assets/user-circle.png')} />
                    <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'open-sans', color: '#777777' }]}>Profile</Text>
                </View>
            </View> */}
        </View>
    );
}

export default wallet;