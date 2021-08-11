import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './BorrowMoney.styles';
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

const borrowMoney = ({ navigation }) => {
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
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('NewLoans', { name: 'NewLoans' })}>
                            <View>
                                <Image source={require('../../../assets/back.png')}
                                    style={{ height: 20, width: 40, marginTop: 35 }}
                                />
                            </View>
                        </TouchableWithoutFeedback>

                        <Text style={styles.header}>Borrow Money</Text>
                    </View>
                    <View>
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

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <View style={styles.cardIcon3}>
                            <Text>N20,000</Text>
                        </View>
                        <View style={styles.cardIcon4}>
                            <Text>N500,000</Text>
                        </View>
                        <View style={styles.cardIcon5}>
                        <Text>N2,000,000</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginTop: 40, marginLeft: 10 }}>
                            <Text style={styles.cardSubHeader}>Current Loan Balance</Text>
                            <Text style={styles.cardHeader}>N2,500,000</Text>
                        </View>

                        <View style={{ marginTop: 40, marginLeft: 30, fontSize: 16 }}>
                            <Text style={styles.cardSubHeader}>Interest Rate</Text>
                            <Text style={styles.cardHeader}>13%</Text>
                        </View>
                    </View>


                </View>

                {/* <View style={styles.card}>
                    <View style={styles.cardIcon}>
                        <Image source={require('../../../assets/user.png')}
                            style={{ height: 15, width: 15 }} />
                    </View>

                    <View style={styles.cardContent}>
                        <Text style={styles.cardHeader}>Retail Loan</Text>
                        <Text style={styles.cardSubHeader}>For Individuals</Text>
                    </View>
                    <TouchableWithoutFeedback>
                        <View style={styles.vector}>
                            <Image source={require('../../../assets/Vector.png')}
                                style={{ marginTop: 5 }} />
                        </View>
                    </TouchableWithoutFeedback>

                </View> */}
                {/* <Button title="Save changes" onPress={() => navigation.navigate('TransactionPin', { name: 'TransactionPin '})}></Button> */}
            </View>
        </View>
    );
};

export default borrowMoney;