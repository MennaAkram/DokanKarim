import { SplashScreen, Stack } from "expo-router";
import { View } from "react-native";

// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return <RootLayoutNav/>;


};
function RootLayoutNav() {

  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ presentation: 'index' }} />
        <Stack.Screen name="cart_succes" options={{ headerShown: false }} />

      </Stack>
  );
}

export default RootLayout;