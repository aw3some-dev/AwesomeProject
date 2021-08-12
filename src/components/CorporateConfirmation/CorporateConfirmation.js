import React, { useState, useRef } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import styles from './CorporateConfirmation.styles';
import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';


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

const corporateConfirm = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState()
    const [text, onChangeText] = React.useState();

    return (

        <View>
            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <View style={styles.bar}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('CorporateDetailsPage', { name: 'CorporateDetailsPage' })}>
                            <View>
                                <Image source={require('../../../assets/back.png')}
                                    style={{ height: 20, width: 40, marginTop: 10 }}
                                />
                            </View>
                        </TouchableWithoutFeedback>

                        <Text style={styles.header}>Corporate Loan</Text>
                    </View>

                    <View>
                        <Text style={styles.header1}>Confirmation</Text>
                        {/* <Text style={styles.subHeader}>Select Amount</Text> */}
                    </View>
                </View>

                <View>
                    <View >
                        <Text style={styles.subHeader, { marginLeft: 20, marginTop: 10, textTransform: 'uppercase' }}>Amount</Text>
                        <Text style={{ marginLeft: 20, marginTop: 10, marginBottom: 20, fontSize: 20, fontFamily: 'open-sans-bold' }}>N20,000</Text>
                        <Text style={styles.subHeader, { marginLeft: 20, marginTop: 10, textTransform: 'uppercase' }}>Fees</Text>
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <View>
                            <Text style={[styles.baseText1, { fontSize: 13, marginTop: 20, marginLeft: 20 }]}>Current Loan Balance</Text>
                            <Text style={[styles.baseText1, { fontSize: 15, fontFamily: 'open-sans-bold', marginLeft: 20 }]}>N2,500,000</Text>
                        </View>

                        <View style={{ marginLeft: 15 }}>
                            <Text style={[styles.baseText1, { fontSize: 13, marginTop: 20, marginLeft: 20 }]}>Monthly Repayment</Text>
                            <Text style={[styles.baseText1, { fontSize: 15, fontFamily: 'open-sans-bold', marginLeft: 20 }]}>N45,000</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginBottom: 20 }}>
                        <View>
                            <Text style={[styles.baseText1, { fontSize: 13, marginTop: 20, marginLeft: 20 }]}>Interest Rate</Text>
                            <Text style={[styles.baseText1, { fontSize: 15, fontFamily: 'open-sans-bold', marginLeft: 20 }]}>13%</Text>
                        </View>

                        <View style={{ marginLeft: 65 }}>
                            <Text style={[styles.baseText1, { fontSize: 13, marginTop: 20, marginLeft: 20 }]}>Loan Tenure</Text>
                            <Text style={[styles.baseText1, { fontSize: 15, fontFamily: 'open-sans-bold', marginLeft: 20 }]}>48 Months</Text>
                        </View>
                    </View>

                    <View>

                        <Text style={styles.subHeader, { marginLeft: 20, marginTop: 10, textTransform: 'uppercase' }}>Personal Info</Text>
                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                            <View>
                                <Text style={[styles.baseText1, { fontSize: 13, marginTop: 20, marginLeft: 20 }]}>Name</Text>
                                <Text style={[styles.baseText1, { fontSize: 15, fontFamily: 'open-sans-bold', marginLeft: 20 }]}>Adedoyin Bolaji</Text>
                            </View>
                            <View style={{ marginLeft: 35 }}>
                                <Text style={[styles.baseText1, { fontSize: 13, marginTop: 20, marginLeft: 20 }]}>Phone Number</Text>
                                <Text style={[styles.baseText1, { fontSize: 15, fontFamily: 'open-sans-bold', marginLeft: 20 }]}>0800 000 0000</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={[styles.baseText1, { fontSize: 13, marginTop: 20, marginLeft: 20 }]}>Email Address</Text>
                                <Text style={[styles.baseText1, { fontSize: 15, fontFamily: 'open-sans-bold', marginLeft: 20 }]}>example@yahoo.com</Text>
                            </View>
                            <View style={{ marginLeft: 0 }}>
                                <Text style={[styles.baseText1, { fontSize: 13, marginTop: 20, marginLeft: 20 }]}>CAC Number</Text>
                                <Text style={[styles.baseText1, { fontSize: 15, fontFamily: 'open-sans-bold', marginLeft: 20 }]}>RC12345678</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={[styles.baseText1, { fontSize: 13, marginTop: 20, marginLeft: 20 }]}>Reason for the loan</Text>
                            <Text style={[styles.baseText1, { fontSize: 15, fontFamily: 'open-sans-bold', marginLeft: 20 }]}>Personal</Text>
                        </View>
                    </View>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('PinVerification', { name: 'PinVerification' })}>
                    <View style={styles.profileFooter}>
                        <Text style={{ fontFamily: 'open-sans-bold', color: '#ffffff', textAlign: 'center' }}>
                            Confirm
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>

        </View>
    );
};


export default corporateConfirm