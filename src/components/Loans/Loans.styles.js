import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  profileWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'gilroy-light',
  },
  header: {
    fontFamily: 'gilroy-extra-bold',
    fontSize: 16,
  },
  subHeader: {
    fontSize: 14,
  },
  fadedText: {
    color: '#ffffff52',
    fontFamily: 'gilroy-light',
  },

  baseText: {
    color: '#ffffff',
    fontFamily: 'gilroy-light',
  },
  cardWrapper: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  cardHeader: {
    color: '#777777',
    fontSize: 12,
    fontFamily: 'gilroy-regular',
    marginBottom: 8
  },
  figure: {
    fontFamily: 'gilroy-bold',
    fontSize: 24,
    marginRight: 40
  },
  statTitle: {
    fontFamily: 'gilroy-medium',
    color: '#777777',
    fontSize: 12,
    marginBottom: 3
  },
  statContent: {
    fontFamily: 'gilroy-medium',
    fontSize: 14,
    color: '#000000'
  },

  balanceView: {
    marginBottom: 30,
  },
  profileFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#043171',
    padding: 10,
    borderRadius: 4,
    width: '100%',
    height: 48,
  },
  walletLink: {
    padding: 10,
    backgroundColor: '#043171',
    borderRadius: 4,
  },
  dashboardContent: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 80,
    height: 500
  },
  dashboardItem: {
    width: '48%',
    backgroundColor: '#ffffff',
    height: 150,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    shadowColor: '#00000014',
  },

  contentTitle: {
    fontFamily: 'gilroy-medium',
    fontSize: 12,
  },
  contentBody: {
    fontFamily: 'gilroy-medium',
    fontSize: 10,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

export default styles;
