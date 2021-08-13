import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput } from 'react-native';
import styles from './SuccessConfirm.styles';
import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingTop: 80,
        paddingLeft: 40,
        paddingRight: 40,
        fontFamily: 'Open Sans'
    }
})

const successConfirm = ({ navigation }) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.backgroundContainer}>
                    <Image source={require('../../../assets/Rectangle211.png')} resizeMode='cover' style={styles.circle} />
                    {/* <Image style={styles.check} source={require('../../../assets/check.png')} /> */}
                </View>
            </View>

            <View>
                <Text style={styles.header}>Request Successful</Text>
                <Text style={styles.subHeader}>Thank you for your interest, a relationship manager will get in touch with you shortly</Text>
            </View>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('Loans', {name: 'Loans'})}>
                    <View style={styles.profileFooter}>
                        <Text style={{ fontFamily: 'open-sans-bold', fontSize: 18, color: '#ffffff', textAlign: 'center' }}>
                            Done
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
        </View>




        // <View>
        //     <Image source={require('../../../assets/Rectangle211.png')} style={styles.circle} />           
        // </View>


    )
}

export default successConfirm