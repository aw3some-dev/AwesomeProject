import 'react-native-gesture-handler';
import React, { useState } from 'react';

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Splash from './src/components/Splash/Splash';
import Login from './src/components/Login/Login';
import Dashboard from './src/components/Dashboard/Dashboard';
import Wallet from './src/components/Wallet/Wallet';
import Investment from './src/components/Investment/Investment';
import LoginOptions from './src/components/LoginOptions/LoginOptions';
import TransactionPin from './src/components/TransactionPin/TransactionPin';
import AccountOptions from './src/components/AccountOptions/AccountOptions';
import NewLoans from './src/components/NewLoans/NewLoans'
import Loans from './src/components/Loans/Loans';
import CorporateBorrow from './src/components/CorporateLoans/CorporateBorrow/CorporateBorrow';
import CorporateDetailsPage from './src/components/CorporateLoans/CorporateDetailsPage/CorporateDetailsPage';
import CorporateConfirmation from './src/components/CorporateLoans/CorporateConfirmation/CorporateConfirmation';
import RetailBorrow from './src/components/RetailLoans/RetailBorrow/RetailBorrow';
import RetailDetailsPage from './src/components/RetailLoans/RetailDetailsPage/RetailDetailsPage';
import RetailConfirmation from './src/components/RetailLoans/RetailConfirmation/RetailConfirmation';
import PinVerification from './src/components/PinVerification/PinVerification';
import SuccessConfirm from './src/components/SuccessConfirm/SuccessConfirm';
import TransactionHistory from './src/components/TransactionHistory/TransactionHistory';
import LoanHistory from './src/components/LoanHistory/LoanHistory';
import LoanRepayment from './src/components/LoanHistory/LoanRepayment/LoanRepayment';
import LoanCalculator from './src/components/LoanCalculator/LoanCalculator';
import ProcessLoan from './src/components/LoanCalculator/ProcessLoan/ProcessLoan';

import Transfer from './src/components/Wallet/Transfers/Transfer';

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'gilroy-light': require('./assets/fonts/Gilroy-Light.otf'),
    'gilroy-regular': require('./assets/fonts/Gilroy-Regular.ttf'),
    'gilroy-medium': require('./assets/fonts/Gilroy-Medium.ttf'),
    'gilroy-bold': require('./assets/fonts/Gilroy-Bold.ttf'),
    'gilroy-extra-bold': require('./assets/fonts/Gilroy-ExtraBold.otf'),
    'montserrat-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'montserrat-semi-bold': require('./assets/fonts/Montserrat-SemiBold.ttf')
  });
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={err => console.log(err)}
    />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></Stack.Screen> */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} ></Stack.Screen>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Investment" component={Investment} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="TransactionHistory" component={TransactionHistory} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Loans" component={Loans} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="NewLoans" component={NewLoans} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="CorporateBorrow" component={CorporateBorrow} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="RetailBorrow" component={RetailBorrow} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="RetailDetailsPage" component={RetailDetailsPage} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="CorporateDetailsPage" component={CorporateDetailsPage} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="CorporateConfirmation" component={CorporateConfirmation} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="RetailConfirmation" component={RetailConfirmation} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="PinVerification" component={PinVerification} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="SuccessConfirm" component={SuccessConfirm} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="LoanHistory" component={LoanHistory} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="LoanRepayment" component={LoanRepayment} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="LoanCalculator" component={LoanCalculator} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="ProcessLoan" component={ProcessLoan} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="LoginOptions" component={LoginOptions} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="TransactionPin" component={TransactionPin} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="AccountOptions" component={AccountOptions} options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen name="Transfer" component={Transfer} options={{ headerShown: false }}></Stack.Screen>
        {/* <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} ></Stack.Screen> */}
      </Stack.Navigator>

      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app project!</Text>
        <StatusBar style="auto" />

        <Login />
      </View> */}
    </NavigationContainer>
  );
}

