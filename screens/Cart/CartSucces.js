import React from 'react';
import { View, Image, StyleSheet,Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
export default function CartSucces() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/icons/Success Icon.png')} style={styles.image} />
      <Text style={styles.Text}>Success</Text>
      <Text style={styles.thanksText}>Thank you for shopping</Text>
      <TouchableOpacity onPress={() => router.replace('/Home')} style={styles.button}>
        <Text style={styles.textButton}>Back to Shopping</Text>
      </TouchableOpacity>
      <Text onPress={() => router.replace('/Notifications')} style={styles.textButton}>not</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  Text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#223263',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#40BFFF',
    marginTop: 20,
    width: 343,
    height: 57,
    borderRadius: 10,
    shadowColor: '#40BFFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thanksText: {
    marginTop: 10,
    fontSize: 16,
    color: '#9098B1',
  },
  textButton: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});