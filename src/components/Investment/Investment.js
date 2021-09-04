import React from 'react';
import { View, Text, Image, Button, TouchableWithoutFeedback, TouchableNativeFeedback} from 'react-native';

import styles from '../Investment/Investment.styles';
import containerStyles from '../../../App.styles';

const investment = ({ navigation }) => {
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
                                <Text style={[styles.baseText, styles.header]}>Investment</Text>
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

                    <View style={styles.balanceView}>
                        <View>
                            <Text style={[styles.baseText, { fontSize: 11 }]}>INVESTMENT VALUE</Text>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={[styles.baseText, { fontSize: 20, fontFamily: 'gilroy-extra-bold' }]}>NGN 10,000,000.00</Text>
                            </View>

                            <View style={{ marginLeft: 100 }}>
                                <Image source={require('../../../assets/eye-slash-white.png')}
                                    style={styles.eye} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.profileFooter}>
                        <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', textTransform: 'uppercase' }]}>
                            INVESTMENT OPTIONS
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.dashboardContent}>
                <TouchableNativeFeedback onPress={() => navigation.navigate('Investment', { name: 'Investment' })}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/wallet.png')}
                            style={{ width: 40, height: 40, marginBottom: 25 }} />

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Noble Lock</Text>
                            {/* <Text style={styles.contentBody}>Send money to friends</Text> */}
                        </View>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => navigation.navigate('NobleTarget', { name: 'NobleTarget' })}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/invest.png')}
                            style={{ width: 40, height: 40, marginBottom: 25 }} />

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Noble Target</Text>
                            <Text style={styles.contentBody}>Reach your unique individual saving goal</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => navigation.navigate('Loans', { name: 'Loans' })}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/apply.png')}
                            style={{ width: 40, height: 40, marginBottom: 25 }} />

                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Noble Flex</Text>
                            {/* <Text style={styles.contentBody}>Borrow money</Text> */}
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

            {/* <View style={styles.dashboardContent1}>
                <View>
                    <Text style={styles.dashboardHeader}>MY PORTFOLIO</Text>
                </View>

                <View style={styles.dashboardGrid}>

                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/amazon-prime.png')}
                            style={{ width: 45, height: 45, marginRight: 10 }} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Amazon Prime</Text>
                        </View>
                    </View>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/spotify.png')}
                            style={{ width: 45, height: 45, marginRight: 10 }} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Spotify</Text>
                        </View>
                    </View>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/netflix.png')}
                            style={{ width: 45, height: 45, marginRight: 10 }} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Netflix</Text>
                        </View>
                    </View>
                </View>
            </View> */}

        </View>
    );
}

export default investment;