import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        height: '100%',
        paddingVertical: 70,
        paddingHorizontal: 20,
    },
    wrapper: {
        backgroundColor: '#E5E5E5',
        height: '100%',
    },
    baseText: {
        fontSize: 12,
        fontFamily: 'montserrat-medium',
        color: '#1D1D1D6B',
        marginBottom: 4
    },
    baseHeaderText: {
        fontSize: 14,
        fontFamily: 'montserrat-medium',
        color: '#1D1D1D',
        marginBottom: 4
    },
    fadedText: {
        color: '#0000006B',
        fontFamily: 'gilroy-light',
    },
    header: {
        fontFamily: 'gilroy-medium',
        fontSize: 24,
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 14,
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingVertical: 4,
        paddingHorizontal: 7,
        width: 100
    },
    listItem: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        backgroundColor: '#DAE2EA52',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 7
    },
    listItemDetails: {
        flexDirection: 'row',
    }
});

export default styles;