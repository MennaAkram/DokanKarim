import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import Button from "../../../components/Button";
import Input from "../components/Input";
import Picker from "../components/ImagePicker";
import ComponentTitle from "../../../components/componentTitle";
import { addMarket } from "../../../firebase/markets";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase/firebaseConfig";

const AddMarket = () => {
  const [marketName, setMarketName] = React.useState("");
  const [selectedImages, setSelectedImages] = React.useState();
  const navigation = useNavigation();
  navigation.setOptions({
    title: "Add Market",
  });

  const handleAddMarket = async () => {
    if (!selectedImages || selectedImages.length === 0) {
      alert('Please select an image.');
      return;
    }
    const imageUrls = await Promise.all(
      selectedImages.map(async (imageUri) => {
        const response = await fetch(imageUri);
        const blob = await response.blob();
        const storageRef = ref(storage, `markets/${marketName}/${imageUri.split('/').pop()}`);
        await uploadBytes(storageRef, blob);
        const url = await getDownloadURL(storageRef);
        return url;
      })
    );

    if (imageUrls.includes(undefined)) {
      alert('Failed to upload image.');
      return;
    }
  
    await addMarket(marketName, imageUrls);
    navigation.navigate("Markets");
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        image={require("../../../assets/icons/Bank.png")}
        placeholderTextColor="Market Name"
        value={marketName}
        onChangeText={setMarketName}
      />
    <View style={styles.imagePicker}>
      <ComponentTitle title="Market Images"/>
      <Picker onImagesSelected={setSelectedImages} allowsMultipleSelection={false}/>
      </View>
      <View style={styles.Button}>
        <Button text="Save" onPress={() => handleAddMarket()} />
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
  input: {
    alignItems: "center",
    flexDirection: "row",
    width: windowWidth - 32,
    height: 48,
},
  Button: {
    margin: 16,
    position: "absolute",
    bottom: 0,
  },
   imagePicker: {
    marginTop: 16,
  },
});

export default AddMarket;
