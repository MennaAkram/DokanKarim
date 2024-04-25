import { View, FlatList , StyleSheet} from "react-native";
import CategoryItem from "./categoryItem";

export default function Category () {
    const DATA = [
        {image: require('../../../../assets/images/dress.png'), text: 'Category 1'},
        {image: require('../../../../assets/images/shirt.png'), text: 'Category 2'},
        {image: require('../../../../assets/images/manbag.png'), text: 'Category 3'},
        {image: require('../../../../assets/images/shirt.png'), text: 'Category 4'},
        {image: require('../../../../assets/images/shirt.png'), text: 'Category 5'},
        {image: require('../../../../assets/images/shirt.png'), text: 'Category 6'},
        {image: require('../../../../assets/images/shirt.png'), text: 'Category 7'}
    ];
    
  return (
    <View style={styles.container}>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item, index}) => 
        <CategoryItem 
        image={item.image} 
        text={item.text}
        />} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       marginBottom: 24,
   }
})
