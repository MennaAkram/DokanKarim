import { Stack } from "expo-router";
import Colors from "../costants/Colors";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";

const RootLayout = () => {
  return <RootLayoutNav />;
};
function RootLayoutNav() {
  return (
      <Stack screenOptions={{contentStyle: {backgroundColor: Colors.onPrimary}}}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Markets" options={{ headerShown: false }} />
        <Stack.Screen name="Categories" options={{ headerShown: false }} />
        <Stack.Screen name="Products" options={{ headerShown: false }} />
        <Stack.Screen name="productDetails" options={{ headerShown: false}} />
        <Stack.Screen name="cart_succes" options={{ headerShown: false }} />
        <Stack.Screen name="Notifications" options={{ headerShown: false }} />
        <Stack.Screen name="Order" options={{ headerShown: false }} />
        <Stack.Screen name="reviews" options={{ presentation: "reviews" }} />
        <Stack.Screen name="Order Details"/>
      </Stack>
  );
}

export default RootLayout;
