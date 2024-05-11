import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Dimensions,
  Pressable
} from "react-native";
import React, { useState } from "react";
import ComponentTitle from "../../../components/componentTitle";
import Colors from "../../../costants/Colors";
import Input from "./Input";

const screenWidth = Dimensions.get("window").width;

const SelectSizes = ({ sizes }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newSize, setNewSize] = useState('');

  const handlePress = (size) => {
    if (size === '+') {
      setShowInput(true);
    } else if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const handleAddSize = () => {
    if (newSize.trim() !== '') {
      sizes.splice(sizes.length - 1, 0, newSize); // insert newSize at second to last position
      setSelectedSizes([...selectedSizes, newSize]);
      setNewSize('');
    }
  };

  return (
    <View style={{marginVertical: 16}}>
      <ComponentTitle title="Select Size" style={styles.title} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginHorizontal: 8}}
        data={sizes}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[selectedSizes.includes(item) && styles.selectedItem, {margin: 10}]}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.cardStyle}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
      {showInput && (
      <View style={{flexDirection: "row"}}>
        <Input
        image={require("../../../assets/icons/Bank.png")}
        placeholderTextColor="Enter New Size"
        value={newSize}
        onChangeText={setNewSize}
        style={styles.input}
      />
          <Pressable style={styles.Button} onPress={handleAddSize}>
            <Text style={styles.text}>Add Size</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default SelectSizes;

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  cardStyle: {
    color: Colors.blueText,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 66,
    width: 48,
    textAlign: "center",
    textAlignVertical: "center",
    height: 48,
  },
  selectedItem: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 66,
  },
  input: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    height: 48,
    borderColor: Colors.border,
    width: screenWidth /1.4,
},
Button: {
  backgroundColor: Colors.primary,
  padding: 16,
  marginTop: 16,
  borderRadius: 8,
  alignItems: "center",
  alignSelf: 'center',
},
text: {
  color: "white",
  fontWeight: "bold",
},
});