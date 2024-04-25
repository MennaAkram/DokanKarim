import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../costants/Colors";
import Stars from "react-native-stars";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ProductCard({
  image,
  titleText,
  marketName,
  priceText,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{titleText}</Text>
        <Text style={styles.marketName}>{marketName}</Text>
        <View style={{ alignItems: "flex-start" , marginTop: 4}}>
          <Stars 
          style={{alignItems: "flex-start", marginTop: 4}}
            default={2.5}
            count={5}
            half={true}
            starSize={12}
            fullStar={<Icon name={"star"} style={[styles.starStyle]} />}
            emptyStar={
              <Icon
                name={"star-outline"}
                style={[styles.starStyle, styles.starStyle]}
              />
            }
            halfStar={<Icon name={"star-half"} style={[styles.starStyle]} />}
          />
        </View>
        <Text style={styles.priceText}>{priceText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.border,
    padding: 16,
    margin: 8,
  },
  image: {
    width: "100%",
    borderRadius: 5,
  },
  textContainer: {
    width: 110,
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
  },
  starStyle: {
    color: Colors.yellow,
  },
});
