import { View, Text, FlatList, StyleSheet, Dimensions, Pressable } from "react-native";
import React, { useEffect } from "react";
import MarketCard from "./MarketCard";
import { Appbar, FAB } from "react-native-paper";
import Colors from "../../../costants/Colors";
import { useNavigation, router, useLocalSearchParams } from "expo-router";

const windowHeight = Dimensions.get("window").height;

const Markets = () => {
  const { marketId, marketName, selectedImages } = useLocalSearchParams();
  const [markets, setMarkets] = React.useState([]);
  const navigation = useNavigation();

  const handleAddMarket = (marketId) => {
    const newMarket = {
      id: markets.length + 1,
      marketName: marketName,
      images: selectedImages,
    };
    setMarkets([...markets, newMarket]);
  };

  useEffect(() => {
    if (marketId) {
      handleAddMarket(marketId);
    }
  }, [marketId]);
console.log("Markets", markets); 
  return (
    <View>
      <Appbar.Header style={{backgroundColor: Colors.onPrimary}}>
        <Appbar.Content
          title="Markets"
          style={styles.text}
          color={Colors.primary}
        />
        <Appbar.Action
          icon="logout"
          onPress={() => {}}
          color={Colors.greyText}
        />
      </Appbar.Header>
      <View style={styles.container}>
        {(markets.length === 0 && (
          <Text style={styles.emptyText}>No markets yet add your first market now!!!</Text>
        )) || (
          <FlatList
            data={markets}
            renderItem={(item) => {
              console.log("Item: ", item);
              return (
                <Pressable onPress={() => navigation.navigate("Categories", { market: item })}>
              <MarketCard marketName={item.item.marketName} images={item.item.images} />
              </Pressable>
            )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        <FAB
          icon="plus"
          style={styles.fab}
          color={Colors.onPrimary}
          onPress={() => router.push("AddMarket")}
        />
      </View>
    </View>
  );
};
// };

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.onPrimary,
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight - 112,
  },
  text: {
    alignItems: "center",
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
});

export default Markets;
