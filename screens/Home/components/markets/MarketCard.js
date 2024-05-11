import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../../../costants/Colors';

export default function MarketCard ({image, name}) {
    return (
        <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} resizeMode='contain'/>
        <Text style={styles.title}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.border,
        margin: 8,
        padding: 16,
    },
    image: {
        borderRadius: 5,
        width: 100,
        height: 100,
    },
    title: {
        marginTop: 8,
        fontSize: 12,
        color: Colors.blueText,
        fontWeight: 'bold',
    },
})
