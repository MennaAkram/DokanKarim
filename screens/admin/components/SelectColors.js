import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import ComponentTitle from "../../../components/componentTitle";
import Colors from "../../../costants/Colors";
import Input from "./Input";

const SelectColors = ({colors: initialColors}) => {
  const [colors, setColors] = useState(initialColors);
  const [selectedColors, setSelectedColors] = useState([]);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [newColor, setNewColor] = useState('');

  useEffect(() => {
    setColors(initialColors);
  }, [initialColors]);

  const handlePress = (color) => {
    if (color === '+') {
      setShowColorPicker(true);
    } else if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleAddColor = () => {
    if (newColor) {
      setColors([...colors.slice(0, -1), newColor, colors[colors.length - 1]]);
      setSelectedColors([...selectedColors, newColor]);
      setNewColor('');
    }
  };

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
              item === '+' ? { borderColor: Colors.primary, borderWidth: 1 } : { backgroundColor: item },
              selectedColors.includes(item) && styles.selectedItem
            ]}
            onPress={() => handlePress(item)}
          >
          {item === '+' ? <Text style={{color: Colors.primary}}>+</Text> : (selectedColors.includes(item) && <View style={styles.selectedColor}></View>)}
          </TouchableOpacity>
        )}
      />
      {showColorPicker && (
      <View style={{flexDirection: "row"}}>
        <Input
        image={require("../../../assets/icons/Bank.png")}
        placeholderTextColor="Enter New Size"
        value={newColor}
        onChangeText={setNewColor}
        // style={styles.input}
      />
          <Pressable onPress={handleAddColor}>
            <Text >Add Size</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export default SelectColors;

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
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
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
