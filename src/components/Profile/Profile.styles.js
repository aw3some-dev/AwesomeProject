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
    avatarWrapper: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        height: 90,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatarContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    avatar: {
        height: 60,
        width: 60,
        marginRight: 20
    },
    menuWrapper: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
    profileMenu: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 4
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
        position: 'relative'
    },
    menuIcon: {
        height: 35,
        width: 35,
        marginRight: 20
    },
    menuHeader: {
        fontSize: 14, 
        fontFamily: 'gilroy-medium'
    },
    menuSubHeader: {
        fontSize: 12, 
        fontFamily: 'gilroy-medium',
        color: '#979797',
        // flexWrap: 'wrap',
        // flex: 3
    },
    sideContent: {
        position: 'absolute',
        right: 0,
        top: 10
    },  
    navBar: {
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

    modalBody: {
        backgroundColor: '#00000080',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        position: 'absolute',
        bottom: 0,
        height: 362,
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 40,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    modalButton: {
        paddingVertical: 15,
        borderRadius: 4,
        marginBottom: 10,
        width: '100%'
    },
    primaryBtn: {
        backgroundColor: 'rgba(218, 226, 234, 0.5)',
    },
    defaultBtn: {
        borderColor: '#000000',
        borderWidth: 1
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'montserrat-medium',
        fontSize: 14
    },
    roundedBtn: {
        borderRadius: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(218, 226, 234, 0.5)',
        width: 180,
        paddingVertical: 10,
        marginBottom: 30,
        marginHorizontal: 'auto'
    },
    roundedBtnText: {
        fontFamily: 'gilroy-regular',
        fontSize: 12
    }
});

export default styles;