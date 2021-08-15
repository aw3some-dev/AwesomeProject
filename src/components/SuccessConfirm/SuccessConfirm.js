import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './SuccessConfirm.styles';
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

const successConfirm = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Confirmation" returnNavLink="RetailDetailsPage" />

            <View style={containerStyles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/success.png')} style={styles.successImage} />
                </View>

                <View style={styles.headerContent}>
                    <Text style={styles.header}>Request Successful</Text>
                    <Text style={styles.subHeader}>Thank you for your interest, a relationship manager will get in touch with you shortly</Text>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Loans', { name: 'Loans' })}>
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

export default successConfirm