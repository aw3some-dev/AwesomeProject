import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContent: {
        marginBottom: 40
    },
    header: {
        fontWeight: '700',
        fontSize: 18,
        width: 150,
        marginBottom: 10,
        fontFamily: 'open-sans-bold',
    },
    subHeader: {
        fontSize: 12,
        fontFamily: 'open-sans',
    },
    inputField: {
        marginBottom: 30
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
        fontFamily: 'open-sans',
    },
});

export default styles;