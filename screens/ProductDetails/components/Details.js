import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../../costants/Colors";
import { SliderBox } from "react-native-image-slider-box";
import ReviewStars from "../../../components/ReviewStars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const images = [
  require("../../../assets/images/Promotion.png"),
  require("../../../assets/images/Slider.png"),
  require("../../../assets/images/Promotion.png"),
  require("../../../assets/images/Slider.png"),
];

const Details = () => {
  const [isFavorite, setIsFavorite] = React.useState(false);
    const handleFavorite = () => {
      setIsFavorite(!isFavorite);
    };

  return (
    <View>
      <SliderBox
        images={images}
        autoplay
        circleLoop
        dotColor={Colors.primary}
        inactiveDotColor={Colors.border}
        dotStyle={{ width: 8, height: 8 }}
        ImageLoadingColor={Colors.primary}
        ImageComponentStyle={{ marginBottom: 32, height: 300 }}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Nike Air Zoom Pegasus 36 Miami</Text>
        <Icon
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={Colors.red}
          style={{ alignItems: "flex-end" }}
          onPress={handleFavorite}
        />
      </View>
      <View style={{ paddingHorizontal: 16 , paddingVertical: 8}}>
        <ReviewStars />
      </View>
      <Text style={styles.price}>$ 100</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 0,
  },
  image: {
    width: "100%",
    height: 300,
  },
  contentContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "flex-start",
    width: "85%",
  },
  price: {
    fontSize: 18,
    color: Colors.primary,
    marginVertical: 8,
    fontWeight: "bold",
    paddingHorizontal: 16,
  },
});
