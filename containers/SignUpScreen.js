import {
  SafeAreaView,
  Image,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import SignUp from "../assets/styles/SignUp.js";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { useState } from "react";

export default function SignUpScreen({ setToken }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (email && username && description && password && confirmPassword) {
      if (password === confirmPassword) {
        if (errorMessage !== null) {
          setErrorMessage(null);
        }

        try {
          const response = await axios.post(
            `https://express-airbnb-api.herokuapp.com/user/sign_up`,
            {
              email: email,
              username: username,
              description: description,
              password: password,
            }
          );

          if (response.data.token) {
            const token = response.data.token;
            setToken(token);
            navigation.navigate("Home");
          } else {
            setErrorMessage("Navigation error");
          }
        } catch (error) {
          const errorMessage = error.response.data.error;
          if (
            errorMessage === "This email already has an account." ||
            errorMessage === "This username already has an account."
          ) {
            setErrorMessage(errorMessage);
          } else {
            setErrorMessage("Sending error");
          }
        }
      } else {
        setErrorMessage("Passwords must be the same");
      }
    } else {
      setErrorMessage("Please enter all fields");
    }
  };

  return (
    <SafeAreaView style={SignUp.page}>
      <KeyboardAwareScrollView>
        <ScrollView style={SignUp.scrollView}>
          <View>
            <View style={SignUp.viewHeader}>
              <Image
                style={SignUp.logo}
                source={require("../assets/img/logo.png")}
              />
              <Text style={SignUp.title}>Sign up</Text>
            </View>
            <View style={SignUp.inputView}>
              <TextInput
                style={SignUp.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(text) => {
                  setEmail(text);
                }}
              />
              <TextInput
                style={SignUp.input}
                placeholder="Username"
                onChangeText={(text) => {
                  setUsername(text);
                }}
              />
              <TextInput
                style={SignUp.largeInput}
                t
                placeholder="Describe yourself in a few words..."
                maxLength={250}
                multiline={true}
                numberOfLines={5}
                onChangeText={(text) => {
                  setDescription(text);
                }}
              />
              <TextInput
                style={SignUp.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => {
                  setPassword(text);
                }}
              />

              <TextInput
                style={SignUp.input}
                placeholder="Confirm password"
                secureTextEntry={true}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                }}
              />
            </View>
            <View style={SignUp.buttonView}>
              <Text style={SignUp.error}>{errorMessage}</Text>
              <TouchableHighlight style={SignUp.button} onPress={handleSubmit}>
                <Text style={SignUp.buttonText}>Sign up</Text>
              </TouchableHighlight>
              <Text
                style={SignUp.alreadyText}
                onPress={() => {
                  navigation.navigate("SignIn");
                }}
              >
                Already have an account ? Sign in
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
