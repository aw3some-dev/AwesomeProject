import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet, TouchableWithoutFeedback, TouchableNativeFeedback, Modal, ScrollView } from 'react-native';
import styles from './PersonalTarget.styles';
import Header from '../../../Header/Header';
import { SearchBar } from 'react-native-elements';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

options = [
   
    {
        value: 'sa',
        description: 'Select a Reason'
    },

    {
        value: 'ra',
        description: 'Rent/Accommodation',
    },

    {
        value: 'va',
        description: 'Vacation/Travel'
    },
    {
        value: 'cv',
        description: 'Car/Vehicle'
    },
    {
        value: 'fd',
        description: 'Fees or debt'
    },

    {
        value: 'edu',
        description: 'Education'
    },

]

options2 = [
    {
        value: 'cf',
        description: 'Choose a Savings Frequency'
    },

    {
        value: 'daily',
        description: 'Daily',
    },

    {
        value: 'weekly',
        description: 'Weekly'
    },
    {
        value: 'monthly',
        description: 'Monthly'
    },
    {
        value: 'am',
        description: 'Anytime/Manual'
    },

]

const personalTarget = ({ navigation }) => {
    const [showModal, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [text, onChangeText] = useState();
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [heroes, setHeroes] = useState([]);

    const fetchData = () => {
        setData(options);
        setHeroes(options.slice());
    };

    useEffect(() => {
        fetchData();
    }, []);

    // const fetchData = async () => {
    //     const res = await fetch('https://api.opendota.com/api/heroes');
    //     const json = await res.json();
    //     setData(json);
    //     setHeroes(json.slice());
    //   };


    return (
        <View>
            <Header nav={navigation} title="Noble Target" returnNavLink="PersonalOrGroupTarget" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Create a personal target</Text>
                    <Text style={styles.subHeader}>Reach your personal goals more faster</Text>
                </View>

                <View style={styles.inputContainer}>
                    <SafeAreaView>
                        <Text style={[styles.subHeader, { marginBottom: 10, fontWeight: '300' }]}>Target Title</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                        // placeholder="Target Title"
                        />
                    </SafeAreaView>

                    <Text style={[styles.subHeader, { marginBottom: 10, fontWeight: '300' }]}>Select a category</Text>
                    <TouchableWithoutFeedback onPress={() => setShowModal1(true)}>
                        <View style={styles.card}>
                            <View style={styles.mainContent}>

                                <View style={styles.cardContent}>
                                    {/* <Text style={styles.cardHeader}>Start a private group challenge</Text>
                                    <Text style={styles.cardSubHeader}>Use this option to create a private savings challenge</Text>
                                    <Text style={styles.cardSubHeader}>for you and your friends.</Text> */}
                                </View>
                            </View>

                            <View style={styles.cardIcon}>
                                <Image source={require('../../../../../assets/dropdown.png')}
                                    style={{ height: 15, width: 15 }}
                                />
                            </View>

                        </View>
                    </TouchableWithoutFeedback>

                    <SafeAreaView>
                        <Text style={[styles.subHeader, { marginBottom: 10, fontWeight: '300' }]}>Set Overall Target Amount</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                        // placeholder="Email Address"
                        />
                    </SafeAreaView>
                   
                    <Text style={[styles.subHeader, { marginBottom: 10, fontWeight: '300' }]}>How will you prefer to save?</Text>
                    <TouchableWithoutFeedback onPress={() => setShowModal2(true)}>
                        <View style={styles.card}>
                            <View style={styles.mainContent}>

                                <View style={styles.cardContent}>
                                    {/* <Text style={styles.cardHeader}>Start a private group challenge</Text>
                                    <Text style={styles.cardSubHeader}>Use this option to create a private savings challenge</Text>
                                    <Text style={styles.cardSubHeader}>for you and your friends.</Text> */}
                                </View>
                            </View>

                            <View style={styles.cardIcon}>
                                <Image source={require('../../../../../assets/dropdown.png')}
                                    style={{ height: 15, width: 15 }}
                                />
                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('PersonalTargetFinish', { name: 'PersonalTargetFinish' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                            Tap to Continue
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

            <Modal transparent={showModal} visible={showModal} animationType="slide" onRequestClose={() => setShowModal1(false)}>
                <View style={styles.modalBody}>
                    <View style={styles.modalContent}>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.subHeader, { marginBottom: 10, fontWeight: '300' }]}>Select a category</Text>

                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search for options"
                            />

                            <ScrollView>
                                {options.map(option => (
                                    <View style={{ paddingVertical: 10, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                                        <Text>{option.description}</Text>
                                    </View>
                                ))}
                            </ScrollView>

                            {/* <TouchableNativeFeedback>
                                <View style={[styles.modalButton, styles.primaryBtn]}>
                                    <Text style={styles.buttonText}>Upload from phone</Text>
                                </View>
                            </TouchableNativeFeedback> */}

                            <TouchableNativeFeedback onPress={() => setShowModal1(false)}>
                                <View style={[styles.modalButton, styles.defaultBtn, { marginTop: 30 }]}>
                                    <Text style={styles.buttonText}>Done</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal transparent={showModal2} visible={showModal2} animationType="slide" onRequestClose={() => setShowModal2(false)}>
                <View style={styles.modalBody}>
                    <View style={styles.modalContent}>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.subHeader, { marginBottom: 10, fontWeight: '300' }]}>Select a category</Text>


                            <TextInput
                                style={styles.searchInput}
                                placeholder="Search for options"
                            />

                            <ScrollView>
                                {options2.map(option => (
                                    <View style={{ paddingVertical: 10, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: 'black' }}>
                                        <Text>{option.description}</Text>
                                    </View>
                                ))}
                            </ScrollView>

                            {/* <TouchableNativeFeedback>
                                <View style={[styles.modalButton, styles.primaryBtn]}>
                                    <Text style={styles.buttonText}>Upload from phone</Text>
                                </View>
                            </TouchableNativeFeedback> */}

                            <TouchableNativeFeedback onPress={() => setShowModal2(false)}>
                                <View style={[styles.modalButton, styles.defaultBtn, { marginTop: 30 }]}>
                                    <Text style={styles.buttonText}>Done</Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );
};

export default personalTarget;
