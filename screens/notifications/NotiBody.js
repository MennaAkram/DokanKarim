import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function NotiBody() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity>
            <Ionicons onPress={() => router.push('/Home')}  name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Notifications</Text>
      </View>
      <View style={styles.lineDivider}>
      </View>
      
      
    </View>
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
    width: 375,
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
  },
  header: {
    marginLeft: 10,
    fontSize: 24,
    color: '#223263',
    fontWeight: 'bold',
  },
  lineDivider: {
    borderBottomColor: '#EBF0FF',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    width: 375,
  },
  NotificationsRows: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginLeft: 5,
    marginRight: 5,
  
  },
  image: {
    borderRadius: 10,
    overflow: 'hidden', // Clip image to border radius
    marginRight: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#223263',
  },
});
