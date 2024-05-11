import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import Button from "../../../components/Button";
import Input from "../components/Input";
import Picker from "../components/ImagePicker";
import Colors from "../../../costants/Colors";
import ComponentTitle from "../../../components/componentTitle";
import SelectSizes from "../components/SelectSizes";
import SelectColors from "../components/SelectColors";
import { addProduct } from "../../../firebase/markets";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/firebaseConfig";

const AddProduct = () => {
  const [productName, setProductName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [count, setCount] = React.useState("");
  const [selectedImages, setSelectedImages] = React.useState([]);
  const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "+"]
  const colors = [ Colors.primary, Colors.blueText, Colors.border, Colors.red,
        Colors.greyText, Colors.yellow, "#f0f0f0", "#000000", "#ff0000", "+"]
  const { marketId, CategoryId, marketName, CategoryName } = useLocalSearchParams();
  console.log(marketId, CategoryId);
  const navigation = useNavigation();
  navigation.setOptions({
    title: "Add Product",
  });

  const handleAddProduct = async () => {
    if (!selectedImages || selectedImages.length === 0) {
      alert('Please select an image.');
      return;
    }
    const imageUrls = await Promise.all(
      selectedImages.map(async (imageUri) => {
        const response = await fetch(imageUri);
        const blob = await response.blob();
        const storageRef = ref(storage, `products/${productName}/${imageUri.split('/').pop()}`);
        await uploadBytes(storageRef, blob);
        const url = await getDownloadURL(storageRef);
        return url;
      })
    );

    if (imageUrls.includes(undefined)) {
      alert('Failed to upload image.');
      return;
    }
    addProduct(marketId, CategoryId, productName, price, count, sizes, colors, imageUrls);
    navigation.navigate("Products", { marketId, CategoryId, marketName, CategoryName});
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
      <Picker onImagesSelected={setSelectedImages} allowsMultipleSelection={true}/>
      <View style={styles.Button}>
        <Button text="Save" onPress={handleAddProduct} />
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
    flexDirection: 'row',
    width: windowWidth - 32,
    height: 48,
},
semiInput: {
    width: windowWidth / 2.6 - 24,
    alignItems: 'center',
    flexDirection: 'row',
    height: 48,
},
});

export default AddProduct;
