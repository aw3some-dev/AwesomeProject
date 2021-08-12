
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import styles from './PinVerification.styles';
import { StyleSheet } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';


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

const pinVerification = ({navigation}) => {
    const [selectedOption, setSelectedOption] = useState()
    const [text, onChangeText] = useState();

    return (
        <View>
            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <View style={styles.bar}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('CorporateConfirmation', { name: 'CorporateConfirmation' })}>
                            <View>
                                <Image source={require('../../../assets/back.png')}
                                    style={{ height: 20, width: 40, marginTop: 10 }}
                                />
                            </View>
                        </TouchableWithoutFeedback>

                        <Text style={styles.header}>PIN Verification</Text>
                    </View>

                    <View >
                        <Text style={styles.header1}>Verify Account</Text>
                        <Text style={styles.subHeader, { marginBottom: 20 }}>Enter your 4 digits PIN code</Text>
                    </View>

                    <View style={styles.section, { flexDirection: "row", marginBottom: 20 }}>
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

                    <TouchableWithoutFeedback onPress={() => navigation.navigate('SuccessConfirm', { name: 'SuccessConfirm' })}>
                    <View style={styles.profileFooter}>
                        <Text style={{ fontFamily: 'open-sans-bold', color: '#ffffff', textAlign: 'center' }}>
                            Confirm
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                </View>
            </View>
        </View>
    )
}

export default pinVerification