import { FlatList, View, StyleSheet } from "react-native";
import MarketCard from "./MarketCard";

export default function Markets () {
    const DATA = [
        {image: require('../../../../assets/images/product.png'), text: 'Market name'},
        {image: require('../../../../assets/images/product.png'), text: 'Market name'},
        {image: require('../../../../assets/images/product.png'), text: 'Market name'},
        {image: require('../../../../assets/images/product.png'), text: 'Market name'},
        {image: require('../../../../assets/images/product.png'), text: 'Market name'},
    ];

  return (
    <View style={styles.container}>
        <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item, index}) => 
        <MarketCard
        image={item.image} 
        title={item.text}
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