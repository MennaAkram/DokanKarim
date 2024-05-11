import { FlatList, View, StyleSheet } from "react-native";
import NewProductCard from "./newProductCard";

export default function NewProduct () {
    const DATA = [
        {image: require('../../../../assets/images/product.png'), text: 'Market name', price: '$100'},
        {image: require('../../../../assets/images/product.png'), text: 'Market name', price: '$100'},
        {image: require('../../../../assets/images/product.png'), text: 'Market name', price: '$100'},
        {image: require('../../../../assets/images/product.png'), text: 'Market name', price: '$100'},
        {image: require('../../../../assets/images/product.png'), text: 'Market name', price: '$100'},
    ];

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={({item, index}) =>
                    <NewProductCard
                        image={item.image}
                        titleText={item.text}
                        priceText={item.price}
                    />
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       marginStart: 8,
   }
})