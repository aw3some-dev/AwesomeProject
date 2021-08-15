import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Picker } from '@react-native-picker/picker';

import styles from './CorporateDetailsPage.styles';
import Header from '../Header/Header';


const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const corporateDetailsPage = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState()
    const [text, onChangeText] = useState();

    return (
        <View>
            <Header nav={navigation} title="Corporate Loan" returnNavLink="NewLoans" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Corporate Loan</Text>
                    <Text style={styles.subHeader}>For companies</Text>
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
                            placeholder="Name"
                        />
                    </SafeAreaView>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            placeholder="Phone Number"
                        />
                    </SafeAreaView>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            placeholder="Email Address"
                        />
                    </SafeAreaView>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Location"
                        />
                    </SafeAreaView>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="CAC"
                        />
                    </SafeAreaView>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Reason for loan"
                        />
                    </SafeAreaView>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('CorporateConfirmation', { name: 'CorporateConfirmation' })}>
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

export default corporateDetailsPage;


{/* <View style={styles.bar}>
<TouchableWithoutFeedback onPress={() => navigation.navigate('CorporateBorrow', { name: 'CorporateBorrow' })}>
    <View>
        <Image source={require('../../../assets/back.png')}
            style={{ height: 20, width: 40, marginTop: 10 }}
        />
    </View>
</TouchableWithoutFeedback>

<Text style={styles.header1}>Apply for Loan</Text>
</View> */}