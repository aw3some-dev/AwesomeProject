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
        justifyContent: 'center'
    }
});

const nobleTarget = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Confirmation" returnNavLink="RetailDetailsPage" />

            <View style={containerStyles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../../assets/Saving1.png')} style={styles.successImage} />
                </View>

                <View style={styles.headerContent}>
                    <Text style={styles.header}>Create a Target!</Text>
                    <Text style={styles.subHeader}>Save with discipline towards a specific goal or target. 
                    Earn interest every day into your NobleFlex account. Let's help you get started. </Text>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Loans', { name: 'Loans' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', fontSize: 18, color: '#ffffff', textAlign: 'center' }}>
                            Create a Target
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Loans', { name: 'Loans' })}>
                    <View style={styles.button1}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', fontSize: 18, color: '#ffffff', textAlign: 'center' }}>
                            Join a Savings Challenge
                        </Text>
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