import { FlatList, View, StyleSheet } from "react-native";
import MarketCard from "./MarketCard";
import { useEffect, useState } from "react";
import { getMarkets } from "../../../../firebase/markets"

export default function Markets () {
  const [ markets, setMarkets ] = useState([])

  useEffect(() => {
    getMarkets().then((markets) => {
      setMarkets(markets);
    });
  }, []);
  
console.log(markets)
  return (
    <View style={styles.container}>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={markets}
        renderItem={({item, index}) => 
        <MarketCard
        image={item.image[0]} 
        name={item.name}
        />}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
     marginBottom: 24,
     marginStart: 8,
 }
})