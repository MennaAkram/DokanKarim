import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions
} from "react-native";
import ProductCard from "../../../components/ProductCard";
import Colors from "../../../costants/Colors";

export default function RecomendedProducts() {
  const DATA = [
    {
      image: require("../../../assets/images/product.png"),
      text: "Market name",
      price: "$100",
    },
    {
      image: require("../../../assets/images/product.png"),
      text: "Market name",
      price: "$100",
    },
    {
      image: require("../../../assets/images/product.png"),
      text: "Market name",
      price: "$100",
    },
    {
      image: require("../../../assets/images/product.png"),
      text: "Market name",
      price: "$100",
    },
    {
      image: require("../../../assets/images/product.png"),
      text: "Market name",
      price: "$100",
    },
    {
      image: require("../../../assets/images/product.png"),
      text: "Market name",
      price: "$100",
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
        renderItem={({ item, index }) => (
          <ProductCard
            image={item.image}
            titleText={item.text}
            marketName={item.text}
            priceText={item.price}
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
