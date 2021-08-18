import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContent: {
        marginBottom: 40,
    },
    header: {
        fontSize: 20,
        fontFamily: 'montserrat-semi-bold',
        color: '#000000',
        marginBottom: 10
    },
    subHeader: {
        fontSize: 14,
        fontFamily: 'gilroy-light',
    },
    inputContainer: {
        marginBottom: 30
    },
    input: {
        height: 50,
        width: '100%',
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        marginBottom: 15,
        borderColor: 'rgb(222, 233, 243)',
        backgroundColor: '#ffffff',
        fontFamily: 'gilroy-regular'
    },
    inputFeedback: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20
    },
    cardIcon: {
        width: 30,
        height: 30,
        backgroundColor: '#0000001A',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    button: {
        justifyContent: 'center',
        backgroundColor: '#0A84FF',
        padding: 10,
        borderRadius: 4,
        width: '100%',
        height: 48
    }
});

export default styles;