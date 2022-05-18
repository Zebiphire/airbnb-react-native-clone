import { useNavigation } from "@react-navigation/core";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import LottieView from "lottie-react-native";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Colors from "../assets/styles/Colors";
import HouseCard from "../components/HouseCard";
import HomeScreenStyles from "../assets/styles/HomeScreen";

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const isClickable = true;

  const animation = useRef(null);
  useEffect(() => {}, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://express-airbnb-api.herokuapp.com/rooms"
        );
        console.log("response =", response);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert("No connection to the server");
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Colors.pink} />
      {isLoading ? (
        <View style={(<HomeScreenStyles></HomeScreenStyles>).lottieView}>
          <LottieView
            autoPlay
            ref={animation}
            style={(<HomeScreenStyles></HomeScreenStyles>).loadingHouseLottie}
            source={require("../assets/lotties/house2.json")}
          />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (
              <HouseCard
                id={item._id}
                title={item.title}
                price={item.price}
                numberStar={item.ratingValue}
                numberReview={item.reviews}
                backgroundImage={item.photos[0].url}
                profilPhoto={item.user.account.photo.url}
                navigation={navigation}
                isClickable={isClickable}
              />
            );
          }}
          keyExtractor={(item) => item._id}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
