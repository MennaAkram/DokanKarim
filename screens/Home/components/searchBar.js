import React from 'react'
import Colors from '../../../costants/Colors'
import { Image, TextInput, View, StyleSheet } from 'react-native'

export default function SearchBar () {
  return (
    <View style={styles.container}>
    <View style={styles.searchBar}>
    <Image source={require('../../../assets/icons/Search.png')} 
    style={styles.image}/>
        <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.greyText}
        value=''
        onChangeText={() => {}}
        />
    </View>
    <Image source={require('../../../assets/icons/love.png')} style={{tintColor: Colors.greyText}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
      
    },
    searchBar: {
        width: '90%',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        height: 46,
        borderColor: Colors.border,
    },
    image: {
        width: 16,
        height: 16,
        padding: 10,
        margin: 10,
    },
    })