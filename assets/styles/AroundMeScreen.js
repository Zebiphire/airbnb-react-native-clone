import { StyleSheet } from "react-native";
import Colors from "./Colors";

const Styles = StyleSheet.create({
  mapView: {
    width: "100%",
    height: "100%",
  },
  activityIndicator: {
    paddingTop: 20,
  },
  callout: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: Colors.lightPink,
  },
  textView: {
    flexDirection: "column",
  },
  title: { fontWeight: "bold" },
  text: {},
});

export default Styles;
