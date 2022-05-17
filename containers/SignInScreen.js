import { useNavigation } from "@react-navigation/core";
import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SignIn from "../assets/styles/SignIn.js";
import axios from "axios";

export default function SignInScreen({ setToken }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async () => {
    if (email && password) {
      if (errorMessage !== null) {
        setErrorMessage(null);
      }

      try {
        const response = await axios.post(
          `https://express-airbnb-api.herokuapp.com/user/log_in`,
          {
            email: email,
            password: password,
          }
        );
        if (response.data.token) {
          const token = response.data.token;
          setToken(token);
        } else {
          setErrorMessage("Navigation error");
        }
      } catch (error) {
        console.log("error   ", error);
        if (error.response.status === 401) {
          setErrorMessage("Wrong credentials");
        } else {
          setErrorMessage("Sending error");
        }
      }
    } else {
      setErrorMessage("Please enter all fields");
    }
  };

  return (
    <View style={SignIn.page}>
      <SafeAreaView>
        <KeyboardAwareScrollView>
          <ScrollView style={SignIn.scrollView}>
            <View style={SignIn.viewHeader}>
              <Image
                style={SignIn.logo}
                source={require("../assets/img/logo.png")}
              />
              <Text style={SignIn.title}>Sign in</Text>
            </View>
            <View style={SignIn.inputView}>
              <TextInput
                style={SignIn.input}
                placeholder="Email"
                onChangeText={(text) => {
                  setEmail(text);
                }}
              />
              <TextInput
                style={SignIn.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => {
                  setPassword(text);
                }}
              />
            </View>
            <View style={SignIn.buttonView}>
              <Text style={SignIn.error}>{errorMessage}</Text>
              <TouchableHighlight style={SignIn.button} onPress={handleSubmit}>
                <Text style={SignIn.buttonText}>Sign in</Text>
              </TouchableHighlight>
              <Text
                style={SignIn.alreadyText}
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                No account ? Register
              </Text>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
}
