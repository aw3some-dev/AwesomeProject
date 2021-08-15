import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContent: {
    marginBottom: 40,
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
  inputContainer: {
    marginBottom: 40
  },
  input: {
    height: 50,
    padding: 10,
    width: '100%',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgb(222, 233, 243)',
    backgroundColor: '#ffffff',
    fontFamily: 'gilroy-regular',
    marginBottom: 15
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A84FF",
    padding: 10,
    borderRadius: 4,
    width: '100%',
    height: 48,
  }
});

export default styles;
