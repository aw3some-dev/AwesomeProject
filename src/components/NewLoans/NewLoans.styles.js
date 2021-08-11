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
