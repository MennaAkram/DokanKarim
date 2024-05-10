import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { items } from './Item'; // Import the items array

export default function NotiBody() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.notCart}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.notCartBody}>
        <Text style={{ fontWeight: 'bold', color: '#223263', fontSize: 14 }}>New Product</Text>
        <Text style={{ fontWeight: 'bold', color: '#DADADA', fontSize: 14 }}>{item.name}</Text>
        <Text style={{ fontWeight: 'bold', color: '#DADADA', fontSize: 14 }}>june 24 2022</Text>
        {/* Add more item details if needed */}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.replace('/Home')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Notifications</Text>
      </View>
      <View style={styles.lineDivider}></View>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
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
    width: '100%',
  },
  // flatListContainer: {
  //   flexGrow: 1,
  //   alignItems: 'center',
  // },
  image: {
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 20,
    width: 70,
    height: 70,
  },
  notCart: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',

  },
  notCartBody: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 70,},
});
