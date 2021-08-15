import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    baseText: {
        fontFamily: 'gilroy-medium',
        color: '#000000',
        fontSize: 14
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 10,
        shadowColor: '#E5EBF1',
        borderRadius: 4,
        marginBottom: 25
    },
    detailsWrapper: {
        paddingVertical: 25,
        paddingHorizontal: 5
    },
    detailsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    inputContainer: {
        marginBottom: 30
    },
    inputLabel: {
        fontFamily: 'gilroy-regular',
        color: '#0000006B',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10
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
    buttonRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A84FF',
        padding: 10,
        borderRadius: 4,
        height: 48
    }
});

export default styles;