import { View, Text, FlatList, StyleSheet, Dimensions, Pressable, Image } from "react-native";
import React, { useEffect } from "react";
import MarketCard from "./MarketCard";
import { Appbar, FAB } from "react-native-paper";
import Colors from "../../../costants/Colors";
import { useNavigation, router } from "expo-router";
import { getMarkets } from "../../../firebase/markets";
import{firebase} from "../../../firebase/firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowHeight = Dimensions.get("window").height;

const Markets = () => {
  const [markets, setMarkets] = React.useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getMarkets().then((markets) => {
      setMarkets(markets);
    });
  }
  , []);

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
          onPress={()=>{firebase.auth().signOut()
      .then(() => {
        console.log("User logged out");
       
        const userToken = AsyncStorage.setItem(null)
        router.replace("login");
      })
      .catch(error => {
        // Handle logout error
        console.error("Logout error:", error);
      });}}
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
              return (
                <Pressable onPress={() => navigation.navigate("Categories", { marketId: item.item.id, marketName: item.item.name })}>
              <MarketCard marketName={item.item.name} images={item.item.image[0]} />
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
