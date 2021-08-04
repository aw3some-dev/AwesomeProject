import 'react-native-gesture-handler';
import React from 'react';

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './src/components/Splash/Splash';
import Login from './src/components/Login/Login';
import LoginOptions from './src/components/LoginOptions/LoginOptions';
import TransactionPin from './src/components/TransactionPin/TransactionPin';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} ></Stack.Screen>
        <Stack.Screen name="LoginOptions" component={LoginOptions}></Stack.Screen>
        <Stack.Screen name="TransactionPin" component={TransactionPin}></Stack.Screen>
      </Stack.Navigator>

      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app project!</Text>
        <StatusBar style="auto" />

        <Login />
      </View> */}
    </NavigationContainer>
  );
}

