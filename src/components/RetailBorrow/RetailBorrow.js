import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Picker } from '@react-native-picker/picker';

import styles from './RetailBorrow.styles';
import Header from '../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const retailBorrow = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState()
    const [text, onChangeText] = React.useState();

    let data = [
        { value: 'Banana', },
        { value: 'Mango', },
        { value: 'Pear', }];

    return (
        <View>
            <Header nav={navigation} title="Retail Loan" returnNavLink="NewLoans" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Borrow Money</Text>
                    <Text style={styles.subHeader}>Select Amount</Text>
                </View>

                <View style={styles.card}>
                    <View style={{ marginBottom: 30 }}>
                        <Text style={[styles.subHeader, { fontSize: 12 }]}>ENTER AMOUNT</Text>
                    </View>

                    <View style={styles.calcWrapper}>
                        <View style={styles.calcRow}>
                            <View style={styles.calcIcon}>
                                <Image source={require('../../../assets/minus.png')}
                                />
                            </View>
                            <View>
                                <Text style={styles.figure}>N20,000</Text>
                            </View>
                            <View style={styles.calcIcon}>
                                <Image source={require('../../../assets/plus.png')}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 60 }}>
                        <View style={styles.pillsWrapper}>
                            <View style={styles.pill}>
                                <Text style={styles.pillText}>N20,000</Text>
                            </View>
                            <View style={[styles.pill, { backgroundColor: '#0000001A' }]}>
                                <Text style={[styles.pillText, { color: '#898A8D' }]}>N500,000</Text>
                            </View>
                            <View style={[styles.pill, { backgroundColor: '#0000001A' }]}>
                                <Text style={[styles.pillText, { color: '#898A8D' }]}>N2,000,000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <View style={{ width: '50%' }}>
                            <Text style={styles.cardFooterTitle}>Current Loan Balance</Text>
                            <Text style={styles.cardFooterBody}>N2,500,000</Text>
                        </View>

                        <View style={{ width: '50%' }}>
                            <Text style={styles.cardFooterTitle}>Interest Rate</Text>
                            <Text style={styles.cardFooterBody}>13%</Text>
                        </View>
                    </View>
                </View>

                {/* <Picker
                    selectedValue={selectedOption}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedOption(itemValue)
                    }>
                    <Picker.Item style={styles.picker} label="--Select Loan Tenure--" value="" />
                    <Picker.Item label="12" value="12" />
                    <Picker.Item label="48" value="48" />
                </Picker>
                <Picker
                    selectedValue={selectedOption}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedOption(itemValue)
                    }>
                    <Picker.Item style={styles.picker} label="--Select Loan Tenure--" value="" />
                    <Picker.Item label="12" value="12" />
                    <Picker.Item label="48" value="48" />
                </Picker>
                <Picker
                    selectedValue={selectedOption}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedOption(itemValue)
                    }>
                    <Picker.Item style={styles.picker} label="--Select Loan Tenure--" value="" />
                    <Picker.Item label="12" value="12" />
                    <Picker.Item label="48" value="48" />
                </Picker> */}

                <View style={styles.inputContainer}>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Select loan tenure"
                        />
                    </SafeAreaView>

                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Enter repayment option"
                        />
                    </SafeAreaView>

                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Enter repayment amount"
                        />
                    </SafeAreaView>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('RetailDetailsPage', { name: 'RetailDetailsPage' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                            Apply for Loan
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>

        </View>
    );
};

export default retailBorrow;




                    {/* <View style={styles.bar}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('NewLoans', { name: 'NewLoans' })}>
                            <View>
                                <Image source={require('../../../assets/back.png')}
                                    style={{ height: 20, width: 40, marginTop: 10 }}
                                />
                            </View>
                        </TouchableWithoutFeedback>

                        <Text style={styles.header}>Retail Loan</Text>
                    </View> */}
