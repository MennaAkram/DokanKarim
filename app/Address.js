import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { ScrollView } from 'react-native-web'
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../costants/Matrcies";
const Address = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleAddAddress = () => {
console.log('aaa')
  };

  const handleDeleteAddress = () => {
    console.log('aaa')
  };
  return (
<ScrollView>
      <TextInput
        placeholder="Region"
        value={region}
        onChangeText={(text) => setRegion(text)}
      />

      <TextInput
        placeholder="Street Address"
        value={streetAddress}
        onChangeText={(text) => setStreetAddress(text)}
      />

      <TextInput
        placeholder="City"
        value={city}
        onChangeText={(text) => setCity(text)}
      />

      <TextInput
        placeholder="Zip Code"
        value={zipCode}
        onChangeText={(text) => setZipCode(text)}
      />

      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />

      <Button title="Add Address" onPress={()=>handleAddAddress} />
      <Button title="Delete Address" onPress={()=>handleDeleteAddress} />
</ScrollView>
  )
}

export default Address

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(10),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#40BFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
  },
  textBtn: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});