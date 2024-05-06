import { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FAB } from 'react-native-paper';
import Colors from '../../../costants/Colors';
import ComponentTitle from '../../../components/componentTitle';

export default function Picker({ onImagesSelected }) {
  const [images, setImages] = useState([]);

  const pickImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
      orderedSelection: true,
    });

    if (!result.canceled) {
      setImages([...images, ...result.assets.map(asset => asset.uri)]);
      onImagesSelected([...images, ...result.assets.map(asset => asset.uri)]);
    }
  };

  return (
      <View style={styles.imagesContainer}>
        {images.map((image, index) => {
          console.log("URI: ", image);
          return(
          <Image key={index} source={{ uri: image }} style={styles.image} />
        )
        })}
        <FAB
          icon="plus"
          style={styles.fab}
          color={Colors.greyText}
          onPress={pickImages}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  imagesContainer: {
    marginTop: 4,
    marginStart: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 56,
    height: 56,
    margin: 8,
    borderRadius: 16,
  },
  fab: {
    marginVertical: 8,
    backgroundColor: Colors.onPrimary,
    shadowColor: Colors.onPrimary,
    borderWidth: 1,
    borderColor: Colors.border,
  },
});
