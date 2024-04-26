import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import ComponentTitle from "../../../components/componentTitle";
import ReviewStars from "../../../components/ReviewStars";
import Colors from "../../../costants/Colors";

const Reviews = [
  {
    name: "James Lawson",
    date: "December 10, 2024",
    review:
      "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
    stars: 4.5,
  },
  {
    name: "James Lawson",
    date: "December 10, 2024",
    review:
      "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
    stars: 4.5,
  },
  {
    name: "James Lawson",
    date: "December 10, 2024",
    review:
      "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
    stars: 4.5,
  },
];

const ProductReviews = () => {
  return (
    <View style={styles.container}>
      <ComponentTitle title="Review Product" subTitle="See More" />
      <View
        style={{
          paddingStart: 16,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ReviewStars />
        <Text
          style={{
            color: Colors.greyText,
            fontSize: 10,
            marginLeft: 8,
            fontWeight: "bold",
          }}
        >
          {Reviews[0].stars}
        </Text>
        <Text
          style={{
            color: Colors.greyText,
            fontSize: 10,
            marginLeft: 8,
            fontWeight: "normal",
          }}
        >
          ({Reviews.length} reviews)
        </Text>
      </View>
      <FlatList
        data={Reviews}
        renderItem={({ item, index }) => (
          <View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../../assets/images/user.png")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginStart: 16,
                  marginTop: 16,
                }}
              />
              <View>
                <Text
                  style={{
                    color: Colors.blueText,
                    fontSize: 14,
                    marginTop: 16,
                    fontWeight: "bold",
                    marginHorizontal: 16,
                  }}
                >
                    {item.name}
                </Text>
                <View
                  style={{
                    paddingStart: 16,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <ReviewStars />
                </View>
              </View>
            </View>
            <Text
              style={{
                color: Colors.greyText,
                fontSize: 12,
                marginTop: 8,
                marginHorizontal: 16,
              }}
            >
              {item.review}
            </Text>
            <Text
              style={{
                color: Colors.greyText,
                fontSize: 10,
                marginTop: 8,
                marginHorizontal: 16,
              }}
            >
              {item.date}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProductReviews;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 24,
  },
});
