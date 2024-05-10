import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { verticalScale } from '../costants/Matrcies';

const Address = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAddAddress = () => {
    // Add address functionality
  };

  const handleDeleteAddress = () => {
    // Delete address functionality
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Address</Text>

      <TextInput
        placeholder="Region"
        value={region}
        onChangeText={(text) => setRegion(text)}
        style={styles.textInput}
      />

      <TextInput
        placeholder="Street Address"
        value={streetAddress}
        onChangeText={(text) => setStreetAddress(text)}
        style={styles.textInput}
      />

      <TextInput
        placeholder="City"
        value={city}
        onChangeText={(text) => setCity(text)}
        style={styles.textInput}
      />

      <TextInput
        placeholder="Zip Code"
        value={zipCode}
        onChangeText={(text) => setZipCode(text)}
        style={styles.textInput}
      />

      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        style={styles.textInput}
      />

      <TouchableOpacity onPress={handleAddAddress} style={styles.btn}>
        <Text style={styles.textBtn}>Add Address</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDeleteAddress} style={styles.btn}>
        <Text style={styles.textBtn}>Delete Address</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

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

export default Address;
