import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000000',
        width: '100%',
        // height: 90,
        // paddingVertical: 45,
        height: 95,
        // marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerContent: {
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        top: 20
    },
    headerIcon: {
        width: '9%',
        alignItems: 'center'
    },
    headerTitleSection: {
        width: '90%',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 17,
        fontFamily: 'montserrat-medium',
        color: '#ffffff'
    },
    testBorder: {
        // borderColor: 'royalblue',
        // borderWidth: 1,
    }
});

export default styles;