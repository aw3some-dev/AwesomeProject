import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContent: {
    marginBottom: 70
  },
  header: {
    fontSize: 20,
    fontFamily: 'montserrat-semi-bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10
  },
  subHeader: {
    fontSize: 14,
    fontFamily: 'gilroy-regular',
    color: '#1D1D1D6B',
    textAlign: 'center'
  },

  imageContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  successImage: {
    height: 80,
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A84FF',
    padding: 10,
    borderRadius: 4,
    width: '100%',
    height: 48,
    marginBottom: 10
  },

  button1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#033261',
    padding: 10,
    borderRadius: 4,
    borderColor: '#0A84FF',
    width: '100%',
    height: 48,
  },


})

export default styles;