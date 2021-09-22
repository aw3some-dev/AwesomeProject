import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContent: {
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontFamily: 'montserrat-semi-bold',
    color: '#000000',
    marginBottom: 10
  },
  subHeader: {
    fontSize: 14,
    fontFamily: 'gilroy-light',
  },

  wrapper: {
    backgroundColor: '#E5E5E5',
    height: '100%',
  },
  baseText: {
    fontSize: 12,
    fontFamily: 'montserrat-medium',
    color: '#1D1D1D6B',
    marginBottom: 4
  },
  baseHeaderText: {
    fontSize: 14,
    fontFamily: 'montserrat-medium',
    color: '#1D1D1D',
    marginBottom: 4
  },
  fadedText: {
    color: '#0000006B',
    fontFamily: 'gilroy-light',
  },

  listItem: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    backgroundColor: '#DAE2EA52',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  listItemDetails: {
    flexDirection: 'row',
  }
});

export default styles;