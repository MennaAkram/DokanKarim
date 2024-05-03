import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../../costants/Colors";

export default function PaymentMethodItem({ text, icon, onPress }) {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", width: "100%", padding: 16, alignItems: "center"}}
      onPress={onPress} >
      <Image source={icon} style={{ width: 24, height: 24, marginEnd: 16 }} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

//  PaymentMethodItem
