import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useCallback } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import Button from "../../../components/Button";
import Input from "../components/Input";
import ComponentTitle from "../../../components/componentTitle";
import Colors from "../../../costants/Colors";
import { addCategory } from "../../../firebase/markets";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const AddCategory = () => {
  const icons = [
   "../../../assets/images/dress.png",
   "../../../assets/icons/Bank.png",
   "../../../assets/icons/CreditCard.png",
   "../../../assets/icons/Search.png",
   "../../../assets/images/manbag.png",
   "../../../assets/images/shirt.png",
  ];
  const [categoryName, setCategoryName] = React.useState("");
  const [selectedIcon, setSelectedIcon] = React.useState(null);
  const { marketId } = useLocalSearchParams();
  const navigation = useNavigation();
  navigation.setOptions({
    title: "Add Category",
  });

  const handleAddCategory = () => {
    addCategory(marketId, categoryName, selectedIcon);
    console.log("Category Added");
    navigation.navigate("Categories", { marketId });
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        image={require("../../../assets/icons/Bank.png")}
        placeholderTextColor="Category Name"
        value={categoryName}
        onChangeText={setCategoryName}
      />
      <View style={{ marginTop: 16 }}>
        <ComponentTitle title="Add Category Image" />
        <ScrollView style={{ marginBottom: 130 }}>
          <View style={styles.imageContainer}>
            {icons.map((item, index) => (
              <Pressable
              key={index}
                style={
                  item === selectedIcon && selectedIcon
                    ? styles.selectedImage
                    : styles.Image
                }
                onPress={() => setSelectedIcon(item)}
              >
                <Image source={{uri:item}}/>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.Button}>
        <Button text="Save" onPress={handleAddCategory} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    height: windowHeight - 80,
  },
  Button: {
    margin: 16,
    position: "absolute",
    bottom: 0,
  },
  Image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  selectedImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {
    alignItems: "center",
    flexDirection: "row",
    width: windowWidth - 32,
    height: 48,
  },
});

export default AddCategory;
