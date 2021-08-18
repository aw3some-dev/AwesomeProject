import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './Success.styles';
import Header from '../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '80%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center'
    }
});

const success = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Confirmation" returnNavLink="Profiles" />

            <View style={containerStyles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/success.png')} style={styles.successImage} />
                </View>

                <View style={styles.headerContent}>
                    <Text style={styles.header}>Changes Successfully Updated</Text>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile', { name: 'Profile' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', fontSize: 18, color: '#ffffff', textAlign: 'center' }}>
                            Done
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

export default success