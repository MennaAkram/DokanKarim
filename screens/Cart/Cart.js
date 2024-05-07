import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'; // Import AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { items } from '../notifications/Item';

export default function Cart({}) {
  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from AsyncStorage when the component mounts
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const savedCartItems = await AsyncStorage.getItem('cartItems');
        if (savedCartItems) {
          setCartItems(JSON.parse(savedCartItems));
        } else {
          // If there are no items in AsyncStorage, initialize with items array
          setCartItems(items.map(item => ({ ...item, quantity: 1, totalPrice: item.price })));
        }
      } catch (error) {
        console.error('Error loading cart items:', error);
      }
    };

    loadCartItems();
  }, []);

  // Save cart items to AsyncStorage when cartItems changes
  useEffect(() => {
    const saveCartItems = async () => {
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
      } catch (error) {
        console.error('Error saving cart items:', error);
      }
    };

    saveCartItems();
  }, [cartItems]);
  // Initialize cartItems with items

  const onPressHeart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, heartClicked: !item.heartClicked } : item
      )
    );
  };

  const onPressDelete = (itemId) => {
  
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };
  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.price // Recalculate total price
            }
          : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: item.quantity > 0 ? item.quantity - 1 : 0,
              totalPrice: (item.quantity > 0 ? item.quantity - 1 : 0) * item.price // Recalculate total price
            }
          : item
      )
    );
  };

  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cart_container}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ width: '60%' }}>{item.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Ionicons name="heart" size={16} color={item.heartClicked ? 'white' : 'red'} onPress={() => onPressHeart(item.id)} />
              <Ionicons name="trash-bin" size={16} style={{ marginLeft: 10 }} 
                color={item.deleteClicked ? 'white' : 'black'} onPress={() => onPressDelete(item.id)} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginTop: 5 }}> ${item.totalPrice}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
              <Ionicons name="remove-circle" size={24} color="black" onPress={() => handleDecrement(item.id)}/>
              <Text style={{ marginHorizontal: 5 }}>{item.quantity}</Text>
              <Ionicons name="add-circle" size={24} color="black" onPress={() => handleIncrement(item.id)}/>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const handleCheckout = () => {
    // Implement your checkout send the item list to the firebase
    router.replace("/CartSucces");
  };

  return (
    <View style={styles.container}>
        <View style={styles.appbar}>
          <Text style={styles.Text}>Your Cart</Text>
          <View style={styles.line} />
        </View>

        <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
      
      <View style={styles.checkoutContainer}>
        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
