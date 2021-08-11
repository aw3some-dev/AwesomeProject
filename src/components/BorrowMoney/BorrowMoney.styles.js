import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContent: {
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    width: 150,
    marginTop: 35,
    marginLeft: 40,
    fontFamily: "open-sans-bold",
    color: '#ffffff'
  },
  subHeader: {
    fontSize: 14,
    fontFamily: "open-sans",
  },

  backHeader: {
    fontSize: 14,
    fontFamily: "open-sans",
    marginRight: 10
  },

  card: {
    backgroundColor: "#ffffff",
    height: 250,
    width: "100%",
    borderRadius: 8,
    textAlign: 'center',
    // justifyContent: 'center'
  },
  cardIcon1: {
    width: 30,
    height: 30,
    backgroundColor: "#ccc",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 45,
    marginRight: 20,
    marginTop: 20
  },

  cardIcon2: {
    width: 30,
    height: 30,
    backgroundColor: "#ccc",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 20,
    marginTop: 20
  },

  cardIcon3: {
    width: 90,
    height: 35,
    backgroundColor: "#ccc",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 4,
    marginTop: 20
  },

  cardIcon4: {
    width: 90,
    height: 35,
    backgroundColor: "#ccc",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: 40,
    marginRight: 5,
    marginTop: 20
  },

  cardIcon5: {
    width: 90,
    height: 35,
    backgroundColor: "#ccc",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: 40,
    // marginRight: 10,
    marginTop: 20
  },
  cardContent: {
    width: 180,
    // flex: 1,
    // backgroundColor: 'royalblue'
  },
  cardHeader: {
    fontSize: 15,
    // fontWeight: '700',
    fontFamily: "open-sans-bold",
  },
  cardSubHeader: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "open-sans",
  },

  vector:{
    justifyContent: "center",
    alignItems: "center",
    height: 12,
    width: 20,
    marginRight: 20
    
  },

  bar: {
    backgroundColor: 'black',
    width: '100%',
    height: 90,
    // padding: 60,
    paddingTop: 10,
    marginBottom: 20,
    flexDirection: "row"
},

});

export default styles;
