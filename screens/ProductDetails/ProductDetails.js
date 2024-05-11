import React from "react";
import { FlatList, StatusBar, SafeAreaView } from "react-native";
import Recomended from "./components/Recomended";
import SelectSize from "./components/SelectSize";
import Button from "../../components/Button";
import SelectColor from "./components/SelectColor";
import Details from "./components/Details";
import { Appbar } from "react-native-paper";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import ProductReviews from "./components/ProductReviews";

export default function ProductDetails() {
  const router = useRouter();
  const navigation = useNavigation();
  const {productId, titleText, priceText, sizes, colors, image, reviews, images} = useLocalSearchParams();
  console.log(reviews.length);

  return (
    <SafeAreaView style={{ marginBottom: 24 }}>
      <StatusBar />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[{}]}
        renderItem={({ item }) => (
          <>
            <Appbar.Header>
              <Appbar.BackAction
                onPress={() => router.replace((herf = navigation.goBack))}
              />
              <Appbar.Content title={titleText} />
              <Appbar.Action icon="magnify" onPress={() => {}} />
              <Appbar.Action icon="dots-vertical" onPress={() => {}} />
            </Appbar.Header>
            <Details title={titleText} price={priceText} images={images}/>
            <SelectSize sizes={sizes}/>
            <SelectColor colors={colors}/>
            <ProductReviews reviews={reviews}/>
            <Recomended />
              <Button text="Add to cart" onPress={() => router.navigate('/Payment')}/>
          </>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </SafeAreaView>
  );
}
