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
        fontSize: 16,
        fontFamily: 'open-sans-bold',
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
    dashboardHeader: {
        fontFamily: 'open-sans',
        marginBottom: 20
    },    
    dashboardContent:{
        position: 'relative',
        top: -20,
        padding: 15,
        backgroundColor: '#F6F6F6',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    dashboardGrid: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    dashboardItem: {
        width: '100%',
        backgroundColor: '#ffffff',
        // height: 80,
        padding: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 4,
        shadowColor: '#00000014'
    },
    contentTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 14
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