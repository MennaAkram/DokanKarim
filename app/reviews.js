import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import Review from "../screens/Reviews/Review";

export default function User() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Review />
    </View>
  );
}
