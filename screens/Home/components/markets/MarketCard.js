import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../../../costants/Colors';

export default function MarketCard ({image, title}) {
    return (
        <View style={styles.container}>
        <Image source={image} style={styles.image} resizeMode='contain'/>
        <Text style={styles.title}>{title}</Text>
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
    },
    title: {
        marginTop: 8,
        fontSize: 12,
        color: Colors.blueText,
        fontWeight: 'bold',
    },
})
