import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import { useRouter } from 'expo-router';
export default function CartSucces() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Cart Succes</Text>
      {/* <Image source={require('./assets/icons/Success Icon.png')} style={styles.image} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});