import { View, FlatList , StyleSheet} from "react-native";
import CategoryItem from "./categoryItem";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../../../firebase/markets";

export default function Category () {
  const [ categories, setCategories ] = useState([]);
  
    useEffect(() => {
        getAllCategories().then((categories) => {
            setCategories(categories);
        });
    }, []);

  return (
    <View style={styles.container}>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item, index}) => 
        <CategoryItem 
        image={item.icon} 
        text={item.name}
        onPress={{}}
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
