
import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableWithoutFeedback } from 'react-native';
import styles from './VerifyPhoneNumber.styles';
import { StyleSheet } from 'react-native';
import Header from '../../Header/Header'


const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
})

const verifyPhoneNumber = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState()
    const [text, onChangeText] = useState();

    return (
        <View>
            <Header nav={navigation} title="Phone Number" returnNavLink="ChangePhoneNumber" />
            <View style={containerStyles.container}>

                <View style={styles.headerContent}>
                    <Text style={styles.header}>Verify your Phone Number</Text>
                    <Text style={styles.subHeader}>Enter the code sent to your phone number</Text>
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

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Success', { name: 'Success' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                            Verify Code
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default verifyPhoneNumber