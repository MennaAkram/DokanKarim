import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
} from "react-native";
import ProductCard from "../../../components/ProductCard";
import Colors from "../../../costants/Colors";

export default function RecomendedProducts() {
  const DATA = [
    {
      id: 1,
      images: [
        require("../../../assets/images/Promotion.png"),
        require("../../../assets/images/Promotion.png"),
        require("../../../assets/images/Promotion.png"),
        require("../../../assets/images/Promotion.png"),
      ],
      text: "Nike Air Zoom Pegasus 36 Miami",
      marketName: "Nike",
      price: "$ 100",
      sizes: ["7", "8", "9", "10", "11", "12", "13", "14"],
      colors: [ Colors.primary, Colors.blueText, Colors.border, Colors.red,
        Colors.greyText, Colors.yellow, "#f0f0f0", "#000000", "#ff0000"],
        reviews: [
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
        ]
    },
    {
      id: 2,
      images: [
        require("../../../assets/images/Slider.png"),
        require("../../../assets/images/Slider.png"),
        require("../../../assets/images/Slider.png"),
        require("../../../assets/images/Slider.png"),
      ],
      text: "Nike Air Zoom Pegasus 36 Miami",
      marketName: "Nike",
      price: "$ 100",
      sizes: ["7", "8", "9", "10", "11", "12", "13", "14"],
      colors: [ Colors.primary, Colors.blueText, Colors.border, Colors.red,
        Colors.greyText, Colors.yellow, "#f0f0f0", "#000000", "#ff0000"],
        reviews: [
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
        ]
    },
    {
      id: 3,
      images: [
        require("../../../assets/images/product.png"),
        require("../../../assets/images/product.png"),
        require("../../../assets/images/product.png"),
        require("../../../assets/images/product.png"),
      ],
      text: "Nike Air Zoom Pegasus 36 Miami",
      marketName: "Nike",
      price: "$ 100",
      sizes: ["7", "8", "9", "10", "11", "12", "13", "14"],
      colors: [ Colors.primary, Colors.blueText, Colors.border, Colors.red,
        Colors.greyText, Colors.yellow, "#f0f0f0", "#000000", "#ff0000"],
        reviews: [
          {
            id: 1,
            name: "James Lawson",
            date: "December 10, 2024",
            review:
              "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
            stars: 4.5,
          },
          {
            id: 2,
            name: "James Lawson",
            date: "December 10, 2024",
            review:
              "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
            stars: 4.5,
          },
          {
            id: 3,
            name: "James Lawson",
            date: "December 10, 2024",
            review:
              "air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.",
            stars: 4.5,
          },
        ]
    },
    {
      id: 4,
      images: [
        require("../../../assets/images/Promotion.png"),
        require("../../../assets/images/Slider.png"),
        require("../../../assets/images/Promotion.png"),
        require("../../../assets/images/Slider.png"),
      ],
      text: "Nike Air Zoom Pegasus 36 Miami",
      marketName: "Nike",
      price: "$ 100",
      sizes: ["7", "8", "9", "10", "11", "12", "13", "14"],
      colors: [ Colors.primary, Colors.blueText, Colors.border, Colors.red,
        Colors.greyText, Colors.yellow, "#f0f0f0", "#000000", "#ff0000"],
        reviews: [
          {
            id: 1,
            name: "John Doe",
            review: "Great product, I love it",
            stars: 5,
            date: "December 10, 2024"
          },
          {
            id: 2,
            name: "Jane Doe",
            review: "Great product, I love it",
            stars: 5,
            date: "December 10, 2024"
          },
          {
            id: 3,
            name: "John Doe",
            review: "Great product, I love it",
            stars: 5,
            date: "December 10, 2024"
          },
        ]
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageBackground
          style={{ borderRadius: 5, height: "100%" }}
          resizeMode="contain"
          source={require("../../../assets/images/Slider.png")}
        >
          <Text style={styles.text}>Recomended Products</Text>
          <Text style={styles.subText}>We recommend the best for you</Text>
        </ImageBackground>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ProductCard
            id = {item.id}
            image={item.images[0]}
            titleText={item.text}
            marketName={item.marketName}
            priceText={item.price}
            sizes={item.sizes}
            colors={item.colors}
            reviews={item.reviews}
            images={item.images}
          />
        )}
      />
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    marginBottom: 24,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: windowWidth,
    height: windowHeight / 3.75,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    marginStart: 42,
    marginTop: 42,
    marginBottom: 16,
    width: "60%",
    letterSpacing: 0.5,
    color: Colors.onPrimary,
  },
  subText: {
    fontSize: 16,
    fontWeight: "normal",
    marginStart: 42,
    width: "60%",
    letterSpacing: 0.5,
    color: Colors.onPrimary,
  },
});
