import React from 'react';
import { Text, Image, Button, TouchableWithoutFeedback, View } from 'react-native';
import styles from './Loans.styles';
import containerStyles from '../../../App.styles';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const loans = ({ navigation }) => {
  return (
    <View style={{ height: '100%' }}>
      <View style={containerStyles.dashboardHeader}>
        <View style={{ width: '100%' }}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Dashboard', { name: 'Dashboard' })}>
          <View style={styles.profileWrapper}>

            <View style={styles.profile}>
              <Image source={require('../../../assets/logo-white.png')}
                style={{ width: 40, height: 30, marginRight: 10 }} />

              <View>
                <Text style={[styles.baseText, styles.header]}>Loan</Text>
                <Text style={[styles.baseText, styles.subHeader]}>
                  Select an option to continue
                </Text>
              </View>
            </View>

            <View>
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Dashboard', { name: 'Dashboard' })}>
                <Image source={require('../../../assets/close.png')}
                  style={{ width: 15, height: 15 }} />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </TouchableWithoutFeedback>

          <View style={styles.cardWrapper}>
            <View style={styles.card}>
              <View style={styles.balanceView}>
                <View>
                  <Text style={[styles.cardHeader]}>CURRENT LOAN</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View>
                    <Text style={styles.figure}>N4,000,000</Text>
                  </View>

                  <View style={{ marginLeft: 0 }}>
                    <Image source={require('../../../assets/eye-slash.png')}
                      style={styles.eye} />
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View>
                  <Text style={styles.statTitle}>Current Loan Balance</Text>
                  <Text style={styles.statContent}>N2,500,000</Text>
                </View>

                <View style={{ marginLeft: 50 }}>
                  <Text style={styles.statTitle}>Monthly Repayment</Text>
                  <Text style={styles.statContent}>N45,000</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                <View>
                  <Text style={styles.statTitle}>Interest Rate</Text>
                  <Text style={styles.statContent}>13%</Text>
                </View>

                <View style={{ marginLeft: 97 }}>
                  <Text style={styles.statTitle}>Loan Tenure</Text>
                  <Text style={styles.statContent}>48 Months</Text>
                </View>
              </View>

              <View style={styles.profileFooter}>
                <Text style={[styles.baseText, { fontSize: 12, fontFamily: 'montserrat-semi-bold', textTransform: 'uppercase' }]}>
                  Loan Settings
                </Text>
              </View>
            </View>

          </View>
        </View>
      </View>

      <View style={styles.dashboardContent}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('NewLoans', { name: 'NewLoans' })}>
          <View style={styles.dashboardItem}>
            <Image source={require('../../../assets/pay1.png')}
              style={{ width: 40, height: 40, marginBottom: 25 }} />
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.contentTitle}>Apply for New Loan</Text>
              <Text style={styles.contentBody}>Borrow Money</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('LoanCalculator', { name: 'LoanCalculator' })}>
          <View style={styles.dashboardItem}>
            <Image source={require('../../../assets/accounting1.png')}
              style={{ width: 40, height: 40, marginBottom: 25 }} />
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.contentTitle}>Loan Calculator</Text>
              <Text style={styles.contentBody}>Tap and Learn More</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('LoanHistory', { name: 'LoanHistory' })}>
          <View style={styles.dashboardItem}>
            <Image source={require('../../../assets/clock1.png')}
              style={{ width: 40, height: 40, marginBottom: 25 }} />
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.contentTitle}>Loan History</Text>
              <Text style={styles.contentBody}>All History</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.dashboardItem}>
          {/* <Image source={require('../../../assets/chat.png')}
                        style={{ width: 45, height: 45, marginBottom: 25 }} /> */}
          <View style={{ alignItems: 'center', marginTop: 60 }}>
            <Text style={styles.contentTitle}>Space for AD</Text>
            <Text style={styles.contentBody}>Learn More</Text>
          </View>
        </View>
      </View>

    </View>
  );
};

export default loans;
