import React from 'react';
import { View, Text, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';

import styles from './BillPaymentResult.styles';
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

const billPaymentResult = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Confirmation" returnNavLink="BillPaymentConfirmation" showCloseIcon={true} />

            <View style={containerStyles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../../../assets/success.png')} style={styles.successImage} />
                </View>

                <View style={styles.headerContent}>
                    <Text style={styles.header}>Bill payment successfull</Text>
                    <Text style={styles.subHeader}>Completed successfully</Text>
                </View>

                <View style={styles.downloadWrapper}>
                    <Image source={require('../../../../../assets/download.png')} style={{ marginRight: 20 }} />
                    
                    <View>
                        <Text style={{ fontSize: 14, fontFamily: 'gilroy-medium', color: '#000000' }}>Download receipt</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'gilroy-medium', color: '#979797' }}>Share receipt of transaction</Text>
                    </View>
                </View>

                <TouchableNativeFeedback onPress={() => navigation.navigate('BillPayment', { name: 'BillPayment' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', fontSize: 18, color: '#ffffff', textAlign: 'center' }}>
                            Done
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
}

export default billPaymentResult;