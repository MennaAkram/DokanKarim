import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import Colors from "../../../costants/Colors";
import { ErrorBoundary } from "expo-router";

const windowWidth = Dimensions.get("window").width;

const MarketCard = ({marketName, images}) => {
  return (
    <View style={styles.container}>
          {images.map((image, index) => {
            console.log("URI: ", image);
            // fix image issue
            return(
            <Image key={index} source={require("../../../assets/images/MarketCard.png")} style={styles.image} />
          )
          })}
      <Text style={styles.text}>{marketName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.onPrimary,
    borderRadius: 12,
    width: windowWidth -32,
    margin: 16,
},
image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: windowWidth - 32,
  },
  text: {
    fontSize: 16,
    color: Colors.blueText,
    margin: 12,
  },
});
export default MarketCard;
