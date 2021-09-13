import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';

import Header from '../../Header/Header';
import styles from './NobleLock.styles';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const nobleLock = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Create a NobleLock" returnNavLink="Investment" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.subHeader}>SELECT OPTION</Text>
                </View>

                <TouchableNativeFeedback onPress={() => navigation.navigate('NobleLock', { name: 'NobleLock' })}>
                    <View style={styles.card}>
                        <View style={styles.mainContent}>
                            <View style={styles.cardIcon}>
                                <Image source={require('../../../../assets/tv.png')}
                                    style={{ height: 15, width: 15 }} />
                            </View>
                            
                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}>Create a NobleLock</Text>
                                <Text style={styles.cardSubHeader}>Get started with a NobleLock</Text>
                            </View>
                        </View>

                        <View style={styles.sideContent}>
                            <Image source={require('../../../../assets/Vector.png')} />
                        </View>
                    </View>
                </TouchableNativeFeedback>

                {/* <Button title="Save changes" onPress={() => navigation.navigate('TransactionPin', { name: 'TransactionPin '})}></Button> */}
            </View>
        </View>
    );
};

export default nobleLock;