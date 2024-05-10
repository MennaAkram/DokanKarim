import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const CartCard = ({onPressHeart, onPressDelete, handleDecrement, handleIncrement, item}) => {
    return (
        <View style={styles.cart_container}>
          <Image style={styles.image} source={{ uri: item.imageUrl }} />
          <View style={{ marginLeft: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ width: '60%' }}>{item.name}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                <Ionicons name="heart" size={16} color={item.heartClicked ? 'white' : 'red'} onPress={onPressHeart} />
                <Ionicons name="trash-bin" size={16} style={{ marginLeft: 10 }} 
                  color={item.deleteClicked ? 'white' : 'black'} onPress={onPressDelete} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ marginTop: 5 }}> ${item.totalPrice}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                <Ionicons name="remove-circle" size={24} color="black" onPress={handleDecrement}/>
                <Text style={{ marginHorizontal: 5 }}>{item.quantity}</Text>
                <Ionicons name="add-circle" size={24} color="black" onPress={handleIncrement}/>
              </View>
            </View>
          </View>
        </View>
      );
}

export default CartCard

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    appbar: {
      height: 122,
      width: '100%',
    },
    Text: {
      marginLeft: 10,
      paddingTop: 70,
      marginBottom: 30,
      fontSize: 30,
      height: 100,
      width: 200,
      fontSize: 16,
      fontWeight: 'bold',
      fontSize: 24,
      color: '#223263'
    },
    line: {
      borderBottomWidth: 1,
      borderBottomColor: '#F3F6FF',
      width: '100%',
      paddingBottom: 10
    },
    cart_container: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      marginLeft: 20,
      marginTop: 30,
      marginRight: 35,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#F3F6FF',
    },
    image: {
      width: 80,
      height: 90,
      resizeMode: 'cover',
    },
    checkoutButton: {
      width: '90%',
      alignSelf: 'center',
      backgroundColor: '#40BFFF',
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      borderRadius: 10,
      position: 'sticky',
      zIndex: 1,
    },
    checkoutButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    checkoutContainer: {
      backgroundColor: 'white',
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }
  });
  