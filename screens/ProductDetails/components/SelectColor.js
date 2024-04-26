import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import ComponentTitle from "../../../components/componentTitle";
import Colors from "../../../costants/Colors";
import { useState } from "react";


const colors = [
    Colors.primary,
    Colors.blueText,
    Colors.border,
    Colors.red,
    Colors.greyText,
    Colors.yellow,
    "#f0f0f0",
    "#000000",
    "#ff0000",
    ];

const SelectColor = () => {
    const [selectedColor, setSelectedColor] = useState(null);

  return (
    <View style={{marginBottom: 16}}>
      <ComponentTitle title="Select Color" style={styles.title} />
    <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginHorizontal: 8}}
        data={colors}
        renderItem={({ item }) => (
      <TouchableOpacity
        style={[
          styles.cardStyle,
          { backgroundColor: item },
          item === selectedColor && styles.selectedItem
        ]}
        onPress={() => setSelectedColor(item)}
        >
        {item === selectedColor && <View style={styles.selectedColor}></View>}
        </TouchableOpacity>
        )}
        />
    </View>
  );
}

export default SelectColor;

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  cardStyle: {
    borderRadius: 66,
    margin: 10,
    width: 48,
    textAlign: "center",
    textAlignVertical: "center",
    height: 48,
  },
  selectedColor: {
    backgroundColor: Colors.onPrimary,
    alignSelf: 'center',
    width: 15,
    height: 15,
    borderRadius: 20,
    margin: 16,
  },
});
