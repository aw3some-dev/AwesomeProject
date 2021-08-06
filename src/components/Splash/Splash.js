import React from 'react';
import { View, Image, Button } from 'react-native';
import { ImageBackground } from 'react-native';

import styles from './Splash.styles';

const logo = require('../../../assets/squash.png');

const splash = ({ navigation }) => {
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <ImageBackground source={logo} style={styles.splashBg} resizeMode="cover">
                {/* <Text>Inside</Text> */}
            </ImageBackground>
            <Image
                source={logo}
                style={{ width: 130, height: 270, marginBottom: 30, backgroundColor: 'transparent', position: 'absolute', top: 300, left: 140 }}
            />

            <Button title="TO LOGIN" onPress={() => navigation.navigate('Login', { name: 'Login' })}>
            </Button>
        </View>
    );
};

export default splash;