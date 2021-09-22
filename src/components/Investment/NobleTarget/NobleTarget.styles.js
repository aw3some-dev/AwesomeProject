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
    fontSize: 16,
    fontFamily: 'gilroy-regular',
    // color: '#1D1D1D6B',
    color: 'slategray',
    textAlign: 'center',
    marginTop: 20
  },

  imageContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  successImage: {
    height: 80,
  },

  card: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'rgba(147, 147, 147, .3)',
    borderStyle: 'solid',
    // flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },

  mainContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  sideContent: {

  },
  cardIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#ccc',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  cardContent: {
    // width: 180,
    // flex: 1,
    // backgroundColor: 'royalblue'
  },
  cardHeader: {
    fontSize:15,
    // fontWeight: '700',
    fontFamily: 'gilroy-medium',
  },
  cardSubHeader: {
    fontSize: 12,
    // fontWeight: '400',
    fontFamily: 'gilroy-light',
  },


  


})

export default styles;