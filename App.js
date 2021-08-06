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
import LoginOptions from './src/components/LoginOptions/LoginOptions';
import TransactionPin from './src/components/TransactionPin/TransactionPin';

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
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

