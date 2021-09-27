import { StyleSheet } from "react-native";

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

  backHeader: {
    fontSize: 14,
    fontFamily: "gilroy-light",
    marginRight: 10
  },

  card: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(147, 147, 147, .3)",
    borderStyle: "solid",
    flex: 0.1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    flexDirection: "row",
  },
  cardIcon: {
    width: 30,
    height: 30,
    backgroundColor: "#ccc",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  cardContent: {
    width: 200,
    // flex: 1,
    // backgroundColor: 'royalblue'
  },
  cardHeader: {
    fontSize: 16,
    // fontWeight: '700',
    fontFamily: "gilroy-extra-bold",
  },
  cardSubHeader: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "gilroy-light",
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
