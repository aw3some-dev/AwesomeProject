import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    headerContent: {
        marginBottom: 20,
    },
    header: {
        fontSize: 20,
        width: 150,
        marginBottom: 10,
        fontFamily: "open-sans-bold",
      },

      baseText1: {
        color: "black",
        fontFamily: "open-sans",
      },

      header1: {
        fontSize: 20,
        width: 150,
        marginTop: 5,
        marginLeft: 30,
        fontFamily: "open-sans-bold",
        color: '#ffffff'
      },

      subHeader: {
        fontSize: 14,
        fontFamily: "open-sans",
      },
    

    input: {
        height: 50,
        // width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'rgb(222, 233, 243);',
        backgroundColor: '#ffffff'
    },

    profileFooter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0A84FF",
        padding: 10,
        borderRadius: 4,
        width: 255,
        height: 48,
        marginLeft: 20,  
        marginTop: 20,
      },

      bar: {
        // backgroundColor: 'rgb(66, 65, 65)',
        backgroundColor: 'black',
        width: '100%',
        height: 90,
        // padding: 60,
        // padding/Top: 10,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: 'center',
        borderRadius: 5
        // justifyContent: "center"
    },

});

export default styles;
