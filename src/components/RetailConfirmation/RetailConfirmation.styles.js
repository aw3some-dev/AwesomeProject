import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContent: {
    marginBottom: 20,
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

  card: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    marginBottom: 10
  },
  cardHeader: {
    color: '#777777',
    fontFamily: 'gilroy-medium',
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom: 9
  },
  figure: {
    fontFamily: 'gilroy-bold',
    fontSize: 24
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
