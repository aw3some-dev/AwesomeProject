
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import styles from './PinVerification.styles';
import { StyleSheet } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Header from '../Header/Header'


const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
})

const pinVerification = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState()
    const [text, onChangeText] = useState();

    return (
        <View>
            <Header nav={navigation} title="PIN Verification" returnNavLink="NewLoans" />
            <View style={containerStyles.container}>

                <View style={styles.headerContent}>
                    <Text style={styles.header}>Verify Account</Text>
                    <Text style={styles.subHeader}>Enter your 4 digits PIN code</Text>
                </View>

                <View style={styles.body}>
                    <View style={{ marginRight: 10 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{ marginRight: 10 }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            keyboardType="numeric"
                        />
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('SuccessConfirm', { name: 'SuccessConfirm' })}>
                    <View style={styles.profileFooter}>
                        <Text style={{ fontFamily: 'open-sans-bold', color: '#ffffff', textAlign: 'center' }}>
                            Confirm
                        </Text>
                    </View>
                </TouchableWithoutFeedback> */}

                <TouchableWithoutFeedback onPress={() => navigation.navigate('SuccessConfirm', { name: 'SuccessConfirm' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                            Verify PIN
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default pinVerification