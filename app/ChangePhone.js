import React, { useState } from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';
import { CountryPicker } from "react-native-country-codes-picker";
import { verticalScale } from '../costants/Matrcies';
import { AntDesign } from "@expo/vector-icons";

const ChangePhone = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPicker,setShowPicker]=useState(false);
  const [countryCode, setCountryCode] = useState(''); // State for country code
  const [error, setError] = useState('');

  const handlePickerButtonPress = (item) => {
    setCountryCode(item.dial_code);
    setShowPicker(false);
  };
  const validate = (text) => {
    if (text.length < 10) {
      setError('The phone number must be at least 10 digits');
    } else {
      console.log('The data sent to Firebase and updated');
      setError('');
      // Here you should call your Firebase function to change the user's phone number
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width:"100%"}}>
        <Text style={styles.title}>Change your phone number</Text>

        <View style={styles.inputContainer}>
            <Pressable onPress={() => setShowPicker(true)}>
              <AntDesign name="phone" style={styles.icon} size={24} color="black" />
            </Pressable>
            <CountryPicker
              show={showPicker}
              pickerButtonOnPress={handlePickerButtonPress}
            />
            <Text>{countryCode}</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Phone"
              placeholderTextColor="#888"
              keyboardType='numeric'
              onChangeText={(text)=>setPhoneNumber(countryCode+text)}
            />
            
        </View>
        <Text style={styles.error}>{error}</Text>
      </View>
      <TouchableOpacity onPress={() => validate(phoneNumber)} style={styles.btn}>
        <Text style={styles.textBtn}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(10),
    justifyContent: 'start',
    alignItems: 'start',
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  btn: {
    backgroundColor: '#40BFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%"
  },
  textBtn: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ChangePhone;
