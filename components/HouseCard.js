import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import HouseCardStyles from "../assets/styles/HouseCard.js";
import Stars from "./Stars";

const HouseCard = ({
  id,
  title,
  price,
  numberStar,
  numberReview,
  backgroundImage,
  profilPhoto,
  navigation,
  isClickable,
}) => {
  return (
    <TouchableOpacity
      style={HouseCardStyles.touchableOpacity}
      activeOpacity={0.7}
      onPress={() => {
        {
          isClickable ? navigation.navigate("Room", { id: id }) : null;
        }
      }}
    >
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={HouseCardStyles.imageBackground}
      >
        <View style={HouseCardStyles.priceView}>
          <Text style={HouseCardStyles.priceText}>{price} €</Text>
        </View>
      </ImageBackground>
      <View style={HouseCardStyles.infos}>
        <View style={HouseCardStyles.informationsView}>
          <Text style={HouseCardStyles.title} numberOfLines={1}>
            {title}
          </Text>
          <View style={HouseCardStyles.starsView}>
            <Stars number={numberStar} />
            <Text style={HouseCardStyles.reviewText}>
              {numberReview} reviews
            </Text>
          </View>
        </View>
        <View style={HouseCardStyles.imageView}>
          <Image
            source={{
              uri: profilPhoto,
            }}
            style={HouseCardStyles.profilPhoto}
          />
        </View>
      </View>
      <View style={HouseCardStyles.separator} />
    </TouchableOpacity>
  );
};
export default HouseCard;
