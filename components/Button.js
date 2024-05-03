import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../costants/Colors'

const screenWidth = Dimensions.get('window').width;

export default function Button ({text, onPress}) {
  return (
    <View>
      <TouchableOpacity style={styles.Button} onPress={onPress}>
              <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 8,
        width: screenWidth - 32,
        alignItems: "center",
        alignSelf: 'center',
        marginTop: 16,
      },
      text: {
        color: "white",
        fontWeight: "bold",
      },
})