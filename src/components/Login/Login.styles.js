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
        // fontWeight: '700',
        fontSize: 18,
        width: 150,
        marginBottom: 10,
        fontFamily: 'open-sans-bold',
        color: '#000000',
        
    },
    subHeader: {
        fontSize: 12,
        fontFamily: 'open-sans',
        color: '#000000'
    },
    inputField: {
        marginBottom: 30
    },
    inputLabel: {
        fontSize: 13,
        marginBottom: 10,
        color: 'rgba(142, 142, 142, 1)',
        fontFamily: 'open-sans',
        color: '#777777'

    },
    inputText: {
        height: 40,
        // borderWidth: 1,
        // borderColor: 'rgba(0, 0, 0, .3)',
        // borderStyle: 'solid',
        backgroundColor: '#F1F1F1',
        paddingLeft: 10,
        fontFamily: 'open-sans',
        color: '#777777'
    },
    fingerprintText: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'open-sans'
    },
    // loginBtn: {
    //     backgroundColor: '#043171',
    //     padding: 40
    // }
});

export default styles;