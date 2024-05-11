import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import React, { useEffect } from "react";
import Colors from "../../../../costants/Colors";
import { getMarkets } from "../../../../firebase/markets"
import CategoryItem from "./categoryItem";

const windowHeight = Dimensions.get("window").height;

const SeeAllCategories = () => {
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    getMarkets().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <View>
      <View style={styles.container}>
          <FlatList
            data={categories}
            renderItem={(item) => {
              return (
              <CategoryItem image={item.item.icon} text={item.item.name} />
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

export default SeeAllCategories;
