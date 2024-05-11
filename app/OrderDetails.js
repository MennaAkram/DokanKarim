import { Text, StyleSheet, View, Image, FlatList, ScrollView, Keyboard } from 'react-native';
import { useEffect } from 'react';
import { getOrders } from '../firebase/orders';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { items } from '../screens/notifications/Item'; // Import the items array

export default function OrderDetails() {
  useEffect(() => {
    const fetchOrders = async () => {
      const userId = '555'; // Replace with the actual user ID
      const orders = await getOrders(userId);
      console.log('Orders:', orders);
    };

    fetchOrders();
  }, []);
  
  const [cartItems, setCartItems] = useState(items);

  const onPressHeart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, heartClicked: !item.heartClicked } : item
      )
    );
  };
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const numberofitems = cartItems.length;
  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cart_container}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ width: '60%' }}>{item.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Ionicons name="heart" size={16} color={item.heartClicked ? 'white' : 'red'} onPress={() => onPressHeart(item.id)} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ marginTop: 5, fontWeight: 'bold', color: '#40BFFF', fontSize: 14 }}> ${item.price}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.appBar}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.push('/OrderBody')} />
        <Text style={styles.header}>Order Details</Text>
      </View>
      <View style={styles.lineDivider}></View>
      <Text style={{ fontWeight: 'bold', color: '#223263', fontSize: 14, margin: 10, }}>Product</Text> */}

<FlatList
  data={cartItems}
  renderItem={renderCartItem}
  keyExtractor={(item) => item.id}
  contentContainerStyle={{ paddingBottom: 10 }}
  scrollEnabled={false} // Set scrollEnabled to false to stop scrolling
/>
      {/* Shipping Details */}
      <Text style={{ fontWeight: 'bold', color: '#223263', fontSize: 14, margin: 10 }}>Shipping Details</Text>
      <View style={styles.shippingDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Data Shipping</Text>
          <Text style={styles.detailValue}>january 16 ,2015</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Shipping</Text>
          <Text style={styles.detailValue}>POs Regular</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>No. Resi</Text>
          <Text style={styles.detailValue}>00192848573</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Address</Text>
          <Text style={styles.detailValue}>2772 lacRe, New York</Text>
        </View>
      </View>

      {/* Payment Details */}
      <Text style={{ fontWeight: 'bold', color: '#223263', fontSize: 14, margin: 10 }}>Payment Details</Text>
      <View style={styles.paymentDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Items ({numberofitems})</Text>
          <Text style={styles.detailValue}>${totalPrice}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Shipping</Text>
          <Text style={styles.detailValue}>$40</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Import charges</Text>
          <Text style={styles.detailValue}>$128</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={[styles.detailLabel, { fontWeight: 'bold' }]}>Total Price</Text>
          <Text style={[styles.detailValue, { color: '#40BFFF' }]}>${totalPrice + 40 + 128}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  appBar: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 50,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    marginLeft: 10,
    fontSize: 24,
    color: '#223263',
    fontWeight: 'bold',
    width: '100%',
  },
  lineDivider: {
    borderBottomColor: '#EBF0FF',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 20,
  },
  cart_container: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 35,
    marginBottom: 10, // Added marginBottom to create space
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F3F6FF',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  shippingDetails: {
    borderWidth: 1,
    borderColor: '#F3F6FF',
    borderRadius: 10,
    marginHorizontal: 10, // Adjusted marginHorizontal for better spacing
    marginBottom: 10, // Added marginBottom to create space
    padding: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#DADADA',
    fontSize: 14,
  },
  detailValue: {
    fontWeight: 'bold',
    color: '#9098B1',
    fontSize: 14,
  },
  paymentDetails: {
    borderWidth: 1,
    borderColor: '#F3F6FF',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
});

