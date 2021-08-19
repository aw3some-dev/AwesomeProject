import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import styles from './Profile.styles';
import containerStyles from '../../../App.styles';


const profile = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={[containerStyles.dashboardHeader, { height: 200, marginBottom: 40 }]}>
                <View>
                    <View style={styles.profileWrapper}>
                        <View style={styles.profile}>
                            <Image
                                source={require('../../../assets/logo-white.png')}
                                style={{ width: 40, height: 30, marginRight: 10 }}
                            />
                            <View>
                                <Text style={[styles.baseText, styles.header]}>Profile</Text>
                                <Text style={[styles.baseText, styles.subHeader]}>Select an option to continue</Text>
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.avatarWrapper}>
                    <View style={styles.avatarContent}>
                        <View>
                            <Image source={require('../../../assets/avatar.png')} style={styles.avatar} />
                        </View>
                        <View>
                            <Text style={{ fontFamily: 'montserrat-medium', fontSize: 14, color: '#000000' }}>Profile image</Text>
                            <Text style={{ fontFamily: 'montserrat-medium', fontSize: 12, color: '#979797' }}>Chnage profile picture</Text>
                        </View>
                    </View>

                    <View>
                        <Image source={require('../../../assets/Vector.png')} />
                    </View>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <View style={styles.profileMenu}>
                    <View style={styles.menuItem}>
                        <Image source={require('../../../assets/profile/user.png')} style={styles.menuIcon} />

                        <View>
                            <Text style={styles.menuHeader}>Ehizojie Ihayere</Text>
                            <Text style={styles.menuSubHeader}>Account name</Text>
                        </View>
                    </View>

                    <View style={styles.menuItem}>
                        <Image source={require('../../../assets/profile/hash.png')} style={styles.menuIcon} />

                        <View>
                            <Text style={styles.menuHeader}>00123456789</Text>
                            <Text style={styles.menuSubHeader}>Account number</Text>
                        </View>
                    </View>

                    <View style={styles.menuItem}>
                        <Image source={require('../../../assets/profile/phone.png')} style={styles.menuIcon} />

                        <View>
                            <Text style={styles.menuHeader}>+1 713 422 0485 (USA)</Text>
                            <Text style={styles.menuSubHeader}>Phone number</Text>
                        </View>
                    </View>

                    <View style={[styles.menuItem, { marginBottom: 0 }]}>
                        <Image source={require('../../../assets/profile/guard.png')} style={styles.menuIcon} />

                        <View>
                            <Text style={styles.menuHeader}>Personal account</Text>
                            <Text style={styles.menuSubHeader}>Account type</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.menuWrapper}>
                <View style={styles.profileMenu}>
                    <View style={styles.menuItem}>
                        <Image source={require('../../../assets/profile/user-guard.png')} style={styles.menuIcon} />

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('TransactionPin', { name: 'TransactionPin' })}>
                            <View>
                                <Text style={styles.menuHeader}>Transaction pin</Text>
                                <Text style={styles.menuSubHeader}>View or reset your transaction pin</Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('TransactionPin', { name: 'TransactionPin' })}>
                            <View style={styles.sideContent}>
                                <Image source={require('../../../assets/Vector.png')} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.menuItem}>
                        <Image source={require('../../../assets/profile/lock.png')} style={styles.menuIcon} />
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('LoginOptions', { name: 'LoginOptions' })}>
                            <View>
                                <Text style={styles.menuHeader}>Login options</Text>
                                <Text style={styles.menuSubHeader}>Select prefrerred login method</Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('LoginOptions', { name: 'LoginOptions' })}>
                            <View style={styles.sideContent}>
                                <Image source={require('../../../assets/Vector.png')} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.menuItem}>
                        <Image source={require('../../../assets/profile/power.png')} style={styles.menuIcon} />

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('AccountOptions', { name: 'AccountOptions' })}>
                            <View style={{ width: '75%' }}>
                                <Text style={styles.menuHeader}>Account on or off</Text>
                                <View>
                                    <Text style={styles.menuSubHeader}>Make your account active or
                                        inactive when you want to</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('AccountOptions', { name: 'AccountOptions' })}>
                            <View style={styles.sideContent}>
                                <Image source={require('../../../assets/Vector.png')} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={[styles.menuItem, { marginBottom: 0 }]}>
                        <Image source={require('../../../assets/profile/info.png')} style={styles.menuIcon} />

                        <View style={{ width: '75%' }}>
                            <Text style={styles.menuHeader}>FAQ and help</Text>
                            <View>
                                <Text style={styles.menuSubHeader}>Have any questions? View our help center for more </Text>
                            </View>
                        </View>

                        <View style={styles.sideContent}>
                            <Image source={require('../../../assets/Vector.png')} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <View style={styles.profileMenu}>
                    <View style={[styles.menuItem, { marginBottom: 0 }]}>
                        <Image source={require('../../../assets/profile/exit.png')} style={styles.menuIcon} />

                        <View>
                            <Text style={styles.menuHeader}>Logout</Text>
                            <Text style={styles.menuSubHeader}>Signout from your app</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.navBar}>
                <TouchableWithoutFeedback>
                    <View style={styles.navItem}>
                        <Image source={require('../../../assets/home.png')} />
                        <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#043171' }]}>Home</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('TransactionHistory', { name: 'TransactionHistory' })}>
                    <View style={styles.navItem}>
                        <Image source={require('../../../assets/history.png')} />
                        <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#777777' }]}>History</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                    <View style={styles.navItem}>
                        <Image source={require('../../../assets/user-circle.png')} />
                        <Text style={[styles.baseText, { fontSize: 11, fontFamily: 'gilroy-light', color: '#777777' }]}>Profile</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    );
};

export default profile;