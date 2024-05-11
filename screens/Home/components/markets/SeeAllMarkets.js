import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import MarketCard from "../../../admin/Markets/MarketCard";
import Colors from "../../../../costants/Colors";
import { getMarkets } from "../../../../firebase/markets"

const windowHeight = Dimensions.get("window").height;

const SeeAllMarkets = () => {
  const [markets, setMarkets] = React.useState([]);

  useEffect(() => {
    getMarkets().then((markets) => {
      setMarkets(markets);
    });
  }, []);

  return (
    <View>
      <View style={styles.container}>
          <FlatList
            data={markets}
            renderItem={(item) => {
              return (
              <MarketCard marketName={item.item.name} images={item.item.image[0]} />
            )
            }}
            keyExtractor={(item, index) => index.toString()}
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
  }
});

export default SeeAllMarkets;
