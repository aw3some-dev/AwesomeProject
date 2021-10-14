import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './UnlinkDevice.styles';
import Header from '../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const accountCreation = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState()
    const [text, onChangeText] = useState();

    return (
        <View>
            <Header nav={navigation} title="Unlink Device" returnNavLink="NewLoans" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Unlink Device</Text>
                    <Text style={styles.subHeader}>Unlink this device from your user account</Text>
                </View>

                <View style={styles.inputContainer}>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            placeholder="User ID"
                        />
                    </SafeAreaView>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            placeholder="One Time Password"
                        />
                    </SafeAreaView>

                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Login', { name: 'Login' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                            Submit
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>

        </View>
    );
};

export default accountCreation;