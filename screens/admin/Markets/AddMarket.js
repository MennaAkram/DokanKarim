import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import Button from "../../../components/Button";
import Input from "../components/Input";
import Picker from "../components/ImagePicker";
import ComponentTitle from "../../../components/componentTitle";
import Colors from "../../../costants/Colors";

const AddMarket = ({ id }) => {
  const [marketName, setMarketName] = React.useState("");
  const [selectedImages, setSelectedImages] = React.useState();
  const navigation = useNavigation();
  navigation.setOptions({
    title: "Add Market",
  });

  const handleAddMarket = (marketId) => {
    navigation.navigate("Markets", { marketId, marketName, selectedImages });
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
      <Picker onImagesSelected={setSelectedImages}/>
      </View>
      <View style={styles.Button}>
        <Button text="Save" onPress={() => handleAddMarket(id)} />
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    height: windowHeight - 80,
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
