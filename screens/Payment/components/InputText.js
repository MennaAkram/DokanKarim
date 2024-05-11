import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../../costants/Colors'

const screenWidth = Dimensions.get("window").width;

const InputText = ({onChangeText, text, placeholder, keyboardType, length}) => {
  return (
    <View>
      <TextInput
        style={styles.container}
        onChangeText={(text) => onChangeText(text)}
        value={text}
        placeholder={placeholder}
        keyboardType={keyboardType}
        numberOfLines={1}
        maxLength={length}
        onchange
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    height: 48, 
    borderColor: Colors.border, 
    borderWidth: 1, 
    marginTop: 12, 
    marginHorizontal: 16 ,
    paddingHorizontal: 16,
  },
})

export default InputText