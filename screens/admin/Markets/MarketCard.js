import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import Colors from "../../../costants/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MarketCard = ({ marketName, images }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: images }} style={styles.image} />
      <Text style={styles.text}>{marketName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.onPrimary,
    borderRadius: 12,
    width: windowWidth - 32,
    margin: 16,
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: windowWidth - 32,
    height: windowHeight / 4.7,
  },
  text: {
    fontSize: 16,
    color: Colors.blueText,
    margin: 12,
  },
});
export default MarketCard;
