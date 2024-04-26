import React from 'react'
import Colors from '../costants/Colors'
import { StyleSheet, View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'

export default function Silder () {
  const images = [
    require('../assets/images/Promotion.png'),
    require('../assets/images/Slider.png'),
    require('../assets/images/Promotion.png'),
    require('../assets/images/Slider.png'),
  ]
  return (
    <View style={styles.container}>
    <SliderBox 
    images={images} 
    autoplay 
    circleLoop 
    dotColor={Colors.primary}
    inactiveDotColor={Colors.border}
    dotStyle={{width: 8, height: 8}}
    ImageLoadingColor={Colors.primary}
    ImageComponentStyle={{ marginTop: 16, marginBottom: 32, borderRadius: 5, width: '92%', height: 230 }}
    />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    borderTopWidth: 1,
    borderColor: Colors.border
  }
})
