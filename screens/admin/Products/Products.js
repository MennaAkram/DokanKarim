import { View, Text, FlatList, StyleSheet, Dimensions, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar, FAB } from "react-native-paper";
import Colors from "../../../costants/Colors";
import { router, useLocalSearchParams } from "expo-router";
import ProductCard from "../../../components/ProductCard";
import ComponentTitle from "../../../components/componentTitle";

const windowHeight = Dimensions.get("window").height;

const Produts = ({marketId, categoryId}) => {
//   const { id, categoryName, selectedIcon } = useLocalSearchParams();
  const [produts, setProducts] = useState([]);

  const handleAddProduct = (id) => {
    const newProduct = {
      id: produts.length + 1,
      productName: productName,
        marketName: marketName,
        price: price,
        sizes: sizes,
        colors: colors,
        reviews: reviews,
        images: selectedImages,
    };
    setProducts([...produts, newProduct]);
  };

  useEffect(() => {
    if (categoryId) {
        handleAddProduct(categoryId);
    }
  }, [categoryId]);

  return (
    <View>
      <Appbar.Header style={{backgroundColor: Colors.onPrimary}}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content
          title="market.marketName"
          style={styles.text}
          color={Colors.primary}
        />
      </Appbar.Header>
      <ComponentTitle title="Category Name" />
      <View style={styles.container}>
        {(produts.length === 0 && (
          <Text style={styles.emptyText}>No products yet add your first product now!!!</Text>
        )) || (
            <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={produts}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ProductCard
            id = {item.id}
            titleText={item.productName}
            marketName={item.marketName}
            priceText={item.price}
            sizes={item.sizes}
            colors={item.colors}
            reviews={item.reviews}
            images={item.images}
          />
        )}
      />
        )} 
        <FAB
          icon="plus"
          style={styles.fab}
          color={Colors.onPrimary}
          onPress={() => router.push("AddProduct")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.onPrimary,
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight - 112,
  },
  text: {
    alignItems: "center",
    right: 30,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.greyText,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.primary,
  },
  itemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "center",
  },
});

export default Produts;
