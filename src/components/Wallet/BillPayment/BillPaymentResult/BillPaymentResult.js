import React, {useEffect} from 'react';
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

const successImage = require('../../../../../assets/success.png');
const warningImage = require('../../../../../assets/warning.png');

const billPaymentResult = ({ navigation, route }) => {
    console.log('Route:', route);

    const successView = (
        <View>
            <View style={styles.headerContent}>
                <Text style={styles.header}>Bill payment successful</Text>
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
    );

    const failureView = (
        <View>
            <View style={styles.headerContent}>
                <Text style={styles.header}>Bill payment not successful</Text>
                <Text style={styles.subHeader}>Transaction not completed, please try again</Text>
            </View>

            <TouchableNativeFeedback onPress={() => navigation.navigate('BillPaymentConfirmation', { name: 'BillPaymentConfirmation' })}>
                <View style={styles.button}>
                    <Text style={{ fontFamily: 'gilroy-extra-bold', fontSize: 18, color: '#ffffff', textAlign: 'center' }}>
                        Try again
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );

    return (
        <View>
            <Header nav={navigation} title="Confirmation" returnNavLink="BillPaymentConfirmation" showCloseIcon={true} />

            <View style={containerStyles.container}>
                <View style={styles.imageContainer}>
                    <Image source={route.params.successChance > 0.5 ? successImage : warningImage} style={styles.resultImage} />
                </View>

                { route.params.successChance > 0.5 ? successView : failureView }
            </View>
        </View>
    );
}

export default billPaymentResult;