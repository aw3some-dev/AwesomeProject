import React from 'react';
import { View, Text, Image, ScrollView, TouchableNativeFeedback, StyleSheet } from 'react-native';

import styles from './Profile.styles';
import containerStyles from '../../../App.styles';

const profile = ({ navigation }) => {
    return (
        <View style={{ height: '100%' }}>
            <View style={[containerStyles.dashboardHeader, { height: 200 }]}>
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
            </View>



        </View>
    );
};

export default profile;