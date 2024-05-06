import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import Button from "../../../components/Button";
import Input from "../components/Input";
import Picker from "../components/ImagePicker";
import ComponentTitle from "../../../components/componentTitle";
import Colors from "../../../costants/Colors";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const AddCategory = ({ id }) => {
  const icons = [
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/icons/CreditCard.png"),
    require("../../../assets/icons/Search.png"),
    require("../../../assets/images/manbag.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/images/shirt.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/icons/CreditCard.png"),
    require("../../../assets/icons/Search.png"),
    require("../../../assets/images/manbag.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/icons/CreditCard.png"),
    require("../../../assets/icons/Search.png"),
    require("../../../assets/images/manbag.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/icons/CreditCard.png"),
    require("../../../assets/icons/Search.png"),
    require("../../../assets/images/manbag.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/icons/CreditCard.png"),
    require("../../../assets/icons/Search.png"),
    require("../../../assets/images/manbag.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/icons/CreditCard.png"),
    require("../../../assets/icons/Search.png"),
    require("../../../assets/images/manbag.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
    require("../../../assets/icons/CreditCard.png"),
    require("../../../assets/icons/Search.png"),
    require("../../../assets/images/manbag.png"),
    require("../../../assets/images/dress.png"),
    require("../../../assets/icons/Bank.png"),
  ];
  const [categoryName, setCategoryName] = React.useState("");
  const [selectedIcon, setSelectedIcon] = React.useState(null);
  const navigation = useNavigation();
  navigation.setOptions({
    title: "Add Category",
  });

const handleAddCategory= (id) => {
    navigation.navigate("Categories", { id, categoryName, selectedIcon });
  }

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
                style={item === selectedIcon && selectedIcon ? styles.selectedImage :styles.Image}
                onPress={() => setSelectedIcon(item)}>
                <Image source={item} key={index} />
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.Button}>
        <Button text="Save" onPress={() => handleAddCategory(id)} />
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
    alignItems: 'center',
    marginHorizontal: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    height: 48,
    borderColor: Colors.border,
},
});

export default AddCategory;
