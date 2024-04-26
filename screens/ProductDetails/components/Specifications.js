import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ComponentTitle from '../../../components/componentTitle'
import Colors from '../../../costants/Colors'

const Specifications = () => {
  return (
    <View>
      <ComponentTitle title="Specifications" />
      <View style={styles.textView}>
        <Text style={{color: Colors.blueText}}>Shown:</Text>
        <Text style={{paddingHorizontal:16, color: Colors.greyText}}>Laser Blue/Anthracite/Watermelon/WhiteLaser 
        Blue/Anthracite/Watermelon/White Laser Blue/Anthracite/Watermelon/White 
        Laser Blue/Anthracite/Watermelon/White Laser Blue/Anthracite/Watermelon/White</Text>
      </View>
      <View style={styles.textView}>
        <Text style={{color: Colors.blueText}}>Style:</Text>
        <Text style={{color: Colors.greyText}}>CD0113-400</Text>
      </View>
        <Text style={styles.text}>The Nike Air Max 270 React ENG combines a full-length React foam midsole with 
         a 270 Max Air unit for unrivaled comfort and a striking visual experience.</Text>
    </View>
  )
}

export default Specifications

const styles = StyleSheet.create({
    textView: {
        padding: 16,
        fontSize: 12,
        fontWeight: "normal",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    text: {
        paddingHorizontal: 16,
        fontSize: 12,
        fontWeight: "normal",
        color: Colors.greyText,
    },
    })
