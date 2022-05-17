import { StyleSheet } from "react-native";
import Colors from "../styles/Colors";

const Styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.backgroundColor,
    height: "100%",
  },
  scrollView: {
    flex: 1,
  },
  viewHeader: {
    alignContent: "center",
    alignItems: "center",
    margin: 20,
  },
  logo: {
    resizeMode: "contain",
    height: 90,
    width: 90,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 10,
    color: Colors.grey,
  },

  inputView: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
  },

  input: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderBottomColor: Colors.lightPink,
    borderBottomWidth: 2,
    marginBottom: 30,
    fontSize: 16,
  },

  largeInput: {
    borderColor: Colors.lightPink,
    borderWidth: 2,
    marginBottom: 30,
    marginTop: 15,
    fontSize: 16,
    height: 100,
    padding: 10,
    textAlignVertical: "top",
    color: "grey",
  },

  buttonView: {
    marginLeft: 70,
    marginRight: 70,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.pink,
    borderWidth: 3,
    borderRadius: 60,
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },

  buttonText: {
    color: Colors.grey,
    fontWeight: "bold",
    fontSize: 18,
  },

  error: {
    color: Colors.error,
  },

  alreadyText: {
    color: Colors.grey,
    fontSize: 12,
    marginBottom: 20,
  },
});

export default Styles;
