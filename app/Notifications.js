import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import NotiBody from '../screens/notifications/NotiBody';

export default function Notifications() {
  const router = useRouter();
  return (
    <NotiBody/>
  );
}

const styles = StyleSheet.create({});
