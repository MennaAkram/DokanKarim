import { View, FlatList } from 'react-native'
import React from 'react'
import ComponentTitle from '../../../components/componentTitle'
import ProductCard from '../../../components/ProductCard'

const Recomended = () => {
    const DATA = [
        {
          image: require("../../../assets/images/product.png"),
          text: "Market name",
          price: "$100",
        },
        {
          image: require("../../../assets/images/product.png"),
          text: "Market name",
          price: "$100",
        },
        {
          image: require("../../../assets/images/product.png"),
          text: "Market name",
          price: "$100",
        },
        {
          image: require("../../../assets/images/product.png"),
          text: "Market name",
          price: "$100",
        },
        {
          image: require("../../../assets/images/product.png"),
          text: "Market name",
          price: "$100",
        },
        {
          image: require("../../../assets/images/product.png"),
          text: "Market name",
          price: "$100",
        },
      ];

  return (
    <View>
      <ComponentTitle title="You Might Also Like" />
      <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({ item, index }) => (
              <ProductCard
                image={item.image}
                titleText={item.text}
                marketName={item.text}
                priceText={item.price}
              />
            )}
          />
    </View>
  )
}

export default Recomended