import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../../costants/Colors";
import ReviewStars from "../../../components/ReviewStars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Silder from "../../../components/silder";

const Details = ({title, price, images}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
    const handleFavorite = () => {
      setIsFavorite(!isFavorite);
    };

  return (
    <View>
    <Silder images={images}/>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
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
      <Text style={styles.price}>{price}</Text>
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
