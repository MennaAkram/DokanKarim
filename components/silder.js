import React, { useState } from "react";
import Colors from "../costants/Colors";
import { StyleSheet, View, Dimensions, FlatList, Image } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function Silder() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    require("../assets/images/Promotion.png"),
    require("../assets/images/Slider.png"),
  ];

  const renderDots = () => {
    return images.map((_, i) => {
      return (
        <View
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: i === currentSlide ?  Colors.primary : Colors.border,
            margin: 3,
          }}
        />
      );
    });
  };

  return (
    <View
      style={{
        width: screenWidth,
        height: screenWidth * (9.0 / 16.0),
      }}
    >
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{
              width: screenWidth - 16,
              height: screenWidth * (9.0 / 16.0) - 32,
              margin: 8,
              borderRadius: 5,
            }}
          />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          let contentOffset = event.nativeEvent.contentOffset;
          let viewSize = event.nativeEvent.layoutMeasurement;
          let pageNum = Math.floor(contentOffset.x / viewSize.width);
          setCurrentSlide(pageNum);
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          justifyContent: "center",
          marginTop: 8,
        }}
      >
        {renderDots()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    borderTopWidth: 1,
    borderColor: Colors.border,
  },
});
