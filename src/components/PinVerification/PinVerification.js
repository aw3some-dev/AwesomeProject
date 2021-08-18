
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableWithoutFeedback, StyleSheet } from 'react-native';

// import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

import styles from './PinVerification.styles';
import Header from '../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const pinVerification = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState()
    const [text, onChangeText] = useState();

    return (
        <View>
            <Header nav={navigation} title="PIN Verification" returnNavLink="CorporateConfirmation" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Verify Account</Text>
                    <Text style={styles.subHeader}>Enter your 4 digits PIN code</Text>
                </View>

                <View style={styles.wrapper}>
                    <View style={styles.codeInputSection}>
                        <View >
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                keyboardType="numeric"
                            />
                        </View>
                        <View >
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeText}
                                keyboardType="numeric"
                            />
                        </View>
                        <View >
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
                </View>

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

export default pinVerification;



{/* <View style={styles.bar}>
<TouchableWithoutFeedback onPress={() => navigation.navigate('CorporateConfirmation', { name: 'CorporateConfirmation' })}>
    <View>
        <Image source={require('../../../assets/back.png')}
            style={{ height: 20, width: 40, marginTop: 10 }}
        />
    </View>
</TouchableWithoutFeedback>

<Text style={styles.header}>PIN Verification</Text>
</View> */}