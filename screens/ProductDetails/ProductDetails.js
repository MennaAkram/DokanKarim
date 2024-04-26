import React from "react";
import {
  FlatList,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Recomended from "./components/Recomended";
import SelectSize from "./components/SelectSize";
import Button from "../../components/Button";
import SelectColor from "./components/SelectColor";
import Details from "./components/Details";
import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";
import Specifications from "./components/Specifications";
import ProductReviews from "./components/ProductReviews";

export default function ProductDetails() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={{marginBottom: 24}}>
      <StatusBar />
      <FlatList
    showsVerticalScrollIndicator={false}
    data={[{}]}
    renderItem={({item}) => <>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => router.back()} />
          <Appbar.Content title="Nike Air Zoom Pegasus 36 Miami"/>
          <Appbar.Action icon="magnify" onPress={() => {}} />
          <Appbar.Action icon="dots-vertical" onPress={() => {}}/>
        </Appbar.Header>
        <Details />
        <SelectSize />
        <SelectColor />
        <Specifications/>
        <ProductReviews/>
        <Recomended />
        <Button text="Add to cart" />
      </>
      }
    ItemSeparatorComponent={() => <View style={{height: 16}}/>}
    />
    </SafeAreaView>
  );
}