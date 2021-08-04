import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    loginContainer: {
        // backgroundColor: 'rebeccapurple',
        // border: '1px solid #cccccc'
    },
    headerContent: {
        marginBottom: 40
    },
    header: {
        fontWeight: '700',
        fontSize: 18,
        width: 150,
        marginBottom: 10
    },
    subHeader: {
        fontSize: 12,
    },
    inputField: {
        marginBottom: 30
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: 10,
        color: 'rgba(142, 142, 142, 1)'
    },
    inputText: {
        height: 40,
        // borderWidth: 1,
        // borderColor: 'rgba(0, 0, 0, .3)',
        // borderStyle: 'solid',
        backgroundColor: 'rgba(207, 207, 207, .3)',
        paddingLeft: 10
    },
    fingerprintText: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 90
    }
});

export default styles;