import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OrderBody from '../screens/Orders/orderBody'
import { useRouter } from 'expo-router'

export default function Order ()  {
  const router = useRouter();
  return (
    <OrderBody/>
  )
}


const styles = StyleSheet.create({})