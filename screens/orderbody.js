import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Dimensions, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function OrderBody() {
  const router = useRouter();
  const [detailModalVisible, setDetailModalVisible] = useState(false);

  function handleOrder() {
    setDetailModalVisible(true);
  }

  function closeModal() {
    setDetailModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Ionicons name="arrow-back" size={24} color="black" onPress={() => router.push('/Cart')} />
        <Text style={styles.header}>Order</Text>
      </View>
      <View style={styles.lineDivider}></View>

      <View style={styles.orderItem}>
        <TouchableOpacity onPress={handleOrder}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', color: '#223263', fontSize: 14, margin: 10 }}>LqNs</Text>
            <Text style={{ fontWeight: 'bold', color: '#DADADA', fontSize: 14, margin: 10 }}>Augest 1,2007</Text>
          </View>
          <View style={{
            borderStyle: 'dotted',
            borderWidth: 1,
            borderColor: '#DADADA',
            width: "100%",
          }}>
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: 'bold', color: '#DADADA', fontSize: 14, margin: 10 }}>Items</Text>
              <Text style={{ fontWeight: 'bold', color: '#9098B1', fontSize: 14, margin: 10 }}>2 Items purchased</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: 'bold', color: '#DADADA', fontSize: 14, margin: 10 }}>Price</Text>
              <Text style={{ fontWeight: 'bold', color: '#9098B1', fontSize: 14, margin: 10 }}>$100</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Modal for Order Details */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={detailModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Order Details</Text>
        
              <Text style={styles.modalText}>LqNs</Text>
              <Text style={styles.modalText}>LqNs</Text>
              <Text style={styles.modalText}>LqNs</Text>
              <Text style={styles.modalText}>LqNs</Text>
              <Text style={styles.modalText}>LqNs</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: '100%',
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
  orderItem: {
    padding: 20,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9098B1',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'end',
    alignItems: 'end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
   width: '100%', 
   height:'85%',// Take the height of the screen
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    color: 'blue',
  },
});
