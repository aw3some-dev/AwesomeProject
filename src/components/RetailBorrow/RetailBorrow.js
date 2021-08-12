import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput } from 'react-native';
import styles from './RetailBorrow.styles';
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

const retailBorrow = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState()
    const [text, onChangeText] = React.useState();

    let data = [
        { value: 'Banana', },
        { value: 'Mango', },
        { value: 'Pear', }];

    return (

        <View>
            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <View style={styles.bar}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('NewLoans', { name: 'NewLoans' })}>
                            <View>
                                <Image source={require('../../../assets/back.png')}
                                    style={{ height: 20, width: 40, marginTop: 10 }}
                                />
                            </View>
                        </TouchableWithoutFeedback>

                        <Text style={styles.header}>Retail Loan</Text>
                    </View>

                    <View>
                        <Text style={styles.header1}>Borrow Money</Text>
                        <Text style={styles.subHeader}>Select Amount</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <View >
                        <Text style={styles.subHeader, { marginLeft: 20, marginTop: 10 }}>Enter Amount</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.cardIcon1}>
                            <Image source={require('../../../assets/minus.png')}
                            />
                        </View>
                        <View style={{ marginTop: 30, marginLeft: 30, fontSize: 16 }}>
                            <Text>N20,000</Text>
                        </View>
                        <View style={styles.cardIcon2}>
                            <Image source={require('../../../assets/plus.png')}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <View style={styles.cardIcon3}>
                            <Text style={{ color: '#ffffff', textAlign: 'center' }}>N20,000</Text>
                        </View>
                        <View style={styles.cardIcon4}>
                            <Text style={{ color: '#ffffff', textAlign: 'center' }}>N500,000</Text>
                        </View>
                        <View style={styles.cardIcon5}>
                            <Text style={{ color: '#ffffff', textAlign: 'center' }}>N2,000,000</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginTop: 20, marginLeft: 10 }}>
                            <Text style={styles.cardSubHeader}>Current Loan Balance</Text>
                            <Text style={styles.cardHeader}>N2,500,000</Text>
                        </View>

                        <View style={{ marginTop: 20, marginLeft: 30, fontSize: 16 }}>
                            <Text style={styles.cardSubHeader}>Interest Rate</Text>
                            <Text style={styles.cardHeader}>13%</Text>
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

                <SafeAreaView style={{ marginTop: 5 }}>
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

                <TouchableWithoutFeedback onPress={() => navigation.navigate('RetailDetailsPage', { name: 'RetailDetailsPage' })}>
                    <View style={styles.profileFooter}>
                        <Text style={{ fontFamily: 'open-sans-bold', color: '#ffffff', textAlign: 'center' }}>
                            Apply for Loan
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>

        </View>
    );
};

export default retailBorrow;