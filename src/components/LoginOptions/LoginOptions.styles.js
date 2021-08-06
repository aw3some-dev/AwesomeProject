import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContent: {
        marginBottom: 40
    },
    header: {
        fontSize: 18,
        width: 150,
        marginBottom: 10,
        fontFamily: 'open-sans-bold'
    },
    subHeader: {
        fontSize: 12,
        fontFamily: 'open-sans'
    },
    card: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        paddingTop: 10,
        paddingLeft: 20,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: 'rgba(147, 147, 147, .3)',
        borderStyle: 'solid',
        flex: .1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        flexDirection: 'row'
    },
    cardIcon: {
        width: 30,
        height: 30,
        backgroundColor: '#ccc',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    cardContent: {
        width: 270
        // flex: 1,
        // backgroundColor: 'royalblue'
    },
    cardHeader: {
        fontSize: 14,
        // fontWeight: '700',
        fontFamily: 'open-sans-bold'
    },
    cardSubHeader: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'open-sans'
    }
});

export default styles;