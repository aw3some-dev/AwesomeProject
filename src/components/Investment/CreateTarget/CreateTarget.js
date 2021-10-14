import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import styles from './CreateTarget.styles';
import Header from '../../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const createTarget = ({ navigation }) => {
    const [selectedOption, setSelectedOption] = useState()
    const [text, onChangeText] = React.useState();

    return (
        <View>
            <Header nav={navigation} title="Savings" returnNavLink="Investment"/>

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Create new target</Text>
                    <Text style={styles.subHeader}>Select Amount</Text>
                </View>

                <View style={styles.card}>
                    <View style={{ marginBottom: 30 }}>
                        <Text style={[styles.subHeader, { fontSize: 12 }]}>ENTER TARGET AMOUNT</Text>
                    </View>

                    <View style={styles.calcWrapper}>
                        <View style={styles.calcRow}>
                            <View style={styles.calcIcon}>
                                <Image source={require('../../../../assets/minus.png')}
                                />
                            </View>
                            <View>
                                <Text style={styles.figure}>N20,000</Text>
                            </View>
                            <View style={styles.calcIcon}>
                                <Image source={require('../../../../assets/plus.png')}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
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
                </View>

                <View style={styles.inputContainer}>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Select target period"
                        />
                    </SafeAreaView>

                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Select savings type"
                        />
                    </SafeAreaView>

                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Deductable amount"
                        />
                    </SafeAreaView>

                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                            placeholder="Name of target"
                        />
                    </SafeAreaView>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('CorporateDetailsPage', { name: 'CorporateDetailsPage' })}>
                    <View style={styles.button}>
                        <Text style={{ fontFamily: 'gilroy-extra-bold', color: '#ffffff', textAlign: 'center' }}>
                        Save new target
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>

        </View>
    );
};

export default createTarget;


