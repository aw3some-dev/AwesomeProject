import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {},
  baseText: {
    color: "#ffffff",
    fontFamily: "open-sans",
  },

  baseText1: {
    color: "black",
    fontFamily: "open-sans",
  },

  fadedText: {
    color: "#ffffff52",
    fontFamily: "open-sans",
  },
  header: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  subHeader: {
    fontSize: 14,
  },
  profileWrapper: {
    // borderWidth: 1,
    // borderColor: 'black',
    // height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileText: {
    color: "white",
    fontSize: 12,
    fontFamily: "open-sans",
  },
  balanceView: {
    marginBottom: 20,
  },
  profileFooter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#043171",
    padding: 10,
    borderRadius: 4,
    width: 295,
    height: 48,
    marginLeft: 20,  
    marginTop: 20
  },
  walletLink: {
    padding: 10,
    backgroundColor: "#043171",
    borderRadius: 4,
  },
  dashboardContent: {
    backgroundColor: "#F6F6F6",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 150,
    width: "100%",
    position: "relative",
    top: -20,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 100
  },
  dashboardItem: {
    width: "48%",
    backgroundColor: "#ffffff",
    height: 150,
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#00000014",
  },

  cardWrapper: {
    alignItems: "center",
  },

  card: {
    backgroundColor: "#ffffff",
    height: 300,
    width: "100%",
    borderRadius: 8,
    textAlign: 'center',
    // justifyContent: 'center'
  },

  contentTitle: {
    fontFamily: "open-sans",
    fontSize: 13,
  },
  contentBody: {
    fontFamily: "open-sans",
    fontSize: 12,
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    height: 60,
    width: "100%",
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "space-around",
  },

  eye: {
    marginTop: 6
    // position: absolute,
    // width: 20,
    // height: 18,
    // left: 229,
    // top: 178,
  }


});

export default styles;
