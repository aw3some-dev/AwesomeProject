import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './NewLoans.styles';
import { StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


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

const newLoans = ({ navigation }) => {
    return (
        <View>
            <View style={containerStyles.container}>
                <View style={styles.headerContent}>
                    {/* <Button styles={styles.backHeader} title="Back" onPress={() => navigation.navigate('TransactionPin', {name: 'TransactionPin'})}></Button> */}
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
                    <View style={styles.bar}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Loans', { name: 'Loans' })}>
                            <View>
                                <Image source={require('../../../assets/back.png')}
                                    style={{ height: 20, width: 40, marginTop: 35 }}
                                />
                            </View>
                        </TouchableWithoutFeedback>

                        <Text style={styles.header}>Apply For Loans</Text>
                    </View>
                    <View>
                        <Text style={styles.subHeader}>SELECT OPTION</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <TouchableWithoutFeedback style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('CorporateBorrow', { name: 'CorporateBorrow' })}>
                        <View style={styles.cardIcon}>
                            <Image source={require('../../../assets/building.png')}
                                style={{ height: 15, width: 15 }} />
                        </View>

                        <View style={styles.cardContent}>
                            <Text style={styles.cardHeader}>Corporate Loan</Text>
                            <Text style={styles.cardSubHeader}>For Companies</Text>
                        </View>

                        <View style={styles.vector}>
                            <Image source={require('../../../assets/Vector.png')}
                                style={{ marginTop: 5 }} />
                        </View>

                    </TouchableWithoutFeedback>
                </View>


                <View style={styles.card}>
                    <TouchableWithoutFeedback style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('RetailBorrow', { name: 'RetailBorrow' })}>
                        <View style={styles.cardIcon}>
                            <Image source={require('../../../assets/user.png')}
                                style={{ height: 15, width: 15 }} />
                        </View>

                        <View style={styles.cardContent}>
                            <Text style={styles.cardHeader}>Retail Loan</Text>
                            <Text style={styles.cardSubHeader}>For Individuals</Text>
                        </View>

                        <View style={styles.vector}>
                            <Image source={require('../../../assets/Vector.png')}
                                style={{ marginTop: 5 }} />
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                {/* <Button title="Save changes" onPress={() => navigation.navigate('TransactionPin', { name: 'TransactionPin '})}></Button> */}
            </View>
        </View>
    );
};

export default newLoans;