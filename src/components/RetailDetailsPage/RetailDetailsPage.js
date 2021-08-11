import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput } from 'react-native';
import styles from './RetailDetailsPage.styles';
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

const retailDetailsPage = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState()
    const [text, onChangeText] = useState();

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

                        <Text style={styles.header1}>Apply for Loan</Text>
                    </View>

                    <View style = {{marginLeft: 20}}>
                        <Text style={styles.header}>Retail Loan</Text>
                        <Text style={styles.subHeader}>For Individuals</Text>
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
                        keyboardType="numeric"
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
                        placeholder="Location"
                    />
                </SafeAreaView>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="Reason for loan"
                    />
                </SafeAreaView>

                <View style={styles.profileFooter}>
                    <Text style={{ fontFamily: 'open-sans-bold', color: '#ffffff', textAlign: 'center' }}>
                        Submit
                    </Text>
                </View>
            </View>

        </View>
    );
};

export default retailDetailsPage;