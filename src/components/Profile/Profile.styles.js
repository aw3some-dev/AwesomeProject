import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    baseText: {
        color: '#ffffff',
        fontFamily: 'gilroy-light',
    },
    header: {
        fontFamily: 'gilroy-extra-bold',
        fontSize: 16,
    },
    subHeader: {
        fontSize: 14,
    },
    profileWrapper: {
        // borderWidth: 1,
        // borderColor: 'black',
        // height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'gilroy-light',
    },
    navBar: {
        position: 'absolute',
        bottom: 0,
        height: 60,
        width: '100%',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'space-around'
    },
});

export default styles;