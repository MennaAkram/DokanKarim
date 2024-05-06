import React from 'react'
import Colors from '../../../costants/Colors'
import { Image, TextInput, View, StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

export default function Input ({image, onChangeText, value, placeholderTextColor, style}) {
  return (
    <View style={style}>
    <Image source={image} 
    style={styles.image}/>
        <TextInput
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
    })