import { StyleSheet } from "react-native";
import Colors from "../styles/Colors";

const Styles = StyleSheet.create({
  // TouchableOpacity
  touchableOpacity: {
    height: 300,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  separator: {
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 1,
  },
  // ImageBackground
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
  },
  // Price
  priceView: {
    width: 100,
    height: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  priceText: { color: "white", fontSize: 20 },
  // informations
  infos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  informationsView: {
    height: 80,
    flex: 1,
    paddingRight: 10,
    justifyContent: "space-around",
  },
  title: { fontSize: 20 },
  starsView: {
    flexDirection: "row",
    alignItems: "center",
  },
  reviewText: {
    color: Colors.mediumGrey,
  },
  imageView: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  profilPhoto: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
});

export default Styles;
