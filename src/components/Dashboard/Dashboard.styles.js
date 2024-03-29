import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        
    },
    baseText: {
        color: '#ffffff',
        fontFamily: 'gilroy-light',
    },
    fadedText: {
        color: '#ffffff52',
        fontFamily: 'gilroy-regular',
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
    balanceView: {
        marginBottom: 40
    },
    profileFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#00255A',
        padding: 10,
        borderRadius: 8
    },
    walletLink: {
        padding: 10,
        backgroundColor: '#043171',
        borderRadius: 4
    },
    dashboardContent: {
        backgroundColor: '#F6F6F6',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        height: 300,
        width: '100%',
        position: 'relative',
        top: -20,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    dashboardItem: {
        width: '45%',
        backgroundColor: '#ffffff',
        height: 150,
        padding: 15,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        shadowColor: '#00000014'
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
    contentTitle: {
        fontFamily: 'gilroy-medium',
        fontSize: 12,
        textAlign: 'center'
    },
    contentBody: {
        fontFamily: 'gilroy-medium',
        fontSize: 10,
        textAlign: 'center'
    }
});

export default styles;