import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContent: {
        marginBottom: 20,
      },
      header: {
        fontSize: 20,
        width: 150,
        marginTop: 5,
        marginLeft: 30,
        fontFamily: "open-sans-bold",
        color: '#ffffff'
      },
      header1: {
        fontSize: 20,
        width: 150,
        // marginTop: 5,
        marginBottom: 10,
        // marginLeft: 5,
        fontFamily: "open-sans-bold",
        color: 'rgb(66, 65, 65)'
      },
      subHeader: {
        fontSize: 14,
        fontFamily: "open-sans",
      },
    
      backHeader: {
        fontSize: 14,
        fontFamily: "open-sans",
        marginRight: 10
      },
      bar: {
        backgroundColor: 'rgb(66, 65, 65)',
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
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        height: '100%',
        paddingVertical: 90,
        paddingHorizontal: 20,
    },
    wrapper: {
        backgroundColor: '#E5E5E5',
        height: '100%',
    },
    baseText: {
        fontFamily: 'open-sans',
        color: '#1D1D1D6B'
    },
    baseHeaderText: {
        fontFamily: 'open-sans-bold',
        color: '#1D1D1D'
    },
    fadedText: {
        color: '#0000006B',
        fontFamily: 'open-sans',
    },
    header: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        marginBottom: 20,
    },
    subHeader: {
        fontSize: 14,
    },
    listItem: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#DAE2EA52',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    listItemDetails: {
        flexDirection: 'row',
    }
});

export default styles;