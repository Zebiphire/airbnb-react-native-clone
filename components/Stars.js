import { FontAwesome } from "@expo/vector-icons";
import Colors from "../assets/styles/Colors";

const Stars = ({ number }) => {
  let starTab = [];
  for (let i = 1; i <= 5; i++) {
    if (number < i) {
      starTab.push(
        <FontAwesome
          name="star"
          size={20}
          color={Colors.mediumGrey}
          style={{ marginRight: 4 }}
          key={i}
        />
      );
    } else {
      starTab.push(
        <FontAwesome
          name="star"
          size={20}
          color={Colors.yellow}
          style={{ marginRight: 4 }}
          key={i}
        />
      );
    }
  }
  return starTab;
};
export default Stars;
