import { View, Text, Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../costants/Colors";

const screenWidth = Dimensions.get("window").width;

const CardItem = ({text, name, date}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/group.png")}
        style={styles.image}
      />
      <View style={styles.numbersContainer}>
        <Text style={styles.numbers}>{text}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.image}>
          <Text style={styles.text}>Card Holder</Text>
          <Text style={styles.subText}>{name}</Text>
        </View>
        <View style={styles.image}>
          <Text style={styles.text}>CARD SAVE</Text>
          <Text style={styles.subText}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth - 32,
    height: screenWidth * (9.0 / 16.0) - 32,
    margin: 16,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  image: {
    margin: 24,
  },
  numbersContainer: {
    marginHorizontal: 24,
    marginVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  numbers: {
    width: screenWidth - 64,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.onPrimary,
  },
  infoContainer: {
    flexDirection: "row",
  },
  text: {
    fontSize: 10,
    fontWeight: "normal",
    color: Colors.onPrimary,
    marginBottom: 4,
  },
  subText: {
    fontSize: 10,
    fontWeight: "bold",
    color: Colors.onPrimary,
  },
});

export default CardItem;
