import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

export default class OrderDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appBar}>
          <Text style={styles.header}>Order Details</Text>
        </View>
        <View style={styles.lineDivider}></View>

        {/* Add your order details content here */}
        <Text>OrderDetails</Text>
      </View>
    );
  }
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
});
  