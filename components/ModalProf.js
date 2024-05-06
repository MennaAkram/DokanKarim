// CustomModal.js
import React from 'react';
import { Modal, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { horizontalScale, moderateScale,verticalScale } from '../costants/Matrcies';

const ModalProf = ({ visible, onRequestClose, onChangeText, onSave, placeholder ,keyboardType,error,typ }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <Text style={styles.modalText}>{typ}</Text>
          <TextInput
            placeholder={placeholder}
            style={styles.modalInput}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
          />
                    <TextInput
            placeholder={"enter the password"}
            style={styles.modalInput}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
          />
          <Text style={styles.error}>{error}</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={onRequestClose}>
              <Text style={styles.modalButton}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSave}>
              <Text style={styles.modalButton}>Save Change</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // darker background
  },
  modalBox: {

    marginTop:verticalScale(50),
    backgroundColor: '#fff', 
    padding: moderateScale(20),
    width: horizontalScale(300),
    height:verticalScale(500),
    borderRadius: moderateScale(10),
  },
  error: {
    color: 'red',
    fontSize: moderateScale(16),
  },
  modalText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    marginBottom: moderateScale(10),
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: moderateScale(5),
    padding: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  btnContainer: {

    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#40BFFF',
    color: 'white',
    textAlign: 'center',
    padding: moderateScale(10),
    margin:moderateScale(10),
    borderRadius: moderateScale(5),
  },
});

export default ModalProf;
