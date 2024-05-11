import { Pressable, View, StyleSheet, Image, Text } from "react-native";
import Colors from "../../../../costants/Colors";

export default function CategoryItem ({onPress, image, text}) {
    return (
        <Pressable  onPress={onPress}
         style={({ pressed }) => [{ opacity: pressed ? 0.2 : 1 }, styles.item]}>
        <View style={styles.image}>
        <Image source={image} style={{width:24, height: 24}}/>
        </View>
        <Text style={styles.title}>{text}</Text>
        </Pressable>
    )
    }

    const styles = StyleSheet.create({
        item: {
          margin: 12,
          flexDirection: "Column",
        },
        title: {
           marginTop: 8,
          fontSize: 10,
          textAlign: "center",
          color: Colors.greyText
        },
        image: {
          width: 70,
          height: 70,
          borderWidth: 1,
          borderRadius: 70,
          borderColor: Colors.border,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });