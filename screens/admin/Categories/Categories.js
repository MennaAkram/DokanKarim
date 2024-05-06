import { View, Text, FlatList, StyleSheet, Dimensions, Pressable, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Appbar, FAB } from "react-native-paper";
import Colors from "../../../costants/Colors";
import { router, useLocalSearchParams, useNavigation } from "expo-router";
import CategoryItem from "../../Home/components/category/categoryItem";

const windowHeight = Dimensions.get("window").height;

const Categories = ({marketId}) => {
  const { id, categoryName, selectedIcon } = useLocalSearchParams();
  const [categories, setCategories] = useState([]);
    const navigation = useNavigation();

  const handleAddCategory = (id) => {
    const newCategory = {
      id: categories.length + 1,
      categoryName: categoryName,
      image: selectedIcon,
    };
    setCategories([...categories, newCategory]);
  };

  useEffect(() => {
    if (id) {
        handleAddCategory(id);
    }
  }, [id]);

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
      <View style={styles.container}>
        {(categories.length === 0 && (
          <Text style={styles.emptyText}>No categories yet add your first category now!!!</Text>
        )) || (
            <ScrollView>
          <View style={styles.itemContainer}>
            {categories.map((item, index) => (
                <CategoryItem text={item.categoryName} image={item.image} onPress={() => navigation.navigate("Products", { id: item.id })}/>
            ))}
          </View>
        </ScrollView>
        )} 
        <FAB
          icon="plus"
          style={styles.fab}
          color={Colors.onPrimary}
          onPress={() => router.push("/AddCategory")}
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

export default Categories;
