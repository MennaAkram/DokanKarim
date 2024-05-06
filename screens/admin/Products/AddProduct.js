import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import Button from "../../../components/Button";
import Input from "../components/Input";
import Picker from "../components/ImagePicker";
import Colors from "../../../costants/Colors";
import ComponentTitle from "../../../components/componentTitle";
import SelectSizes from "../components/SelectSizes";
import SelectColors from "../components/SelectColors";

const AddProduct = ({ id }) => {
  const [productName, setProductName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [count, setCount] = React.useState("");
  const [selectedImages, setSelectedImages] = React.useState([]);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "+"]
  const colors = [ Colors.primary, Colors.blueText, Colors.border, Colors.red,
        Colors.greyText, Colors.yellow, "#f0f0f0", "#000000", "#ff0000", "+"]
  const navigation = useNavigation();
  navigation.setOptions({
    title: "Add Product",
  });

  const handleAddProduct = (productId) => {
    navigation.navigate("Products", { productId, productName, selectedImages });
  };

  return (
    <View style={styles.container}>
      <Input
        image={require("../../../assets/icons/Bank.png")}
        placeholderTextColor="Product Name"
        value={productName}
        onChangeText={setProductName}
        style={styles.input}
      />
      <View style={{flexDirection: 'row', width: windowWidth, marginTop: 16}}>
      <Input
        image={require("../../../assets/icons/Bank.png")}
        placeholderTextColor="Price"
        value={price}
        onChangeText={setPrice}
        style={styles.semiInput}
      />
      <Input
        image={require("../../../assets/icons/Bank.png")}
        placeholderTextColor="Count"
        value={count}
        onChangeText={setCount}
        style={styles.semiInput}
      />
      </View>
      <SelectSizes sizes={sizes}/>
      <SelectColors colors={colors}/>
      <ComponentTitle title="Product Images"/>
      <Picker onImagesSelected={setSelectedImages}/>
      <View style={styles.Button}>
        <Button text="Save" onPress={() => handleAddProduct(id)} />
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

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
  input: {
    alignItems: 'center',
    marginHorizontal: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    height: 48,
    borderColor: Colors.border,
},
semiInput: {
    width: windowWidth / 2 - 24,
    alignItems: 'center',
    marginStart: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    height: 48,
    borderColor: Colors.border,
},
});

export default AddProduct;
