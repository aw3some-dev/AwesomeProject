import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        height: '100%',
        paddingVertical: 90,
        paddingHorizontal: 20,
    },
    wrapper: {
        backgroundColor: '#E5E5E5',
        height: '100%',
    },
    baseText: {
        fontFamily: 'gilroy-light',
        color: '#1D1D1D6B'
    },
    baseHeaderText: {
        fontFamily: 'gilroy-extra-bold',
        color: '#1D1D1D'
    },
    fadedText: {
        color: '#0000006B',
        fontFamily: 'gilroy-light',
    },
    header: {
        fontFamily: 'gilroy-extra-bold',
        fontSize: 20,
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 14,
    },
    listItem: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#DAE2EA52',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    listItemDetails: {
        flexDirection: 'row',
    }
});

export default styles;