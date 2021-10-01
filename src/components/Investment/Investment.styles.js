import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';

const styles = StyleSheet.create({
  wrapper: {},
  baseText: {
    color: '#ffffff',
    fontFamily: 'gilroy-light'
  },
  fadedText: {
    color: '#ffffff52',
    fontFamily: 'gilroy-regular'
  },
  profileWrapper: {
    // borderWidth: 1,
    // borderColor: 'black',
    // height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'gilroy-light'
  },
  balanceView: {
    marginBottom: 40
  },
  profileFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00255A',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8
  },
  walletLink: {
    padding: 10,
    backgroundColor: '#043171',
    borderRadius: 4
  },
  dashboardContent: {
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 300,
    width: '100%',
    position: 'relative',
    top: -20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  dashboardItem: {
    width: '45%',
    backgroundColor: '#ffffff',
    height: 150,
    padding: 15,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    shadowColor: '#00000014'
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  contentTitle: {
    fontFamily: 'gilroy-medium',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10
  },
  contentBody: {
    fontFamily: 'gilroy-medium',
    fontSize: 10,
    textAlign: 'center'
  },
  cardContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'relative',
    zIndex: -999
  },
  cardRow: {
    marginBottom: 15
  },
  cardIcon: {
    width: 42,
    height: 42,
    backgroundColor: '#0000001A',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  cardIconText: {
    fontFamily: 'montserrat-semi-bold',
    color: Colors.primary,
    fontSize: 16,
    lineHeight: 20
  },
  progressBar: {
    backgroundColor: Colors.primary,
    borderRadius: 8,
    height: 10,
    width: '100%'
  },

  modalBody: {
    backgroundColor: '#00000080',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    height: 300,
    width: '100%',
    backgroundColor: 'transparent',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center'
  },
  modalButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
    width: '56%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: 'gilroy-medium',
    fontSize: 14,
    color: '#043171'
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    width: 50,
    height: 50,
    backgroundColor: '#043171',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
    // zIndex: 9999
  },
  tabsContainer: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  tab: {
    // width: 100,
    paddingVertical: 4,
    marginRight: 19
  },
  tabTitle: {
    fontFamily: 'gilroy-medium',
    color: 'rgba(0, 0, 0, 0.42)',
    textAlign: 'center'
  },
  activeTab: {
    width: 100,
    paddingVertical: 4,
    borderBottomWidth: 5,
    borderBottomColor: '#043171',
    paddingVertical: 4,
    marginRight: 19
  },
  dashboardContent1: {
    position: 'relative',
    padding: 15,
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },

  dashboardContent: {
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 300,
    width: '100%',
    position: 'relative',
    top: -20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  dashboardGrid: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  dashboardItem: {
    width: '100%',
    backgroundColor: '#ffffff',
    // height: 80,
    padding: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 4,
    shadowColor: '#00000014'
  }
});

export default styles;

// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//     wrapper: {

//     },
//     baseText: {
//         color: '#ffffff',
//         fontFamily: 'gilroy-light',
//     },
//     fadedText: {
//         color: '#ffffff52',
//         fontFamily: 'gilroy-light',
//     },
//     header: {
//         fontSize: 16,
//         fontFamily: 'gilroy-extra-bold',
//     },
//     subHeader: {
//         fontSize: 14,
//     },
//     profileWrapper: {
//         // borderWidth: 1,
//         // borderColor: 'black',
//         // height: 50,
//         width: '100%',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 40
//     },
//     profile: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     profileText: {
//         color: 'white',
//         fontSize: 12,
//         fontFamily: 'gilroy-light',
//     },
//     balanceView: {
//         marginBottom: 40
//     },
//     profileFooter: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#00255A',
//         padding: 10,
//         borderRadius: 8
//     },
//     walletLink: {
//         padding: 10,
//         backgroundColor: '#043171',
//         borderRadius: 4
//     },
//     dashboardHeader: {
//         fontFamily: 'gilroy-light',
//         marginBottom: 20
//     },
//     dashboardContent1:{
//         position: 'relative',
//         top: -20,
//         padding: 15,
//         backgroundColor: '#F6F6F6',
//         borderTopLeftRadius: 16,
//         borderTopRightRadius: 16,
//     },

//     dashboardContent: {
//         backgroundColor: '#F6F6F6',
//         borderTopLeftRadius: 16,
//         borderTopRightRadius: 16,
//         height: 300,
//         width: '100%',
//         position: 'relative',
//         top: -20,
//         padding: 15,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap',
//     },
//     dashboardGrid: {
//         width: '100%',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap'
//     },
//     dashboardItem: {
//         width: '100%',
//         backgroundColor: '#ffffff',
//         // height: 80,
//         padding: 20,
//         marginBottom: 20,
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         borderRadius: 4,
//         shadowColor: '#00000014'
//     },
//     contentTitle: {
//         fontFamily: 'gilroy-extra-bold',
//         fontSize: 14
//     },

//     contentBody: {
//         fontFamily: 'gilroy-light',
//         fontSize: 12
//     },
//     navBar: {
//         position: 'absolute',
//         bottom: 0,
//         height: 60,
//         width: '100%',
//         backgroundColor: '#ffffff',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-around'
//     },
//     navItem: {
//         alignItems: 'center',
//         justifyContent: 'space-around'
//     },
//     eye:{
//         width: 20,
//         height: 18
//     }
// });

// export default styles;
