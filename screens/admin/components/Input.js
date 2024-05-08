import React from 'react'
import Colors from '../../../costants/Colors'
import { Image, TextInput, View, StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

export default function Input ({image, onChangeText, value, placeholderTextColor, style}) {
  return (
    <View style={styles.input}>
    <Image source={image} 
    style={styles.image}/>
        <TextInput
        style={style}
        placeholder={placeholderTextColor}
        placeholderTextColor={Colors.greyText}
        value={value}
        onChangeText={(value) => onChangeText(value)}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 16,
        height: 16,
        padding: 10,
        margin: 10,
    },
    input: {
    alignItems: "center",
    marginHorizontal: 16,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.border,
    height: 48,
  },
    })