import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { Picker } from '@react-native-picker/picker';

import styles from './PersonalOrGroupTarget.styles';
import Header from '../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const personalOrGroup = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Noble Target" returnNavLink="NobleTarget" />
            <View style={containerStyles.container}>

                {/* <View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('NobleTarget', { name: 'NobleTarget ' })}>
                        <Image source={require('../../../../assets/cancel.png')}
                            style={{ width: 25, height: 25, marginBottom: 40 }} />
                    </TouchableWithoutFeedback>
                </View> */}

                <View style={styles.headerContent}>
                    <Text style={styles.header}>Create a personal target or group target</Text>
                    <Text style={styles.subHeader}>Set up a new savings and get paid (@ 9% p.a) to reach your goal faster.
                        Select an option to continue.</Text>
                    <Text style={styles.subHeader}>Select an option to continue.</Text>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('PersonalTarget', { name: 'PersonalTarget' })}>
                    <View style={styles.card}>
                        <View style={styles.mainContent}>
                            <View style={styles.cardIcon}>
                                <Image source={require('../../../../assets/user.png')}
                                    style={{ height: 15, width: 15 }} />
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}>Start a personal target</Text>
                                <Text style={styles.cardSubHeader}>Select if you want to create a personal target</Text>
                            </View>
                        </View>

                        {/* <View style={styles.sideContent}>
                            <Image source={require('../../../../assets/Vector.png')} />
                        </View> */}

                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('', { name: '' })}>
                    <View style={styles.card}>
                        <View style={styles.mainContent}>
                            <View style={styles.cardIcon}>
                                <Image source={require('../../../../assets/globe.png')}
                                    style={{ height: 15, width: 15 }} />
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}>Start a public savings challenge</Text>
                                <Text style={styles.cardSubHeader}>Use this option to create a public savings challenge</Text>
                                <Text style={styles.cardSubHeader}>for you and your friends.</Text>
                            </View>
                        </View>

                        {/* <View style={styles.sideContent}>
                            <Image source={require('../../../../assets/dropdown.png')} />
                        </View> */}

                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('', { name: '' })}>
                    <View style={styles.card}>
                        <View style={styles.mainContent}>
                            <View style={styles.cardIcon}>
                                <Image source={require('../../../../assets/user-group.png')}
                                    style={{ height: 15, width: 15 }} />
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}>Start a private group challenge</Text>
                                <Text style={styles.cardSubHeader}>Use this option to create a private savings challenge</Text>
                                <Text style={styles.cardSubHeader}>for you and your friends.</Text>
                            </View>
                        </View>

                        {/* <View style={styles.sideContent}>
                            <Image source={require('../../../../assets/Vector.png')} />
                        </View> */}

                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default personalOrGroup