import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import MarketCard from "../../../admin/Markets/MarketCard";
import { Appbar, FAB } from "react-native-paper";
import Colors from "../../../../costants/Colors";

const windowHeight = Dimensions.get("window").height;

const SeeAllMarkets = () => {
  const [markets, setMarkets] = React.useState([]);

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
      <Appbar.Header>
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
          <FlatList
            data={markets}
            renderItem={(item) => {
              return (
              <MarketCard marketName={item.item.marketName} images={item.item.images} />
            )
            }}
            keyExtractor={(item, index) => index.toString()}
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
  }
});

export default SeeAllMarkets;
