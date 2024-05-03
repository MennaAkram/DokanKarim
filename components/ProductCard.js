import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from "react-native";
import Colors from "../costants/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ReviewStars from "./ReviewStars";
import { useNavigation } from "expo-router";

export default function ProductCard({
  id,
  image,
  titleText,
  marketName,
  priceText,
  sizes,
  colors,
  reviews,
  images
}) {
  const navigation = useNavigation();
    const [isFavorite, setIsFavorite] = React.useState(false);
    const handleFavorite = () => {
      setIsFavorite(!isFavorite);
    };

    const handleProductPress = (productId) => {
      navigation.navigate('productDetails', { productId, titleText, priceText, sizes, colors, image, reviews, images});
    }
    
    return (
      <Pressable style={styles.container}
    onPress={() => handleProductPress(id)}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{titleText}</Text>
        <Text style={styles.marketName}>{marketName}</Text>
        <ReviewStars/>
      </View>
      <View style={styles.semiContainer}>
        <Text style={styles.priceText}>{priceText}</Text>
        <Icon name={isFavorite ? "heart" : "heart-outline"} size={16} 
        color={Colors.red} onPress={handleFavorite}/>
        </View>
   </Pressable>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  
  container: {
    width: windowWidth / 2.25,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.border,
    padding: 16,
    margin: 8,
  },
  image: {
    width: "100%",
    borderRadius: 5,
    height: windowHeight / 7,
  },
  textContainer: {
    width: windowWidth / 2.8,
    marginTop: 8,
  },
  titleText: {
    fontSize: 12,
    color: Colors.blueText,
    fontWeight: "bold",
  },
  marketName: {
    fontSize: 10,
    color: Colors.blueText,
    fontWeight: "medium",
    marginTop: 4,
  },
  priceText: {
    marginTop: 8,
    fontSize: 12,
    color: Colors.primary,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  starStyle: {
    color: Colors.yellow,
  },
  semiContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
