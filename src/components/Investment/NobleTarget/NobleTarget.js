import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './NobleTarget.styles';
import Header from '../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '80%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        // justifyContent: 'center'
    }
});

const nobleTarget = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Noble Target" returnNavLink="Investment" />

            <View style={containerStyles.container}>
                {/* <View style={styles.imageContainer}>
                    <Image source={require('../../../../assets/Saving1.png')} style={styles.successImage} />
                </View> */}

                <View style={styles.headerContent}>
                    {/* <Text style={styles.header}>Create a Target!</Text> */}
                    <Text style={styles.subHeader}>Save with discipline towards a specific goal or target. 
                    Earn interest every day into your NobleFlex account. Let's help you get started. </Text>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('PersonalOrGroupTarget', { name: 'PersonalOrGroupTarget' })}>
                    <View style={styles.card}>
                        <View style={styles.mainContent}>
                            <View style={styles.cardIcon}>
                                <Image source={require('../../../../assets/savings.png')}
                                    style={{ height: 20, width: 20 }} />
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}>Create a Target</Text>
                            </View>
                        </View>

                        {/* <View style={styles.sideContent}>
                            <Image source={require('../../../../assets/Vector.png')} />
                        </View> */}

                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('PersonalOrGroupTarget', { name: 'PersonalOrGroupTarget' })}>
                    <View style={styles.card}>
                        <View style={styles.mainContent}>
                            <View style={styles.cardIcon}>
                                <Image source={require('../../../../assets/savings.png')}
                                    style={{ height: 20, width: 20 }} />
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}>Join a savings challenge</Text>
                            </View>
                        </View>

                        {/* <View style={styles.sideContent}>
                            <Image source={require('../../../../assets/Vector.png')} />
                        </View> */}

                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>

        // <View>
        //     <Image source={require('../../../assets/Rectangle211.png')} style={styles.circle} />           
        // </View>
    );
}

export default nobleTarget