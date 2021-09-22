import React, { useState } from 'react';
import { View, Text, Image, Button, Switch } from 'react-native';
import styles from './AccountOptions.styles';
import { StyleSheet } from 'react-native';
import Header from '../Header/Header';


const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flex: 0,
    }
})

const AccountOptions = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <Header nav={navigation} title="Account Options" returnNavLink="Profile" />
            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>
                        Account Options
                    </Text>
                    <Text style={styles.subHeader}>Select preferred option</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <Image source={require('../../../assets/user.png')}
                            style={{ height: 15, width: 15 }} />
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.cardHeader}>Usman Bala</Text>
                        <Text style={styles.cardSubHeader}>01234567891</Text>
                    </View>

                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                       value={isEnabled}
                       style={{ alignItems: "center", marginRight: 30}}
                    />
                </View>
            </View>
        </View>
    );
};

export default AccountOptions;
