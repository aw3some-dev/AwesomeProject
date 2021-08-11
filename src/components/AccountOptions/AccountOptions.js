import React from 'react';
import { View , Text, Image, Button } from 'react-native';
import styles from './AccountOptions.styles';
import { StyleSheet } from 'react-native';


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

const AccountOptions = ({ navigation }) => {
    return (
        <View>
            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                <Button styles={styles.backHeader} title="Back" onPress={() => navigation.navigate('TransactionPin', {name: 'TransactionPin'})}></Button>
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
                </View>

                {/* <Button title="Save changes" onPress={() => navigation.navigate('TransactionPin', { name: 'TransactionPin '})}></Button> */}
            </View>
        </View>
    );
};

export default AccountOptions;
