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
        fontFamily: 'gilroy-light',
    },
    header: {
        fontSize: 16,
        fontFamily: 'gilroy-extra-bold',
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
        fontFamily: 'gilroy-light',
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
        fontFamily: 'gilroy-extra-bold',
        fontSize: 14
    },

    contentBody: {
        fontFamily: 'gilroy-light',
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
    },
    eye:{
        width: 20,
        height: 18
    }
});

export default styles;