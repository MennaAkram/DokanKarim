import { View, Text, FlatList, StyleSheet, Dimensions, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar, FAB } from "react-native-paper";
import Colors from "../../../costants/Colors";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import ProductCard from "../../../components/ProductCard";
import ComponentTitle from "../../../components/componentTitle";
import { getProducts } from "../../../firebase/markets";

const windowHeight = Dimensions.get("window").height;

const Produts = () => {
  const navigation = useNavigation();
  const { CategoryId, CategoryName, marketId, marketName } = useLocalSearchParams();
  const [produts, setProducts] = useState([]);
  console.log(marketId, CategoryId);

  const handleAddProduct = async () => {
    const products = await getProducts(marketId, CategoryId);
    console.log(products);
    setProducts(products);
  };

  useEffect(() => {
    if (marketId, CategoryId) {
      handleAddProduct(marketId, CategoryId);
    }
  }
  , [marketId, CategoryId]);

  return (
    <View>
      <Appbar.Header style={{backgroundColor: Colors.onPrimary}}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content
          title={marketName}
          style={styles.text}
          color={Colors.primary}
        />
      </Appbar.Header>
      <ComponentTitle title={CategoryName} />
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
            id={item.id}
            titleText={item.name}
            marketName={marketName}
            priceText={item.price + "$"}
            sizes={item.sizes}
            colors={item.colors}
            reviews={item.reviews}
            images={item.images[0]}
          />
        )}
      />
        )} 
        <FAB
          icon="plus"
          style={styles.fab}
          color={Colors.onPrimary}
          onPress={() => navigation.navigate("AddProduct", { marketId: marketId, CategoryId: CategoryId, marketName: marketName, CategoryName: CategoryName})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.onPrimary,
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
