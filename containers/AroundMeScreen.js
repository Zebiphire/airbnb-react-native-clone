import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  View,
  Text,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import Colors from "../assets/styles/Colors";
import AroundMeStyles from "../assets/styles/AroundMeScreen";

const AroundMeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  //   const [latitude, setLatitude] = useState();
  //   const [longitude, setLongitude] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status === "granted") {
          const location = await Location.getCurrentPositionAsync();
          //   setLatitude(location.coords.latitude);
          //   setLongitude(location.coords.longitude);

          const response = await axios.get(
            "https://express-airbnb-api.herokuapp.com/rooms/around"
          );
          setData(response.data);
          setIsLoading(false);
        } else {
          alert("Permission refusée");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <ActivityIndicator
      color={Colors.pink}
      size="large"
      style={AroundMeStyles.activityIndicator}
    />
  ) : (
    <MapView
      style={AroundMeStyles.mapView}
      initialRegion={{
        latitude: 48.8692455,
        longitude: 2.3590142,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
      showsUserLocation={true}
    >
      {data.map((item, index) => {
        return (
          <MapView.Marker
            key={index}
            coordinate={{
              latitude: item.location[1],
              longitude: item.location[0],
            }}
          >
            <MapView.Callout
              tooltip
              style={AroundMeStyles.callout}
              onPress={() => {
                navigation.navigate("Room", { id: item._id });
              }}
            >
              <TouchableHighlight>
                <View style={AroundMeStyles.textView}>
                  <Text style={AroundMeStyles.title}>{item.title} </Text>
                  <Text style={AroundMeStyles.text}>{item.description}</Text>
                </View>
              </TouchableHighlight>
            </MapView.Callout>
          </MapView.Marker>
        );
      })}
    </MapView>
  );
};

export default AroundMeScreen;
