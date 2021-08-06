import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        
    },
    baseText: {
        color: '#ffffff',
        fontFamily: 'open-sans',
    },
    fadedText: {
        color: '#ffffff52',
        fontFamily: 'open-sans',
    },
    header: {
        fontFamily: 'open-sans-bold',
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
        fontFamily: 'open-sans',
    },
    balanceView: {
        marginBottom: 40
    },
    profileFooter: {
        flexDirection: 'row',
        justifyContent: 'center',
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
        width: '48%',
        backgroundColor: '#ffffff',
        height: 150,
        padding: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        shadowColor: '#00000014'
    },
    contentTitle: {
        fontFamily: 'open-sans',
        fontSize: 13
    },
    contentBody: {
        fontFamily: 'open-sans',
        fontSize: 12
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
    }
});

export default styles;