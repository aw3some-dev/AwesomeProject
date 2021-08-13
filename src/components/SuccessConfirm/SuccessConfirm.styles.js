import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    circle: {
        height: 80,
        marginLeft: 149,
        marginTop: 226,
        // backgroundColor: '(180deg, #2DA74C 0%, rgba(45, 167, 76, 0) 100%);',
        // opacity: 0.32,
        borderRadius: 200,
    },

    header: {
        fontSize: 26,
        // width: 150,
        marginTop: 330,
        marginLeft: 90,
        fontFamily: "open-sans-bold",
        color: 'black'
      },

      subHeader: {
        fontSize: 18,
        fontFamily: "open-sans",
        marginLeft: 40,
        marginTop: 10,
      },

    backgroundContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    profileFooter: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0A84FF",
        padding: 10,
        borderRadius: 4,
        width: 300,
        height: 48,
        marginLeft: 50,  
        marginTop: 20,
      },
   

})

export default styles;