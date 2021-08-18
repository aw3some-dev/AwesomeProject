import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContent: {
        marginBottom: 30,
      },
      header: {
        fontSize: 20,
        fontFamily: 'montserrat-semi-bold',
        color: '#000000'
      },
      subHeader: {
        fontSize: 14,
        fontFamily: 'gilroy-light',
      },

    backHeader: {
        fontSize: 14,
        fontFamily: "gilroy-light",
        color: "gray",
        marginRight: 10
      },

    inputField: {
        marginBottom: 30,
    },
   
    inputText: {
        height: 60,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderStyle: 'solid',
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        fontFamily: 'gilroy-light',
    },

    button: {
        justifyContent: 'center',
        backgroundColor: '#0A84FF',
        padding: 10,
        borderRadius: 4,
        width: '100%',
        height: 48
      },

      card1: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingTop: 10,
        height: 60,
        paddingLeft: 20,
        // paddingBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(147, 147, 147, .3)',
        borderStyle: 'solid',
        // flex: .1,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        marginBottom: 30,
        // flexDirection: 'row'
    },
      card2: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingTop: 10,
        height: 60,
        width: 90,
        paddingLeft: 20,
        marginRight: 10,
        // paddingBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(147, 147, 147, .3)',
        borderStyle: 'solid',
        // flex: .1,
        justifyContent: 'space-between',
        // alignItems: 'center',
        marginBottom: 30,
        // flexDirection: 'row'
    },
      card3: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingTop: 10,
        height: 60,
        width:290,
        paddingLeft: 20,
        // paddingBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(147, 147, 147, .3)',
        borderStyle: 'solid',
        // flex: .1,
        // justifyContent: 'space-between',
        // alignItems: 'center',
        marginBottom: 30,
        // flexDirection: 'row'
    },
    
});

export default styles;