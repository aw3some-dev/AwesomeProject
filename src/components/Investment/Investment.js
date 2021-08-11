import React from 'react';
import { View, Text, Image, Button, TouchableWithoutFeedback } from 'react-native';

import styles from './Investment.styles';
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
                                <Text style={[styles.baseText, { fontSize: 20, fontFamily: 'open-sans-bold' }]}>NGN 10,000,000.00</Text>
                            </View>

                            <View style={{ marginLeft: 100 }}>
                                <Image source={require('../../../assets/eye-slash1.png')}
                                    style={styles.eye} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.profileFooter}>
                        <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'open-sans', textTransform: 'uppercase' }]}>
                            INVESTMENT OPTIONS
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.dashboardContent}>
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
            </View>

        </View>
    );
}

export default wallet;