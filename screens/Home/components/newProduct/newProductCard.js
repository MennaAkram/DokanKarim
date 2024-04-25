import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Colors from '../../../../costants/Colors'

export default function NewProductCard({image, titleText, priceText}) {
    return (
        <View style={styles.container}>
        <Image
            style={styles.image}
            source={image}
        />
        <View style={styles.textContainer}>
            <Text style={styles.titleText}>{titleText}</Text>
            <Text style={styles.priceText}>{priceText}</Text>
        </View>
        </View>
    )
    }

    const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Colors.border,
        padding: 16,
        margin: 8,
    },
    image: {
        borderRadius: 5,
    },
    textContainer: {
        width: 110,
        marginTop: 8,
    },
    titleText: {
        fontSize: 12,
        color: Colors.blueText,
        fontWeight: 'bold',
    },
    priceText: {
        marginTop: 8,
        fontSize: 12,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    })