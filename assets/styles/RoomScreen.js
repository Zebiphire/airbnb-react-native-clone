import { StyleSheet } from "react-native";
import Colors from "./Colors";

const Styles = StyleSheet.create({
  activityIndicator: {
    paddingTop: 20,
  },
  scrollView: {
    backgroundColor: Colors.backgroundColor,
  },
  description: {
    marginHorizontal: 10,
    lineHeight: 20,
    marginBottom: 10,
    textAlign: "justify",
  },
  mapView: {
    height: 400,
    width: "100%",
  },
});

export default Styles;
