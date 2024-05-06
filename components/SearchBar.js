import React from "react";
import { Colors } from "../../../constants/Colors";
import { Image, TextInput, View, StyleSheet } from "react-native-web";

export default function SearchBar() {
  return (
    <View style={StyleSheet.container}>
      <View style={StyleSheet.container}>
        <Image
          source={require("../../../assets/icons/search.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor={Colors.greyText}
          value=""
          onChangeText={() => {}}
        />
      </View>
      <Image source={require("../../../assets/icons/love.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  SearchBar: {
    width: "90%",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    height: 46,
    borderColor: Colors.border,
  },
  image: {
    width: 16,
    height: 16,
    padding: 10,
    margin: 10,
  },
});
