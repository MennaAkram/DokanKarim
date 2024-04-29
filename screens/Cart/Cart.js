import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Cart() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Nike Air Zoom Pegasus 36 Miami',
      imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2023/05/running-shoes-2048px-9718.jpg',
      price: 100,
      quantity: 0,
      heartClicked: false,
      deleteClicked: false,
    },
    // Add more items to cartItems array as needed
  ]);

  const onPressHeart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, heartClicked: !item.heartClicked } : item
      )
    );
  };

  const onPressDelete = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, deleteClicked: !item.deleteClicked } : item
      )
    );
  };

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
      )
    );
  };


  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cart_container}>
    {/* <View style={styles.imageContainer}> */}
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
    {/* </View> */}
    <View style={{ marginLeft: 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {/* <View style={{ flex: 1 }}> */}
          <Text style={{ width: '60%' }}>{item.name}</Text>
          {/* <Text style={{ height: 18 }}>{secondLine}</Text> */}
        {/* </View> */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
          <Ionicons name="heart" size={16} color={item.heartClicked ? 'white' : 'red'} onPress={() => onPressHeart(item.id)} />
            <Ionicons name="trash-bin" size={16} style={{ marginLeft: 10 }} 
            color={item.deleteClicked ? 'white' : 'black'} onPress={() => onPressDelete(item.id)} />
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginTop: 5 }}> ${item.price}</Text>
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
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }} // Adjust paddingBottom to accommodate Checkout button
      />

      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 812,
  },
  appbar: {
    height: 122,
    width: 375,
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
    marginBottom: 30,
  },
  cart_container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginLeft: 20,
    marginRight: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F3F6FF',

  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden', // Clip image to border radius
    marginRight: 20,
  },
  image: {
    width: 80,
    height: 90,
    resizeMode: 'cover',
  },
  priceCounterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  checkoutButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#40BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 10,
  },
});

