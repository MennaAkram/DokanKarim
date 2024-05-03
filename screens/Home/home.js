import { StyleSheet, StatusBar, SafeAreaView, FlatList, View } from 'react-native'
import React from 'react'
import SearchBar from './components/searchBar'
import ComponentTiltle from '../../components/componentTitle'
import Category from './components/category/category'
import Markets from './components/markets/Markets'
import NewProduct from './components/newProduct/NewProduct'
import RecomendedProducts from './components/RecomendedProducts'
import Silder from '../../components/silder'

export default function Home () {
  const images = [
    require("../../assets/images/Promotion.png"),
    require("../../assets/images/Slider.png"),
  ];
  return (
    <SafeAreaView>
    <StatusBar/>
    <FlatList
    showsVerticalScrollIndicator={false}
    data={[{}]}
    renderItem={({item}) => <>
      <SearchBar/>
      <Silder images={images} />
      <ComponentTiltle title='Category' subTitle='More Category'/>
      <Category/>
      <ComponentTiltle title='Markets' subTitle='See More'/>
      <Markets/>
      <ComponentTiltle title='New Products'/>
      <NewProduct/>
      <RecomendedProducts/>
    </>}
    ItemSeparatorComponent={() => <View style={{height: 16}}/>}
    contentContainerStyle={styles.container}
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  }
})
