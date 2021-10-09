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
    },
    mainContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
    
      card: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingVertical: 17,
        paddingHorizontal: 17,
        borderWidth: 1,
        borderColor: 'rgba(147, 147, 147, .3)',
        borderStyle: 'solid',
        // flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
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
        fontSize: 14,
        // backgroundColor: "#0A84FF",
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
    },
    searchInput: {
        borderColor: '#cccccc',
        backgroundColor: 'rgb(211, 218, 226)',
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontFamily: 'gilroy-medium',
        borderRadius: 6
    }
});

export default styles;