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
  // header: {
  //   fontSize: 20,
  //   width: 150,
  //   // marginTop: 5,
  //   marginBottom: 10,
  //   // marginLeft: 5,
  //   fontFamily: 'gilroy-extra-bold',
  //   color: 'rgb(66, 65, 65)'
  // },
  subHeader: {
    fontSize: 14,
    fontFamily: 'gilroy-light',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 20
    // justifyContent: 'center'
  },

  calcWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  calcRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
  },
  calcIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#0000001A',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  figure: {
    fontFamily: 'gilroy-bold',
    fontSize: 24
  },
  // increaseIcon: {
  //   width: 30,
  //   height: 30,
  //   backgroundColor: '#ccc',
  //   borderRadius: 50,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // },
  pillsWrapper: {
    width: '85%', 
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pill: {
    width: 80,
    paddingVertical: 7,
    paddingHorizontal: 5,
    backgroundColor: '#0A84FF',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillText: {
    color: '#ffffff', 
    textAlign: 'center',
    fontFamily: 'gilroy-light',
    fontSize: 12
  },
  cardFooterTitle: {
    fontFamily: 'gilroy-medium',
    fontSize: 12,
    color: '#777777'
    // fontWeight: '700',
  },
  cardFooterBody: {
    fontSize: 14,
    fontFamily: 'gilroy-medium',
    // fontWeight: '400',
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    height: 50,
    width: '100%',
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 15,
    borderColor: 'rgb(222, 233, 243)',
    backgroundColor: '#ffffff',
    fontFamily: 'gilroy-regular'
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#0A84FF',
    padding: 10,
    borderRadius: 4,
    width: '100%',
    height: 48
  },

});

export default styles;
