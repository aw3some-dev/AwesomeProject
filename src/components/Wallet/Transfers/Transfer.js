import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';

import styles from './Transfer.styles';
import Header from '../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const transfer = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Transfers" returnNavLink="Wallet" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Transfers</Text>
                    <Text style={styles.subHeader}>Send to friends</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Select bank"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Account number"
                    />

                    <View style={styles.inputFeedback}>
                        <View style={styles.cardIcon}>
                            <Image source={require('../../../../assets/user.png')}
                                style={{ height: 14, width: 14 }} />
                        </View>

                        <Text style={{ fontFamily: 'gilroy-medium', fontSize: 14 }}>Janet Doe</Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Enter amount"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Narration"
                    />
                </View>

                <TouchableNativeFeedback onPress={() => navigation.navigate('RetailDetailsPage', { name: 'RetailDetailsPage' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                            Continue
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
};

export default transfer;