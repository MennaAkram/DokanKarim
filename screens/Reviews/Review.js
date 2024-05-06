import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Review = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Ratings</Text>
      <View style={styles.stars}>
        {stars.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleClick(index + 1)}
            onPressIn={() => handleMouseOver(index + 1)}
            onPressOut={handleMouseLeave}
          >
            <FontAwesome
              name="star"
              size={24}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={styles.star}
            />
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        placeholder="What's your experience?"
        style={styles.textarea}
        multiline
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  stars: {
    flexDirection: "row",
    marginBottom: 20,
  },
  star: {
    marginRight: 10,
    cursor: "pointer",
  },
  textarea: {
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: 5,
    padding: 10,
    marginVertical: 20,
    minHeight: 100,
    width: 300,
  },
  button: {
    borderWidth: 1,
    borderColor: "#a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.orange,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Review;
