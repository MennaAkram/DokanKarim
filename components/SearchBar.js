import React from "react";
//import {  } from "../../../constants/";
import { Image, TextInput, View, StyleSheet, Pressable } from "react-native";

export default function SearchBar({ isFilter, onPress, text, onChangeText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.SearchBar}
        placeholder="Search"
        value={text}
        onChangeText={onChangeText}
      />

      <Pressable onPress={onPress}>
        <Image
          source={
            isFilter
              ? require("../assets/icons/FilledLove.png")
              : require("../assets/icons/love.png")
          }
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  SearchBar: {
    paddingLeft: "3%",

    backgroundColor: "#ffff",
    width: "90%",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 15,
    height: 46,
    borderColor: "gray",
  },
  image: {
    width: 16,
    height: 16,
    padding: 10,
    margin: 10,
  },
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    borderBlockColor: "blue",
    paddingLeft: 20,
    margin: 15,
    borderColor: "#009688",
    backgroundColor: "white",
    borderRadius: 10,
  },
});
