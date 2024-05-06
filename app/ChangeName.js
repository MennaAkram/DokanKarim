import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';
import { verticalScale } from '../costants/Matrcies';

const ChangeName = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const validate = (text) => {
    if (text.length <= 10) {
      setError('The name must be at least 10 characters');
    } else {
      console.log('The data sent to Firebase and updated');
      setError('');
      // Here you should call your Firebase function to change the user's name
    }
  };

  return (
    <View style={styles.container}>
      <View style={{width:"100%"}}>
      <Text style={styles.title}>Change your name</Text>
      <TextInput
        style={styles.textInput}
        placeholder='KimoELfager'
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.error}>{error}</Text>
      </View>
      <TouchableOpacity onPress={() => validate(name)} style={styles.btn}>
        <Text style={styles.textBtn}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:verticalScale(10),
    justifyContent: 'start',
    alignItems: 'start',
    justifyContent:"space-between",
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
    backgroundColor:'#fff',
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
    width:"100%"
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

export default ChangeName;
