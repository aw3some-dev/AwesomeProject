import React, { useState } from 'react';
import { View, Text, Image, Button, Modal, TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native';

import Card from '../Card/Card';
import DefaultText from '../UI/DefaultText';
import BoldText from '../UI/BoldText';
import styles from '../Investment/Investment.styles';
import containerStyles from '../../../App.styles';

const investment = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const [showBalance, setShowBalance] = useState(true);

    let accountBalance;

    if (showBalance) {
        accountBalance = 'NGN 72,000.00';
    } else {
        accountBalance = 'XXXXXXXXXXXXXXX';
    }

    const toggleAccountBalanceHandler = () => {
        setShowBalance((previousBalanceState) => !previousBalanceState);
    };

    let content = null;

    if (activeTabIndex === 0) {
        content = (
            <View style={styles.cardContainer}>
                <Card style={{ marginBottom: 10 }}>
                    <View
                        style={{
                            ...styles.cardRow,
                            ...{ flexDirection: 'row', alignItems: 'center' }
                        }}>
                        <View style={styles.cardIcon}>
                            <Text style={styles.cardIconText}>N</Text>
                        </View>

                        <View>
                            <BoldText>New Home</BoldText>
                            <DefaultText>3 months left</DefaultText>
                        </View>
                    </View>

                    <View style={{ ...styles.cardRow }}>
                        <View style={styles.progressBar}></View>
                    </View>

                    <View
                        style={{
                            ...styles.cardRow,
                            ...{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 5
                            }
                        }}>
                        <View>
                            <DefaultText>N20,000</DefaultText>
                            <DefaultText>Amount so far</DefaultText>
                        </View>
                        <View>
                            <DefaultText>N2,000,000</DefaultText>
                            <DefaultText style={{ textAlign: 'right' }}>Target</DefaultText>
                        </View>
                    </View>
                </Card>

                <Card>
                    <View
                        style={{
                            ...styles.cardRow,
                            ...{ flexDirection: 'row', alignItems: 'center' }
                        }}>
                        <View style={styles.cardIcon}>
                            <Text style={styles.cardIconText}>N</Text>
                        </View>

                        <View>
                            <BoldText>Trip to Cape Verde</BoldText>
                            <DefaultText>3 months left</DefaultText>
                        </View>
                    </View>

                    <View style={{ ...styles.cardRow }}>
                        <View style={styles.progressBar}></View>
                    </View>

                    <View
                        style={{
                            ...styles.cardRow,
                            ...{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 5
                            }
                        }}>
                        <View>
                            <DefaultText>N20,000</DefaultText>
                            <DefaultText>Amount so far</DefaultText>
                        </View>
                        <View>
                            <DefaultText>N2,000,000</DefaultText>
                            <DefaultText style={{ textAlign: 'right' }}>Target</DefaultText>
                        </View>
                    </View>
                </Card>
            </View>
        );
    } else if (activeTabIndex === 1) {
        content = (
            <View style={styles.dashboardContent1}>
                <View style={styles.dashboardGrid}>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/amazon-prime.png')} style={{ width: 45, height: 45, marginRight: 10 }} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Amazon Prime</Text>
                        </View>
                    </View>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/spotify.png')} style={{ width: 45, height: 45, marginRight: 10 }} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Spotify</Text>
                        </View>
                    </View>
                    <View style={styles.dashboardItem}>
                        <Image source={require('../../../assets/netflix.png')} style={{ width: 45, height: 45, marginRight: 10 }} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.contentTitle}>Netflix</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={{ height: '100%' }}>
            <View style={containerStyles.dashboardHeader}>
                <View>
                    <View style={styles.profileWrapper}>
                        <View style={styles.profile}>
                            <Image source={require('../../../assets/logo-white.png')} style={{ width: 40, height: 30, marginRight: 10 }} />
                            <View>
                                <Text style={[styles.baseText, styles.header]}>Investment</Text>
                                <Text style={[styles.baseText, styles.subHeader]}>Select an option to continue</Text>
                            </View>
                        </View>

                        <View>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Dashboard', { name: 'Dashboard ' })}>
                                <Image source={require('../../../assets/close.png')} style={{ width: 15, height: 15 }} />
                            </TouchableWithoutFeedback>
                        </View>
                    </View>

                    <View style={styles.balanceView}>
                        <View>
                            <Text style={[styles.baseText, { fontSize: 11 }]}>INVESTMENT VALUE</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={[styles.baseText, { fontSize: 20, fontFamily: 'gilroy-extra-bold' }]}>{accountBalance}</Text>
                            </View>

                            <View style={{ marginLeft: 50 }}>
                                <TouchableNativeFeedback onPress={toggleAccountBalanceHandler}>
                                    <Image source={require('../../../assets/eye-slash-white.png')} style={styles.eye} />
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                    </View>

                    <TouchableNativeFeedback onPress={() => navigation.navigate('CreateTarget')}>
                        <View style={styles.profileFooter}>
                            <Text
                                style={[
                                    styles.baseText,
                                    {
                                        fontSize: 11,
                                        fontFamily: 'gilroy-light',
                                        textTransform: 'uppercase',
                                        textAlign: 'center'
                                    }
                                ]}>
                                CREATE NEW GOAL
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>

            <View style={styles.tabsContainer}>
                <TouchableNativeFeedback onPress={() => setActiveTabIndex(0)}>
                    <View style={activeTabIndex === 0 ? styles.activeTab : styles.tab}>
                        <Text style={styles.tabTitle}>SAVINGS</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback onPress={() => setActiveTabIndex(1)}>
                    <View style={activeTabIndex === 1 ? styles.activeTab : styles.tab}>
                        <Text style={styles.tabTitle}>INVESTMENTS</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>

            {content}

            <TouchableNativeFeedback onPress={() => setShowModal(true)}>
                <View style={styles.floatingButton}>
                    <Image source={require('../../../assets/plus-white.png')} style={{ height: 20, width: 20 }} />
                </View>
            </TouchableNativeFeedback>

            <Modal transparent={showModal} visible={showModal} animationType="slide" onRequestClose={() => setShowModal(false)}>
                <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
                    <View style={styles.modalBody}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalButton}>
                                <Image source={require('../../../assets/plus-blue.png')} style={{ height: 12, width: 12, marginRight: 15 }} />
                                <Text style={styles.buttonText}>Create new savings</Text>
                            </View>

                            <View style={styles.modalButton}>
                                <Image source={require('../../../assets/plus-blue.png')} style={{ height: 12, width: 12, marginRight: 15 }} />
                                <Text style={styles.buttonText}>Investment options</Text>
                            </View>

                            <View style={styles.modalButton}>
                                <Image source={require('../../../assets/plus-blue.png')} style={{ height: 12, width: 12, marginRight: 15 }} />
                                <Text style={styles.buttonText}>New investment</Text>
                            </View>

                            <View style={styles.modalButton}>
                                <Image source={require('../../../assets/chat.png')} style={{ height: 12, width: 12, marginRight: 15 }} />
                                <Text style={styles.buttonText}>Investment bot</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

export default investment;
