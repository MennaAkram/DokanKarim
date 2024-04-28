import { Text, TextInput, Image, View, Pressable, ActivityIndicator,Modal } from "react-native";
import { StyleSheet } from "react-native-web";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, Component } from "react";
import { CountryPicker } from "react-native-country-codes-picker";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";
import * as ImagePicker from "expo-image-picker";

const signup = () => {
  const [cCode, setCountryCode] = useState(" ");
  const [showPicker, setShowPicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); 
  const [image,setImage]=useState();
  const handlePickerButtonPress = (item) => {
    setCountryCode(item.dial_code);
    setShowPicker(false);
  };
const saveImage =async (image)=>{
    try {
        setImage(image);
    setModalVisible(false);
    } catch (error) {
        throw  error
    }

}
  const handleSignup = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false); 
      alert("Signup successful!");
    }, 2000);
  };

  const handleUploadPhoto = () => {
    setModalVisible(true); 
  };

const uploadImage =async()=>
{
    try {
        await ImagePicker.requestCameraPermissionsAsync
        let result = await ImagePicker.launchCameraAsync({
            cameraType:ImagePicker.CameraType.front,
            allowsEditing:true,
            aspect: [1,1],
            quality:1
        })
        if(!result.canceled){
                saveImage(result.assets[0].uri);
        }
    } catch (error) {
        alert("there is an error")
        setModalVisible(flase)
    }
}

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color="#a4b443" />
          <Text>Wait a sec :)</Text>
        </View>
      ) : (
        <>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          /><View style={styles.circle}>
            <Pressable onPress={handleUploadPhoto} style={styles.changephoto}>
              <AntDesign name="camera" size={24} color="black" />
            </Pressable>
          </View>
          {/* Dokkan Kareem logo in assets images */}
          <View style={styles.inputContainer}>
            <AntDesign name="user" style={styles.icon} size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="User name"
              placeholderTextColor="#888"
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={20} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="lock"
              size={20}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Re-Enter your Password"
              placeholderTextColor="#888"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={20} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
            />
          </View>
          <View style={styles.inputContainer}>
            <Pressable onPress={() => setShowPicker(true)}>
              <AntDesign name="phone" style={styles.icon} size={24} color="black" />
            </Pressable>
            <CountryPicker
              show={showPicker}
              pickerButtonOnPress={handlePickerButtonPress}
            />
            <Text>{cCode}</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone"
              placeholderTextColor="#888"
            />
          </View>
          <Pressable style={styles.submitButton} onPress={handleSignup}>
            <Text style={styles.submitText}>Sign Up</Text>
          </Pressable>
           <Modal
            animationType="fade"
            transparent={true}
            style={styles.modalView}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalView}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={styles.closeModalText}>Close</Text>
              </Pressable>
              
              <Text>Upload Photo</Text>
            </View>
          </Modal>
        </>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    modalView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop:"20%",
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    changephoto:{
marginTop:-30,
marginBottom:10
    },
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  submitButton: {
    backgroundColor: '#a4b443', // Blue color
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius:200,
    opacity: 0.5,
    marginBottom: 20,
  },
  submitText: {
    color: 'white', // White text color
    fontSize: 16,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 10,
    width: "80%",
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 5,
    color: "black",
    width: "100%",
  },
});
export default signup;
