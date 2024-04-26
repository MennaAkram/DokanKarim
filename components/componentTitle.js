import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../costants/Colors";

export default function ComponentTitle({ title, subTitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.subTitleText}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 16,
  },
  titleText: {
    fontSize: 14,
    color: Colors.blueText,
    fontWeight: "bold",
  },
  subTitleText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "bold",
  },
});
