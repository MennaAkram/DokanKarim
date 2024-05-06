import { Text, TextInput, Image, View, Pressable, ActivityIndicator,Modal } from "react-native";
import { StyleSheet, Switch } from "react-native-web";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, Component } from "react";
import { CountryPicker } from "react-native-country-codes-picker";
import { launchCameraAsync,launchImageLibraryAsync } from "expo-image-picker";
const signup = () => {
  //  here some state to get the fileds value
  const [cCode, setCountryCode] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); 
  const [error, setError] =useState("");
  const [isEnabled, setIsEnabled] = useState(false);
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

  if (!username || !password || !confirmPassword || !email || !phone) {
    alert("All fields are required!");
    return;
  }
  else if(password != confirmPassword){
    setError("password not matched");
  }
else{
  setError("");
  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
    alert("Signup successful!");
  }, 2000);
  console.log(username);
  console.log(password);
  console.log(confirmPassword);
  console.log(phone);
  console.log(password);
  console.log(email);
}};

const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleUploadPhoto = () => {
    setModalVisible(true); 
  };

const uploadImage =async()=>
{
    try {
    const response =await launchImageLibraryAsync()
      setImage(response.assets[0].uri)
 
        
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
            source={image ? { uri: image } : require('../../assets/images/logo.png')}
            style={styles.logo}
          /><View style={styles.circle}>
            <Pressable onPress={uploadImage}  style={styles.changephoto}>
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
              onChangeText={(text)=>setUsername(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={20} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              secureTextEntry={true}
              onChangeText={(text)=>setPassword(text)}
            />
            <Text style={{color:'red',marginLeft:10}}>{error}</Text>
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
              onChangeText={(text)=>setConfirmPassword(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={20} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              onChangeText={(text)=>setEmail(text)}
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
              onChangeText={(text)=>setPhone(cCode+text)}
            />
            
          </View>
        {/* <View style= {styles.marketContainer}> 
          <Text style={styles.marketText}>Do You want to open a Market?</Text>
          <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
         onValueChange={toggleSwitch}
         value={isEnabled}
      />
      </View> */}
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
  // marketContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // marketText: {
  //   marginRight: 10, // Adjust the spacing between the text and the switch
  // },
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
