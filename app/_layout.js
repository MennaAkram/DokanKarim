import { Stack } from "expo-router";
import Colors from "../costants/Colors";

const RootLayout = () => {
  return <RootLayoutNav/>;
};

function RootLayoutNav() {
  return (
      <Stack screenOptions={{contentStyle: {backgroundColor: Colors.onPrimary}}}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="productDetails" options={{ headerShown: false }} />
      </Stack>
  );
}

export default RootLayout;