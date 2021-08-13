import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContent: {
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    width: 150,
    marginTop: 5,
    marginLeft: 30,
    fontFamily: "open-sans-bold",
    color: '#ffffff'
  },

  header1: {
    fontSize: 20,
    width: 150,
    // marginTop: 5,
    marginBottom: 10,
    // marginLeft: 5,
    fontFamily: "open-sans-bold",
    color: 'rgb(66, 65, 65)'
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
    height: 430,
    width: "100%",
    borderRadius: 8,
    textAlign: 'center',
    // justifyContent: 'center'
  },

  card1: {
    backgroundColor: "#ffffff",
    height: 50,
    width: "100%",
    borderRadius: 8,
    textAlign: 'center',
    // justifyContent: 'center'
    marginTop: 20
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

  baseText1: {
    color: "black",
    fontFamily: "open-sans",
  },

  cardIcon3: {
    width: 90,
    height: 35,
    backgroundColor: "#0A84FF",
    // backgroundColor: "#ccc",
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
    backgroundColor: 'rgb(66, 65, 65)',
    width: '100%',
    height: 90,
    // padding: 60,
    // padding/Top: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: 'center',
    borderRadius: 5
    // justifyContent: "center"
},

picker:{
  fontSize: 12,
},

profileFooter: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#0A84FF",
  padding: 10,
  borderRadius: 4,
  width: 255,
  height: 48,
  marginLeft: 20,  
  marginTop: 20,
},

input: {
  height: 50,
  // width: '100%',
  margin: 12,
  borderWidth: 1,
  padding: 10,
  borderColor: 'rgb(222, 233, 243);',
  backgroundColor: '#ffffff'
},

});

export default styles;
