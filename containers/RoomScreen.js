import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import Colors from "../assets/styles/Colors";
import RoomScreenStyles from "../assets/styles/RoomScreen";
import HouseCard from "../components/HouseCard";
import MapView from "react-native-maps";

function RoomScreen({ route }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [displayAllText, setDisplayAllText] = useState(false);
  const isClickable = false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://express-airbnb-api.herokuapp.com/rooms/${route.params.id}`
        );
        console.log("response.data =", response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        alert(error.response.data.error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator
      color={Colors.pink}
      size="large"
      style={RoomScreenStyles.activityIndicator}
    />
  ) : (
    <ScrollView style={RoomScreenStyles.scrollView}>
      <HouseCard
        title={data.title}
        price={data.price}
        numberStar={data.ratingValue}
        numberReview={data.reviews}
        backgroundImage={data.photos[0].url}
        profilPhoto={data.user.account.photo.url}
        isClickable={isClickable}
      />
      <TouchableOpacity
        style={RoomScreenStyles.description}
        onPress={() => {
          setDisplayAllText(!displayAllText);
        }}
      >
        <Text
          numberOfLines={displayAllText === false ? 3 : null}
          style={RoomScreenStyles.description}
        >
          {data.description}
        </Text>
        <MapView
          style={RoomScreenStyles.mapView}
          initialRegion={{
            latitude: data.location[1],
            longitude: data.location[0],
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: data.location[1],
              longitude: data.location[0],
            }}
            title={data.title}
          />
        </MapView>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default RoomScreen;
