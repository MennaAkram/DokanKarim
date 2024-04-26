import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../costants/Colors'

export default function Button ({text}) {
  return (
    <View>
      <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText}>{text}</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    addToCartButton: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 8,
        width: "95%",
        alignItems: "center",
        alignSelf: 'center',
        marginTop: 16,
      },
      addToCartButtonText: {
        color: "white",
        fontWeight: "bold",
      },
})