import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './TransferResult.styles';
import Header from '../../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '80%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center'
    }
});

const transferResult = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Confirmation" returnNavLink="ConfirmationDetails" showCloseIcon={true} />

            <View style={containerStyles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../../../assets/success.png')} style={styles.successImage} />
                </View>

                <View style={styles.headerContent}>
                    <Text style={styles.header}>Transfer successfull</Text>
                    <Text style={styles.subHeader}>Completed successfully</Text>
                </View>

                <View style={styles.downloadWrapper}>
                    <Image source={require('../../../../../assets/download.png')} style={{ marginRight: 20 }} />
                    
                    <View>
                        <Text style={{ fontSize: 14, fontFamily: 'gilroy-medium', color: '#000000' }}>Download receipt</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'gilroy-medium', color: '#979797' }}>Share receipt of transaction</Text>
                    </View>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('Wallet', { name: 'Wallet' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', fontSize: 18, color: '#ffffff', textAlign: 'center' }}>
                            Done
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

export default transferResult