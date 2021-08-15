import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './NewLoans.styles';
import Header from '../Header/Header';

const containerStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});

const newLoans = ({ navigation }) => {
    return (
        <View>
            <Header nav={navigation} title="Apply For Loans" returnNavLink="Loans" />

            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.subHeader}>SELECT OPTION</Text>
                </View>

                <TouchableWithoutFeedback onPress={() => navigation.navigate('CorporateBorrow', { name: 'CorporateBorrow' })}>
                    <View style={styles.card}>
                        <View style={styles.mainContent}>
                            <View style={styles.cardIcon}>
                                <Image source={require('../../../assets/building.png')}
                                    style={{ height: 15, width: 15 }} />
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}>Corporate Loan</Text>
                                <Text style={styles.cardSubHeader}>For Companies</Text>
                            </View>
                        </View>

                        <View style={styles.sideContent}>
                            <Image source={require('../../../assets/Vector.png')} />
                        </View>

                    </View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={() => navigation.navigate('RetailBorrow', { name: 'RetailBorrow' })}>
                    <View style={styles.card}>
                        <View style={styles.mainContent}>
                            <View style={styles.cardIcon}>
                                <Image source={require('../../../assets/user-circle-black.png')}
                                    style={{ height: 15, width: 15 }} />
                            </View>

                            <View style={styles.cardContent}>
                                <Text style={styles.cardHeader}>Retail Loan</Text>
                                <Text style={styles.cardSubHeader}>For Individuals</Text>
                            </View>
                        </View>

                        <View style={styles.sideContent}>
                            <Image source={require('../../../assets/Vector.png')} />
                        </View>

                    </View>
                </TouchableWithoutFeedback>
                {/* <Button title="Save changes" onPress={() => navigation.navigate('TransactionPin', { name: 'TransactionPin '})}></Button> */}
            </View>
        </View>
    );
};

export default newLoans;



{/* <Button styles={styles.backHeader} title="Back" onPress={() => navigation.navigate('TransactionPin', {name: 'TransactionPin'})}></Button> */ }
{/* <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image source={require('../../../assets/back.png')} 
                                style={{height: 20, width:40, marginRight: 20}}
                            />
                        </View>
                        <View>
                            <Text style={styles.header}>Apply For Loans</Text>
                            <Text style={styles.subHeader}>SELECT OPTION</Text>
                        </View>
                    </View> */}
{/* <View style={styles.bar}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Loans', { name: 'Loans' })}>
                            <View>
                                <Image source={require('../../../assets/back.png')}
                                    style={{ height: 20, width: 40, marginTop: 35 }}
                                />
                            </View>
                        </TouchableWithoutFeedback>

                        <Text style={styles.header}>Apply For Loans</Text>
                    </View> */}