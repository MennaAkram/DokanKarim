import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ComponentTitle from "../../../components/componentTitle";
import Colors from "../../../costants/Colors";
import { useState } from "react";

const SelectSize = ({sizes}) => {
  const [selectedSize, setSelectedSize] = useState(null);
 
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
          style={[item === selectedSize && styles.selectedItem, {margin: 10}]}
        onPress={() => setSelectedSize(item)}
          >
            <Text
              style={styles.cardStyle}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SelectSize;

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
});
