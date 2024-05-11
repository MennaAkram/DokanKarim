import React, { useState, useEffect } from 'react';
import { addOrder } from '../../firebase/orders';
import 'firebase/firestore';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'; // Import AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { items } from '../notifications/Item';
import CartCard from './components/CartCard';

export default function Cart({}) {
  const userId = "57755ff";
  const productId = ['777ff','8888ff','9999ff']
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
      <View>
        <CartCard 
        onPressHeart={() => onPressHeart(item.id)} 
        onPressDelete={() => onPressDelete(item.id)} 
        handleDecrement={() => handleDecrement(item.id)} 
        handleIncrement={() => handleIncrement(item.id)} 
        item={item}/>
      </View>
    );
  };

  const handleCheckout =() => {
      addOrder(userId,productId);
      // Navigate to the success page
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
