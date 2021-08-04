import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    card: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(147, 147, 147, .3)',
        borderStyle: 'solid',
        flex: .5,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        flexDirection: 'row'
    },
    cardIcon: {
        width: 30,
        height: 30,
        backgroundColor: '#ccc',
        borderRadius: 50
    },
    cardContent: {
        width: 270
        // flex: 1,
        // backgroundColor: 'royalblue'
    },
    cardHeader: {
        fontSize: 14,
        fontWeight: '700'
    },
    cardSubHeader: {
        fontSize: 12,
        fontWeight: '400'
    }
});

export default styles;