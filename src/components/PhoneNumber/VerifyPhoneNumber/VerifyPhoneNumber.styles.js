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

  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  codeInputSection: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    height: 50,
    padding: 25,
    borderWidth: 1,
    borderColor: 'rgb(222, 233, 243)',
    borderRadius: 4,
    backgroundColor: '#ffffff'
  },

  body: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "row",
    marginBottom: 40
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A84FF',
    padding: 10,
    borderRadius: 4,
    width: '100%',
    height: 48
  }
});

export default styles;
